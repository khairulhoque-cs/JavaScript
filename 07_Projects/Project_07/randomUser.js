const userImage = document.querySelector('#userImage');

const name = document.querySelector('#name');
const gender = document.querySelector('#gender');
const age = document.querySelector('#age');
const country = document.querySelector('#country');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');

const refresh = document.querySelector('#refresh');

async function getRandomUser() {

    refreshBtn.disabled = true;
    refreshBtn.textContent = "Loading...";

    try {
        const response = await fetch('https://randomuser.me/api/');

        if (!response.ok) {
            throw new Error("Something went wrong!");
        }

        const data = response.json();

        const user = data.results[0];

        const title = user.name.title;
        const firstName = user.name.first;
        const lastName = user.name.last;

        const userGender = user.gender;
        const userAge = user.dob.age;
        const userCountry = user.location.country;

        const userEmail = user.email;
        const userPhone = user.phone;

        const image = user.picture.large;

        name.textContent = `Name: ${title} ${firstName} ${lastName}`;
        gender.textContent = `Gender: ${userGender}`;
        age.textContent = `Age: ${userAge}`;
        country.textContent = `Country: ${userCountry}`;
        email.textContent = `Email: ${userEmail}`;
        phone.textContent = `Phone: ${userPhone}`;

        userImage.src = image;
    } catch (error) {
        console.error("Error:", error);
        name.textContent = "Unable to load user. Try again.";
    } finally {
        refreshBtn.disabled = false;
        refreshBtn.textContent = "Refresh";
    }
}

refreshBtn.addEventListener("click", getRandomUser);

getRandomUser();
