// Get Slider Items | Array.form [ES6 Feature]
var sliderImgs = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number OF Sliders
var slidersCount = sliderImgs.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Prev and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Prev and Next Buttons
nextButton.onclick = nextSlide
prevButton.onclick = prevSlide

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID on Created UL Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based on Slides count
for (var i=1; i<= slidersCount; i++){
    // Create The LIs
    var paginationItem = document.createElement('li');

    // Set Custom Attribute
    paginationItem.setAttribute('data-index', i);

    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    // Append Items to The main UL List
    paginationElement.appendChild(paginationItem);
}

// Add The Created Element to the page
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get pagination Items | Array.form [ES6 Feature]
var paginationLis = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Lis Items
for(var i=0; i<paginationLis.length; i++){

    paginationLis[i].onclick = function(){

        currentSlide = parseInt(this.getAttribute('data-index'));

        thechecker();

    }
}

// Trigger the checker Function
thechecker();





// Next Slide function
function nextSlide(){
    
    if(nextButton.classList.contains('disabled')){
        // Do Nothing
        return false;
    } else {
        currentSlide++;

        thechecker();
    }

}

// Prev Slide function
function prevSlide(){

    if(prevButton.classList.contains('disabled')){
        // Do Nothing
        return false;
    } else {
        currentSlide--;

        thechecker();
    }

}

// Create The Checker Function
function thechecker(){
    // Set The Slide Number
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidersCount);

    // Remove All Active Classes
    removeAllActive();

    // Set Active Class on Current Slide
    sliderImgs[currentSlide - 1].classList.add('active');

    // Set Active Class on Current Pagination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    // Check if Current Slide is Thee First
    if(currentSlide == 1){

        // Add Disabled Class on Prev Button
        prevButton.classList.add('disabled');

    } else {

        // Remove Disabled Class from Prev Button
        prevButton.classList.remove('disabled');

    }

    // Check if Current Slide is Thee Last
    if(currentSlide == slidersCount){

        // Add Disabled Class on Next Button
        nextButton.classList.add('disabled');

    } else {

        // Remove Disabled Class from Next Button
        nextButton.classList.remove('disabled');

    }
}

// Remove All Active classes from Imgs and LIs
function removeAllActive(){

    // Loop Through Imgs
    sliderImgs.forEach(function(img){
        img.classList.remove('active');

    });

    // Loop Through pagination Lis
    paginationLis.forEach(function(li){
        li.classList.remove('active'); 
    });
}