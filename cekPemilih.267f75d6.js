!async function(){let t=await fetch("https://8080-rplsaci-pemiluapi-jfvwph8s12t.ws-us116.gitpod.io/api/user/getall"),a=await t.json(),e=0;console.log(a.data.filter(t=>t.WaktuPemilihan&&t.kandidatMPK)),a.data.filter(t=>t.WaktuPemilihan).sort((t,a)=>new Date(a.WaktuPemilihan)-new Date(t.WaktuPemilihan)).forEach(t=>{if(e<50){let a=new Date(t.WaktuPemilihan);document.querySelector("tbody#tbody").innerHTML+=`
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ${t.username}
            </th>
            <td class="px-6 py-4">
                ${t.nisn}
            </td>
            <td class="px-6 py-4">
                ${t.kandidatMPK}
            </td>
            <td class="px-6 py-4">
                ${t.kandidatOsis}
            </td>
            <td class="px-6 py-4">
                ${a.toISOString().slice(0,10)+" "+a.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}
            </td>
            <td class="px-6 py-4">
                <button onclick="hapus('${t.nisn}','${t.password}')" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Hapus</button>
            </td>
        </tr>`,e++}})}();
//# sourceMappingURL=cekPemilih.267f75d6.js.map
