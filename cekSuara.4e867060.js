async function a(){let a=await fetch("https://redesigned-lamp-wx969x4q6g6f599x-8080.app.github.dev/api/kandidat/getall"),t=await a.json(),e=await fetch("https://redesigned-lamp-wx969x4q6g6f599x-8080.app.github.dev/api/user/getall"),i=await e.json();console.log(t.data),document.querySelectorAll("#mpk p.italic").forEach(a=>{console.log(i.data.filter(t=>t.kandidatMPK===a.id).length),t.data.find(t=>"MPK"===t.tipe&&t.nomerKandidat===a.id)?a.innerHTML=i.data.filter(t=>t.kandidatMPK===a.id).length:a.innerHTML="0"}),document.querySelectorAll("#osis p.italic").forEach(a=>{console.log(a.id);let e=t.data.find(t=>"OSIS"===t.tipe&&t.nomerKandidat===a.id);console.log(e),e?a.innerHTML=i.data.filter(t=>t.kandidatOsis===a.id).length:a.innerHTML="0"})}a(),setInterval(a,5e3);
//# sourceMappingURL=cekSuara.4e867060.js.map
