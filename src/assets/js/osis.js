// Inisialisasi fungsi
init();

async function init() {
    // Ambil data login dari localStorage
    const data = JSON.parse(localStorage.getItem("loginObject"));
    console.log(data);

    // Cek apakah data login tersedia
    if (!data || !localStorage.getItem("loginObject")) {
        alert("NO USERDATA, REDIRECTING TO LOGIN");
        document.location.href = "./index.html";
        return; // Hentikan eksekusi lebih lanjut jika data tidak ada
    }

    try {
        // Lakukan permintaan POST untuk memverifikasi pengguna
        const response = await fetch("https://redesigned-lamp-wx969x4q6g6f599x-8080.app.github.dev/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: data.username, password: data.password }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.error) {
            // Tangani kesalahan jika ada
            console.error("Login failed: ", result.error);
            alert("Login failed. Please try again.");
        } else {
            // Tampilkan nama pengguna jika login berhasil
            document.querySelector("#usn").textContent = result.user.username;
        }
    } catch (error) {
        console.error("An error occurred while logging in", error);
        alert("An error occurred while logging in. Please try again.");
    }
}

// Fungsi untuk menangani pemilihan kandidat
kirim(0)
async function kirim(i) {
    if(i !== 1) return
    // Cek apakah ada kandidat yang dipilih
    const selectedKandidat = document.querySelector("input[name='osis']:checked");
    
    if (!selectedKandidat) {
        alert("Pilihlah 1 kandidat");
        return; // Hentikan eksekusi lebih lanjut jika tidak ada kandidat yang dipilih
    }

    const kandidatValue = selectedKandidat.value;
    alert(`Kandidat yang dipilih: ${kandidatValue}`);

    try {
        let pilihan = JSON.parse(localStorage.getItem("Pilihan"))

        if(!pilihan) {
            alert("Kamu harus pilih MPK Dahulu")
            document.location.href = "./mpk.html"
        }

        localStorage.setItem("Pilihan",{"MPK":pilihan.mpk,"OSIS":kandidatValue})

        // Kirim data pemilihan ke server
        // const response = await fetch("https://redesigned-lamp-wx969x4q6g6f599x-8080.app.github.dev/api/vote", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ username: data.username, password: data.password, kandidat: kandidatValue }),
        // });

        // if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }

        // const result = await response.json();

        // if (result.error) {
            // console.error("Voting failed: ", result.error);
            // alert("Voting failed. Please try again.");
        // } else {
            // Tindakan setelah pemilihan berhasil, misalnya mengalihkan halaman
            // alert("Vote submitted successfully!");
            document.location.href = "./success.html"; // Ganti dengan halaman yang sesuai
        // }
    } catch (error) {
        console.error("An error occurred while voting", error);
        alert("An error occurred while voting. Please try again.");
    }
}
