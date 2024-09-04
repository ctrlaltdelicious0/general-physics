// CONSOLE LOG
console.log("index.js loaded");

// REDIRECTS
document
  .getElementById("submissions_form")
  .addEventListener("click", function () {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSe1DOnTwIEXg_kM9R_8oZUm4dD0sr8tojJ8pzulGGMvLKGbPg/viewform",
      "_blank"
    );
  });

document
  .getElementById("profile_facebook")
  .addEventListener("click", function () {
    window.open(
      "https://www.facebook.com/profile.php?id=61561856346900",
      "_blank"
    );
  });

// PRELOAD
gsap.fromTo(
    ".preload_container",
    {
      opacity: 1,
    },
    {
      duration: 1,
      opacity: 0,
      delay: 1,
      ease: "power2.inOut",
      onComplete: function () {
        document.querySelector(".preload_container").style.display = "none";
      },
    }
  );