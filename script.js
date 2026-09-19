
const searchBox = document.getElementById("searchBox");
const genreFilter = document.getElementById("genreFilter");

if (searchBox && genreFilter) {

    function filterAnime() {

        const searchValue = searchBox.value.toLowerCase();
        const selectedGenre = genreFilter.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const title = card.querySelector("h3");
            const genre = card.querySelector("p");

            if (!title || !genre) return;

            const animeTitle =
                title.textContent.toLowerCase();

            const animeGenre =
                genre.textContent.toLowerCase();

            const matchesSearch =
                animeTitle.includes(searchValue);

            const matchesGenre =
                selectedGenre === "all" ||
                animeGenre.includes(selectedGenre);

            if (matchesSearch && matchesGenre) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });
    }

    searchBox.addEventListener("keyup", filterAnime);

    genreFilter.addEventListener("change", filterAnime);
}


const darkModeBtn = document.getElementById("darkModeBtn");

// Load saved dark mode
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Dark mode button
if (darkModeBtn) {

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️";
    } else {
        darkModeBtn.textContent = "🌙";
    }

    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeBtn.textContent = "☀️";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeBtn.textContent = "🌙";
        }

    });
}

const animeData = {
    naruto: {
        title: "Naruto",
        image: "../images/naruto.jpg",
        genre: "Action • Adventure",
        episodes: "220",
        rating: "4.9/5",
        description: "Naruto Uzumaki is a young ninja who dreams of becoming the Hokage.",
        trailer: "https://www.youtube.com/results?search_query=Naruto+official+trailer",
        watch: "https://www.crunchyroll.com/"
    },

    onepiece: {
        title: "One Piece",
        image: "../images/onepiece.jpg",
        genre: "Adventure • Fantasy",
        episodes: "1100+",
        rating: "5.0/5",
        description: "Follow Monkey D. Luffy and his crew on their journey to find the legendary One Piece.",
        trailer: "https://www.youtube.com/results?search_query=One+Piece+official+trailer",
        watch: "https://www.crunchyroll.com/"
    },

    demonslayer: {
        title: "Demon Slayer",
        image: "../images/demonslayer.jpg",
        genre: "Action • Fantasy",
        episodes: "60+",
        rating: "4.8/5",
        description: "Tanjiro Kamado becomes a demon slayer after a tragedy changes his life.",
        trailer: "https://www.youtube.com/results?search_query=Demon+Slayer+official+trailer",
        watch: "https://www.crunchyroll.com/"
    },

    bleach: {
        title: "Bleach",
        image: "../images/bleach.jpg",
        genre: "Action • Supernatural",
        episodes: "366",
        rating: "4.7/5",
        description: "Ichigo Kurosaki gains supernatural powers and becomes involved in the world of Soul Reapers.",
        trailer: "https://www.youtube.com/results?search_query=Bleach+official+trailer",
        watch: "https://www.crunchyroll.com/"
    },

    jujutsukaisen: {
        title: "Jujutsu Kaisen",
        image: "../images/jujutsukaisen.jpg",
        genre: "Action • Supernatural",
        episodes: "47+",
        rating: "4.9/5",
        description: "Yuji Itadori becomes involved in the world of Jujutsu Sorcerers after encountering a powerful cursed object.",
        trailer: "https://www.youtube.com/results?search_query=Jujutsu+Kaisen+official+trailer",
        watch: "https://www.crunchyroll.com/"
    },

    attackontitan: {
        title: "Attack on Titan",
        image: "../images/attackontitan.jpg",
        genre: "Action • Drama",
        episodes: "89",
        rating: "5.0/5",
        description: "Humanity fights for survival against mysterious Titans while uncovering the secrets behind their world.",
        trailer: "https://www.youtube.com/results?search_query=Attack+on+Titan+official+trailer",
        watch: "https://www.crunchyroll.com/"
    },

    sololeveling: {
        title: "Solo Leveling",
        image: "../images/sololeveling.jpg",
        genre: "Action • Fantasy",
        episodes: "25+",
        rating: "4.9/5",
        description: "Sung Jin-Woo begins as the weakest hunter and gains a mysterious power that allows him to level up.",
        trailer: "https://www.youtube.com/results?search_query=Solo+Leveling+official+trailer",
        watch: "https://www.crunchyroll.com/"
    },

    deathnote: {
        title: "Death Note",
        image: "../images/deathnote.jpg",
        genre: "Mystery • Thriller",
        episodes: "37",
        rating: "5.0/5",
        description: "A mysterious notebook gives its owner the power to determine the fate of people whose names are written in it.",
        trailer: "https://www.youtube.com/results?search_query=Death+Note+official+trailer",
        watch: "https://www.crunchyroll.com/"
    },

    myheroacademia: {
        title: "My Hero Academia",
        image: "../images/myheroacademia.jpg",
        genre: "Action • Fantasy",
        episodes: "170+",
        rating: "4.8/5",
        description: "A young student dreams of becoming a great hero.",
        trailer: "https://www.youtube.com/results?search_query=My+Hero+Academia+official+trailer",
        watch: "https://www.crunchyroll.com/"
    },

    blackclover: {
        title: "Black Clover",
        image: "../images/blackclover.jpg",
        genre: "Action • Fantasy",
        episodes: "170",
        rating: "4.8/5",
        description: "Asta dreams of becoming the strongest magic user.",
        trailer: "https://www.youtube.com/results?search_query=Black+Clover+official+trailer",
        watch: "https://www.crunchyroll.com/"
    },

    bluelock: {
        title: "Blue Lock",
        image: "../images/bluelock.jpg",
        genre: "Sports • Action",
        episodes: "38+",
        rating: "4.7/5",
        description: "Young football players compete to become Japan's greatest striker.",
        trailer: "https://www.youtube.com/results?search_query=Blue+Lock+official+trailer",
        watch: "https://www.crunchyroll.com/"
    },

    tokyorevengers: {
        title: "Tokyo Revengers",
        image: "../images/tokyorevengers.jpg",
        genre: "Action • Drama",
        episodes: "50+",
        rating: "4.7/5",
        description: "Takemichi gets a chance to change the past and save his friends.",
        trailer: "https://www.youtube.com/results?search_query=Tokyo+Revengers+official+trailer",
        watch: "https://www.crunchyroll.com/"
    },

    spyxfamily: {
        title: "Spy x Family",
        image: "../images/spyxfamily.jpg",
        genre: "Comedy • Action",
        episodes: "37+",
        rating: "4.8/5",
        description: "A spy, an assassin and a telepath create an unusual family.",
        trailer: "https://www.youtube.com/results?search_query=Spy+x+Family+official+trailer",
        watch: "https://www.crunchyroll.com/"
    },

    chainsawman: {
        title: "Chainsaw Man",
        image: "../images/chainsawman.jpg",
        genre: "Action • Fantasy",
        episodes: "12",
        rating: "4.8/5",
        description: "Denji becomes involved in the dangerous world of Devil Hunters.",
        trailer: "https://www.youtube.com/results?search_query=Chainsaw+Man+official+trailer",
        watch: "https://www.crunchyroll.com/"
    },

    onepunchman: {
        title: "One Punch Man",
        image: "../images/onepunchman.jpg",
        genre: "Action • Comedy",
        episodes: "24+",
        rating: "4.8/5",
        description: "Saitama becomes a hero for fun and defeats powerful enemies with a single punch.",
        trailer: "https://www.youtube.com/results?search_query=One+Punch+Man+official+trailer",
        watch: "https://www.crunchyroll.com/"
    }
};

