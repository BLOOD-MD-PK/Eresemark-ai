/**
 * ============================================
 * EraseMark AI
 * Upload Middleware
 * ============================================
 */

const ALLOWED_TYPES = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp"
];

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export function validateUpload(file) {

    if (!file) {
        throw new Error("No file uploaded.");
    }

    if (!ALLOWED_TYPES.includes(file.mimetype)) {
        throw new Error("Unsupported image format.");
    }

    if (file.size > MAX_FILE_SIZE) {
        throw new Error("File size exceeds 10MB.");
    }

    return true;

}