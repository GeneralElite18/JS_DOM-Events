console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

const node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById(“node1”) method to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

const node2 = document.getElementsByClassName("node2");
node2[0].textContent = "I used the getElementByClassName(“node2”) method to access this";
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

const h3 = document.getElementsByTagName("h3");
for(let i = 0; i < h3.length; i++){
    h3[i].textContent = "I used the getElementByTagName('h3') method to access all of these";
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

let newElem = document.createElement("p");
newElem.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method

let parent = document.getElementById("parent");
parent.appendChild(newElem);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

let newAnchor = document.createElement("a");
newAnchor.textContent = "I am a <a> tag";

// BONUS: Add a link href to the <a>

newAnchor.href = "https://www.google.com/";


// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

parent.insertBefore(newAnchor,newElem);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

let oldChild = document.getElementById("N1");
let newChild = document.createElement("p");
newChild.textContent = "New Child Node";

let parent2 = document.getElementById("exercise-container3");
parent2.replaceChild(newChild, oldChild);

// TODO: Remove the "New Child Node"

parent2.removeChild(newChild);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element

let ul = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each

for(let i = 0; i < list.length; i++){
    let li = document.createElement("li");
    li.textContent = list[i];
    // TODO: Append the new list items to the unordered list element
    ul.append(li);
}

// TODO: Append the unordered list to the `div#container` under exercise 4 

let groceriesList = document.getElementById("container");
groceriesList.append(ul);


/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show(){
    let newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "black";
    newDiv.style.position = "fixed";
    newDiv.style.top = "50%";
    newDiv.style.left = "25%";
    newDiv.style.right = "25%";
    newDiv.style.textAlign = "center";
    newDiv.style.borderRadius = "2rem";
    let alertMessage = document.createElement("a");
    alertMessage.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    alertMessage.style.fontSize = "2rem";
    newDiv.append(alertMessage);
    let root = document.getElementsByClassName("root");
    root[0].append(newDiv);

    setTimeout(() => {
        root[0].removeChild(newDiv);
    }, 6000);
}

let button = document.getElementById("btn");

button.addEventListener("click", show);