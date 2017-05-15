import $ from 'jquery';

var locationsArray1 = [];
var locationsArray2 = [];
var locationsArray3 = [];
var locationsArray4 = [];
var locationsArray5 = [];
var locationsArray6 = [];
var locationsArray7 = [];
var locationsArray8 = [];
var locationsArray9 = [];

$.getJSON("../../assets/convertcsv.json", function(json) {
    // console.log(json);
    json.forEach(function (location) {

      if (location.startsWith("1")) {
        locationsArray1.push(location);
      }
      if (location.startsWith("2")) {
        locationsArray2.push(location);
      }
      if (location.startsWith("3")) {
        locationsArray3.push(location);
      }
      if (location.startsWith("4")) {
        locationsArray4.push(location);
      }
      if (location.startsWith("5")) {
        locationsArray5.push(location);
      }
      if (location.startsWith("6")) {
        locationsArray6.push(location);
      }
      if (location.startsWith("7")) {
        locationsArray7.push(location);
      }
      if (location.startsWith("8")) {
        locationsArray8.push(location);
      }
      if (location.startsWith("9")) {
        locationsArray9.push(location);
      }

    });
}).then(console.log(locationsArray1.sort()));
// $(document).ready(console.log(locationsArray[0]));
// console.log(locationsArray);
// console.log(locationsArray[3]);

//
// locationsArray.forEach(function (location) {
//     let newLocation = location.substring(0,3);
//     threeDigitZips.push(newLocation);
// });

// console.log(threeDigitZips)
