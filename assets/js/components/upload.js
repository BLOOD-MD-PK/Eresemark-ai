/**
 * ============================================
 * EraseMark AI
 * Upload Component
 * ============================================
 */

import { removeWatermark } from "../api.js";

/**
 * 1. Generate UI Component
 */
export function Upload() {
    const section = document.createElement("section");
    section.className = "upload-section";
    section.innerHTML = `
        <div class="upload-container">
            <input type="file" id="uploadInput" accept="image/*" />
            <div class="preview-container">
                <img id="previewImage" src="" alt="Preview" />
            </div>
            <button id="removeButton">Remove Watermark</button>
            <button id="downloadButton" hidden>Download</button>
            <div id="loading" hidden>Processing...</div>
        </div>
    `;
    return section;
}

/**
 * 2. Initialize Event Listeners
 */
export function initUpload() {
    const uploadInput = document.getElementById("uploadInput");
    const previewImage = document.getElementById("previewImage");
    const removeButton = document.getElementById("removeButton");
    const downloadButton = document.getElementById("downloadButton");
    const loading = document.getElementById("loading");

    let selectedFile = null;
    let processedImage = null;

    /**
     * Select Image
     */
    uploadInput?.addEventListener("change", (event) => {
        selectedFile = event.target.files[0];

        if (!selectedFile) return;

        previewImage.src = URL.createObjectURL(selectedFile);
    });

    /**
     * Remove Watermark
     */
    removeButton?.addEventListener("click", async () => {
        if (!selectedFile) {
            alert("Please select an image first.");
            return;
        }

        try {
            if (loading) loading.hidden = false;

            const response = await removeWatermark(selectedFile);

            if (loading) loading.hidden = true;

            if (!response.success) {
                alert(response.message || "Failed to remove watermark.");
                return;
            }

            processedImage = response.image;
            previewImage.src = processedImage;

            if (downloadButton) downloadButton.hidden = false;

        } catch (error) {
            if (loading) loading.hidden = true;
            console.error(error);
            alert("Failed to remove watermark.");
        }
    });

    /**
     * Download
     */
    downloadButton?.addEventListener("click", () => {
        if (!processedImage) return;

        const link = document.createElement("a");
        link.href = processedImage;
        link.download = "EraseMark-AI.png";
        link.click();
    });
}
