function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for(var i in uiBathrooms) {
      if(uiBathrooms[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }
  
  function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for(var i in uiBHK) {
      if(uiBHK[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }
  
  function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    var sqft = document.getElementById("uiSqft");
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocations");
    var estPrice = document.getElementById("uiEstimatedPrice");
  
    // Generate a random value between 10 lakh and 90 lakh
    var randomPrice = Math.floor(Math.random() * 80) + 10;
  
    // Display the random value on the UI
    estPrice.innerHTML = "<h2>" + randomPrice.toString() + " Lakh</h2>";
}




  function onPageLoad() {
    console.log( "document loaded" );
    var url = "http://127.0.0.1:5000/get_location_names"; // Use this if you are NOT using nginx which is first 7 tutorials
    //var url = "/api/get_location_names"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
    $.get(url,function(data, status) {
        console.log("got response for get_location_names request");
        if(data) {
            var locations = data.locations;
            var uiLocations = document.getElementById("uiLocations");
            $('#uiLocations').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    });
  }
  
  window.onload = onPageLoad;

const form = document.querySelector('form');
const resultBox = document.querySelector('.result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // get the input values
  const area = document.querySelector('.area').value;
  const location = document.querySelector('.location').value;
  
  // perform some validation on the input values
  if (!area || !location) {
    alert('Please enter both area and location.');
    return;
  }
  
  // display the result box with the input values
  resultBox.textContent = `Your area is ${area} and your location is ${location}.`;
  resultBox.style.display = 'block';
});
