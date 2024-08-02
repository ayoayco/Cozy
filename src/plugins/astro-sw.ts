import { AstroIntegration } from 'astro';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { randomUUID } from "node:crypto";

let assets: string[] = [];

export type ServiceWorkerConfig = {
    assetCachePrefix?: string,
    assetCacheVersionID?: string,
    path: string,
}

const plugin_dir = path.resolve(path.dirname('.'));

export default (config: ServiceWorkerConfig): AstroIntegration => {
    let {
        assetCachePrefix,
        assetCacheVersionID = randomUUID(),
        path: serviceWorkerPath
    } = config;

    console.log('[astro-sw] dir', plugin_dir)

    return {
        'name': 'astro-sw',
        'hooks': {
            'astro:build:ssr': ({ manifest }) => {
                assets = manifest.assets.filter(ass => !ass.includes('sw.js'))
            },
            'astro:build:done': async ({ dir }) => {
                const outFile = fileURLToPath(new URL('./sw.js', dir));
                let originalScript;
                try {
                    const __dirname = path.resolve(path.dirname('.'));
                    const swPath = path.join(__dirname, serviceWorkerPath ?? '');
                    console.log('[astro-sw] Using service worker:', swPath);
                    originalScript = await readFile(swPath);
                } catch {
                    throw Error('[astro-sw] ERROR: service worker script not found!')
                }
                const assetsDeclaration = `const assets = ${JSON.stringify(assets)};\n`;
                const versionDeclaration = `const version = ${JSON.stringify(assetCacheVersionID)};\n`;
                const prefixDeclaration = `const prefix = ${JSON.stringify(assetCachePrefix)};\n`;

                await writeFile(
                    outFile,
                    assetsDeclaration + versionDeclaration + prefixDeclaration + originalScript
                );
            }
        }
    }
};