document.addEventListener("DOMContentLoaded", function() {
    const tarjetas = document.querySelectorAll(".flip-card");

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("click", function() {
            tarjeta.classList.toggle("flipped");
        });
    });
});