const urlParams = new URLSearchParams(window.location.search);
const selectedGenre = urlParams.get("genre");

const animeList = document.getElementById("animeList");
const featuredAnime = document.getElementById("featuredAnime");

if (animeList) {

    Object.keys(animeData).forEach(id => {

        const anime = animeData[id];

        if (
            selectedGenre &&
            !anime.genre.toLowerCase().includes(selectedGenre)
        ) {
            return;
        }

        const savedUserRating = localStorage.getItem("rating_" + id);

        animeList.innerHTML += `
            <div class="card">

                <img src="${anime.image}" alt="${anime.title}">

                <h3>${anime.title}</h3>

                <p>${anime.genre}</p>

                <p class="rating">
                    ⭐ ${anime.rating}
                </p>

                ${
                    savedUserRating
                        ? `<p class="user-card-rating">
                            Your Rating: ⭐ ${savedUserRating}/5
                           </p>`
                        : ""
                }

                <div class="card-buttons">

    <a href="details.html?anime=${id}">
        <button class="details-btn">
            View Details
        </button>
    </a>

    <button class="card-favorite-btn" data-id="${id}">
        ❤️ Favorite
    </button>

</div>

            </div>
        `;
    });

}

const params = new URLSearchParams(window.location.search);
const animeId = params.get("anime");

