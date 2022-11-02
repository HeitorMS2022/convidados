var nomesdosalunos = [];
function enviar() {
    var nomes = document.getElementById("nomes").value;
    nomesdosalunos.push (nomes);
    console.log(nomesdosalunos);
    document.getElementById("lista").innerHTML = nomesdosalunos;
    document.getElementById("nomes").value = " ";
}
function organizar() {
    nomesdosalunos.sort();
    var i = nomesdosalunos.join("<br>");
    document.getElementById("lg").innerHTML = i.toString();
}
function achar() {
    var np = document.getElementById("numerodevezes").value;
    var vnv = 0;
    var j;
    for (j = 0; j < nomesdosalunos.length; j++) {
        if(np == nomesdosalunos[j]){
            vnv = vnv + 1;
        }
    }
    document.getElementById("divdenumeros").innerHTML = "nome encontrado " + vnv + " vezes";
}