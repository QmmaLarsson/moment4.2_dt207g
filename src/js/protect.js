"use strict";

window.onload = init;

function init() {
    if (!localStorage.getItem("token")) {
        window.location.href = "login.html";
    }

    getJobs();
}

//Funktion för att hämta jobb från APIet
async function getJobs() {
    const url = "https://moment41dt207g.onrender.com/api/jobs";
    const token = localStorage.getItem("token");

    try {
        const response = await fetch(url, {
            headers: {
                "authorization": "Bearer " + token
            }
        });

        const data = await response.json();
        console.log(data);
        displayJobs(data);
    } catch (error) {
        console.error("Det uppstod ett fel vid hämtning av data:", error);
    }
}

//Funktion för att skriva ut alla job
function displayJobs(jobs) {
    const jobContainer = document.querySelector(".jobContainer");

    //Loopa igenom varje jobb och skapa ett HTML-element
    jobs.forEach(job => {
        const jobElement = document.createElement("div");

        //Lägg till en klass till varje element
        jobElement.classList.add("jobElement");

        jobElement.innerHTML = `
        <p><strong>Företagsnamn:</strong> ${job.companyname}</p>
        <p><strong>Titel:</strong> ${job.jobtitle}</p>
        <p><strong>Plats:</strong> ${job.location}</p>
        <p><strong>Beskrivning:</strong> ${job.description}</p>
`;

        jobContainer.appendChild(jobElement);
    });
}