console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1



function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
var midEarth = document.createElement("section");
midEarth.id="middle-earth";
var newLand;

for (var i=0; i<lands.length; i++){
newLand = document.createElement('article');
locations = document.createElement("H1");
locations.textContent =  lands[i];
newLand.append(locations);
midEarth.append(newLand);
body.append(midEarth);
}
};
makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit

//var hobbitUl = document.createElement('UL');
//var hobLi;
var ul = document.createElement('ul');
var shire = document.querySelector("article")

for(var i=0; i < hobbits.length; i++){
   var li = document.createElement('li');
   li.className = "hobbit"
   ul.appendChild(li);
   li.innerHTML = li.innerHTML + hobbits[i];
   shire.appendChild(ul);
    //newHob = hobbit[i].id = "hobbit";
    //hobLi = document.createElement('LI');
    //hobs = document.createTextNode(hobbits[i])
    //hobLi.append(hobs[i]);
    //hobbitUl.append(hobLi);
    //body.append(hobbitUl);
  }

};


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var frodo = document.querySelector("li")
  var theRing = document.createElement("div");
  theRing.id = "the-ring";
  theRing.className = "magic-imbued-jewelry";
  theRing.addEventListener("click", nazgulScreech);
  frodo.appendChild(theRing);


}


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  
  var buddiesUl = document.createElement('ul');
  var aside = document.createElement("ASIDE");
  var children = document.getElementById("middle-earth").childNodes;
  var rivendell = children[1];
  for( i=0; i < buddies.length; i++){
    var li = document.createElement('li')
    buddiesUl.appendChild(li);
    li.innerHTML = li.innerHTML + buddies[i];
    aside.appendChild(buddiesUl);
    rivendell.appendChild(aside);

}
}


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var strider = document.querySelectorAll("li")
  var aragorn = strider[7].innerHTML = "Aragorn";

}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var frodo = document.querySelector('ul li');
  var samwise =  document.querySelector('ul li').nextSibling;
  var merry = document.querySelector('ul').childNodes[2];
  var pippin = document.querySelector('ul').lastChild;
  document.getElementById('middle-earth').childNodes[1].appendChild(document.createElement('ul'));
  document.getElementById('middle-earth').childNodes[1].lastChild.append(frodo);
  document.getElementById('middle-earth').childNodes[1].lastChild.append(samwise);
  document.getElementById('middle-earth').childNodes[1].lastChild.append(merry);
  document.getElementById('middle-earth').childNodes[1].lastChild.append(pippin);
  
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
var newDiv = document.createElement('div');
newDiv.id="the-fellowship";
document.getElementById('middle-earth').childNodes[1].appendChild(newDiv);
newDiv.appendChild(document.createElement('ul'));

for (var i = 0; i < hobbits.length; i++){
  var hoLi = newDiv.appendChild(document.createElement('li'));
  hoLi.innerHTML = hobbits[i];

};


}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
