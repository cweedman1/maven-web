const form = document.getElementById('mavenForm');

if (form) {
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const data = new FormData(form);

        try {
            await fetch(form.action, {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            window.location.href = "https://maven.evo.engineering/thank-you.html";

        } catch (error) {
            alert("Something went wrong. Please try again.");
        }
    });
}
