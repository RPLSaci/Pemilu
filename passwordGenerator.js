let data = ["FITRA RAHMAN MANGUNSONG-0085004127","SHERLY NISRINA YULIANI-232410408 ","ZAHROTUL NUR FUADIYAH-0072371529","NANDA RISKY PUTRI REGYANS-0081883688"]
  
  async function sendData() {
    for (let entry of data) {
      try {
        
        let nama = entry.split("-")[0]
        let kode = entry.split("-")[1]
        // Send the data to the API
        const response = await fetch('https://8080-rplsaci-pemiluapi-jfvwph8s12t.ws-us116.gitpod.io/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nama,
            kode
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