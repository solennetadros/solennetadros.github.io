var weatherJSON;
var urlBase = 'http://api.openweathermap.org/data/2.5/weather?q=';
var queryCity = 'New York';
var units = '&units=imperial';
var apiID = '&appid={your api key here}';

function weatherAsk() {
  var url = urlBase + input.value() + units + apiID;
  queryCity = input.value();
  loadJSON(url, gotData);
}

function gotData(data) {
  weatherJSON = data;

  title.html(weatherJSON.name);
  descr.html(weatherJSON.weather[0].description);
  descr.html(weatherJSON.main.temp + " degrees fahrenheit");
}

function gotData(data) {
  //this is called by loadJSON.
  //the json object from the api will be put into variable "data"
  var index1 = floor(random(0, data.length));  //data is an array. we want to look at one of the many possible array positions, so we choose a random one:
  var index2 = floor(random(0, data[index1].words.length));
  //finally that array position is an object that may have an array of words, so we choose a random one of those too:
  word = data[index1].words[index2];
  //update the link html element text:
  link.html(word);
}