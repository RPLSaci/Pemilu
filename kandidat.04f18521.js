document.addEventListener("DOMContentLoaded",()=>{document.getElementById("uploadButton").addEventListener("click",()=>{let e=document.getElementById("kategori").value,a=document.getElementById("nomorKandidat").value,t=document.getElementById("namaKandidat").value,d=document.getElementById("deskripsi").value;fetch("https://redesigned-lamp-wx969x4q6g6f599x-8080.app.github.dev/api/uploadkandidat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tipe:e,nomorKandidat:a,namaKandidat:t,deskripsi:d,kelasKandidat:document.getElementById("kelasKandidat").value,imageUrl:document.getElementById("imageUrl").value})}).then(e=>e.json()).then(e=>{e.error?alert("Gagal meng-upload kandidat: "+e.error):alert("Kandidat berhasil di-upload!")}).catch(e=>{console.error("Error:",e),alert("Terjadi kesalahan saat meng-upload kandidat.")})})});
//# sourceMappingURL=kandidat.04f18521.js.map
