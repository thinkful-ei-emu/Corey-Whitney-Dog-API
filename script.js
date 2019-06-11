'use strict';

//user can choose 1-50 img,  print results to console
//from to have required input field, defualt to 3

/*
*fetch dog images 1-50
*/
const getDog = function() {
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(jsonData => {
      displayDog(jsonData);
    })
    .catch(error => {
      console.log(`There was an error fetching your data: ${error.message}.`);
    });
};

function numberPolice() {
  console.log($('.numCheck').val());
}


function handleNewSubmit() {
  $('.buttonSubmit').submit(function(event){
    alert('Please choose a number between 1 and 50');
    event.preventDefault();
  });
}

const displayDog = function(jsonData) {
  //console.log(jsonData.message);
  let dogArray = jsonData.message;
  dogArray.forEach(function(element) {
    console.log(element);
  });
};

/**
 * create img grid
 */
const createImg = function() {

};

getDog();
handleNewSubmit();
numberPolice();