!async function(){let i=await fetch("https://8080-rplsaci-pemiluapi-jfvwph8s12t.ws-us116.gitpod.io/api/kandidat/getall"),t=await i.json();console.log(t.data),document.querySelectorAll("#mpk p.italic").forEach(i=>{console.log(i.id);let e=t.data.find(t=>"MPK"===t.tipe&&t.nomerKandidat===i.id);e?i.innerHTML=e.totalPemilih:i.innerHTML="0"}),document.querySelectorAll("#osis p.italic").forEach(i=>{console.log(i.id);let e=t.data.find(t=>"OSIS"===t.tipe&&t.nomerKandidat===i.id);console.log(e),e?i.innerHTML=e.totalPemilih:i.innerHTML="0"})}();
//# sourceMappingURL=cekSuara.2b983eca.js.map