if (animeId && animeData[animeId]) {

    const anime = animeData[animeId];

    document.getElementById("animeTitle").textContent = anime.title;
    document.getElementById("animeImage").src = anime.image;
    document.getElementById("animeGenre").textContent = anime.genre;
    document.getElementById("animeEpisodes").textContent = anime.episodes;
    document.getElementById("animeRating").textContent = anime.rating;
    document.getElementById("animeDescription").textContent = anime.description;
}

const favoriteBtn = document.getElementById("favoriteBtn");

if (favoriteBtn && animeId && animeData[animeId]) {

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.includes(animeId)) {
        favoriteBtn.textContent = "❤️ Remove from Favorites";
    }

    favoriteBtn.addEventListener("click", function () {

        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (favorites.includes(animeId)) {

            favorites = favorites.filter(id => id !== animeId);

            favoriteBtn.textContent = "❤️ Add to Favorites";

        } else {

            favorites.push(animeId);

            favoriteBtn.textContent = "❤️ Remove from Favorites";
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));

    });
}

const favoritesList = document.getElementById("favoritesList");

if (favoritesList) {

    const favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.length === 0) {

        favoritesList.innerHTML =
            "<p>No favorite anime yet ❤️</p>";

    } else {

        favorites.forEach(id => {

            const anime = animeData[id];

            if (anime) {

                favoritesList.innerHTML += `

                    <div class="card">

                        <img src="${anime.image}"
                             alt="${anime.title}">

                        <h3>${anime.title}</h3>

                        <p>${anime.genre}</p>

                        <p class="rating">
                            ⭐ ${anime.rating}
                        </p>

                        ${localStorage.getItem("rating_" + id)
    ? `<p class="user-card-rating">
        Your Rating: ⭐ ${localStorage.getItem("rating_" + id)}/5
       </p>`
    : ""}

                        <a href="details.html?anime=${id}">
                            <button class="details-btn">
                                View Details
                            </button>
                        </a>

                    </div>

                `;
            }

        });
    }
}

let slideIndex = 0;

const slides = document.querySelectorAll(".slide");

function showSlides() {

    if (slides.length === 0) {
        return;
    }

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add("active");
}

showSlides();

setInterval(showSlides, 4000);

const prevAnime = document.getElementById("prevAnime");
const nextAnime = document.getElementById("nextAnime");

if (prevAnime && nextAnime && animeId) {

    const animeIds = Object.keys(animeData);

    const currentIndex = animeIds.indexOf(animeId);

    prevAnime.addEventListener("click", function () {

        if (currentIndex > 0) {

            const previousId = animeIds[currentIndex - 1];

            window.location.href =
                "details.html?anime=" + previousId;
        }

    });

    nextAnime.addEventListener("click", function () {

        if (currentIndex < animeIds.length - 1) {

            const nextId = animeIds[currentIndex + 1];

            window.location.href =
                "details.html?anime=" + nextId;
        }

    });
}

if (featuredAnime) {

    const featuredIds = [
        "naruto",
        "onepiece",
        "demonslayer",
        "jujutsukaisen",
        "attackontitan",
        "sololeveling"
    ];

    featuredIds.forEach(id => {

        const anime = animeData[id];

        featuredAnime.innerHTML += `
            <div class="card">

                <img src="${anime.image.replace("../", "")}"
                     alt="${anime.title}">

                <h3>${anime.title}</h3>

                <p>${anime.genre}</p>

                <p class="rating">
                    ⭐ ${anime.rating}
                </p>

                <a href="pages/details.html?anime=${id}">
                    <button class="details-btn">
                        View Details
                    </button>
                </a>

            </div>
        `;
    });

const trendingAnime = document.getElementById("trendingAnime");

if (trendingAnime) {

    const trendingIds = [
        "onepiece",
        "demonslayer",
        "jujutsukaisen",
        "sololeveling",
        "attackontitan"
    ];

    trendingIds.forEach(id => {

        const anime = animeData[id];

        if (!anime) return;

        trendingAnime.innerHTML += `
            <div class="card">

                <img src="${anime.image.replace("../", "")}"
                     alt="${anime.title}">

                <h3>${anime.title}</h3>

                <p>${anime.genre}</p>

                <p class="rating">
                    🔥 ⭐ ${anime.rating}
                </p>

                <a href="pages/details.html?anime=${id}">
                    <button class="details-btn">
                        View Details
                    </button>
                </a>

            </div>
        `;
    });
}
}

