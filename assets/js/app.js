/* ======================================================
   EraseMark AI
   Main Application
   Version: 1.0
====================================================== */

"use strict";

import { Header, initHeader } from "./components/header.js";
import { Hero, initHero } from "./components/hero.js";
import { Upload, initUpload } from "./components/upload.js";
import { Editor, initEditor } from "./components/editor.js";
import { Features } from "./components/features.js";
import { FAQ, initFAQ } from "./components/faq.js";
import { Footer } from "./components/footer.js";
import { initRouter } from "./router.js";

/* ======================================================
   APP ROOT
====================================================== */
const app = document.querySelector("#app");

/* ======================================================
   RENDER HOME PAGE
====================================================== */
function renderHome() {
    if (!app) return;
    app.innerHTML = ""; // Clear existing content

    if (typeof Header === "function") app.appendChild(Header());
    if (typeof Hero === "function") app.appendChild(Hero());
    if (typeof Upload === "function") app.appendChild(Upload());
    if (typeof Features === "function") app.appendChild(Features());
    if (typeof FAQ === "function") app.appendChild(FAQ());
    if (typeof Footer === "function") app.appendChild(Footer());
}

/* ======================================================
   RENDER EDITOR PAGE
====================================================== */
function renderEditor() {
    if (!app) return;
    app.innerHTML = ""; // Clear existing content

    if (typeof Header === "function") app.appendChild(Header());
    if (typeof Editor === "function") app.appendChild(Editor());
    if (typeof Footer === "function") app.appendChild(Footer());
}

/* ======================================================
   INITIALIZE EVENTS
====================================================== */
function initApp() {
    const page = document.body.dataset.page;

    if (page === "editor") {
        renderEditor();
        if (typeof initEditor === "function") initEditor();
    } else {
        renderHome();
        if (typeof initHero === "function") initHero();
        if (typeof initUpload === "function") initUpload();
        if (typeof initFAQ === "function") initFAQ();
    }

    if (typeof initHeader === "function") initHeader();
    if (typeof initRouter === "function") initRouter();
}

/* ======================================================
   START APP
====================================================== */
document.addEventListener("DOMContentLoaded", initApp);
