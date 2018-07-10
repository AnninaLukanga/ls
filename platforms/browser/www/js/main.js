function ajouter() {
    var produit =
        document.getElementById('prod').value;
    var quantite =
        document.getElementById('qte').value;
    console.log(produit);
    //Stocker les valeurs dans la memoire avec setItem. Necessite une clé et une valeur.
    //Ici le produit et la quantité
    localStorage.setItem(produit, quantite);
    remplirTable();
}
function modifier() {
    var produit =
        document.getElementById('prod').value;

    //Recuperer la valeur avec getItem. necessite la clé. Ici Produit
    document.getElementById('qte').value = localStorage.getItem(produit);
    remplirTable();
}
function supprimer() {
    var produit =
        document.getElementById('prod').value;
    localStorage.removeItem(produit);
    document.getElementById('prod').value = "";
    document.getElementById('qte').value = "";
    remplirTable();
}
function doclear() {
    localStorage.clear();
    remplirTable();
}
function remplirTable() {
    var key = "";
    var paire =
        "<tr class=\"table-primary\"><th>Produit</th><th>Quantité</th></tr>";
    document.getElementById('paires').innerHTML = paire;
    for (var i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        console.log(key);
        paire += "<tr><td>" + key + "</td><td>" + localStorage.getItem(key) + "</td></tr>";
    }
    if(paire == "<tr><th scope=\"col\">Produit</th><th>Quantité</th></tr>"){
        paire += "<tr><th>Vide</th><th>Vide</th></tr>";
    }
    document.getElementById('paires').innerHTML = paire;   
}

//exo2
//sessionStorage conserve en memoire les infos que pendant la session active
function fromCommande(){
var f1 = document.getElementById('nom').value;
sessionStorage.setItem("nom", f1);

var f2 = document.getElementById('prenom').value;
sessionStorage.setItem("prenom", f2);

var f3 = document.getElementById('adresse').value;
sessionStorage.setItem("adresse", f3);

var f4 = document.getElementById('cp').value;
sessionStorage.setItem("CP", f4);
}
function commande(){
document.getElementById('s1').innerHTML = sessionStorage.getItem("nom");
document.getElementById('s2').innerHTML = sessionStorage.getItem("prenom");
document.getElementById('s3').innerHTML = sessionStorage.getItem("adresse");
document.getElementById('s4').innerHTML = sessionStorage.getItem("CP");
}