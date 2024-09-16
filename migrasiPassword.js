const fs = require("fs")
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


async function sendData() {
            const response = await fetch('https://redesigned-lamp-wx969x4q6g6f599x-8080.app.github.dev/api/user/getAll');


            let body = await response.json();
            let data = body.data
            for (let element of data) {
                console.log("Migrasi UserPemilu "+element.username+"-"+element.nisn)
                if(element.password.length === 5){
                    console.log("Migrasi UserPemilu "+element.username+"-"+element.nisn + " FAILED : SUDAH TERMIGRASI")
                }                         
                const data1 = {
                            nisn: element.nisn,
                            password: element.password
                        };
                
                        try {
                            const response = await fetch('https://redesigned-lamp-wx969x4q6g6f599x-8080.app.github.dev/api/migrasi', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(data1)
                            });
                
                            const result = await response.text();
                            if(response.status !== 501){
                                console.log("BERHASIL MIGRASI USER")
                            }
                
                            // Wait for 1 second before sending the next request
                            await delay(1000);
                        } catch (err) {
                            console.log(err)
                        }
                    } 
                    
}

sendData()