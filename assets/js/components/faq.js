/* ======================================================
   EraseMark AI
   FAQ Component
   Version: 1.0
====================================================== */

"use strict";


import {
    createElement
} from "../utils.js";


/* ======================================================
   FAQ COMPONENT
====================================================== */

export function FAQ(){


    const section =
    createElement(
        "section",
        "faq"
    );


    section.innerHTML = `

        <div class="container">


            <div class="section-title">


                <h2>

                    Frequently Asked Questions

                </h2>


                <p>

                    Everything you need to know
                    about AI watermark removal.

                </p>


            </div>




            <div class="faq-list">



                <div class="faq-item">


                    <div class="faq-question">

                        How does AI watermark removal work?

                        <span>
                            +
                        </span>

                    </div>


                    <div class="faq-answer">

                        Our AI analyzes the image,
                        detects unwanted marks and
                        rebuilds the missing area.

                    </div>


                </div>





                <div class="faq-item">


                    <div class="faq-question">

                        What image formats are supported?

                        <span>
                            +
                        </span>

                    </div>


                    <div class="faq-answer">

                        You can upload common image
                        formats like JPG, PNG and WEBP.

                    </div>


                </div>





                <div class="faq-item">


                    <div class="faq-question">

                        Will image quality decrease?

                        <span>
                            +
                        </span>

                    </div>


                    <div class="faq-answer">

                        No, the AI tries to preserve
                        original image quality.

                    </div>


                </div>





                <div class="faq-item">


                    <div class="faq-question">

                        Is my image private?

                        <span>
                            +
                        </span>

                    </div>


                    <div class="faq-answer">

                        Uploaded files are processed
                        securely.

                    </div>


                </div>



            </div>


        </div>

    `;


    return section;


}


/* ======================================================
   FAQ EVENTS
====================================================== */

export function initFAQ(){


    const questions =
    document.querySelectorAll(
        ".faq-question"
    );


    questions.forEach(
        question => {


            question.addEventListener(
                "click",
                ()=>{


                    const item =
                    question.parentElement;


                    item.classList.toggle(
                        "active"
                    );


                }
            );


        }
    );


}


/* ======================================================
   END OF FILE
====================================================== */