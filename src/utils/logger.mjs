// @ts-check

const isDev = import.meta.env.DEV;

/**
  * @typedef {{
 *  force?: true
 *  context?: string,
 *  data?: any
 * }} LogOptions
 */


/**
 * @param {string} message 
 * @param {LogOptions} options
 */
export function logMessage(message, {context, force, data} = {}) {
    context = context !== ''
        ? `[${context}]: `
        : ''

    if (force || isDev) {
        console.log(`!!! ${context}${message}`, data ?? '');
    }
}

/**
 * @param {string} message 
 * @param {LogOptions} options
 */
export function logInfo(message, {context, force, data} = {}) {
    context = context !== ''
        ? `[${context}]: `
        : ''

    if (force || isDev) {
        console.info(`!!! ${context}${message}`, data ?? '');
    }
}

/**
 * @param {string} message 
 * @param {LogOptions} options
 */
export function logError(message, {context, force, data} = {}) {
    context = context !== ''
        ? `[${context}]: `
        : ''

    if (force || isDev) {
        console.error(`!!! ${context}${message}`, data ?? '');
    }
}