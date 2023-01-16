let myObject = {
    nom: 'nicolas',
    age: 18,
}

//EXERCICE 1
let myElements = [];
myElements.push(document.querySelector("#object").querySelectorAll("h1,h2"))
console.log(myElements);

//EXERCICE 2
let tabProp = Object.entries(myObject);
console.log(tabProp);

//EXERCICE 3
let i;
for (i = 0; i< tabProp.length; i++){
    console.log(tabProp[i]);
}

//EXERCICE 4
tabProp = Object.values(myObject);
console.log(tabProp);

//EXERCICE 5


//EXERCICE 6