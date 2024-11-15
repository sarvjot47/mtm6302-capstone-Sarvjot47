const favouritesContainer = document.getElementById("favouritesContainer");

document.addEventListener("DOMContentLoaded", () => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    displayFavourites(favourites);
});

function displayFavourites(favourites) {
    if (favourites.length === 0) {
        favouritesContainer.innerHTML = "<p>No favourite images saved yet.</p>";
    } else {
        favouritesContainer.innerHTML = favourites.map((item, index) => `
            <div class="col-md-4 position-relative">
                <img src="${item.url}" class="img-fluid" alt="${item.title}">
                <div class="heart-icon-container" onclick="removeFavourite(${index}, this)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="heart-icon filled" viewBox="0 0 24 24" stroke-width="2">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </div>
                <div class="card-body">
                    <h5>${item.title}</h5>
                    <p>${item.date}</p>
                </div>
            </div>
        `).join("");
    }
}

function removeFavourite(index, element) {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    favourites.splice(index, 1);
    localStorage.setItem("favourites", JSON.stringify(favourites));
    displayFavourites(favourites);
}
