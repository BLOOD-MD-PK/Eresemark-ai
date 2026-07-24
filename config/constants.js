/**
 * ============================================
 * EraseMark AI
 * Project Constants
 * ============================================
 */

export const APP_NAME = "EraseMark AI";

export const APP_VERSION = "1.0.0";

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export const SUPPORTED_IMAGE_TYPES = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp"
];

export const SUPPORTED_EXTENSIONS = [
    ".png",
    ".jpg",
    ".jpeg",
    ".webp"
];

export const API_ENDPOINTS = {

    HEALTH: "/api/health",

    REMOVE_WATERMARK: "/api/remove-watermark"

};

export const HTTP_STATUS = {

    OK: 200,

    BAD_REQUEST: 400,

    UNAUTHORIZED: 401,

    FORBIDDEN: 403,

    NOT_FOUND: 404,

    METHOD_NOT_ALLOWED: 405,

    TOO_MANY_REQUESTS: 429,

    INTERNAL_SERVER_ERROR: 500

};

export const RESPONSE_MESSAGES = {

    SUCCESS:
        "Request completed successfully.",

    IMAGE_REQUIRED:
        "Please upload an image.",

    INVALID_FILE:
        "Invalid image file.",

    FILE_TOO_LARGE:
        "Maximum file size is 10MB.",

    UNSUPPORTED_FORMAT:
        "Unsupported image format.",

    WATERMARK_REMOVED:
        "Watermark removed successfully.",

    INTERNAL_ERROR:
        "Something went wrong."

};