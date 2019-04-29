/**********************************
  CONFIGURE JSON CALL
**********************************/ 
// The API feed
const getStuff = 'https://api.sunrise-sunset.org/json?lat=47.658779&lng=-117.426048';

// Do stuff with returned data
let doStuff = function(data) {

    console.log(data.results.sunrise); 
  let hms = data.results.day_length;
  let sunset = data.results.sunset;
  
  $('#app').append( `<h1>There are ${hms} hours of sunlight today</h1> `); 
  // $('#app').append( `<h1>Sunset: ${sunset}</h1> `);
}

/************************************
  GET JSON FROM API
************************************/ 
$.getJSON( getStuff, doStuff);


/************************************
  SHOW (DISPLAY ON PAGE)
************************************/ 
let showStuff = function(data) {
  console.log( data );  
}
