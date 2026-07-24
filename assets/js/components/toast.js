/* ======================================================
   EraseMark AI
   Toast Notification Component
   Version: 1.0
====================================================== */

"use strict";


import {
    createElement
} from "../utils.js";


let toastElement = null;


/* ======================================================
   CREATE TOAST
====================================================== */

export function createToast(){


    if(toastElement)
        return toastElement;



    toastElement =
    createElement(
        "div",
        "toast"
    );


    document.body.appendChild(
        toastElement
    );


    return toastElement;

}


/* ======================================================
   SHOW TOAST
====================================================== */

export function showToast(
    message,
    type = "default"
){


    const toast =
    createToast();



    toast.innerHTML = `

        <div class="toast-message">

            ${message}

        </div>

    `;



    toast.className =
    `toast ${type}`;



    setTimeout(()=>{

        toast.classList.add(
            "show"
        );

    },50);



    setTimeout(()=>{


        toast.classList.remove(
            "show"
        );


    },3000);


}


/* ======================================================
   ERROR TOAST
====================================================== */

export function showError(message){


    showToast(
        message,
        "error"
    );

}


/* ======================================================
   SUCCESS TOAST
====================================================== */

export function showSuccess(message){


    showToast(
        message,
        "success"
    );

}


/* ======================================================
   END OF FILE
====================================================== */