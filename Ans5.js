var lengthoftable = 10;
var tableNumber = prompt("Please Enter a table number","");

if(tableNumber == 0 || tableNumber == null){
    tableNumber = 5;

document.write("Table of "+tableNumber+":<br><br>")
for (let i = 1; i <= lengthoftable; i++) {
    var multiplyResult = tableNumber*i;
    
    document.write(tableNumber+" x "+i+"= "+multiplyResult+"<br>");
    
}
}

else{
    document.write("Table of "+tableNumber+":<br><br>")
for (let i = 1; i <= lengthoftable; i++) {
    var multiplyResult = tableNumber*i;
    
    document.write(tableNumber+" x "+i+"= "+multiplyResult+"<br>");
    
}
}