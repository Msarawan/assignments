var c = 1;
const showData = (start) => {
  setTimeout(() => {
    addCard(start);
  }, 300);
};
const addCard = (start) => {
  let element = document.querySelector(".timeline");
  let count = element.children;
  console.log(start);
  count[start].style.display = "block";
};
window.addEventListener("scroll", () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  if (clientHeight + scrollTop >= scrollHeight) {
    // console.log("I am at bottom");
    // console.log(c);
    showData(c);
    c++;
    showData(c);
    c++;
  }
});

function displayContent() {
  document.getElementById("last-content").style.display = "block";
}

function removeContent(id) {
  document.getElementById("last-content").style.display = "none";
}
function displayContent1() {
  document.getElementById("first-content").style.display = "block";
}

function removeContent1() {
  document.getElementById("first-content").style.display = "none";
}
