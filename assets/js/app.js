"use strict";
// Sweet Alert CDN through JS
let script = document.createElement("script");
script.type = 'text/javascript';
script.src = "https://unpkg.com/sweetalert/dist/sweetalert.min.js";
document.body.appendChild(script);

// Header
// Navbar composant js fixe ici

let header = $(`
<nav class="navbar navbar-expand-lg fixed-top light-theme" id="navbar">
<a class="navbar-brand" href="index.html">Louise Vanrechem </a>
<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item nav-item-hover"><a class="nav-link" href="index.html">Page d'accueil </a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="design.html">Mes projets</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="techstack.html">Mes compétences</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="education.html">Parcours</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="./assets/docs/CV Louise Vanrechem stage.pdf" download target="_blank">Mon CV</a></li>
   <li class="nav-item nav-item-hover"><a class="nav-link" href="https://www.behance.net/louisevanrechem1/projects" target="_blank">Mon behance</a></li>
   <li class="nav-item">
   </li>
  </ul>
</div>
</nav>`);

// Footer
// Ici est a faire le form js pour envoyer un email

let footer = $(`
<footer class="footer sticky-bottom"  style="background-color:#2b2a2a;">
  <div class="p-4">
    <div class="container-fluid quote-container">
      <div class="quotes"    style="text-align:center;">
      <!--SVG code for quote-left icon-->
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.5em" height="1.5em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7 21a4 4 0 0 1-4-4c0-1.473 1.333-6.14 4-14h2L7 13a4 4 0 1 1 0 8zm10 0a4 4 0 0 1-4-4c0-1.473 1.333-6.14 4-14h2l-2 10a4 4 0 1 1 0 8z" fill="#fff" fill-rule="evenodd"/></svg>
      </div>
      <p class="tag" >Recherche d’un stage pratique de 12 à 16 semaines entre le 2 mai et le 31 août.</p>
    </div>

    
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0 justify-content-center">
          <svg xmlns="http://www.w3.org/2000/svg" id="b26bef22-1f65-4f25-beb8-c3985f2c0abb" width="100%" height="350" data-name="Layer 1" viewBox="0 0 856.363 548.704"><rect id="aea5e876-5b18-4677-ac52-565f186c2754" width="855.997" height="548.219" x=".366" y=".485" fill="#e6e6e6" data-name="Rectangle 1"/><rect id="aeed2be9-3178-4cee-b478-9db2d7f97a20" width="807.043" height="447.026" x="24.843" y="69.246" fill="#fff" data-name="Rectangle 2"/><rect id="b3ae8885-9a9e-4403-9d49-07bff8102aa7" width="855.997" height="36.366" fill="#1c7a43" data-name="Rectangle 9"/><rect id="b27f3643-394f-4790-b443-091b1b383c54" width="293.762" height="283.55" x="468.794" y="118.164" fill="#e6e6e6" data-name="Rectangle 10"/><circle id="e395ce2b-339a-464a-b2a8-2798fb0dfcd4" cx="27.024" cy="18.592" r="6.74" fill="#fff" data-name="Ellipse 12"/><circle id="ba9fbbde-097d-4714-9aa4-a15d83836bc3" cx="52.608" cy="18.592" r="6.74" fill="#fff" data-name="Ellipse 13"/><circle id="ab9aef1c-a9cb-4a01-bb5b-9a91a857f5fb" cx="78.192" cy="18.592" r="6.74" fill="#fff" data-name="Ellipse 14"/><rect id="e493c728-f703-42a2-881c-386585883b73" width="78.336" height="78.336" x="86.904" y="117.581" fill="#1c7a43" data-name="Rectangle 13"/><rect id="fef75a5d-72e7-4f52-be39-ca98924ebad3" width="78.336" height="78.336" x="195.841" y="118.03" fill="#e6e6e6" data-name="Rectangle 14"/><rect id="b42a9be3-8096-4c9f-95c4-e18278a3579e" width="78.336" height="260.658" x="196.152" y="225.635" fill="#1c7a43" data-name="Rectangle 15"/><rect id="e3bd9f8a-f01d-48ae-a6f1-3d5ac6753111" width="78.336" height="133.362" x="84.767" y="225.054" fill="#e6e6e6" data-name="Rectangle 16"/><path id="b03a159e-94f4-480c-9a5d-9f23eb0385fc" fill="#2f2e41" d="M785.50752,338.6c-12.9-21.792-38.412-22.807-38.412-22.807s-24.863-3.179-40.813,30.009c-14.866,30.935-35.384,60.8-3.3,68.044l5.795-18.036,3.589,19.378a125.5385,125.5385,0,0,0,13.726.235c34.356-1.109,67.074.325,66.021-12C790.70949,387.031,797.91652,359.567,785.50752,338.6Z" data-name="Path 4" transform="translate(-171.8185 -175.648)"/><path id="edc5401e-f5b9-4166-9a45-6d9296a0e0c2" fill="#ffb8b8" d="M697.46451,545.527l-43.494,30.2s-25.372,26.58-7.249,26.58,25.372-22.955,25.372-22.955l55.576-24.163Z" data-name="Path 5" transform="translate(-171.8185 -175.648)"/><path id="a1145783-9ad9-4920-9c36-7da703d314d6" fill="#2f2e41" d="M714.9825,427.731s-38.057,117.8-25.976,123.838,38.661,9.665,38.661,9.665Z" data-name="Path 6" transform="translate(-171.8185 -175.648)"/><path id="a69c490e-693f-4e62-8a32-5b49f335d225" d="M714.9825,427.731s-38.057,117.8-25.976,123.838,38.661,9.665,38.661,9.665Z" data-name="Path 7" opacity=".1" transform="translate(-171.8185 -175.648)" style="isolation:isolate"/><path id="e424da1a-71ea-46da-8962-7b7b116f82e2" fill="#2f2e41" d="M834.62849,576.339h-85.672l60.868-30.808a38.7974,38.7974,0,0,1,3.854,2.851A77.279,77.279,0,0,1,834.62849,576.339Z" data-name="Path 8" transform="translate(-171.8185 -175.648)"/><circle id="e1ba790b-7394-4885-ab4c-2c84c77f3e7f" cx="567.328" cy="190.465" r="31.412" fill="#ffb8b8" data-name="Ellipse 1"/><path id="f3be7be2-223c-4c9b-8b5e-90f6ae9f04e0" fill="#ffb8b8" d="M738.54251,392.089s7.249,22.955,0,31.413,39.87-12.082,39.87-12.082-16.914-24.163-12.082-35.037Z" data-name="Path 9" transform="translate(-171.8185 -175.648)"/><path id="b8fe7dc2-df95-4ac5-a3bc-1c8e36bb8e76" fill="#2f2e41" d="M808.13052,496.971l-2.537,16.54s1.281,3.757,2.839,9.231c2.03,7.14,4.531,17.2,5.243,25.637.737,8.554-.375,15.44-5.666,15.875-7.587.628-11.538,5.231-15.477,12.082h-87.4c.23-3.769.507-7.684.834-11.707q.272-3.625.6-7.346c.242-2.851,8.8-56.409,2.368-67.935-13.286-23.8,3.625-37.453,3.625-37.453s2.416-18.123,2.416-24.163c0-4.736,18.557-10.209,26.58-12.36.52-.133.979-.266,1.4-.362,1.389-.362,2.223-.568,2.223-.568l6.343-2.6s17.82-3.443,19.029-5.86a6.139,6.139,0,0,1,3.093-2.2c2.549-1.087,5.8-1.861,6.573-2.634a30.801,30.801,0,0,0,2.984-4.06,16.14792,16.14792,0,0,1,8.892-5.2c12.976-3.274,31.618,3.214,31.618,3.214l-6.524,42.588Z" data-name="Path 10" transform="translate(-171.8185 -175.648)"/><path id="b7b1d332-0442-4c4a-aa9d-2d666bd52d71" fill="#ffb8b8" d="M846.07048,470.621l-43.494,30.2s-25.372,26.58-7.249,26.58,25.36609-22.951,25.36609-22.951l55.576-24.163Z" data-name="Path 11" transform="translate(-171.8185 -175.648)"/><path id="faae9d8a-2ade-475e-8bc6-8f0e7b87a797" fill="#2f2e41" d="M771.34851,336.499l-25.208-13.2-15.81,2.45a28.274,28.274,0,0,0-23.24,21.7l-2.96,13.058,17.929-.69,5.009-11.687v11.494l8.273-.318,4.8-18.606,3,19.806,29.409-.6Z" data-name="Path 12" transform="translate(-171.8185 -175.648)"/><path id="ba178fc8-375d-4438-9c01-c19893b0df8a" fill="#2f2e41" d="M815.26147,397.526l8.457-2.416s85.78,35.037,83.364,65.241,1.208,30.2-13.29,31.412-56.78-13.29-55.58-15.706,9.665-14.5,9.665-14.5l-32.621-25.372Z" data-name="Path 13" transform="translate(-171.8185 -175.648)"/><circle id="b052f10f-e5c3-45aa-968a-35c6c5894796" cx="598.741" cy="190.466" r="4.833" fill="#ffb8b8" data-name="Ellipse 2"/><rect id="aa772a43-ca79-434e-998e-525da0608a2b" width="293.762" height="39.168" x="468.794" y="447.288" fill="#e6e6e6" data-name="Rectangle 17"/><rect id="b869959f-3b5e-4542-9dd3-67ec9d40b083" width="78.336" height="97.865" x="84.767" y="387.847" fill="#e6e6e6" data-name="Rectangle 18"/><rect id="ed8504c8-ba55-4496-b946-b31fe66f24a3" width="78.336" height="239.85" x="307.537" y="118.565" fill="#e6e6e6" data-name="Rectangle 19"/><rect id="af23db80-e058-4986-866a-292ebf8abb10" width="78.336" height="97.921" x="307.226" y="388.086" fill="#e6e6e6" data-name="Rectangle 20"/></svg>        </div>
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0 form-comtainer">
          <div class="form-style-6">
             <div class="form-header">
                <h6 class="display">Restons en contact</h6>
              </div>
                <form name="form1" action="https://script.google.com/macros/s/AKfycbxj2qw8HnlVAZ61AZAUj9I8HMmUsPflBBA14NM7gRgO19Z7U29uXtkFKqSRw0oQz_rk_w/exec" method="POST" accept-charset="UTF-8" >
                  <input id="nom" type="text" name="nom" placeholder="Votre nom" required/>
                  <input id="email" type="email" name="email" placeholder="Votre adresse mail" required/>                  
                  <textarea id="textArea" name="message" placeholder="Entrer votre message" required></textarea>
              
                  <div id="main">
                    <button id="lnch" type="button" value="Send" >Send</button>
                    <div id="lnch_btn"><i class="fas fa-space-shuttle"></i></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>


    

    <div class="rounded-social-buttons tag">

    <a class="social-button linkedin" href="https://www.linkedin.com/in/louise-vanrechem/" target="_blank" >
    <!-- svg code for linkedin icon -->
      <svg class="linkedin-icon-footer" xmlns="http://www.w3.org/2000/svg" width="35" viewBox="0 0 24 24" fill="#0e76a8"
        stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </a>



    <a class="social-button instagram" href="https://www.instagram.com/vanrechem_louise/" target="_blank" >
    <!-- svg code for instagram icon -->
      <svg class="instagram-icon-footer" x="0px" y="0px" viewBox="0 0 202.5 202.5"
        style="enable-background:new 0 0 202.5 202.5;">
        <circle id="littleCircle" class="st0" cx="101" cy="101.5" r="18.9" />
        <circle id="shutter" class="st0" cx="101" cy="101.5" r="8" />
        <circle id="lens" class="st0" cx="125.5" cy="78.6" r="2.9" />
        <path id="camera" class="st0" d="M79,60.5h44c10.5,0,19,8.5,19,19v44c0,10.5-8.5,19-19,19H79c-10.5,0-19-8.5-19-19v-44                                                                            C60,69,68.5,60.5,79,60.5z" />
      </svg>
    </a>

    <a class="social-button github" href="https://github.com/LouiseVanrechem" target="_blank">
    <!-- SVG code for Github icon -->
    <svg class="github-icon-footer" width="45px" height="45px" viewBox="0 0 300 300">
        <!-- body -->
        <path id="body" d="M112.5,234.4v43.1c24.5,7.5,50.5,7.5,75,0V225c-0.4-11.1-4.9-21.6-12.7-29.6c30-3.4,59.5-23.5,59.5-64.1
                                    c0.9-13.9-3.3-27.7-11.8-38.7c4.1-11.6,3.7-24.4-1.3-35.7c0,0-11.2-3.7-37.5,13.8c-22.1-6.1-45.3-6.1-67.4,0
                                    C90.6,53.3,78.9,56.8,78.9,56.8c-5,11.3-5.4,24.1-1.3,35.7c-8.5,11.1-12.7,24.8-11.9,38.7c0.2,33.8,26.4,61.8,60.2,64.1
                                    c-5,4.7-8.1,11.1-8.6,18" />
        <!-- arm                             -->
        <path id="arm" d="M125.2,213.4c-13.9,7.8-31.5,2.8-39.3-11.2c-4.3-7.7-12-12.8-20.7-13.8c-11.2,0-4.6,6.4,0,9.4
                                    c6,5.1,10.8,11.5,13.8,18.8c2.9,7.4,7.7,24.1,41.5,17.8" />
    </svg>
    </a>


    </div>
    </div>
</footer>
`);