const recentAnime = document.getElementById("recentAnime");

if (recentAnime) {

    const recentIds = [
        "onepunchman",
        "chainsawman",
        "spyxfamily",
        "bluelock",
        "tokyorevengers"
    ];

    recentIds.forEach(id => {

        const anime = animeData[id];

        if (!anime) return;

        recentAnime.innerHTML += `
            <div class="card">

                <img src="${anime.image.replace("../", "")}"
                     alt="${anime.title}">

                <h3>${anime.title}</h3>

                <p>${anime.genre}</p>

                <p class="rating">
                    ⭐ ${anime.rating}
                </p>

                <a href="pages/details.html?anime=${id}">
                    <button class="details-btn">
                        View Details
                    </button>
                </a>

            </div>
        `;
    });
}

function openGenre(genre) {

    window.location.href =
        "anime.html?genre=" + genre;

}

const trailerBtn = document.getElementById("trailerBtn");

if (trailerBtn && animeId && animeData[animeId]) {

    if (animeData[animeId].trailer) {

        trailerBtn.addEventListener("click", function () {
            window.open(animeData[animeId].trailer, "_blank");
        });

    } else {
        trailerBtn.style.display = "none";
    }
}

const episodesList = document.getElementById("episodesList");

if (episodesList && animeId && animeData[animeId]) {

    const episodeCount =
        parseInt(animeData[animeId].episodes);

    const totalEpisodes =
        Math.min(episodeCount, 20);

    for (let i = 1; i <= totalEpisodes; i++) {

        const episodeButton = document.createElement("button");

        episodeButton.className = "episode-btn";
        episodeButton.textContent = `Episode ${i}`;

        episodeButton.addEventListener("click", function () {

            window.location.href =
            `watch.html?anime=${animeId}&episode=${i}`;

        });

        episodesList.appendChild(episodeButton);
    }
}

const watchBtn = document.getElementById("watchBtn");

if (watchBtn && animeId && animeData[animeId]) {

    if (animeData[animeId].watch) {

        watchBtn.addEventListener("click", function () {
            window.open(animeData[animeId].watch, "_blank");
        });

    } else {
        watchBtn.style.display = "none";
    }
}

const watchlistBtn = document.getElementById("watchlistBtn");

if (watchlistBtn && animeId && animeData[animeId]) {

    let watchlist =
        JSON.parse(localStorage.getItem("animeWatchlist")) || [];

    const isAlreadyInWatchlist =
        watchlist.includes(animeId);

    if (isAlreadyInWatchlist) {
        watchlistBtn.textContent = "✅ Added to Watchlist";
    }

    watchlistBtn.addEventListener("click", function () {

        let watchlist =
            JSON.parse(localStorage.getItem("animeWatchlist")) || [];

        if (watchlist.includes(animeId)) {

            alert("This anime is already in your Watchlist.");

        } else {

            watchlist.push(animeId);

            localStorage.setItem(
                "animeWatchlist",
                JSON.stringify(watchlist)
            );

            watchlistBtn.textContent = "✅ Added to Watchlist";

            alert(
                animeData[animeId].title +
                " has been added to your Watchlist!"
            );
        }
    });
}

const watchlistContainer =
    document.getElementById("watchlistContainer");

