const discoverMe = document.getElementById("discover-me");
const tombol = document.getElementById("tombol");

function showDiscover() {
    discoverMe.classList.toggle("hidden");
    discoverMe.classList.toggle("visible");

     if (discoverMe.classList.contains("hidden")) {
        tombol.textContent = "Discover Me !";
    } else {
        tombol.textContent = "Close";
    }

}
tombol.addEventListener("click", showDiscover);
