let data =[
    {"nama": "Agus Setiawan", "kode": 1},
    {"nama": "Duimaryono", "kode": 2},
    {"nama": "Lia Herliasih", "kode": 3},
    {"nama": "Sumarsih", "kode": 4},
    {"nama": "Ika Rachmatin", "kode": 5},
    {"nama": "Wiwin Widiantini", "kode": 6},
    {"nama": "Trie Aprilda R", "kode": 7},
    {"nama": "Suherman", "kode": 8},
    {"nama": "Ateng Suhenda", "kode": 9},
    {"nama": "Karsidi", "kode": 10},
    {"nama": "Sumerto", "kode": 11},
    {"nama": "Nunuy Nurokhmah", "kode": 12},
    {"nama": "Endang Sudirman", "kode": 13},
    {"nama": "Irma Sari Dewi", "kode": 14},
    {"nama": "Ety Wachyuni", "kode": 15},
    {"nama": "Eni Setiani", "kode": 16},
    {"nama": "Ai Setiawati", "kode": 17},
    {"nama": "Joko Sulistyo", "kode": 18},
    {"nama": "Nur'aeni", "kode": 19},
    {"nama": "Sukma Permanajaya", "kode": 20},
    {"nama": "Yeni Nurandayani", "kode": 21},
    {"nama": "Bayu Vickmasenagora", "kode": 22},
    {"nama": "Azizul Fadli", "kode": 23},
    {"nama": "Ivansyah", "kode": 24},
    {"nama": "Yakub Priyono", "kode": 25},
    {"nama": "Dwi Setiyano", "kode": 26},
    {"nama": "Eli Herliani", "kode": 27},
    {"nama": "Toharudin", "kode": 28},
    {"nama": "Mia Purnamasan", "kode": 29},
    {"nama": "Ahmad Firmansyah", "kode": 30},
    {"nama": "Indah Pumamasari", "kode": 31},
    {"nama": "Enjang Sadam", "kode": 32},
    {"nama": "Ihda Fitriyati", "kode": 33},
    {"nama": "Bulan Arlia Fitri", "kode": 34},
    {"nama": "Wahyuni", "kode": 35},
    {"nama": "Baban Barlian", "kode": 36},
    {"nama": "Sari Yulyanengsih", "kode": 37},
    {"nama": "Alek Abules", "kode": 38},
    {"nama": "Rano Sulisto", "kode": 39},
    {"nama": "Hanim Magfiroh", "kode": 40},
    {"nama": "Sirojudin Munir", "kode": 41},
    {"nama": "Elis Kemaladewi", "kode": 42},
    {"nama": "Wahyu Heri Indiyanto", "kode": 43},
    {"nama": "Neneng Yunita", "kode": 44},
    {"nama": "Lisa Wisuda Ningrum", "kode": 45},
    {"nama": "Oriza Basmah Najibah", "kode": 46},
    {"nama": "Dian Nurhasanah", "kode": 47},
    {"nama": "Indra Lesmana", "kode": 48},
    {"nama": "Batara Imanuela", "kode": 49},
    {"nama": "Renny Yuliyanti", "kode": 50},
    {"nama": "Nadia Khaerunnisa", "kode": 51},
    {"nama": "Siti Zakiah Khairunnisa", "kode": 52},
    {"nama": "Dimas Azhar Alauddin", "kode": 53},
    {"nama": "Taufik Deliyawan", "kode": 54},
    {"nama": "Sinta Dwiyani Silviana", "kode": 55},
    {"nama": "Synthia Tresna Suandi", "kode": 56},
    {"nama": "Aulia Nur Azmi", "kode": 57},
    {"nama": "Yulianti Widiastuti", "kode": 58},
    {"nama": "Pani Prihartini", "kode": 59},
    {"nama": "Ahmad Zulfiqor", "kode": 60},
    {"nama": "Elida Aulia Rahmah", "kode": 61}
  ]
  
  async function sendData() {
    for (let entry of data) {
      try {
        // Send the data to the API
        const response = await fetch('https://redesigned-lamp-wx969x4q6g6f599x-8080.app.github.dev/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nama: entry.nama,
            kode: entry.kode
          })
        });
  
        // Check if the response is JSON, otherwise handle errors
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const body = await response.json();
          if (response.ok) {
            console.log(`Data for ${entry.nama} sent successfully!`);
            // Log success in a file
            // fs.appendFileSync("data2.json", `NAMA: ${body.data.username} | NISN: ${body.data.nisn} | PASSWORD: ${body.data.password}\n`);
          } else {
            console.error(`Failed to send data for ${entry.nama}: ${body.error}`);
          }
        } else {
          console.error(`Unexpected response format for ${entry.nama}: ${await response.text()}`);
        }
      } catch (error) {
        console.error(`Error sending data for ${entry.nama}:`, error);
      }
    }
  }
  
  sendData();