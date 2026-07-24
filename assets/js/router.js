/* ======================================================
   EraseMark AI
   Simple Router
   Version: 1.0
====================================================== */

"use strict";


/* ======================================================
   ROUTES
====================================================== */

const routes = {

    home: "/",

    editor: "/editor.html",

    pricing: "/pricing.html",

    about: "/about.html",

    contact: "/contact.html",

    privacy: "/privacy.html",

    terms: "/terms.html"

};


/* ======================================================
   NAVIGATE
====================================================== */

export function navigate(page) {


    if (!routes[page]) {

        console.error(
            "Page not found:",
            page
        );

        return;

    }


    window.location.href =
    routes[page];

}


/* ======================================================
   GET CURRENT PAGE
====================================================== */

export function getCurrentPage() {


    const path =
    window.location.pathname;


    if (path.includes("editor")) {

        return "editor";

    }


    if (path.includes("pricing")) {

        return "pricing";

    }


    if (path.includes("about")) {

        return "about";

    }


    if (path.includes("contact")) {

        return "contact";

    }


    return "home";

}


/* ======================================================
   LINK HANDLER
====================================================== */

export function initRouter() {


    document
    .querySelectorAll("[data-route]")
    .forEach(link => {


        link.addEventListener(
            "click",
            event => {


                event.preventDefault();


                const page =
                link.dataset.route;


                navigate(page);


            }

        );


    });


}


/* ======================================================
   END OF FILE
====================================================== */