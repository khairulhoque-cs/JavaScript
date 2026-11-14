/* ==========================================
   1. DOM ELEMENTS
========================================== */

const jokeType = document.getElementById("jokeType");
const languageSelect = document.getElementById("languageSelect");
const categorySelect = document.getElementById("categorySelect");

const favoriteBtn = document.getElementById("favoriteBtn");
const jokeCategory = document.getElementById("jokeCategory");
const jokeLanguage = document.getElementById("jokeLanguage");

const jokeSetup = document.getElementById("jokeSetup");
const jokeDelivery = document.getElementById("jokeDelivery");
const statusMessage = document.getElementById("statusMessage");

const previousBtn = document.getElementById("previousBtn");
const generateBtn = document.getElementById("generateBtn");

/* ==========================================
   2. API CONFIGURATION
========================================== */
const API_BASE_URL = "https://v2.jokeapi.dev/joke/";
const API_LANGUAGES = ["en", "fr"];
/* ==========================================
   3. LOCAL JOKES
   Starter examples for Bengali and Hindi.
========================================== */

const localJokes = [
    {
        id: "bn-1",
        language: "bn",
        category: "funny",
        type: "single",
        setup: "কম্পিউটার ঠান্ডা লাগলে কী করে?",
        delivery: "",
    },
    {
        id: "bn-2",
        language: "bn",
        category: "programming",
        type: "twopart",
        setup: "প্রোগ্রামার কেন চা খেতে ভালোবাসে?",
        delivery: "কারণ তার কোডে অনেক টি (T) থাকে!",
    },
    {
        id: "hi-1",
        language: "hi",
        category: "funny",
        type: "single",
        setup: "कंप्यूटर को ठंड क्यों लगती है?",
        delivery: "",
    },
    {
        id: "hi-2",
        language: "hi",
        category: "programming",
        type: "twopart",
        setup: "प्रोग्रामर समुद्र में क्यों नहीं जाते?",
        delivery: "क्योंकि वहाँ बहुत सारे बग्स होते हैं!",
    },
];

/* ==========================================
   4. CATEGORY MAPPING
========================================== */

// Your app categories and JokeAPI categories
const categoryMapping = {
    funny: "Misc",
    programming: "Programming",
    dad: "Misc",
    dark: "Dark",
    pun: "Pun",
    "knock-knock": "Misc",

    // These categories are not directly
    // supported by JokeAPI.
    romantic: null,
    sarcastic: null,
    "one-liner": null,
    custom: null,
};

/* ==========================================
   5. APPLICATION STATE
========================================== */

let jokeHistory = [];
let currentIndex = -1;
let currentJoke = null;

let isLoading = false;

let favorites = JSON.parse(
    localStorage.getItem("jokerJokesFavorites")
) || [];

/* ==========================================
   6. LANGUAGE NAMES
========================================== */

const languageNames = {
    en: "English",
    bn: "Bengali",
    hi: "Hindi",
    fr: "French",
};

/* ==========================================
   7. LOCAL STORAGE
========================================== */

function saveFavorites() {
    localStorage.setItem(
        "jokerJokesFavorites",
        JSON.stringify(favorites)
    );
}

/* ==========================================
   8. DISPLAY STATUS MESSAGE
========================================== */

function showMessage(message, isError = false) {
    statusMessage.textContent = message;

    statusMessage.style.color = isError
        ? "#ed5c78"
        : "#20a779";
}

/* ==========================================
   9. UPDATE FAVORITE BUTTON
========================================== */

function updateFavoriteButton() {

    if (!currentJoke) {
        favoriteBtn.setAttribute("aria-pressed", "false");
        return;
    }

    const isFavorite = favorites.some(
        joke => joke.id === currentJoke.id
    );

    favoriteBtn.setAttribute(
        "aria-pressed",
        String(isFavorite)
    );

    favoriteBtn.title = isFavorite
        ? "Remove from favourites"
        : "Add to favourites";
}


/* ==========================================
   10. DISPLAY JOKE
========================================== */

function displayJoke(joke) {

    currentJoke = joke;

    jokeSetup.textContent = joke.setup;
    jokeDelivery.textContent = joke.delivery || "";

    jokeCategory.textContent = joke.category;
    jokeLanguage.textContent =
        languageNames[joke.language] || joke.language;

    updateFavoriteButton();
    updateNavigationButtons();

    showMessage("");
}

/* ==========================================
   11. UPDATE NAVIGATION BUTTONS
========================================== */

function updateNavigationButtons() {

    previousBtn.disabled = currentIndex <= 0;

    previousBtn.style.opacity =
        previousBtn.disabled ? "0.5" : "1";

    previousBtn.style.cursor =
        previousBtn.disabled ? "not-allowed" : "pointer";
}


/* ==========================================
   12. CONVERT API RESPONSE
========================================== */

function formatApiJoke(data) {

    const categoryNames = {
        Misc: "Funny",
        Programming: "Programming",
        Dark: "Dark Humour",
        Pun: "Puns",
        Spooky: "Spooky",
        Christmas: "Christmas",
    };

    return {
        id: `api-${data.id}`,
        language: data.lang,
        category: categoryNames[data.category] || data.category,
        type: data.type,
        setup: data.type === "single"
            ? data.joke
            : data.setup,
        delivery: data.type === "twopart"
            ? data.delivery
            : "",
    };
}


