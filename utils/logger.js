/**
 * ============================================
 * EraseMark AI
 * Logger Utility
 * ============================================
 */

const LEVELS = {
    info: "INFO",
    warn: "WARN",
    error: "ERROR"
};

function log(level, message) {

    const time = new Date().toISOString();

    console.log(
        `[${time}] [${LEVELS[level]}] ${message}`
    );

}

export const logger = {

    info(message) {
        log("info", message);
    },

    warn(message) {
        log("warn", message);
    },

    error(message) {
        log("error", message);
    }

};