/* ======================================================
   EraseMark AI
   Footer Component
   Version: 1.0
====================================================== */

"use strict";


import {
    createElement
} from "../utils.js";


/* ======================================================
   FOOTER COMPONENT
====================================================== */

export function Footer(){


    const footer =
    createElement(
        "footer",
        "footer"
    );


    footer.innerHTML = `

        <div class="container">


            <div class="footer-grid">


                <div class="footer-brand">


                    <a href="/" class="logo">


                        <img
                        src="assets/icons/logo.png"
                        alt="EraseMark AI">


                        <span>
                            EraseMark AI
                        </span>


                    </a>



                    <p>

                        AI powered watermark
                        removal platform for
                        clean and professional
                        images.

                    </p>


                </div>




                <div>


                    <h4>

                        Product

                    </h4>


                    <div class="footer-links">


                        <a href="editor.html">

                            Editor

                        </a>


                        <a href="pricing.html">

                            Pricing

                        </a>


                        <a href="#features">

                            Features

                        </a>


                    </div>


                </div>





                <div>


                    <h4>

                        Company

                    </h4>


                    <div class="footer-links">


                        <a href="about.html">

                            About

                        </a>


                        <a href="contact.html">

                            Contact

                        </a>


                        <a href="privacy.html">

                            Privacy

                        </a>


                    </div>


                </div>





                <div>


                    <h4>

                        Support

                    </h4>


                    <div class="footer-links">


                        <a href="terms.html">

                            Terms

                        </a>


                        <a href="#faq">

                            FAQ

                        </a>


                        <a href="#">

                            Help Center

                        </a>


                    </div>


                </div>



            </div>




            <div class="footer-bottom">


                © 2026 EraseMark AI.
                All rights reserved.


            </div>



        </div>

    `;


    return footer;


}


/* ======================================================
   END OF FILE
====================================================== */