// @ts-check

/**
 * This is just a temporary placeholder for a logger singleton
 */

export type LogOptions = {
   force?: boolean
   context?: string,
   data?: any
}

function log(message, method: 'log' | 'info' | 'error' = 'log', options?: LogOptions) {
    let {context, force, data} = options ?? {};

    context = context && context !== ''
        ? `[${context}]: `
        : ''

    if (force) {
        console[method](`${context}${message}`, data ?? '');
    }
}

export function logMessage(message: string, options: LogOptions) {
    log(message, 'log', options);
}

export function logInfo(message: string, options: LogOptions) {
    log(message, 'info', options);
}

export function logError(message: string, options: LogOptions) {
    log(message, 'error', options);
}