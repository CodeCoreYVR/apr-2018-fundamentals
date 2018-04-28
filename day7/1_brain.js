// // JavaScript
// console.log("Brian was here!");
// // document.write("Jacob was here!");
// let object = document.getElementById("header");
// console.log("The object is: " + object);

// // events!!!!
// window.alert("Annoying Popup!");

// // when x occurs, do y
// // 90's
// window.onload = function() {
//     console.log("The window has finished loading...");
// };
// 2000's
// higher order function
document.addEventListener("DOMContentLoaded", function(){
    let object = document.getElementById("header");
    object.innerHTML = "Jacob was here!";
    console.log(object);
});
// 2006
// john resig
// jquery