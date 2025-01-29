/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */

document.addEventListener("DOMContentLoaded", function () {
    const abstractLinks = document.querySelectorAll("b a[href='#']");
    abstractLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const abstract = this.nextElementSibling;
        if (abstract.style.display === "none") {
          abstract.style.display = "block";
        } else {
          abstract.style.display = "none";
        }
      });
    });
  });
  