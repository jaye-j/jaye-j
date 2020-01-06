let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/jaye-beanie.png') {
      myImage.setAttribute ('src','images/jaye-graffiti.png');
    } else {
      myImage.setAttribute ('src','images/jaye-beanie.png');
    }
} //changes picture when clicked on
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to my page, ' + myName + "!";
  }
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to my page, ' + myName + "!";
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to my page, ' + storedName + "!";
}
myButton.onclick = function() {
  setUserName();
}