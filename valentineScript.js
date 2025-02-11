// Function handle button clicked events
// if button is yes, display cat heart function
// else if button is no, ask if they are sure, and if yes, increase yes button by 2
function selectOption(option) {
    if (option === 'yes') {
        // Hide question instantly
        document.getElementById('question').style.display = 'none';
        document.getElementById('options').style.display = 'none';

        // Show the cat heart immediately
        displayCatHeart();

        // Start flashing colors in the background
        flashRainbowColors();
    } else if (option === 'no') {
        var noButton = document.getElementById('no-button');
        var yesButton = document.getElementById('yes-button'); 

        if (noButton.innerText === 'No') {
            noButton.innerText = 'You sure?';
        } else {
            var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
            var newSize = parseFloat(currentFontSize) * 2;
            yesButton.style.fontSize = newSize + 'px';
        }
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
    var imageContainer = document.getElementById('image-container');

    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';           
    
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
} 

// Function to display the cat heart.gif
function displayCatHeart() {
    
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');

    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat with a heart';

    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
    };
}

displayCat();
