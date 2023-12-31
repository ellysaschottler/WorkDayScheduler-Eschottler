$(function() {
  var nineEl = document.querySelector("[data-hour='9']")
  var tenEl = document.querySelector("[data-hour='10']")
  var elevenEl = document.querySelector("[data-hour='11']")
  var twelveEl = document.querySelector("[data-hour='12']")
  var thirteenEl = document.querySelector("[data-hour='13']")
  var fourteenEl = document.querySelector("[data-hour='14']")
  var fifteenEl = document.querySelector("[data-hour='15']")
  var sixteenEl = document.querySelector("[data-hour='16']")
  var seventeenEl = document.querySelector("[data-hour='17']")


  //Update Current Day to page
  var currentDay = dayjs();
  $("#currentDay").text(currentDay.format("[Today is ]MM/DD/YYYY"))

  //Get CurrentHour with dayjs
  var currentHour = dayjs().format("H")


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
    }
    renderToDos9Am();
    var storedToDos10Am = JSON.parse(localStorage.getItem("toDos10Am"));
    if (storedToDos10Am != null) {
        toDos10Am = storedToDos10Am;
    }
    renderToDos10Am();
    var storedToDos11Am = JSON.parse(localStorage.getItem("toDos11Am"));
    if (storedToDos11Am != null) {
        toDos11Am = storedToDos11Am;
    }
    renderToDos11Am();
    var storedToDos12Pm = JSON.parse(localStorage.getItem("toDos12Pm"));
    if (storedToDos12Pm != null) {
        toDos12Pm = storedToDos12Pm;
    }
    renderToDos12Pm();
    var storedToDos1Pm = JSON.parse(localStorage.getItem("toDos1Pm"));
    if (storedToDos1Pm != null) {
        toDos1Pm = storedToDos1Pm;
    }
    renderToDos1Pm();
    var storedToDos2Pm = JSON.parse(localStorage.getItem("toDos2Pm"));
    if (storedToDos2Pm != null) {
        toDos2Pm = storedToDos2Pm;
    }
    renderToDos2Pm();
    var storedToDos3Pm = JSON.parse(localStorage.getItem("toDos3Pm"));
    if (storedToDos3Pm != null) {
        toDos3Pm = storedToDos3Pm;
    }
    renderToDos3Pm();
    var storedToDos4Pm = JSON.parse(localStorage.getItem("toDos4Pm"));
    if (storedToDos4Pm != null) {
        toDos4Pm = storedToDos4Pm;
    }
    renderToDos4Pm();
    var storedToDos5Pm = JSON.parse(localStorage.getItem("toDos5Pm"));
    if (storedToDos5Pm != null) {
        toDos5Pm = storedToDos5Pm;
    }
    renderToDos5Pm();
  }

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

  //10 AM variables and functions
  var toDoForm10AmEl = document.querySelector("#toDo-form10Am");
  var toDoList10AmEl = document.querySelector("#toDo-list10Am");
  var toDos10Am = [];
  var save10AmButton = document.querySelector("[data-timeblock='tenAm']");
  var toDoInput10Am = document.querySelector("#toDo10Am")

  //Renders any saved plans for the hour if they are stored
  function renderToDos10Am(){
    toDoList10AmEl.innerHTML = '';
    for (var i = 0; i < toDos10Am.length; i++){
        var toDo10Am = toDos10Am[i];
        var li = document.createElement("li");
        li.textContent = toDo10Am;
        li.setAttribute("data-index", i);
        toDoList10AmEl.appendChild(li);
    }
  }

  // Store to dos
  function storeToDos10Am() {
    localStorage.setItem("toDos10Am", JSON.stringify(toDos10Am));
  }

  save10AmButton.addEventListener("click", function(e){
    e.preventDefault();
    var toDoText = toDoInput10Am.value;
    if (toDoText ===""){
        return;
    }
    toDos10Am.push(toDoText);
    toDoInput10Am.value = "";
    storeToDos10Am();
    renderToDos10Am();
  })


  //11 AM variables and functions
  var toDoForm11AmEl = document.querySelector("#toDo-form11Am");
  var toDoList11AmEl = document.querySelector("#toDo-list11Am");
  var toDos11Am = [];
  var save11AmButton = document.querySelector("[data-timeblock='elevenAm']");
  var toDoInput11Am = document.querySelector("#toDo11Am")

  //Renders any saved plans for the hour if they are stored
  function renderToDos11Am(){
    toDoList11AmEl.innerHTML = '';
    for (var i = 0; i < toDos11Am.length; i++){
        var toDo11Am = toDos11Am[i];
        var li = document.createElement("li");
        li.textContent = toDo11Am;
        li.setAttribute("data-index", i);
        toDoList11AmEl.appendChild(li);
    }
  }

  // Store to dos
  function storeToDos11Am() {
    localStorage.setItem("toDos11Am", JSON.stringify(toDos11Am));
  }

  save11AmButton.addEventListener("click", function(e){
    e.preventDefault();
    var toDoText = toDoInput11Am.value;
    if (toDoText ===""){
        return;
    }
    toDos11Am.push(toDoText);
    toDoInput11Am.value = "";
    storeToDos11Am();
    renderToDos11Am();
  })

  //12pm variables and functions
  var toDoForm12PmEl = document.querySelector("#toDo-form12Pm");
  var toDoList12PmEl = document.querySelector("#toDo-list12Pm");
  var toDos12Pm = [];
  var save12PmButton = document.querySelector("[data-timeblock='twelvePm']");
  var toDoInput12Pm = document.querySelector("#toDo12Pm")

  //Renders any saved plans for the hour if they are stored
  function renderToDos12Pm(){
    toDoList12PmEl.innerHTML = '';
    for (var i = 0; i < toDos12Pm.length; i++){
        var toDo12Pm = toDos12Pm[i];
        var li = document.createElement("li");
        li.textContent = toDo12Pm;
        li.setAttribute("data-index", i);
        toDoList12PmEl.appendChild(li);
    }
  }

  // Store to dos
  function storeToDos12Pm() {
    localStorage.setItem("toDos12Pm", JSON.stringify(toDos12Pm));
  }

  save12PmButton.addEventListener("click", function(e){
    e.preventDefault();
    var toDoText = toDoInput12Pm.value;
    if (toDoText ===""){
        return;
    }
    toDos12Pm.push(toDoText);
    toDoInput12Pm.value = "";
    storeToDos12Pm();
    renderToDos12Pm();
  })


  //1pm variables and functions
  var toDoForm1PmEl = document.querySelector("#toDo-form1Pm");
  var toDoList1PmEl = document.querySelector("#toDo-list1Pm");
  var toDos1Pm = [];
  var save1PmButton = document.querySelector("[data-timeblock='onePm']");
  var toDoInput1Pm = document.querySelector("#toDo1Pm")

  //Renders any saved plans for the hour if they are stored
  function renderToDos1Pm(){
    toDoList1PmEl.innerHTML = '';
    for (var i = 0; i < toDos1Pm.length; i++){
        var toDo1Pm = toDos1Pm[i];
        var li = document.createElement("li");
        li.textContent = toDo1Pm;
        li.setAttribute("data-index", i);
        toDoList1PmEl.appendChild(li);
    }
  }

  // Store to dos
  function storeToDos1Pm() {
    localStorage.setItem("toDos1Pm", JSON.stringify(toDos1Pm));
  }

  save1PmButton.addEventListener("click", function(e){
    e.preventDefault();
    var toDoText = toDoInput1Pm.value;
    if (toDoText ===""){
        return;
    }
    toDos1Pm.push(toDoText);
    toDoInput1Pm.value = "";
    storeToDos1Pm();
    renderToDos1Pm();
  })


  //2pm variables and functions
  var toDoForm2PmEl = document.querySelector("#toDo-form2Pm");
  var toDoList2PmEl = document.querySelector("#toDo-list2Pm");
  var toDos2Pm = [];
  var save2PmButton = document.querySelector("[data-timeblock='twoPm']");
  var toDoInput2Pm = document.querySelector("#toDo2Pm")

  //Renders any saved plans for the hour if they are stored
  function renderToDos2Pm(){
    toDoList2PmEl.innerHTML = '';
    for (var i = 0; i < toDos2Pm.length; i++){
        var toDo2Pm = toDos2Pm[i];
        var li = document.createElement("li");
        li.textContent = toDo2Pm;
        li.setAttribute("data-index", i);
        toDoList2PmEl.appendChild(li);
    }
  }

  // Store to dos
  function storeToDos2Pm() {
    localStorage.setItem("toDos2Pm", JSON.stringify(toDos2Pm));
  }

  save2PmButton.addEventListener("click", function(e){
    e.preventDefault();
    var toDoText = toDoInput2Pm.value;
    if (toDoText ===""){
        return;
    }
    toDos2Pm.push(toDoText);
    toDoInput2Pm.value = "";
    storeToDos2Pm();
    renderToDos2Pm();
  })

  //3pm variables and functions
  var toDoForm3PmEl = document.querySelector("#toDo-form3Pm");
  var toDoList3PmEl = document.querySelector("#toDo-list3Pm");
  var toDos3Pm = [];
  var save3PmButton = document.querySelector("[data-timeblock='threePm']");
  var toDoInput3Pm = document.querySelector("#toDo3Pm")

  //Renders any saved plans for the hour if they are stored
  function renderToDos3Pm(){
    toDoList3PmEl.innerHTML = '';
    for (var i = 0; i < toDos3Pm.length; i++){
        var toDo3Pm = toDos3Pm[i];
        var li = document.createElement("li");
        li.textContent = toDo3Pm;
        li.setAttribute("data-index", i);
        toDoList3PmEl.appendChild(li);
    }
  }

  // Store to dos
  function storeToDos3Pm() {
    localStorage.setItem("toDos3Pm", JSON.stringify(toDos3Pm));
  }

  save3PmButton.addEventListener("click", function(e){
    e.preventDefault();
    var toDoText = toDoInput3Pm.value;
    if (toDoText ===""){
        return;
    }
    toDos3Pm.push(toDoText);
    toDoInput3Pm.value = "";
    storeToDos3Pm();
    renderToDos3Pm();
  })


  //4pm variables and functions
  var toDoForm4PmEl = document.querySelector("#toDo-form4Pm");
  var toDoList4PmEl = document.querySelector("#toDo-list4Pm");
  var toDos4Pm = [];
  var save4PmButton = document.querySelector("[data-timeblock='fourPm']");
  var toDoInput4Pm = document.querySelector("#toDo4Pm")

  //Renders any saved plans for the hour if they are stored
  function renderToDos4Pm(){
    toDoList4PmEl.innerHTML = '';
    for (var i = 0; i < toDos4Pm.length; i++){
        var toDo4Pm = toDos4Pm[i];
        var li = document.createElement("li");
        li.textContent = toDo4Pm;
        li.setAttribute("data-index", i);
        toDoList4PmEl.appendChild(li);
    }
  }

  // Store to dos
  function storeToDos4Pm() {
    localStorage.setItem("toDos4Pm", JSON.stringify(toDos4Pm));
  }

  save4PmButton.addEventListener("click", function(e){
    e.preventDefault();
    var toDoText = toDoInput4Pm.value;
    if (toDoText ===""){
        return;
    }
    toDos4Pm.push(toDoText);
    toDoInput4Pm.value = "";
    storeToDos4Pm();
    renderToDos4Pm();
  })


  //5pm variables and functions
  var toDoForm5PmEl = document.querySelector("#toDo-form5Pm");
  var toDoList5PmEl = document.querySelector("#toDo-list5Pm");
  var toDos5Pm = [];
  var save5PmButton = document.querySelector("[data-timeblock='fivePm']");
  var toDoInput5Pm = document.querySelector("#toDo5Pm")

  //Renders any saved plans for the hour if they are stored
  function renderToDos5Pm(){
    toDoList5PmEl.innerHTML = '';
    for (var i = 0; i < toDos5Pm.length; i++){
        var toDo5Pm = toDos5Pm[i];
        var li = document.createElement("li");
        li.textContent = toDo5Pm;
        li.setAttribute("data-index", i);
        toDoList5PmEl.appendChild(li);
    }
  }

  // Store to dos
  function storeToDos5Pm() {
    localStorage.setItem("toDos5Pm", JSON.stringify(toDos5Pm));
  }

  save5PmButton.addEventListener("click", function(e){
    e.preventDefault();
    var toDoText = toDoInput5Pm.value;
    if (toDoText ===""){
        return;
    }
    toDos5Pm.push(toDoText);
    toDoInput5Pm.value = "";
    storeToDos5Pm();
    renderToDos5Pm();
  })

  init()
  classifyPastPresentFuture ()
})