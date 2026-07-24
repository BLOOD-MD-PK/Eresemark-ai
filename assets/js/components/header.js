/* ======================================================
   EraseMark AI
   Header Component
   Version: 1.0
====================================================== */

"use strict";


import {
    createElement
} from "../utils.js";


/* ======================================================
   HEADER COMPONENT
====================================================== */

export function Header() {


    const header =
    createElement(
        "header",
        "header"
    );


    header.innerHTML = `

        <div class="container navbar">


            <a href="/" class="logo">

                <img 
                src="assets/icons/logo.png"
                alt="EraseMark AI Logo">

                <span>
                    EraseMark AI
                </span>

            </a>



            <nav class="nav-links">


                <a href="/">
                    Home
                </a>


                <a href="#features">
                    Features
                </a>


                <a href="pricing.html">
                    Pricing
                </a>


                <a href="about.html">
                    About
                </a>


                <a href="contact.html">
                    Contact
                </a>


            </nav>



            <div class="nav-actions">


                <button class="btn btn-primary">

                    Open Editor

                </button>



                <button 
                class="menu-btn"
                aria-label="Menu">

                    ☰

                </button>


            </div>



        </div>



        <div class="mobile-menu">


            <a href="/">
                Home
            </a>


            <a href="#features">
                Features
            </a>


            <a href="pricing.html">
                Pricing
            </a>


            <a href="about.html">
                About
            </a>


            <a href="contact.html">
                Contact
            </a>


        </div>

    `;



    return header;

}


/* ======================================================
   HEADER EVENTS
====================================================== */

export function initHeader() {


    const menuBtn =
    document.querySelector(
        ".menu-btn"
    );


    const mobileMenu =
    document.querySelector(
        ".mobile-menu"
    );


    if(!menuBtn || !mobileMenu)
        return;



    menuBtn.addEventListener(
        "click",
        () => {


            mobileMenu
            .classList
            .toggle("active");


        }
    );


}


/* ======================================================
   END OF FILE
====================================================== */