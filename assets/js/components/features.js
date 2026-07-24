/* ======================================================
   EraseMark AI
   Features Component
   Version: 1.0
====================================================== */

"use strict";


import {
    createElement
} from "../utils.js";


/* ======================================================
   FEATURES COMPONENT
====================================================== */

export function Features(){


    const section =
    createElement(
        "section",
        "features"
    );


    section.innerHTML = `

        <div class="container">


            <div class="section-title">


                <h2>

                    Powerful AI Features

                </h2>


                <p>

                    Remove unwanted watermarks
                    with smart AI technology.

                </p>


            </div>




            <div class="features-grid">



                <div class="feature-card">


                    <div class="feature-icon">

                        🤖

                    </div>


                    <h3>

                        AI Detection

                    </h3>


                    <p>

                        Automatically detects
                        watermark areas using AI.

                    </p>


                </div>





                <div class="feature-card">


                    <div class="feature-icon">

                        ✨

                    </div>


                    <h3>

                        Clean Removal

                    </h3>


                    <p>

                        Removes unwanted marks
                        while preserving image details.

                    </p>


                </div>





                <div class="feature-card">


                    <div class="feature-icon">

                        ⚡

                    </div>


                    <h3>

                        Fast Processing

                    </h3>


                    <p>

                        Get your cleaned image
                        in seconds.

                    </p>


                </div>





                <div class="feature-card">


                    <div class="feature-icon">

                        🎯

                    </div>


                    <h3>

                        High Quality

                    </h3>


                    <p>

                        Export images with
                        original resolution.

                    </p>


                </div>





                <div class="feature-card">


                    <div class="feature-icon">

                        🔒

                    </div>


                    <h3>

                        Privacy First

                    </h3>


                    <p>

                        Your images are handled
                        securely.

                    </p>


                </div>





                <div class="feature-card">


                    <div class="feature-icon">

                        📱

                    </div>


                    <h3>

                        Mobile Ready

                    </h3>


                    <p>

                        Works smoothly on
                        every device.

                    </p>


                </div>



            </div>


        </div>

    `;


    return section;


}


/* ======================================================
   END OF FILE
====================================================== */