/**
 * ============================================
 * EraseMark AI
 * Upload Component (Fixed UI)
 * ============================================
 */

import { removeWatermark } from "../api.js";

/**
 * 1. Generate Modern UI Component
 */
export function Upload() {
    const section = document.createElement("section");
    section.className = "upload-section";

    section.innerHTML = `
        <div class="upload-container">
            <!-- Modern Upload Box -->
            <div class="drop-zone" id="dropZone">
                <input type="file" id="uploadInput" accept="image/*" hidden />
                <label for="uploadInput" class="upload-label">
                    <span class="upload-icon">☁️</span>
                    <p><strong>Click to upload</strong> or drag and drop</p>
                    <small>PNG, JPG, or WEBP</small>
                </label>
            </div>

            <!-- Preview Box (Hidden by default, so NO broken image icon!) -->
            <div class="preview-box" id="previewBox" style="display: none;">
                <img id="previewImage" src="" alt="Selected Preview" />
            </div>

            <!-- Action Buttons -->
            <div class="upload-actions">
                <button id="removeButton" class="btn btn-primary">Remove Watermark</button>
                <button id="downloadButton" class="btn btn-success" hidden>Download Image</button>
            </div>

            <!-- Loading Spinner -->
            <div id="loading" class="loading-state" hidden>
                <div class="spinner"></div>
                <p>Removing watermark, please wait...</p>
            </div>
        </div>
    `;

    return section;
}

/**
 * 2. Event Listeners
 */
export function initUpload() {
    const uploadInput = document.getElementById("uploadInput");
    const previewImage = document.getElementById("previewImage");
    const previewBox = document.getElementById("previewBox");
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

        // Image select hone par src set hoga AUR preview show hoga
        previewImage.src = URL.createObjectURL(selectedFile);
        if (previewBox) previewBox.style.display = "block";
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

