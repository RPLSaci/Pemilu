!async function(){let e=await fetch("https://redesigned-lamp-wx969x4q6g6f599x-8080.app.github.dev/api/user/getall"),t=await e.json(),a=0;console.log(t),t.data.filter(e=>!e.WaktuPemilihan).forEach(e=>{a<200&&(document.querySelector("tbody#tbody").innerHTML+=`
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ${e.username}
            </th>
            <td class="px-6 py-4">
                ${e.nisn}
            </td>
            <td class="px-6 py-4">
                ${e.password}
            </td>
            <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">SUDAH</a>
            </td>
        </tr>`,a++)})}();
//# sourceMappingURL=CekGolput.adda0063.js.map