$(document).ready(function() {
  // updating the color of the swiper bullets (initial update of color)
  updateColorOfSwiperBullets(localStorage.getItem("lightMode"));

  //function for the "Scroll To Top" button to detect the footer
  $(window).scroll(function() {
      //The button will be hidden until we scroll more than the window's height
      if ($(window).scrollTop() < $(window).height()) {
          $("#btnScrollToTop").css("visibility", "hidden");
      } else {
          $("#btnScrollToTop").css("visibility", "visible");
          //The button will change it's color when it hits the footer
          if (
              $(window).scrollTop() + $(window).height() >
              $(document).height() - 838
          ) {
              // 838 should be changed if footer's height is changed so that the button changes it's color exactly when it hits the footer (preferably 14 less than the computer height of the footer)
              $("#btnScrollToTop").css("background-color", "#1c7a43");
          } else {
              $("#btnScrollToTop").css("background-color", "#1c7a43");
          }
      }
  });
});

//"Scroll to top" button
let upArrow = $(`
  <button id="btnScrollToTop" onclick="scrollToTop()"><i class="fas fa-2x fa-angle-up"></i></button>
  <link rel="stylesheet" type="text/css" href="./css/style.css" />
  })
`);

//function to scroll to top
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

// Window Loads
$(function() {
    let bodyElement = $(`body`);
    bodyElement.prepend(header);
    bodyElement.append(footer);
    bodyElement.append(upArrow);
    $("#btnScrollToTop").css("visibility", "hidden");

    //toggler hamburger functions
    const menuBtn = document.querySelector(".navbar-toggler");
    let menuOpen = false;
    menuBtn.addEventListener("click", () => {
        if (!menuOpen) {
            menuBtn.classList.add("open");
            menuOpen = true;
        } else {
            menuBtn.classList.remove("open");
            menuOpen = false;
        }
    });
});

