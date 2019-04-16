/**********************************
  CONFIGURE JSON CALL
**********************************/ 
// The API feed
const getStuff = 'https://api.sunrise-sunset.org/json?lat=47.658779&lng=-117.426048';

// Do stuff with returned data
let doStuff = function(data) {

   // How big is array?     
    console.log(data.results.sunrise); 
  // console.log( data.results.length );
  // console.log( data.results[1]);
  // console.log( data.results[1].trackName);
  // console.log( data.results[2].trackName)
  // console.log( data.results[3].trackName);
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