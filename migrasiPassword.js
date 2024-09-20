const fs = require("fs")
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


async function sendData() {
                const data1 = {
                            nisn: "0078221124",
                            password: "paskah"
                        };
                
                        try {
                            const response = await fetch('https://8080-rplsaci-pemiluapi-jfvwph8s12t.ws-us116.gitpod.io/api/migrasi', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(data1)
                            });
                
                            const result = await response.text();
                            console.log(result)
                            if(response.status !== 501){
                                console.log("BERHASIL MIGRASI USER")
                            }
                
                            // Wait for 1 second before sending the next request
                            await delay(1000);
                        } catch (err) {
                            console.log(err)
                        }
                    
}

sendData()