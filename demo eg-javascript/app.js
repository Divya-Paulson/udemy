let paragraphElement=document.querySelector('p');

function changeParagraphText()
{
    paragraphElement.textContent='Clicked';
}
paragraphElement.addEventListener('click',changeParagraphText);

let inputElement= document.querySelector('input');

function retrieveUserInput(event)
{
    //let enteredText=inputElement.value;
    let enteredText=event.target.value;
    //console.log(event);
    console.log(enteredText);

    //let enteredText=event.data;-->This is different!!

}
inputElement.addEventListener('input',retrieveUserInput);
let lengthOfWord=inputElement.length;
console.log(length);