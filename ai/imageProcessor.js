/**
 * ============================================
 * EraseMark AI
 * Image Processor
 * ============================================
 */

import { runInference } from "./inference.js";



/**
 * Process Uploaded Image
 */
export async function processImage(image) {

    if (!image) {
        throw new Error("No image received.");
    }

    try {

        const result =
        await runInference(image);

        return result;

    } catch (error) {

        console.error(
            "[Image Processor]",
            error.message
        );

        throw new Error(
            "Image processing failed."
        );

    }

}