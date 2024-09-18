init()

async function init(){
    const data = JSON.parse(localStorage.getItem("loginObject"))
    console.log(data)

    if(!data || !localStorage.getItem("loginObject")) {
        alert("NO USERDATA, REDIRECTING TO LOGIN")
        document.location.href = "./index.html"
    }
    try {
        const response = await fetch("https://redesigned-lamp-wx969x4q6g6f599x-8080.app.github.dev/api/user/login", {
            method: "POST", // HTTP method
            headers: {
                "Content-Type": "application/json", // Specify the content type
            },
            body: JSON.stringify({ username:data.username, password:data.password }), // Convert the data to a JSON string
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); // Parse the response as JSON

        if (result.error) {
        } else {
            // Handle successful login
            document.querySelector("#usn").textContent = result.user.username
        }
    } catch (error) {
        console.error("An error occurred while logging in", error);
        alert("An error occurred while logging in. Please try again.");
    }
}

    
async function kirim() {
    if(!document.querySelector("input[name='kandidat']:checked")) alert("Pilihlah 1 kandidat")
    const selectedKandidat = document.querySelector("input[name='kandidat']:checked").value;
    alert(`Kandidat yang dipilih: ${selectedKandidat}`);
    localStorage.setItem("Pilihan", JSON.stringify({"MPK":selectedKandidat}))

    // const response = await fetch("https://redesigned-lamp-wx969x4q6g6f599x-8080.app.github.dev/api/user/login", {
    //     method: "POST", // HTTP method
    //     headers: {
    //         "Content-Type": "application/json", // Specify the content type
    //     },
    //     body: JSON.stringify({ username:data.username, password:data.password }), // Convert the data to a JSON string
    // });
    
    document.location.href = "./osis.html"
}