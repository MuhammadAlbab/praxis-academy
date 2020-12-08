let myHeading = document.querySelector('h1');

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'firefox-1.png') {
      myImage.setAttribute('src','firefox-2.png');
    } else {
      myImage.setAttribute('src','firefox-1.png');
    }
}


function setUserName() {
    let myName = prompt('Masukan nama anda');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
    setUserName();
}