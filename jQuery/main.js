// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   const audio = new Audio("./flowers.mp3");
//   audio.play();
// });

// if (jQuery == "undefined") {
//   alert("jquery is not included");
// } else {
//   alert("jquery is included");
// }

// <--------------------------- Detecting a click ---------------------------->
// $("#circle").click(function () {
//   alert("Circle is clicked");
// });
// $("#circle").hover(() => {
//   alert("Hover on Cricle");
// });
// $("#square").click(function () {
//   alert("Clicked on Square");
// });
// $("div").click(function () {
//   alert("Clicked on div");
// });

// <-------------------- Changing website content using jQuery ------------->
// html() --> changing the textContent
// attr() --> changing the attribute. like "src".
// $("p").click(function () {
//   $("p").html("changed text");
// });
// $("p").click(function () {
//   alert($("p").html());
// });
// $("iframe").hover(function () {
//   $("iframe").attr(
//     "src",
//     "https://dribbble-cloned-by-abhay-sharma.netlify.app/"
//   );
// });

// <-------------- changing website styles ------------------->
// $("#circle").click(function () {
//   alert("Clicked Circle");
// });
// $("#circle").click(function () {
//   $("#circle").css("background-color", "red");
// });
// $("div").click(function () {
//   $(this).css("display", "none");
// });
// $("div").click(function () {
//   // $(this) --> select the spicific element(div)
//   $(this).hide("slow"); // hide("slow") or hide(1000)
// });

// <--------------------- fading content ----------------------->
// fadeOut() --> hide the content
// fadeIn() --> display the hided content
// $("button").click(function () {
//   $("p").fadeOut();
// });
// $("button").click(function () {
//   $("p").fadeOut("slow");
// });
// $("button").click(function () {
//   $("p").fadeOut(function () {
//     alert("Fading the content");
//   });
// });
// $("button").click(function () {
//   $("#para").fadeIn();
// });

// <-------------------- Regular expression ------------------------->
// 1st
// let str = "This is regular expression";
// let regex = /regular/;
// let result = str.match(regex);
// alert(result);
// 2nd
// let str = "This is regular expression";
// let regex = /regularadasdfsaddf/;
// let result = str.match(regex);
// alert(result);
// 3rd
// let str = "This is regular expression";
// let regex = /Regular/i; // In this expression "i" means, remove the case sensitiveness in the expression, that's mean regular or Regular considering are same expression.
// let result = str.match(regex);
// alert(result);
// 4th
// let str = "This is regular regular regular expression";
// let regex = /regular/g; // In the expression "g" means, how many expression(regular) in the str variable.
// let result = str.match(regex);
// alert(result);

// <----------------------- PROJECT - Form Validation ------------------------->
// let errorMsg = "";
// let missingField = "";
// function isEmail(email) {
//   let regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
//   return regex.test(email);
// }
// $("#submit_btn").click(function (e) {
//   e.preventDefault();
//   if ($("#email").val() == "") {
//     missingField += "<p>Email not filled</p>";
//   }
//   if ($("#phone-no").val() == "") {
//     missingField += "<p>Phone number not filled</p>";
//   }
//   if ($("#password").val() == "") {
//     missingField += "<p>Password not filled</p>";
//   }
//   if (isEmail($("#email").val()) === false) {
//     errorMsg += "<p>Email is not valid</p>";
//   }
//   if ($.isNumeric($("#phone-no").val()) == false) {
//     errorMsg += "<p>Phone number is not valid</p>";
//   }
//   if ($("#password").val() != $("#confirmPassword").val()) {
//     errorMsg += "<p>Password does not match</p>";
//   }
//   if (errorMsg == "") {
//     $("#success").html("You are successfuly registered");
//   } else {
//     $("#errors").html(missingField + errorMsg);
//   }
// });

// <-------------------------- jQuery ui Plugins -------------------->
// $("#drag").draggable();
// $("#drag").draggable({ axis: "y" });
// $("#drag").draggable({ axis: "x" });

// <-------------------------- Droppable ---------------------------->
// $("#small").draggable();
// $("#large").droppable({
//   drop: function (event, ui) {
//     $("#large").css("background-color", "cadetblue");
//     $("#large").css("color", "white");
//     $("#large").html("Dropped!");
//     alert("Element Dropped!");
//   },
// });

// <--------------------- jqui widget --------------------------->
// $("#accordion").accordion();
$("#datepicker").datepicker();
