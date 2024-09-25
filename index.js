const fs = require("fs")
let nama = `FITRA RAHMAN MANGUNSONG - 0085004127
SHERLY NISRINA YULIANI - 232410408 
ZAHROTUL NUR FUADIYAH - 0072371529
NANDA RISKY PUTRI REGYANS - 0081883688`

let array = nama.split("\n")
let newArray = []
array.forEach(element => {
    let splited = element.split(" - ")
    newArray.push(splited[0]+"-"+splited[1])
});

console.log(newArray)
fs.writeFileSync("data1.json",JSON.stringify(newArray))