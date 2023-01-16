let myObject = {
    nom: 'nicolas',
    age: 18,
}

//EXERCICE 1
let myElements = [];
myElements.push(document.querySelectorAll("#object h1,h2"))
console.log(myElements);

//EXERCICE 2
let tabProp = Object.getOwnPropertyNames(myObject);
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
let count = 0;
tabProp.forEach(element => {
    console.log(element);
    count++;
});
console.log(count);
//EXERCICE 6

for (i = 0; i < count; i++){
    console.log(tabProp);
}