/* ==========================================
   13. FETCH JOKE FROM API
========================================== */

async function fetchJoke() {

    const language = languageSelect.value;
    const type = jokeType.value;
    const selectedCategory = categorySelect.value;

    // Build API category
    let apiCategory = categoryMapping[selectedCategory];

    if (selectedCategory === "any") {
        apiCategory = "Any";
    }

    // Prepare API URL
    const url = new URL(
        apiCategory || "Any",
        API_BASE_URL
    );

    const params = new URLSearchParams();

    params.append("lang", language);
    params.append("safe-mode", "");

    if (type !== "all") {
        params.append("type", type);
    }

    url.search = params.toString();

    // Request joke
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Unable to fetch joke.");
    }

    const data = await response.json();

    if (data.error) {
        throw new Error(data.message || "No joke found.");
    }

    return formatApiJoke(data);
}

/* ==========================================
   14. GET LOCAL JOKE
========================================== */

function getLocalJoke() {

    const language = languageSelect.value;
    const type = jokeType.value;
    const category = categorySelect.value;

    let availableJokes = localJokes.filter(joke => {
        const languageMatch = joke.language === language;
        const typeMatch =
            type === "all" || joke.type === type;

        const categoryMatch =
            category === "any" ||
            joke.category === category;

        return languageMatch && typeMatch && categoryMatch;
    });

    // Check custom jokes saved in LocalStorage
    const customJokes = JSON.parse(
        localStorage.getItem("jokerJokesCustom") || "[]"
    );

    if (category === "custom") {
        availableJokes = customJokes.filter(joke =>
            joke.language === language &&
            (type === "all" || joke.type === type)
        );
    }

    if (availableJokes.length === 0) {
        throw new Error(
            "No local jokes available for this selection yet."
        );
    }

    const randomIndex = Math.floor(
        Math.random() * availableJokes.length
    );

    return availableJokes[randomIndex];
}


/* ==========================================
   15. GENERATE JOKE
========================================== */

async function generateJoke() {

    if (isLoading) return;

    isLoading = true;
    generateBtn.disabled = true;

    showMessage("Finding a funny joke...");

    try {

        const language = languageSelect.value;
        const category = categorySelect.value;

        let joke;

        // Bengali and Hindi use local datasets
        if (["bn", "hi"].includes(language)) {

            joke = getLocalJoke();

        } else if (
            API_LANGUAGES.includes(language) &&
            categoryMapping[category] !== null &&
            category !== "custom"
        ) {

            joke = await fetchJoke();

        } else {
            throw new Error(
                "This language or category is not supported by the API yet."
            );
        }

        // Add joke to history
        jokeHistory = jokeHistory.slice(0, currentIndex + 1);
        jokeHistory.push(joke);
        currentIndex = jokeHistory.length - 1;
        displayJoke(joke);

    } catch (error) {
        jokeSetup.textContent = "Oops! No joke found.";
        jokeDelivery.textContent = "";

        showMessage(error.message, true);

    } finally {
        isLoading = false;
        generateBtn.disabled = false;

    }
}

/* ==========================================
   16. PREVIOUS JOKE
========================================== */

function showPreviousJoke() {
    if (currentIndex <= 0) return;
    currentIndex--;
    displayJoke(jokeHistory[currentIndex]);
}

/* ==========================================
   17. NEXT JOKE
========================================== */

function showNextJoke() {

    // If a next joke already exists in history
    if (currentIndex < jokeHistory.length - 1) {
        currentIndex++;
        displayJoke(jokeHistory[currentIndex]);
    } else {
        generateJoke();
    }
}

/* ==========================================
   18. ADD / REMOVE FAVORITES
========================================== */

function toggleFavorite() {
    if (!currentJoke) return;

    const existingIndex = favorites.findIndex(
        joke => joke.id === currentJoke.id
    );

    if (existingIndex !== -1) {
        favorites.splice(existingIndex, 1);
        showMessage("Removed from favourites.");

    } else {
        favorites.push(currentJoke);
        showMessage("Added to favourites!");
    }

    saveFavorites();
    updateFavoriteButton();
}

/* ==========================================
   19. LANGUAGE CHANGE
========================================== */

function handleLanguageChange() {
    generateJoke();
}

/* ==========================================
   20. JOKE TYPE CHANGE
========================================== */

function handleTypeChange() {
    generateJoke();
}

/* ==========================================
   21. CATEGORY CHANGE
========================================== */

function handleCategoryChange() {
    generateJoke();
}

/* ==========================================
   22. EVENT LISTENERS
========================================== */

// Generate next joke
generateBtn.addEventListener(
    "click",
    showNextJoke
);

// Previous joke
previousBtn.addEventListener(
    "click",
    showPreviousJoke
);

// Favourite button
favoriteBtn.addEventListener(
    "click",
    toggleFavorite
);

// Language selector
languageSelect.addEventListener(
    "change",
    handleLanguageChange
);

// Joke type selector
jokeType.addEventListener(
    "change",
    handleTypeChange
);

// Category selector
categorySelect.addEventListener(
    "change",
    handleCategoryChange
);

/* ==========================================
   23. INITIALIZE APPLICATION
========================================== */
generateJoke();
