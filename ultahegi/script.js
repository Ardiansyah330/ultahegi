document
  .getElementById("open-popup-btn")
  .addEventListener("click", function () {
    document.getElementsByClassName("popup")[0].classList.add("active");
  });

document
  .getElementById("dismiss-popup-btn")
  .addEventListener("click", function () {
    document.getElementsByClassName("popup")[0].classList.remove("active");
    setTimeout(function () {
      window.location.href = "asset/index.html";
    }, 1000); // Anda bisa menyesuaikan delay ini jika perlu
  });
