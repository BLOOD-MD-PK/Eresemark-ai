/**
 * ============================================
 * EraseMark AI
 * AI Inference Engine
 * ============================================
 */

import { loadModel } from "./model.js";

let model = null;

/**
 * Load AI Model Once
 */
async function getModel() {

    if (!model) {
        model = await loadModel();
    }

    return model;

}


/**
 * Run AI Inference
 */
export async function runInference(image) {

    try {

        const aiModel = await getModel();

        const result =
        await aiModel.removeWatermark(image);

        return result;

    } catch (error) {

        console.error(
            "[Inference]",
            error.message
        );

        throw new Error(
            "AI inference failed."
        );

    }

}