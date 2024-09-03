console.log("Let's build a pyramid using JavaScript basics:");
console.log("    #    ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ####### ");
console.log("#########");
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount){
    return " " + character.repeat(rowNumber)+ " ";
}


for (let i =0; i < count; i++) {
  rows.push(padRow(i+1, count));
}

let result = "";

for(const row of rows){
    result += "\n"+row;
}

console.log(result);