async function login() {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    try {
        const response = await fetch("https://redesigned-lamp-wx969x4q6g6f599x-8080.app.github.dev/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
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
            localStorage.setItem("loginObject", JSON.stringify({
                username,
                password
            }));
            window.location.href = "./mpk.html";
        }
    } catch (error) {
        console.error("An error occurred while logging in", error);
        alert("An error occurred while logging in. Please try again.");
    }
}
// Example usage, assuming there's a button with id "loginButton"
document.querySelector("#loginButton").addEventListener("click", login);

//# sourceMappingURL=login.ec050a6d.js.map
