!async function(){let t=await fetch("https://8080-rplsaci-pemiluapi-jfvwph8s12t.ws-us116.gitpod.io/api/user/getall"),e=await t.json(),a=0;console.log(e),e.data.filter(t=>!t.WaktuPemilihan).forEach(t=>{a<50&&(document.querySelector("tbody#tbody").innerHTML+=`
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ${t.username}
            </th>
            <td class="px-6 py-4">
                ${t.nisn}
            </td>
            <td class="px-6 py-4">
                ${t.password}
            </td>
            <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">SUDAH</a>
            </td>
        </tr>`,a++)})}();
//# sourceMappingURL=CekGolput.8c6e0405.js.map
