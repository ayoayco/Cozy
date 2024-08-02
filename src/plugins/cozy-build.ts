import { AstroIntegration } from 'astro';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

let assets: string[] = [];

function getBuildTime() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    const time = today.getTime();

    return mm + dd + yyyy + time;
}


const config: AstroIntegration = {
    'name': 'astro-cozy-build',
    'hooks': {
        'astro:build:ssr': ({ manifest }) => {
            assets = manifest.assets.filter(ass => !ass.includes('sw.js'))
            console.log('build-cozy', assets)
        },
        'astro:build:done': async ({ dir }) => {
            const outFile = fileURLToPath(new URL('./sw.js', dir));
            const __dirname = path.resolve(path.dirname('.'));
            const originalScript = await readFile(__dirname + '/src/plugins/sw.js');
            const assetsDeclaration = `const assets = ${JSON.stringify(assets)};\n`;
            const versionDeclaration = `const version = ${JSON.stringify(getBuildTime())};\n`;
            await writeFile(outFile, assetsDeclaration + versionDeclaration  + originalScript);
        }
    }
}

export default (): AstroIntegration => config;