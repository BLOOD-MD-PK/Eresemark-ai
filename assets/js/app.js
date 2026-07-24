/* ======================================================
   EraseMark AI
   Main Application
   Version: 1.0
====================================================== */

"use strict";


import {
    Header,
    initHeader
} from "./components/header.js";


import {
    Hero,
    initHero
} from "./components/hero.js";


import {
    Upload,
    initUpload
} from "./components/upload.js";


import {
    Editor,
    initEditor
} from "./components/editor.js";


import {
    Features
} from "./components/features.js";


import {
    FAQ,
    initFAQ
} from "./components/faq.js";


import {
    Footer
} from "./components/footer.js";


import {
    initRouter
} from "./router.js";



/* ======================================================
   APP ROOT
====================================================== */

const app =
document.querySelector("#app");



/* ======================================================
   RENDER HOME PAGE
====================================================== */

function renderHome(){


    app.appendChild(
        Header()
    );


    app.appendChild(
        Hero()
    );


    app.appendChild(
        Upload()
    );


    app.appendChild(
        Features()
    );


    app.appendChild(
        FAQ()
    );


    app.appendChild(
        Footer()
    );


}



/* ======================================================
   RENDER EDITOR PAGE
====================================================== */

function renderEditor(){


    app.appendChild(
        Header()
    );


    app.appendChild(
        Editor()
    );


    app.appendChild(
        Footer()
    );


}



/* ======================================================
   INITIALIZE EVENTS
====================================================== */

function initApp(){


    const page =
    document.body.dataset.page;



    if(page === "editor"){


        renderEditor();


        initEditor();


    }
    else{


        renderHome();


        initHero();

        initUpload();

        initFAQ();


    }



    initHeader();

    initRouter();


}



/* ======================================================
   START APP
====================================================== */

document.addEventListener(
    "DOMContentLoaded",
    initApp
);