/* ======================================================
   EraseMark AI
   Editor Component
====================================================== */

"use strict";

import { createElement } from "../utils.js";

import {
    removeWatermark,
    downloadImage,
    validateImage,
    previewImage
} from "../api.js";


let selectedFile = null;
let processedImage = null;


/* ======================================================
   EDITOR COMPONENT
====================================================== */

export function Editor() {

    const editor = createElement(
        "section",
        "editor"
    );

    editor.innerHTML = `

<div class="container">

<div class="editor-layout">

<aside class="sidebar">

<h3 class="sidebar-title">
AI Tools
</h3>

<input
type="file"
id="imageInput"
accept="image/png,image/jpeg,image/webp"
hidden>

<div class="tool-group">

<button
class="tool-btn"
id="editorUpload">

📤 Upload

</button>

<button
class="tool-btn active"
id="removeBtn">

✨ Remove Watermark

</button>

<button
class="tool-btn"
id="resetBtn">

🔄 Reset

</button>

</div>

<div class="tool-group">

<button
class="tool-btn"
id="downloadBtn">

📥 Download HD

</button>

</div>

</aside>

<main class="canvas-area">

<div class="canvas-toolbar">

<div class="toolbar-left">

<button class="icon-btn">+</button>

<button class="icon-btn">−</button>

</div>

<div class="toolbar-right">

<span id="statusText">

AI Ready

</span>

</div>

</div>

<div
class="image-viewer"
id="imageViewer">

<img

id="originalImage"

src="assets/images/demo.png"

alt="Preview">

</div>

</main>

</div>

</div>

`;

    return editor;

}
/* ======================================================
   EDITOR EVENTS
====================================================== */

export function initEditor() {

    const imageInput =
        document.querySelector("#imageInput");

    const uploadBtn =
        document.querySelector("#editorUpload");

    const removeBtn =
        document.querySelector("#removeBtn");

    const resetBtn =
        document.querySelector("#resetBtn");

    const downloadBtn =
        document.querySelector("#downloadBtn");

    const preview =
        document.querySelector("#originalImage");

    const status =
        document.querySelector("#statusText");


    /* ==========================================
       Upload Button
    ========================================== */

    uploadBtn?.addEventListener("click", () => {

        imageInput.click();

    });


    /* ==========================================
       Image Selected
    ========================================== */

    imageInput?.addEventListener("change", (event) => {

        const file =
            event.target.files[0];

        if (!file) return;

        const validation =
            validateImage(file);

        if (!validation.success) {

            alert(validation.message);

            return;

        }

        selectedFile = file;

        preview.src =
            previewImage(file);

        processedImage = null;

        status.textContent =
            "Image Loaded";

    });


    /* ==========================================
       Remove Watermark
    ========================================== */

    removeBtn?.addEventListener(
        "click",
        handleRemove
    );


    /* ==========================================
       Download
    ========================================== */

    downloadBtn?.addEventListener(
        "click",
        handleDownload
    );


    /* ==========================================
       Reset
    ========================================== */

    resetBtn?.addEventListener(
        "click",
        handleReset
    );

}

/* ======================================================
   REMOVE WATERMARK
====================================================== */

async function handleRemove() {

    if (!selectedFile) {

        alert("Please upload an image first.");

        return;

    }

    const status =
        document.querySelector("#statusText");

    const preview =
        document.querySelector("#originalImage");

    const removeBtn =
        document.querySelector("#removeBtn");

    try {

        status.textContent =
            "AI Processing...";

        removeBtn.disabled = true;

        removeBtn.textContent =
            "Processing...";

        const result =
            await removeWatermark(selectedFile);

        if (!result.success) {

            throw new Error(
                result.message
            );

        }

        processedImage =
            result.image;

        preview.src =
            processedImage;

        status.textContent =
            "Completed ✅";

    }

    catch (error) {

        console.error(error);

        status.textContent =
            "Failed ❌";

        alert(
            error.message ||
            "Watermark removal failed."
        );

    }

    finally {

        removeBtn.disabled = false;

        removeBtn.textContent =
            "✨ Remove Watermark";

    }

}

/* ======================================================
   DOWNLOAD IMAGE
====================================================== */

function handleDownload() {

    if (!processedImage) {

        alert("No processed image available.");

        return;

    }

    downloadImage(processedImage);

}


/* ======================================================
   RESET EDITOR
====================================================== */

function handleReset() {

    selectedFile = null;

    processedImage = null;

    const imageInput =
        document.querySelector("#imageInput");

    const preview =
        document.querySelector("#originalImage");

    const status =
        document.querySelector("#statusText");

    const removeBtn =
        document.querySelector("#removeBtn");

    if (imageInput) {

        imageInput.value = "";

    }

    if (preview) {

        preview.src =
            "assets/images/demo.png";

    }

    if (status) {

        status.textContent =
            "AI Ready";

    }

    if (removeBtn) {

        removeBtn.disabled = false;

        removeBtn.textContent =
            "✨ Remove Watermark";

    }

}