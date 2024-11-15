const apiKey = "zasQU3LWA693aQSQoH7082wE5Tlf5mRraQfM5otP";
const apodContainer = document.getElementById("apodContainer");
const dateForm = document.getElementById("dateForm");

dateForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const date = document.getElementById("dateInput").value;
    if (date) {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`);
        const data = await response.json();
        displayAPOD(data);
    }
});

function displayAPOD(data) {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const isFavourite = favourites.some((fav) => fav.url === data.url);

    if (data.media_type === "image") {
        apodContainer.innerHTML = `
            <div class="row">
                <div class="col-md-6 position-relative">
                    <img src="${data.url}" class="img-fluid" alt="${data.title}">
                    <div class="heart-icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="heart-icon ${isFavourite ? 'filled' : ''}" viewBox="0 0 24 24" stroke-width="2">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </div>
                </div>
                <div class="col-md-6">
                    <h2>${data.title}</h2>
                    <p><strong>Date:</strong> ${data.date}</p>
                    <p>${data.explanation}</p>
                    <button class="btn btn-primary" onclick="window.open('${data.hdurl}', '_blank')">View HD</button>
                </div>
            </div>
        `;

        // Attach event listener dynamically to the heart icon
        const heartIconContainer = document.querySelector(".heart-icon-container");
        heartIconContainer.addEventListener("click", () => toggleFavourite(data.url, data.title, data.date, data.explanation, heartIconContainer));
    } else {
        apodContainer.innerHTML = `<p>Today's APOD is not an image. Please select another date.</p>`;
    }
}

function toggleFavourite(url, title, date, explanation, container) {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const index = favourites.findIndex((fav) => fav.url === url);

    if (index > -1) {
        // Remove from favourites
        favourites.splice(index, 1);
        container.querySelector("svg").classList.remove("filled");
    } else {
        // Add to favourites
        favourites.push({ url, title, date, explanation });
        container.querySelector("svg").classList.add("filled");
    }

    localStorage.setItem("favourites", JSON.stringify(favourites));
}
