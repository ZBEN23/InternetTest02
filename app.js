'use strict';

const switcher = document.querySelector('.btn'); 
switcher.addEventListener('click', function() { 
    document.body.classList.toggle('light-theme'); 
    document.body.classList.toggle('dark-theme'); 

    const className = document.body.className;
    if(className == "light-theme") { 
    this.textContent = "Dark"; 
    } else { 
    this.textContent = "Light"; 
    } 
});

// created a button
const fduButton = document.createElement('button');
fduButton.textContent = 'Show FDU Student';

// add an event for button clicking
fduButton.addEventListener('click', function() {
    // using alert to show message
    alert('I am a fdu student.');
});

// find the location to insert this button
const divElement = document.querySelector('div');

// insert the button into the element "div"
divElement.appendChild(fduButton);
