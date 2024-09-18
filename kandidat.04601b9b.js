document.addEventListener("DOMContentLoaded", ()=>{
    const uploadButton = document.getElementById("uploadButton");
    uploadButton.addEventListener("click", ()=>{
        // Mengambil data dari form
        const kategori = document.getElementById("kategori").value;
        const nomorKandidat = document.getElementById("nomorKandidat").value;
        const namaKandidat = document.getElementById("namaKandidat").value;
        const deskripsi = document.getElementById("deskripsi").value;
        const kelasKandidat = document.getElementById("kelasKandidat").value;
        const imageUrl = document.getElementById("imageUrl").value; // Menambahkan Image URL
        // Membuat objek data yang akan dikirim
        const kandidatData = {
            tipe: kategori,
            nomorKandidat: nomorKandidat,
            namaKandidat: namaKandidat,
            deskripsi: deskripsi,
            kelasKandidat: kelasKandidat,
            imageUrl: imageUrl // Menambahkan Image URL ke dalam objek
        };
        // Melakukan request POST ke /api/uploadkandidat
        fetch("https://redesigned-lamp-wx969x4q6g6f599x-8080.app.github.dev/api/uploadkandidat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(kandidatData)
        }).then((response)=>response.json()).then((data)=>{
            if (!data.error) alert("Kandidat berhasil di-upload!");
            else alert("Gagal meng-upload kandidat: " + data.error);
        }).catch((error)=>{
            console.error("Error:", error);
            alert("Terjadi kesalahan saat meng-upload kandidat.");
        });
    });
});

//# sourceMappingURL=kandidat.04601b9b.js.map
