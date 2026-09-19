window.onload = function(){
	$('#onload').fadeOut();
	$('body').removeClass('hidden')
}





/* ================================ */
/* MENU MOBILE */
/* ================================ */


const menuBtn =
document.getElementById("menuBtn");


const mobileMenu =
document.getElementById("mobileMenu");



menuBtn.addEventListener(

    "click",

    () => {


        mobileMenu.classList.toggle(

            "active"

        );


    }

);



/* ================================ */
/* CERRAR MENU AL HACER CLICK */
/* ================================ */


const mobileLinks =
document.querySelectorAll(

    ".mobile-menu a"

);



mobileLinks.forEach(

    link => {


        link.addEventListener(

            "click",

            () => {


                mobileMenu.classList.remove(

                    "active"

                );


            }

        );


    }

);



/* ================================ */
/* ANIMACIÓN AL HACER SCROLL */
/* ================================ */


const sections =
document.querySelectorAll(

    ".artist-section"

);



const observer = new IntersectionObserver(

    entries => {


        entries.forEach(

            entry => {


                if (

                    entry.isIntersecting

                ) {


                    entry.target.classList.add(

                        "visible"

                    );


                }


            }

        );


    },

    {

        threshold:
        0.15

    }

);



sections.forEach(

    section => {


        observer.observe(

            section

        );


    }

);


/* ================================= */
/* MÚSICA DE BIENVENIDA */
/* ================================= */

const enterSite =
document.getElementById("enterSite");


const musicGate =
document.getElementById("musicGate");


const siteMusic =
document.getElementById("siteMusic");


const musicControl =
document.getElementById("musicControl");


enterSite.addEventListener(
    "click",
    () => {

        /* Reproducir música después
           de una interacción del usuario */

        siteMusic.play()
        .catch(error => {

            console.log(
                "El navegador bloqueó la reproducción:",
                error
            );

        });


        /* Cerrar pantalla */

        musicGate.style.display =
        "none";


        /* Mostrar botón de música */

        musicControl.style.display =
        "flex";


        /* Icono activo */

        musicControl.innerHTML =
        '<i class="fa-solid fa-volume-high"></i>';

    }
);



/* ================================= */
/* PAUSAR / REPRODUCIR */
/* ================================= */

musicControl.addEventListener(
    "click",
    () => {

        if (
            siteMusic.paused
        ) {

            siteMusic.play();


            musicControl.innerHTML =
            '<i class="fa-solid fa-volume-high"></i>';

        }

        else {

            siteMusic.pause();


            musicControl.innerHTML =
            '<i class="fa-solid fa-volume-xmark"></i>';

        }

    }
);





















/* =========================================================
   BURDO TATTOO COLLECTIVE
   YOUTUBE / ASESORÍAS
========================================================= */


/* =========================================================
   AÑO AUTOMÁTICO
========================================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =========================================================
   CERRAR MODALES CON ESC
========================================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        window.location.hash = "";

    }

});


/* =========================================================
   CERRAR MODAL HACIENDO CLICK FUERA DEL PERFIL
========================================================= */

document.querySelectorAll(".modalmask").forEach(function(modal) {

    modal.addEventListener("click", function(event) {

        if (event.target === modal) {

            window.location.hash = "";

        }

    });

});


/* =========================================================
   PREPARADO PARA YOUTUBE LIVE
========================================================= */

/*
   Cuando tengas un video o transmisión de YouTube puedes
   reemplazar el contenido de .video-placeholder por:

   <iframe
       src="https://www.youtube.com/embed/ID_DEL_VIDEO"
       title="Burdo Tattoo Collective - Live"
       frameborder="0"
       allow="accelerometer; autoplay; clipboard-write;
       encrypted-media; gyroscope; picture-in-picture;
       web-share"
       allowfullscreen>
   </iframe>

*/


/* =========================================================
   EFECTO SUAVE EN TARJETAS
========================================================= */

const artistCards =
    document.querySelectorAll(".youtube-artist-card");

artistCards.forEach(function(card) {

    card.addEventListener("mouseenter", function() {

        card.classList.add("is-hovered");

    });

    card.addEventListener("mouseleave", function() {

        card.classList.remove("is-hovered");

    });

});