// function to update swiper bullets
function updateColorOfSwiperBullets(lightMode) {
  document.querySelectorAll(".swiper-pagination-bullet").forEach((bullet) => {
      if (lightMode == "light") {
          bullet.style.backgroundColor = "blue";
      } else {
          bullet.style.backgroundColor = "white";
      }
  });
}
// function for toggling hamburger is-active class

$(function() {
    $("#js-hamburger").on("click", function() {
        $(this).toggleClass("is-active");
    });
});

// Navbar current page highlight

let loader = document.querySelector(".loader-container");


$(function() {
    $("a.nav-link").each(function() {
        if ($(this).prop("href") == window.location.href) {
            $(this).addClass("current-link");
        }
    });
});

//function to remove underline on hover

$(document).ready(function() {
    $("a.nav-link").hover(
        function() {
            $(this).removeClass("current-link");
        },
        function() {
            if ($(this).prop("href") == window.location.href) {
                $(this).addClass("current-link");
            }
        }
    );
});

// Function to remove scroll bar during preload
$(window).on("load", function() {
    setTimeout(function() {
        $(".no-scroll-preload").css("overflow", "visible");
    }, 1000);
    $(".loader-container").fadeOut(2500);
});

//send button animation
//if an error on somethings else

$(function submitAnimation() {
    const nom = document.querySelector("#nom")
    const emailAdress = document.querySelector("#email")
    const text = document.querySelector("#textArea")
    const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    $("#lnch").on("click", function() {

        // Check if the name field is empty or contains a number
        if (nom.value == "" || (/\d/.test(nom.value))) {
            swal("Erreur !", "Merci d'entrer un nom valide !", "error");
            return;
        }
        // Check if the email field is empty or email is not valid ex: test@@email.com
        else if (emailAdress.value == "" || !(emailPattern.test(emailAdress.value))) {
            swal("Erreur !", "Merci d'entrer un email valide !", "error");
            return;
        }
        // Check if the message field is empty
        else if (text.value == "") {
            swal("Erreur !", "Merci d'entrer un message valide !", "error");
            return;
        } else {

            setTimeout(function() {
                $("#lnch").addClass("launching").text("Sending");
                $("#lnch_btn").addClass("launching");
            }, 0);
            setTimeout(function() {
                $("#lnch").addClass("launched").text("SENT");
                $("#lnch_btn").addClass("launched");
            }, 1500);
            // Wait for 1.2 seconds so that the send button animation can be fully played before submitting the form
            setTimeout(() => {
                document.querySelector('form').submit();
            }, 1200);
        }
    });
});