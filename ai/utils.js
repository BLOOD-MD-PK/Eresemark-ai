/**
 * ============================================
 * EraseMark AI
 * AI Utilities
 * ============================================
 */


/**
 * Check Supported Image Type
 */
export function isSupportedImage(mimeType) {

    const supported = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/webp"
    ];

    return supported.includes(mimeType);

}


/**
 * Convert Buffer → Base64
 */
export function bufferToBase64(buffer) {

    return buffer.toString("base64");

}


/**
 * Convert Base64 → Buffer
 */
export function base64ToBuffer(base64) {

    return Buffer.from(base64, "base64");

}


/**
 * Generate Unique Image Name
 */
export function generateImageName() {

    return `img_${Date.now()}_${Math.random()
        .toString(36)
        .substring(2, 10)}`;

}


/**
 * Validate Image Size
 */
export function validateImageSize(size) {

    const MAX_SIZE = 10 * 1024 * 1024;

    return size <= MAX_SIZE;

}