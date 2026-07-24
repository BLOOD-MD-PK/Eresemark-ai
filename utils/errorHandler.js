/**
 * ============================================
 * EraseMark AI
 * Global Error Handler
 * ============================================
 */

import { logger } from "./logger.js";

export function errorHandler(error, req, res) {

    logger.error(error.stack || error.message);

    return res.status(error.status || 500).json({

        success: false,

        message:
            error.message ||
            "Internal Server Error"

    });

}


/**
 * Create Custom Error
 */
export function createError(message, status = 500) {

    const error = new Error(message);

    error.status = status;

    return error;

}