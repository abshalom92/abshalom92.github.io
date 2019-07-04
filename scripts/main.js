
document.querySelector('html').onclick = 
    function () {
    alert('Hey, that felt kind of good. Do that again!');
}

var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/mysitelogo.png') {
        myImage.setAttribute ('src', 'images/mysitelogolarge.png');
    } else {
        myImage.setAttribute ('src', 'images/mysitelogo.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document. querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Hey,' + myName + ' thanks for stopping by!';
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hey ' + storedName + ', thanks for stopping by!';
}

myButton.onclick = function() { 
    setUserName();
}