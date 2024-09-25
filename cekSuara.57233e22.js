async function init() {
    let res = await fetch("https://8080-rplsaci-pemiluapi-jfvwph8s12t.ws-us116.gitpod.io/api/kandidat/getall");
    let data = await res.json();
    let res2 = await fetch("https://8080-rplsaci-pemiluapi-jfvwph8s12t.ws-us116.gitpod.io/api/user/getall");
    let data2 = await res2.json();
    console.log(data.data);
    document.querySelectorAll("#mpk p.italic").forEach((mpkElement)=>{
        console.log(data2.data.filter((e)=>e.kandidatMPK === mpkElement.id).length); // Log the candidate ID
        const result = data.data.find((candidate)=>candidate.tipe === "MPK" && candidate.nomerKandidat === mpkElement.id);
        if (result) mpkElement.innerHTML = data2.data.filter((e)=>e.kandidatMPK === mpkElement.id).length;
        else mpkElement.innerHTML = "0"; // Or handle the case where the candidate is not found
    });
    document.querySelectorAll("#osis p.italic").forEach((osisElement)=>{
        console.log(osisElement.id); // Log the candidate ID
        const result = data.data.find((candidate)=>candidate.tipe === "OSIS" && candidate.nomerKandidat === osisElement.id);
        console.log(result); // Log the result for debugging
        if (result) osisElement.innerHTML = data2.data.filter((e)=>e.kandidatOsis === osisElement.id).length;
        else osisElement.innerHTML = "0"; // Handle the case where the candidate is not found
    });
}
init();
setInterval(init, 5000);

//# sourceMappingURL=cekSuara.57233e22.js.map
