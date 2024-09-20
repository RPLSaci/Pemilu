
async function login() {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    try {
        const response = await fetch(BASEAPI + "/api/user/login", {
            method: "POST", // HTTP method
            headers: {
                "Content-Type": "application/json", // Specify the content type
            },
            body: JSON.stringify({ username, password }), // Convert the data to a JSON string
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); // Parse the response as JSON

        if (result.error) {
            // Handle error response
            console.error(result.error);
            alert(`Login failed: ${result.error}`);
        } else {
            // Handle successful login
            console.log("Login successful", result);
            alert("Login successful");
            // Optionally, redirect to another page
            localStorage.setItem("loginObject",JSON.stringify({username,password}))
            window.location.href = "./mpk.html";
        }
    } catch (error) {
        console.error("An error occurred while logging in", error);
        alert("An error occurred while logging in. Please try again.");
    }
}

// Example usage, assuming there's a button with id "loginButton"
document.querySelector("#loginButton").addEventListener("click", login);