if (watchlistContainer) {

    const watchlist =
        JSON.parse(localStorage.getItem("animeWatchlist")) || [];

    if (watchlist.length === 0) {

        watchlistContainer.innerHTML = `
            <div class="empty-favorites">
                <h3>Your Watchlist is Empty</h3>
                <p>Add anime from the details page to see them here.</p>
            </div>
        `;

    } else {

        watchlist.forEach(animeId => {

            const anime = animeData[animeId];

            if (!anime) return;

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <img src="${anime.image}" alt="${anime.title}">

                <h3>${anime.title}</h3>

                <p>${anime.genre}</p>

                <p class="rating">
                    ⭐ ${anime.rating}
                </p>

                ${localStorage.getItem("rating_" + animeId)
    ? `<p class="user-card-rating">
        Your Rating: ⭐ ${localStorage.getItem("rating_" + animeId)}/5
       </p>`
    : ""}

                <button class="details-btn" onclick="window.location.href='details.html?anime=${animeId}'">View Details</button>

                <button 
                    class="remove-watchlist-btn"
                    data-id="${animeId}">
                    ❌ Remove
                </button>
            `;

            watchlistContainer.appendChild(card);
        });
    }
}

/* ================================
   REMOVE FROM WATCHLIST
   ================================ */

const removeWatchlistButtons =
    document.querySelectorAll(".remove-watchlist-btn");

removeWatchlistButtons.forEach(button => {

    button.addEventListener("click", function () {

        const animeId = this.getAttribute("data-id");

        let watchlist =
            JSON.parse(localStorage.getItem("animeWatchlist")) || [];

        watchlist = watchlist.filter(id => id !== animeId);

        localStorage.setItem(
            "animeWatchlist",
            JSON.stringify(watchlist)
        );

        alert("Anime removed from your Watchlist!");

        location.reload();
    });
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            formMessage.textContent =
                "⚠️ Please fill in all fields.";

            return;
        }

        formMessage.textContent =
            "✅ Thank you! Your message has been submitted.";

        contactForm.reset();
    });
}

// User Rating System
const starButtons = document.querySelectorAll(".star-btn");
const userRatingMessage = document.getElementById("userRatingMessage");

if (starButtons.length > 0) {

    const currentAnimeId = new URLSearchParams(window.location.search).get("anime");

    if (currentAnimeId) {

        const ratingKey = "rating_" + currentAnimeId;
        const savedRating = localStorage.getItem(ratingKey);

        // Load saved rating
        if (savedRating) {

            starButtons.forEach(star => {
                if (Number(star.dataset.rating) <= Number(savedRating)) {
                    star.classList.add("selected");
                }
            });

            userRatingMessage.textContent =
                "You rated this anime ⭐ " + savedRating + "/5";
        }

        // Save new rating
        starButtons.forEach(star => {

            star.addEventListener("click", function () {

                const rating = this.dataset.rating;

                localStorage.setItem(ratingKey, rating);

                starButtons.forEach(button => {
                    button.classList.remove("selected");

                    if (Number(button.dataset.rating) <= Number(rating)) {
                        button.classList.add("selected");
                    }
                });

                userRatingMessage.textContent =
                    "You rated this anime ⭐ " + rating + "/5";

            });

        });
    }
}

// Anime Sorting System
const sortAnime = document.getElementById("sortAnime");

if (sortAnime && animeList) {

    sortAnime.addEventListener("change", function () {

        const cards = Array.from(animeList.querySelectorAll(".card"));
        const sortValue = sortAnime.value;

        cards.sort((a, b) => {

            const nameA = a.querySelector("h3").textContent.toLowerCase();
            const nameB = b.querySelector("h3").textContent.toLowerCase();

            const ratingA = parseFloat(
                a.querySelector(".rating").textContent.match(/[\d.]+/)[0]
            );

            const ratingB = parseFloat(
                b.querySelector(".rating").textContent.match(/[\d.]+/)[0]
            );

            if (sortValue === "nameAZ") {
                return nameA.localeCompare(nameB);
            }

            if (sortValue === "nameZA") {
                return nameB.localeCompare(nameA);
            }

            if (sortValue === "ratingHigh") {
                return ratingB - ratingA;
            }

            if (sortValue === "ratingLow") {
                return ratingA - ratingB;
            }

            return 0;
        });

        cards.forEach(card => {
            animeList.appendChild(card);
        });

    });
}

const cardFavoriteButtons = document.querySelectorAll(".card-favorite-btn");

cardFavoriteButtons.forEach(button => {

    const id = button.getAttribute("data-id");
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.includes(id)) {
        button.textContent = "❤️ Favorited";
    }

    button.addEventListener("click", function () {

        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (favorites.includes(id)) {

            favorites = favorites.filter(item => item !== id);
            button.textContent = "❤️ Favorite";

        } else {

            favorites.push(id);
            button.textContent = "❤️ Favorited";

        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    });
});

const showsList = document.getElementById("showsList");

if (showsList) {

    const showIds = [
        "naruto",
        "onepiece",
        "demonslayer",
        "bleach",
        "jujutsukaisen",
        "attackontitan",
        "sololeveling",
        "deathnote"
    ];

    showIds.forEach(id => {

        const anime = animeData[id];

        if (!anime) return;

        const savedUserRating = localStorage.getItem("rating_" + id);

        showsList.innerHTML += `
            <div class="card">

                <img src="${anime.image}" alt="${anime.title}">

                <h3>${anime.title}</h3>

                <p>${anime.genre}</p>

                <p class="rating">
                    ⭐ ${anime.rating}
                </p>

                ${
                    savedUserRating
                        ? `<p class="user-card-rating">
                            Your Rating: ⭐ ${savedUserRating}/5
                           </p>`
                        : ""
                }

                <div class="card-buttons">

                    <a href="details.html?anime=${id}">
                        <button class="details-btn">
                            View Details
                        </button>
                    </a>

                    <button class="show-watchlist-btn" data-id="${id}">
                        Watchlist
                    </button>

                </div>

            </div>
        `;
    });
}

const showsSearch = document.getElementById("showsSearch");
const showsGenre = document.getElementById("showsGenre");

if (showsSearch && showsGenre && showsList) {

    function filterShows() {

        const searchValue = showsSearch.value.toLowerCase();
        const selectedGenre = showsGenre.value.toLowerCase();

        const cards = showsList.querySelectorAll(".card");

        cards.forEach(card => {

            const title = card.querySelector("h3");
            const genre = card.querySelector("p");

            if (!title || !genre) return;

            const animeTitle = title.textContent.toLowerCase();
            const animeGenre = genre.textContent.toLowerCase();

            const matchesSearch =
                animeTitle.includes(searchValue);

            const matchesGenre =
                selectedGenre === "all" ||
                animeGenre.includes(selectedGenre);

            card.style.display =
                matchesSearch && matchesGenre
                    ? "block"
                    : "none";
        });
    }

    showsSearch.addEventListener("keyup", filterShows);

    showsGenre.addEventListener("change", filterShows);
}

const showsSort = document.getElementById("showsSort");

if (showsSort && showsList) {

    showsSort.addEventListener("change", function () {

        const cards = Array.from(
            showsList.querySelectorAll(".card")
        );

        const sortValue = showsSort.value;

        cards.sort((a, b) => {

            const nameA = a.querySelector("h3")
                .textContent
                .toLowerCase();

            const nameB = b.querySelector("h3")
                .textContent
                .toLowerCase();

            const ratingA = parseFloat(
                a.querySelector(".rating")
                    .textContent
                    .match(/[\d.]+/)[0]
            );

            const ratingB = parseFloat(
                b.querySelector(".rating")
                    .textContent
                    .match(/[\d.]+/)[0]
            );

            if (sortValue === "nameAZ") {
                return nameA.localeCompare(nameB);
            }

            if (sortValue === "nameZA") {
                return nameB.localeCompare(nameA);
            }

            if (sortValue === "ratingHigh") {
                return ratingB - ratingA;
            }

            if (sortValue === "ratingLow") {
                return ratingA - ratingB;
            }

            return 0;
        });

        cards.forEach(card => {
            showsList.appendChild(card);
        });

    });
}

const showWatchlistButtons =
    document.querySelectorAll(".show-watchlist-btn");

showWatchlistButtons.forEach(button => {

    const id = button.getAttribute("data-id");

    let watchlist =
        JSON.parse(localStorage.getItem("animeWatchlist")) || [];

    if (watchlist.includes(id)) {
        button.textContent = "✅ Added";
    }

    button.addEventListener("click", function () {

        let watchlist =
            JSON.parse(localStorage.getItem("animeWatchlist")) || [];

        if (watchlist.includes(id)) {

            watchlist =
                watchlist.filter(item => item !== id);

            button.textContent = "Watchlist";

        } else {

            watchlist.push(id);

            button.textContent = "✅ Added";

        }

        localStorage.setItem(
            "animeWatchlist",
            JSON.stringify(watchlist)
        );

    });

});

// ===== MANGA SEARCH & FILTER =====

const mangaSearch = document.getElementById("mangaSearch");
const mangaGenre = document.getElementById("mangaGenre");
const mangaList = document.getElementById("mangaList");

if (mangaSearch && mangaGenre && mangaList) {

    function filterManga() {

        const searchValue =
            mangaSearch.value.toLowerCase();

        const selectedGenre =
            mangaGenre.value.toLowerCase();

        const cards =
            mangaList.querySelectorAll(".card");

        cards.forEach(card => {

            const title =
                card.querySelector("h3");

            const genre =
                card.querySelector("p");

            if (!title || !genre) return;

            const mangaTitle =
                title.textContent.toLowerCase();

            const mangaGenre =
                genre.textContent.toLowerCase();

            const matchesSearch =
                mangaTitle.includes(searchValue);

            const matchesGenre =
                selectedGenre === "all" ||
                mangaGenre.includes(selectedGenre);

            card.style.display =
                matchesSearch && matchesGenre
                    ? "block"
                    : "none";

        });
    }

    mangaSearch.addEventListener(
        "keyup",
        filterManga
    );

    mangaGenre.addEventListener(
        "change",
        filterManga
    );
}

// ===== MANGA WATCHLIST =====

const mangaWatchlistButtons =
    document.querySelectorAll("#mangaList .show-watchlist-btn");

mangaWatchlistButtons.forEach(button => {

    const card = button.closest(".card");

    if (!card) return;

    const titleElement = card.querySelector("h3");

    if (!titleElement) return;

    const mangaTitle =
        titleElement.textContent.trim();

    let mangaWatchlist =
        JSON.parse(
            localStorage.getItem("mangaWatchlist")
        ) || [];

    if (mangaWatchlist.includes(mangaTitle)) {
        button.textContent = "✅ Added";
    }

    button.addEventListener("click", function () {

        let mangaWatchlist =
            JSON.parse(
                localStorage.getItem("mangaWatchlist")
            ) || [];

        if (mangaWatchlist.includes(mangaTitle)) {

            mangaWatchlist =
                mangaWatchlist.filter(
                    item => item !== mangaTitle
                );

            button.textContent = "Watchlist";

        } else {

            mangaWatchlist.push(mangaTitle);

            button.textContent = "✅ Added";
        }

        localStorage.setItem(
            "mangaWatchlist",
            JSON.stringify(mangaWatchlist)
        );

    });

});

// ===== WATCH EPISODE PAGE =====

const watchTitle = document.getElementById("watchTitle");
const watchEpisode = document.getElementById("watchEpisode");
const watchAnimeTitle = document.getElementById("watchAnimeTitle");
const watchEpisodeNumber = document.getElementById("episodeNumber");
const officialWatchBtn = document.getElementById("officialWatchBtn");
const animeVideo = document.getElementById("animeVideo");

if (watchTitle && watchEpisode) {

    const urlParams =
        new URLSearchParams(window.location.search);

    const watchAnimeId =
        urlParams.get("anime");

    const watchEpisodeNumber =
        urlParams.get("episode");

    if (watchAnimeId && animeData[watchAnimeId]) {

        const anime = animeData[watchAnimeId];

        watchTitle.textContent =
            `${anime.title} - Episode ${watchEpisodeNumber}`;

        watchEpisode.textContent =
            `🎬 Now watching Episode ${watchEpisodeNumber}`;

        watchAnimeTitle.textContent =
            anime.title;

        watchEpisodeNumber.textContent =
            `Episode ${watchEpisodeNumber}`;

        officialWatchBtn.href =
            anime.watch;

        animeVideo.poster =
            anime.image;

    } else {

        watchTitle.textContent =
            "Episode Not Found";

        watchEpisode.textContent =
            "The requested episode could not be found.";

    }
}

// ===== EPISODE NAVIGATION =====

const episodeNavParams =
    new URLSearchParams(window.location.search);

const episodeAnimeId =
    episodeNavParams.get("anime");

const currentEpisode =
    parseInt(episodeNavParams.get("episode"));

const previousEpisode =
    document.getElementById("previousEpisode");

const nextEpisode =
    document.getElementById("nextEpisode");

if (
    previousEpisode &&
    nextEpisode &&
    episodeAnimeId &&
    animeData[episodeAnimeId] &&
    currentEpisode
) {

    const totalEpisodes =
        parseInt(animeData[episodeAnimeId].episodes);

    previousEpisode.onclick = function () {

        if (currentEpisode > 1) {

            window.location.href =
                "watch.html?anime=" +
                episodeAnimeId +
                "&episode=" +
                (currentEpisode - 1);

        }

    };

    nextEpisode.onclick = function () {

        if (currentEpisode < totalEpisodes) {

            window.location.href =
                "watch.html?anime=" +
                episodeAnimeId +
                "&episode=" +
                (currentEpisode + 1);

        }

    };

    if (currentEpisode <= 1) {
        previousEpisode.disabled = true;
    }

    if (currentEpisode >= totalEpisodes) {
        nextEpisode.disabled = true;
    }

}