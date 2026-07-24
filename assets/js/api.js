/**
 * ============================================
 * EraseMark AI
 * Frontend API Service
 * Version: 1.0
 * ============================================
 */

"use strict";

const API_BASE = "/api";

/* ============================================
   HEALTH CHECK
============================================ */

export async function checkHealth() {

    try {

        const response = await fetch(
            `${API_BASE}/health`
        );

        return await response.json();

    } catch (error) {

        console.error(
            "Health Check Error:",
            error
        );

        return {
            success: false,
            message: "Server Offline"
        };

    }

}


/* ============================================
   REMOVE WATERMARK
============================================ */

export async function removeWatermark(file) {

    try {

        if (!file) {

            throw new Error(
                "No image selected."
            );

        }

        const formData =
        new FormData();

        formData.append(
            "image",
            file
        );

        const response =
        await fetch(

            `${API_BASE}/remove-watermark`,

            {

                method: "POST",

                body: formData

            }

        );

        const result =
        await response.json();

        if (!response.ok) {

            throw new Error(

                result.message ||

                "Watermark removal failed."

            );

        }

        return result;

    }

    catch (error) {

        console.error(
            "Remove API Error:",
            error
        );

        return {

            success: false,

            message: error.message

        };

    }

}


/* ============================================
   DOWNLOAD IMAGE
============================================ */

export function downloadImage(imageUrl) {

    if (!imageUrl) {

        alert(
            "No processed image available."
        );

        return;

    }

    const link =
    document.createElement("a");

    link.href = imageUrl;

    link.download =
    `EraseMarkAI-${Date.now()}.png`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}


/* ============================================
   FILE VALIDATION
============================================ */

export function validateImage(file) {

    if (!file) {

        return {

            success: false,

            message: "Please select an image."

        };

    }

    const allowed = [

        "image/png",

        "image/jpeg",

        "image/jpg",

        "image/webp"

    ];

    if (

        !allowed.includes(file.type)

    ) {

        return {

            success: false,

            message:
            "Only PNG, JPG and WEBP are supported."

        };

    }

    const maxSize =
    10 * 1024 * 1024;

    if (

        file.size > maxSize

    ) {

        return {

            success: false,

            message:
            "Maximum file size is 10MB."

        };

    }

    return {

        success: true

    };

}


/* ============================================
   IMAGE PREVIEW
============================================ */

export function previewImage(file) {

    return URL.createObjectURL(file);

}