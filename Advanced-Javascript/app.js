// console.log(document);
// console.dir(document);
//document.body.children[1].children[0].href = 'https://google.com';
//alert();
//window.alert();
let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('p a');
anchorElement.href = 'https://facebook.com';

//ADD AN ELEMENT
//1.create a new element
let newAnchorElement= document.createElement('a');
newAnchorElement.href='http://google.com';
newAnchorElement.textContent='This leads to google'

//2.Get access to the parent element that should hold the new element
let   firstParagraph=document.querySelector('p');

//3,Insert the new element into the parent element
firstParagraph.append(newAnchorElement);

//REMOVE ELEMENTS
//1. Select the elements to be removed
let   firstH1Element=document.querySelector('h1');
//2. Remove it
firstH1Element.remove();
//firstH1Element.parentElement.removeChild(firstH1Element);//for older browsers


//MOVE ELEMENTS
firstParagraph.parentElement.append(firstParagraph);

//innerHTML
console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML='Hi!This is  <strong>important</strong>.';
