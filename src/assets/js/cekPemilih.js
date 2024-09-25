async function init() {
    let res = await fetch("https://8080-rplsaci-pemiluapi-jfvwph8s12t.ws-us116.gitpod.io/api/user/getall");
    let data = await res.json();
    let i = 0
    console.log(data.data.filter((e) => e.WaktuPemilihan && e.kandidatMPK))
    data.data.filter((e) => e.WaktuPemilihan).sort((a, b) => new Date(b.WaktuPemilihan) - new Date(a.WaktuPemilihan)).forEach(element => {
        if(i < 50) {
            let date = new Date(element.WaktuPemilihan)
            document.querySelector("tbody#tbody").innerHTML += `
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ${element.username}
            </th>
            <td class="px-6 py-4">
                ${element.nisn}
            </td>
            <td class="px-6 py-4">
                ${element.kandidatMPK}
            </td>
            <td class="px-6 py-4">
                ${element.kandidatOsis}
            </td>
            <td class="px-6 py-4">
                ${date.toISOString().slice(0, 10) + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </td>
            <td class="px-6 py-4">
                <button onclick="hapus('${element.nisn}','${element.password}')" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Hapus</button>
            </td>
        </tr>`
        i++
        }
    });


}

async function hapus(nisn,password) {
    let BASEAPI = "https://8080-rplsaci-pemiluapi-jfvwph8s12t.ws-us116.gitpod.io"

    try {
        const responseAkhir = await fetch(BASEAPI+"/api/user/Cancel", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: nisn, password} ),
        });
        console.log((await responseAkhir.text()))
        alert("Removed "+ nisn)
    } catch (error) {
        console.log(error)
        alert("An error occurred while logging in. Please try again.");
    }

}

init();

// setInterval(init, 5 * 1000)
