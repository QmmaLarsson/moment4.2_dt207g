"use strict";

//Registrering av ny användare
//Variabler
const registerFormEl = document.getElementById("registerForm");

//Händelsehanterare
registerFormEl.addEventListener("submit", handleRegister);

//Funktion för att hantera formulär
async function handleRegister(event) {
    //Förhindra standardsubmit
    event.preventDefault();

    //Hämta värden från inputfälten
    const newUsernameEl = document.getElementById("newUsername").value;
    const newPasswordEl = document.getElementById("newPassword").value;

    // Validera input
    if (newUsernameEl.trim().length < 4) {
        alert("Användarnamnet måste vara minst fyra tecken långt");
        return;
    }

    if (newPasswordEl.trim().length < 6) {
        alert("Lösenordet måste vara minst sex tecken långt");
        return;
    }

    await addUser(newUsernameEl, newPasswordEl);

    //Återställ formuläret
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

//Funktion för att lägga till information till APIet
async function addUser(newUsername, newPassword) {
    //Länk till APIet
    const url = "https://moment41dt207g.onrender.com/api/register";

    let user = {
        username: newUsername,
        password: newPassword,
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "Application/json"
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();
    console.log(data);
}

//Logga in redan registrerad användare
//Variabler
const loginFormEl = document.getElementById("loginForm");

//Händelsehanterare
loginFormEl.addEventListener("submit", handleLogin);

//Funktion för att hantera formulär
async function handleLogin(event) {
    //Förhindra standardsubmit
    event.preventDefault();

    //Hämta värden från inputfälten
    const usernameEl = document.getElementById("username").value;
    const passwordEl = document.getElementById("password").value;

    // Validera input
    if (!usernameEl.trim() || !passwordEl.trim()) {
        alert("Vänligen fyll i alla fält")
        return;
    }

    await login(usernameEl, passwordEl);

    //Återställ formuläret
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

//Funktion för att lägga till information till APIet
async function login(username, password) {
    //Länk till APIet
    const url = "https://moment41dt207g.onrender.com/api/login";

    let user = {
        username: username,
        password: password,
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "Application/json"
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();

    if( response.status === 200) {
        const token = data.response.token;
        console.log(token);
        localStorage.setItem("token", token);
        window.location.href = "index.html";
    } else {
        console.log("Fel användarnamn eller lösenord");
    }
}
