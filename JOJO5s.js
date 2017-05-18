var brojevi = [];
function dod() {
    var x=inp.value;
    if (isNaN(x))
    {
        document.getElementById("p").innerHTML = "Nije broj!";
    }
    else{
        brojevi.push(inp.value);
        document.getElementById("inp").value = "";
        document.getElementById("p").innerHTML = "";
    }

}
function pro() {
    var naj = Math.max.apply(Math, brojevi);
    document.getElementById("inp").value = "";
    console.log(naj);
    brojevi = [];
    document.getElementById("p").innerHTML = "Najveci broj je " + naj;
}
function prov() {
    var i = ime.value;
    var g = god.value;
    if ((i.length>9 && (g>17 && g<100))){
        document.getElementById("p2").innerHTML = "Dobro je!";
    }
    else{
        document.getElementById("p2").innerHTML = "Krivo je!";
    }

}
function rand() {
   var r=Math.floor(Math.random() * 1000) + 1;
   if (r>0 && r<201){
       document.body.style.color = "blue";
   }
   if (r>200 && r<402){
        document.body.style.color = "red";
    }
    if (r>600 && r<802){
        document.body.style.color = "green";
    }
    if (r>800 && r<1001){
        document.body.style.color = "yellow";
    }
}
function sto1() {
    var sss = sto.value;
    if (sss<101){
        document.getElementById("ss").innerHTML = "OK";
    }
    else{
        document.getElementById("ss").innerHTML = "KRIVO";
    }
}