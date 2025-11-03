const BASE_URL = "https://api.agify.io/";
const form = document.getElementById("nameForm");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    try {
        const response = await fetch(`${BASE_URL}?name=${name}`);
        const data = await response.json();
        result.textContent = `Namnet ${data.name} förutspås ha en ålder av ${data.age} år.`;
    } catch (error) {
        result.textContent = "Något gick fel. Försök igen senare.";
        console.error("Något gick fel:", error);
    }
});

// async function fetchData() {
//     const name = document.getElementById("name").value;
//     try {
//         const response = await fetch(`${BASE_URL}?name=${name}`);
//         const data = await response.json();
//         result.textContent = `Namnet ${data.name} förutspås ha en ålder av ${data.age} år.`;
//     } catch (error) {
//         result.textContent = "Något gick fel. Försök igen senare.";
//         console.error("Något gick fel:", error);
//     }
// }

// fetchData();
