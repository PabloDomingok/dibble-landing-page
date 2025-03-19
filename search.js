document.querySelector(".search-icon").addEventListener("click", function() {
    let searchInput = document.querySelector(".search-input");
    searchInput.classList.toggle("active");

    if (searchInput.classList.contains("active")) {
        searchInput.focus();
    }
});
