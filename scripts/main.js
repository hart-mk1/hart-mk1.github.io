const listItems = document.querySelectorAll("li");
const myImage = document.querySelector("img");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if(mySrc === "images/computer.png") {
    myImage.setAttribute("src", "images/STAG.png");
  } else {
    myImage.setAttribute("src", "images/computer.png");
  }
});

let myHeading = document.querySelector("h3");
let myButton = document.querySelector("button");

function setUserName() {
  let myName = prompt("Enter your name: ");
  if(!myName){
    setUserName();
  } else {
  localStorage.setItem("name", myName);
  myHeading.textContent = 'Welcome to STAG, ' + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = 'Welcome to STAG, ' + storedName;
}

myButton.addEventListener("click", () => {
  setUserName();
});