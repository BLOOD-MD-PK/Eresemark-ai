/**
 * ============================================
 * EraseMark AI
 * Upload Component
 * ============================================
 */

import { removeWatermark } from "../api.js";

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

        loading.hidden = false;

        const response = await removeWatermark(selectedFile);

        loading.hidden = true;

        if (!response.success) {
            alert(response.message);
            return;
        }

        processedImage = response.image;

        previewImage.src = processedImage;

        downloadButton.hidden = false;

    } catch (error) {

        loading.hidden = true;

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