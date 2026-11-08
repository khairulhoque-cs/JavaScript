const userImage = document.querySelector('#userImage');

const name = document.querySelector('#name');
const gender = document.querySelector('#gender');
const age = document.querySelector('#age');
const country = document.querySelector('#country');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const address = document.querySelector('#address');

const refreshBtn = document.querySelector('#refresh');

// Fetch Random User
async function getRandomUser() {

    refreshBtn.disabled = true;
    refreshBtn.textContent = "Loading...";

    try {
        // Step 1: Fetch API
        const response = await fetch('https://randomuser.me/api/');

        if (!response.ok) {
            throw new Error("Something went wrong!");
        }

        // Step 2: Convert response into JSON
        const data = await response.json();

        // Step 3: Extract user
        const user = data.results[0];

        // Step 4: Extract user details
        const title = user.name.title;
        const firstName = user.name.first;
        const lastName = user.name.last;

        const userGender = user.gender;
        const userAge = user.dob.age;
        const userCountry = user.location.country;

        const userEmail = user.email;
        const userPhone = user.phone;
        const streetNumber = user.location.street.number;
        const streetName = user.location.street.name;
        const city = user.location.city;
        const state = user.location.state;
        const postcode = user.location.postcode;

        const image = user.picture.large;

        // Step 5: Display user information
        name.textContent = `Name: ${title} ${firstName} ${lastName}`;
        gender.textContent = `Gender: ${userGender}`;
        age.textContent = `Age: ${userAge}`;
        country.textContent = `Country: ${userCountry}`;
        email.textContent = `Email: ${userEmail}`;
        phone.textContent = `Phone: ${userPhone}`;
        address.textContent = `Address: ${streetNumber}, ${streetName}, ${city}, ${state}, ${postcode}`;

        // Step 6: Display profile picture
        userImage.src = image;
    } catch (error) {
        console.error("Error:", error);
        name.textContent = "Unable to load user. Try again.";
    } finally {
        refreshBtn.disabled = false;
        refreshBtn.textContent = "Refresh";
    }
}

// Step 7: Refresh button event
refreshBtn.addEventListener("click", getRandomUser);

// Step 8: Load first random user
getRandomUser();
