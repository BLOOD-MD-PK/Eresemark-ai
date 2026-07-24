/* ======================================================
   EraseMark AI
   Utility Functions
   Version: 1.0
====================================================== */

"use strict";

/* ======================================================
   DOM SELECTORS
====================================================== */

export const $ = (selector) => document.querySelector(selector);

export const $$ = (selector) => document.querySelectorAll(selector);

/* ======================================================
   CREATE ELEMENT
====================================================== */

export function createElement(tag, className = "") {

    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    return element;

}

/* ======================================================
   EVENT HELPERS
====================================================== */

export function on(element, event, callback) {

    if (!element) return;

    element.addEventListener(event, callback);

}

export function off(element, event, callback) {

    if (!element) return;

    element.removeEventListener(event, callback);

}

/* ======================================================
   CLASS HELPERS
====================================================== */

export function addClass(element, className) {

    if (!element) return;

    element.classList.add(className);

}

export function removeClass(element, className) {

    if (!element) return;

    element.classList.remove(className);

}

export function toggleClass(element, className) {

    if (!element) return;

    element.classList.toggle(className);

}

/* ======================================================
   RANDOM ID
====================================================== */

export function randomID(length = 8) {

    return Math.random().toString(36).substring(2, length + 2);

}

/* ======================================================
   FILE SIZE FORMAT
====================================================== */

export function formatFileSize(bytes) {

    if (bytes < 1024) return bytes + " B";

    if (bytes < 1048576)
        return (bytes / 1024).toFixed(2) + " KB";

    return (bytes / 1048576).toFixed(2) + " MB";

}

/* ======================================================
   IMAGE VALIDATION
====================================================== */

export function isValidImage(file) {

    if (!file) return false;

    return file.type.startsWith("image/");

}

/* ======================================================
   DELAY
====================================================== */

export function wait(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}

/* ======================================================
   DEBOUNCE
====================================================== */

export function debounce(callback, delay = 300) {

    let timeout;

    return (...args) => {

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            callback(...args);

        }, delay);

    };

}

/* ======================================================
   THROTTLE
====================================================== */

export function throttle(callback, delay = 300) {

    let waiting = false;

    return (...args) => {

        if (waiting) return;

        callback(...args);

        waiting = true;

        setTimeout(() => {

            waiting = false;

        }, delay);

    };

}

/* ======================================================
   END OF FILE
====================================================== */