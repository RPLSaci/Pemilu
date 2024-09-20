async function init() {
    let res = await fetch("https://8080-rplsaci-pemiluapi-jfvwph8s12t.ws-us116.gitpod.io/api/kandidat/getall");
    let data = await res.json();
    console.log(data.data);
    document.querySelectorAll("#mpk p.italic").forEach((mpkElement)=>{
        console.log(mpkElement.id); // Log the candidate ID
        const result = data.data.find((candidate)=>candidate.tipe === "MPK" && candidate.nomerKandidat === mpkElement.id);
        if (result) mpkElement.innerHTML = result.totalPemilih;
        else mpkElement.innerHTML = "0"; // Or handle the case where the candidate is not found
    });
    document.querySelectorAll("#osis p.italic").forEach((osisElement)=>{
        console.log(osisElement.id); // Log the candidate ID
        const result = data.data.find((candidate)=>candidate.tipe === "OSIS" && candidate.nomerKandidat === osisElement.id);
        console.log(result); // Log the result for debugging
        if (result) osisElement.innerHTML = result.totalPemilih;
        else osisElement.innerHTML = "0"; // Handle the case where the candidate is not found
    });
}
init();
setInterval(init, 5000);

//# sourceMappingURL=cekSuara.f7b5972b.js.map
