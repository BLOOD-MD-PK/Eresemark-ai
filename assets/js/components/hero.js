/* ======================================================
   EraseMark AI
   Hero Component
   Version: 1.0
====================================================== */

"use strict";


import {
    createElement
} from "../utils.js";


/* ======================================================
   HERO COMPONENT
====================================================== */

export function Hero(){


    const hero =
    createElement(
        "section",
        "hero"
    );


    hero.innerHTML = `

        <div class="container hero-wrapper">


            <div class="hero-content">


                <div class="hero-badge">

                    ✨ AI Powered
                    Watermark Removal

                </div>



                <h1 class="hero-title">

                    Remove Watermarks
                    <span>
                    With AI
                    </span>
                    In Seconds

                </h1>



                <p class="hero-description">

                    Upload your image and let
                    artificial intelligence remove
                    unwanted watermarks while
                    keeping your image quality.

                </p>



                <div class="hero-actions">


                    <button 
                    class="btn btn-primary"
                    id="heroUploadBtn">

                        Upload Image

                    </button>



                    <button 
                    class="btn btn-outline">

                        Try Demo

                    </button>


                </div>


            </div>




            <div class="hero-preview">


                <div class="preview-card">


                    <div class="preview-image">


                        <img 
                        src="assets/images/hero.png"
                        alt="AI Watermark Preview">


                    </div>



                    <div class="ai-status">


                        <span>
                            🤖 AI Detection Ready
                        </span>


                        <span>
                            100%
                        </span>


                    </div>



                </div>



                <div class="float-card top">

                    ✨ AI Clean

                </div>



                <div class="float-card bottom">

                    ⚡ HD Quality

                </div>



            </div>



        </div>

    `;


    return hero;

}


/* ======================================================
   HERO EVENTS
====================================================== */

export function initHero(){


    const button =
    document.querySelector(
        "#heroUploadBtn"
    );


    if(!button)
        return;



    button.addEventListener(
        "click",
        ()=>{


            window.location.href =
            "editor.html";


        }
    );


}


/* ======================================================
   END OF FILE
====================================================== */