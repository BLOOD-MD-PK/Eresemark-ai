/**
 * ============================================
 * EraseMark AI
 * File Validation Utility
 * ============================================
 */

const ALLOWED_EXTENSIONS = [
    ".png",
    ".jpg",
    ".jpeg",
    ".webp"
];

const ALLOWED_MIME_TYPES = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp"
];

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB


/**
 * Validate File Extension
 */
export function validateExtension(filename = "") {

    const extension =
        filename.substring(filename.lastIndexOf("."))
        .toLowerCase();

    return ALLOWED_EXTENSIONS.includes(extension);

}


/**
 * Validate MIME Type
 */
export function validateMimeType(mimeType = "") {

    return ALLOWED_MIME_TYPES.includes(mimeType);

}


/**
 * Validate File Size
 */
export function validateFileSize(size = 0) {

    return size <= MAX_FILE_SIZE;

}


/**
 * Validate Complete File
 */
export function validateFile(file) {

    if (!file) {
        return {
            valid: false,
            message: "No file uploaded."
        };
    }

    if (!validateExtension(file.originalFilename || file.name)) {
        return {
            valid: false,
            message: "Invalid file extension."
        };
    }

    if (!validateMimeType(file.mimetype || file.type)) {
        return {
            valid: false,
            message: "Unsupported image type."
        };
    }

    if (!validateFileSize(file.size)) {
        return {
            valid: false,
            message: "File size exceeds 10MB."
        };
    }

    return {
        valid: true,
        message: "File validation successful."
    };

}