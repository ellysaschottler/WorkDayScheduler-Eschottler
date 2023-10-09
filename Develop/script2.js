var nineEl = document.getElementById("hour-9")

//Update Current Day to page
var currentDay = dayjs();
$("#currentDay").text(currentDay.format("[Today is ]MM/DD/YYYY"))

//Get CurrentHour with dayjs
var currentHour = dayjs().format("H")
console.log(currentHour)

function classifyPastPresentFuture (){
  if (currentHour < 9)
  {
    nineEl.classList.add("future")
    tenEl.classList.add("future")
    elevenEl.classList.add("future")
    twelveEl.classList.add("future")
    thirteenEl.classList.add("future")
    fourteenEl.classList.add("future")
    fifteenEl.classList.add("future")
    sixteenEl.classList.add("future")
    seventeenEl.classList.add("future")
    return
  } 
    else if (9 == currentHour)
  {
  nineEl.classList.add("present")
  tenEl.classList.add("future")
  elevenEl.classList.add("future")
  twelveEl.classList.add("future")
  thirteenEl.classList.add("future")
  fourteenEl.classList.add("future")
  fifteenEl.classList.add("future")
  sixteenEl.classList.add("future")
  seventeenEl.classList.add("future")
  return
  }
   else if (currentHour == 10)
  {
    nineEl.classList.add("past")
    tenEl.classList.add("present")
    elevenEl.classList.add("future")
    twelveEl.classList.add("future")
    thirteenEl.classList.add("future")
    fourteenEl.classList.add("future")
    fifteenEl.classList.add("future")
    sixteenEl.classList.add("future")
    seventeenEl.classList.add("future")
    return
  }
  else if (currentHour == 11)
  {
    nineEl.classList.add("past")
    tenEl.classList.add("past")
    elevenEl.classList.add("present")
    twelveEl.classList.add("future")
    thirteenEl.classList.add("future")
    fourteenEl.classList.add("future")
    fifteenEl.classList.add("future")
    sixteenEl.classList.add("future")
    seventeenEl.classList.add("future")
    return
  }
  else if (currentHour == 12)
  {
    nineEl.classList.add("past")
    tenEl.classList.add("past")
    elevenEl.classList.add("past")
    twelveEl.classList.add("present")
    thirteenEl.classList.add("future")
    fourteenEl.classList.add("future")
    fifteenEl.classList.add("future")
    sixteenEl.classList.add("future")
    seventeenEl.classList.add("future")
    return
  }
  else if (currentHour == 13)
  {
    nineEl.classList.add("past")
    tenEl.classList.add("past")
    elevenEl.classList.add("past")
    twelveEl.classList.add("past")
    thirteenEl.classList.add("present")
    fourteenEl.classList.add("future")
    fifteenEl.classList.add("future")
    sixteenEl.classList.add("future")
    seventeenEl.classList.add("future")
    return
  }
  else if (currentHour == 14)
  {
    nineEl.classList.add("past")
    tenEl.classList.add("past")
    elevenEl.classList.add("past")
    twelveEl.classList.add("past")
    thirteenEl.classList.add("past")
    fourteenEl.classList.add("present")
    fifteenEl.classList.add("future")
    sixteenEl.classList.add("future")
    seventeenEl.classList.add("future")
    return
  }
  else if (currentHour == 15)
  {
    nineEl.classList.add("past")
    tenEl.classList.add("past")
    elevenEl.classList.add("past")
    twelveEl.classList.add("past")
    thirteenEl.classList.add("past")
    fourteenEl.classList.add("past")
    fifteenEl.classList.add("present")
    sixteenEl.classList.add("future")
    seventeenEl.classList.add("future")
    return
  }
  else if (currentHour == 16)
  {
    nineEl.classList.add("past")
    tenEl.classList.add("past")
    elevenEl.classList.add("past")
    twelveEl.classList.add("past")
    thirteenEl.classList.add("past")
    fourteenEl.classList.add("past")
    fifteenEl.classList.add("past")
    sixteenEl.classList.add("present")
    seventeenEl.classList.add("future")
    return
  }
  else if (currentHour == 17)
  {
    nineEl.classList.add("past")
    tenEl.classList.add("past")
    elevenEl.classList.add("past")
    twelveEl.classList.add("past")
    thirteenEl.classList.add("past")
    fourteenEl.classList.add("past")
    fifteenEl.classList.add("past")
    sixteenEl.classList.add("past")
    seventeenEl.classList.add("present")
    return
  }
  else
  {
    nineEl.classList.add("past")
    tenEl.classList.add("past")
    elevenEl.classList.add("past")
    twelveEl.classList.add("past")
    thirteenEl.classList.add("past")
    fourteenEl.classList.add("past")
    fifteenEl.classList.add("past")
    sixteenEl.classList.add("past")
    seventeenEl.classList.add("past")
    return
  }
}
//9 AM variables and functions
var toDoForm9AmEl = document.querySelector("#toDo-form9Am");
var toDoList9AmEl = document.querySelector("#toDo-list9Am");
var toDos9Am = [];
var save9AmButton = document.querySelector("[data-timeblock='nineAm']");
var toDoInput9Am = document.querySelector("#toDo9Am")

// Get stored todos if available
function init() {
  var storedToDos9Am = JSON.parse(localStorage.getItem("toDos9Am"));
  if (storedToDos9Am != null) {
      toDos9Am = storedToDos9Am;
  }}

  //Renders any saved plans for the hour if they are stored
function renderToDos9Am(){
    toDoList9AmEl.innerHTML = '';
    for (var i = 0; i < toDos9Am.length; i++){
        var toDo9Am = toDos9Am[i];
        var li = document.createElement("li");
        li.textContent = toDo9Am;
        li.setAttribute("data-index", i);
        toDoList9AmEl.appendChild(li);
    }
  }

  // Store to dos
function storeToDos9Am() {
    localStorage.setItem("toDos9Am", JSON.stringify(toDos9Am));
  }
  
  save9AmButton.addEventListener("click", function(e){
    e.preventDefault();
    var toDoText = toDoInput9Am.value;
    if (toDoText ===""){
        return;
    }
    toDos9Am.push(toDoText);
    toDoInput9Am.value = "";
    storeToDos9Am();
    renderToDos9Am();
  })

init()
