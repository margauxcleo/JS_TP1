// exercice 1 
var today = new Date();
var day = today.getDay();
var daylist = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
console.log("Aujourd'hui, nous sommes " + daylist[day] + ", et il est " + hour + "h" + minute
+ "m" + second + "s" + prepand);

//exercice 2
    //Q1
    //(ES5) 
    function f2(arr){
        return arr[0];
    }
    //ou
    //(ES6) 
    const f2= (arr) => arr[0];
    var r = f2(tab);
    console.log(r);

    //Q2
    //(ES5) 
    function multiplication(a, b) {
        return a * b;
    }
    // ou 
    //(ES6) 
    const multiplication= (a, b) => a * b;
    var r = multiplication(1, 3);
    console.log(r);

    // --------------------------
    //(ES5) 
    function soustraction(a, b) {
        return a - b;
    }
    // ou 
    //(ES6) 
    const soustraction= (a, b) => a - b;
    var r = soustraction(1, 3);
    console.log(r);

    // --------------------------
    //(ES5) 
    function division(a, b) {
        return a / b;
    }
    // ou 
    //(ES6)
    const division= (a, b) => a / b;
    var r = division(1, 3);
    console.log(r);

    // --------------------------
    //(ES5)
    function addition(a, b) {
        return a + b;
    }
    // ou 
    //(ES6)
    const addition = (a, b) => a + b;
    var r = addition (1, 3);
    console.log(r);

    //Q3
    //(ES5)
    function convert(min) {
        return min * 60;
    }
    // ou 
    //(ES6)
    const convert= (min) => min * 60;
    var r = convert(2);
    console.log(r);

    //Q4
    //(ES5)
    function calcAge(age) {
        return age * 365;
    }
    // ou 
    //(ES6)
    const calcAge= (age) => age * 365;
    var r = calcAge(37);
    console.log(r);

//exercice 3
    //Q1
    document.write('<table border="1">');
    document.write('<tr>');
    document.write('bonjour !');
    var i = Math.floor(Math.random() * 100);
    document.write(i);

    //Q2
    var temperature = 12;
    if (temperature>20) {
    document.write('il fait chaud !');
    } else {
        document.write('il fait froid !');
    }  

    //Q3
    //for
    for (var i=1 ; i<=100 ; i=i+1) {
        document.write(i);
        document.writeln('<br>');
    }

    //while
    var i=1;
    while (i<=100) {
        document.write(i);
        document.writeln('<br>');
        i = i+1;
    }

//exercice 4
    for ( var i = 1; i <= 100; i++ ) {
        if ( i%3 === 0 && i%5 === 0 ) {
            console.log( i + " FizzBuzz" );
        } 
        else if ( i%3 === 0 ) {
            console.log(i+ " Fizz" );
        }
        else if ( i%5 === 0 ) {
            console.log(i+ " Buzz" ); 
        }
        else {
            console.log(i);
        }
    }


//exercice 5
    //ES5
    var array = [1, 2, 3, 4, 5, 6];
    var s = 0;
    var p = 1;
    for (var i = 0; i < array.length; i ++) {
    s += array[i];
    p *= array[i];
    }
    console.log('Sum : '+s + ' Product : ' +p);
    //ou
    //ES5
    var tab = [1, 2, 3, 4, 5, 6];
    function somme(t) {
        var somme = 0;
        var produit = 1;
        for (var i = 0; i < t.length; i++) {
            somme = somme + t[i];
            produit = produit * t[i];
        }
    console.log('<p>La somme est égale à ' + somme + '</p>');
    console.log('<p>Le produit est égale à ' + produit + '</p>');
    }
    //ou
    //ES6
    var array = [1, 2, 3, 4, 5, 6];
    var somme = array.reduce(function(sum, elem){
        return sum + elem;
    });
    console.log(somme);
    var produit = array.reduce(function(produit, elem){
        return produit * elem;
    });
    console.log(produit);
    // ou en fonction fléchée pour reduce
    var somme = array.reduce((sum, elem) => console.log(sum + elem));
    console.log(somme);
    var produit = array.reduce((produit, element) => console.log(produit * element));
    console.log(produit);

//exercice 6
    for ( var i = 1; i < 15; i++ ) {
        if ( i%2 == 0 ) {
            console.log( i + " est pair" );
        } else {
        console.log(i+ " est impair" );
        }
    }