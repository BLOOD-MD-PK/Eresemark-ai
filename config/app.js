/**
 * ============================================
 * EraseMark AI
 * Application Configuration
 * ============================================
 */

export const appConfig = {

    name: process.env.APP_NAME || "EraseMark AI",

    version: "1.0.0",

    environment:
        process.env.NODE_ENV || "development",

    port:
        Number(process.env.PORT) || 3000,

    api: {
        url:
            process.env.API_URL || "/api"
    },

    upload: {

        maxFileSize:
            Number(process.env.MAX_FILE_SIZE) ||
            10485760,

        allowedTypes:
            (process.env.ALLOWED_TYPES || "")
            .split(",")

    },

    security: {

        rateLimitWindow:
            Number(process.env.RATE_LIMIT_WINDOW) ||
            60000,

        rateLimitMax:
            Number(process.env.RATE_LIMIT_MAX) ||
            20

    }

};

export default appConfig;