//First Example:Sum numbers
const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum(){
    const userNumberInputElement =document.getElementById('user-number');
    const enteredNumber=userNumberInputElement.value;
let sum=0;
for(let i=0;i<=enteredNumber;i++)
{
    sum=sum+i;
}
const output=document.getElementById('calculated-sum');
output.textContent=sum;
output.style.display='block';
}


calculateSumButtonElement.addEventListener('click',calculateSum);


//Highlight links for of loop
const highlightLinksButtonElement=document.querySelector('#highlight-links button');

function highlightLinks(){
    const anchorElements=document.querySelectorAll('#highlight-links a');
    for(const anchorElement of anchorElements){
        anchorElement.classList.add('highlight');
    }
}

highlightLinksButtonElement.addEventListener('click',highlightLinks);



//Display user data for in loop

const dummyUserData={
    firstName: 'Divya',
    lastName: 'Paulson',
    age:26
};
const displayUserDataButton=document.querySelector('#user-data button');


function displayUserData(){
const outputData=document.getElementById('output-user-data');
for(const key in dummyUserData){
    const newUserListItem=document.createElement('li');
    const outputText=key.toUpperCase()+ ':' + dummyUserData[key];
    newUserListItem.textContent=outputText;
    outputData.append(newUserListItem);

}
}

displayUserDataButton.addEventListener('click',displayUserData);