// Function handle button clicked events
// if button is yes, display cat heart function
// else if button is no, ask if they are sure, and if yes, increase yes button by 2
function selectOption(option) {

    if (option == 'yes') {

        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayCatHeart(); // Calls cat func
        });
    } else if (option == 'no') {

        document.getElementById('no-button').innerText = 'You sure?';
        var yesButton = document.getElementById('yes-button'); 

        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size'); //yes button font size into variable
        var newSize = parseFloat(currentFontSize) * 2; //new font size gets increase

    } else {
        alert('Invalid Option!');
    }
}

// Function to flash rainbow colors and then excute a callback function
function flashRainbowColors(callback) {  // callback allows a function to be passed as an arguement to another function

    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;

    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Resets background color

        if (callback) {
            callback();
        }
    }, 2000);
}  

// Function to display the cat.gif 
function displayCat() {

    document.getElementById('image-container').innerHTML = '';
    var imageConatiner =  document.getElementById.apply('image-container');

    var catImage = new Image();;
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';           
    
    catImage.onLoad = function() {
        imageConatiner.appendChild(catImage);
    };
} 

// Function to display the cat heart.gif
function displayCatHeart() {
    
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-conatiner');

    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat with a heart';

    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
    };
}

displayCat();