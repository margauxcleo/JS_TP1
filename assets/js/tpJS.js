// exercice 1

    let date = new Date();
    let day = date.getDay();
    // pour afficher le nom du jour
    var daylist = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    console.log('Nous sommes le ' + daylist[day] + ' ' + day + ' ' + month + '/' + year + ' et il est ' + hour + ':' + minute + ':' + second + 'secondes.');

// exercice 2
    // Q1
    var tab1 = [2, 4, 7, 10];
    function getItem1(t) {
        // transforme tout en nombre 
        for(var i = 0; i < t.length; i++) {
            parseInt(i);
        }
        // retourne le premier élément
        return t[0];
    }
    // test 
    getItem1(tab1);
    console.log(getItem1(tab1));

    // Q2
    function additionner(a, b){
        return a + b;
    }

    function soustraire(a, b){
        return a - b;
    }

    function diviser(a, b){
        return a / b;
    }

    // Q3
    function getNumberOfSec(min){
        let totalSeconds = 3600;
        // arrondir à l'entier supérieur
        Math.floor(min);
        // retourner x en secondes
        return min * totalSeconds;
    }
    // test
    console.log(getNumberOfSec(6.6));

    // Q4
    function getAge(age) {
        let totalDays = 365;
        let nbrDays = (age * totalDays);
        return nbrDays;
    }
    // test 
    console.log(getAge(2));


// exercice 3
    // Q1
    var number = 5;
    document.write('Hello World');
    document.write('<br>');
    document.write(16);
    document.write('<br>');
    document.writeln('Je m\'appelle Margaux');
    document.write('<br>');
    document.writeln(number);
    document.write('<br>');

    //Q2
    var temperature = 15; 
    function checkTemperature(temp) {
        var maxTemperature = 20;
        if(temp < maxTemperature){
            document.writeln('La température est inférieure à la température maximale autorisée.');
            document.write('<br>');
        } else {
            document.writeln('ATTENTION ! Température maximale autorisée dépassée');
            document.write('<br>');
        }
    }
    // test
    checkTemperature(temperature);

//Q3
    // boucle for
    for(let i = 0; i <= 100; i++){
        console.log(i);
    }
    // boucle while
    let i = 0;
    while(i < 100){
        i++;
        console.log(i);
    }

// exercice 4
// on met en place l'itération
for(var entier = 1; entier <= 100; entier++){
    if (entier%3 == 0 && entier%5 == 0){
        document.writeln('FizzBuzz');
        document.write('<br>');
    }
    else if(entier%3 == 0){
        document.writeln('Fizz');
        document.write('<br>');
    }
    else if (entier%5 == 0){
        document.writeln('Buzz');
        document.write('<br>');
    }
    else {
        document.writeln(entier);
        document.write('<br>');
    }
}

// exercice 5
let table2 = [5, 6, 8, 14];
function getSomme(t) {
    let somme = 0;
    for(var i = 0; i < t.length; i++){
        somme += t[i];
    }
    //pour verif
    console.log('somme: ' + somme);
}
//test
getSomme(table2);

function getProduit(t){
    let resultat = 1;
    for(var i = 0; i < t.length; i++){
        resultat *= t[i];
    }
    //pour verif
    console.log('produit: ' + resultat);
}
//test
getProduit(table2);

// exercice 6
for(var nbre = 1; nbre <= 15; nbre++){
    if(nbre % 2 == 0) {
        document.writeln(nbre +': est pair.');
        document.write('<br>');
    }
    else {
        document.writeln(nbre +': est impair.');
        document.write('<br>');
    }
}

