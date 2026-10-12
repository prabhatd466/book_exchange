
function changeTitle() {
  document.getElementById("home-title").textContent = "Find Free Books Here!";
}

function changeCardColor() {
  var card = document.getElementById("card-one");
  card.style.backgroundColor = "lightyellow";
}

function toggleBooks() {
  var section = document.getElementById("books-section");
  section.classList.toggle("hidden");
}

function requestBook(buttonId) {
  var btn = document.getElementById(buttonId);
  btn.textContent = "Request Sent";
  document.getElementById("request-message").textContent = "Request sent successfully!";
}

function showEnteredTitle() {
  var title = document.getElementById("search-input").value;
  var msg = document.getElementById("search-result");

  if (title === "") {
    msg.textContent = "Please enter a book title!";
    msg.style.color = "red";
  } else {
    msg.textContent = "You selected: " + title + ". Book found!";
    msg.style.color = "green";
  }
}

function styleFirstBook() {
  var firstBook = document.getElementById("browse-card-1");
  firstBook.style.backgroundColor = "#e0f2fe";
  firstBook.style.border = "2px solid blue";
}


function changeFontSize() {
  document.getElementById("form-heading").style.fontSize = "32px";
}

function toggleForm() {
  var form = document.getElementById("form-box");
  form.classList.toggle("hidden");
}

function submitBook() {
  var sName = document.getElementById("name").value;
  var bTitle = document.getElementById("title").value;
  var bAuthor = document.getElementById("author").value;
  var bCategory = document.getElementById("category").value;
  var bCondition = document.getElementById("condition").value;
  var result = document.getElementById("form-result");

  if (sName === "" || bTitle === "" || bAuthor === "" || bCategory === "" || bCondition === "") {
    result.textContent = "Please fill in all fields.";
    result.style.color = "red";
  } else {
    result.textContent = "Thank you, " + sName + "! You added " + bTitle + ".";
    result.style.color = "green";
  }
}