import books from "./booklist.js";

const list = document.querySelector(".list");
const span = document.querySelector("#content h2 span");
const newbook = document.querySelector("#newbook");
const add = document.querySelector("#newbook form .add");
const inputs = document.querySelectorAll(
  "#newbook form div:nth-child(1) input"
);
const close = document.querySelector("#newbook form .close");
let buttons = [];

const drawbooks = () => {
  let bookList = "<ul>";

  for (let i = 0; i < books.length; i++) {
    bookList += "<li>";
    bookList += "<div>";
    bookList += `<p>
                    <img src="./images/${books[i].photo}" onerror="this.src='./images/noimage.gif'"
                    alt="${books[i].subject}">
                </p>`;
    bookList += `<p>${books[i].subject}</p>`;
    bookList += `<p>${books[i].author}</p>`;
    bookList += `<p>${books[i].publisher}</p>`;
    bookList += `<p>${books[i].date}</p>`;
    bookList += `<p>${books[i].price}</p>`;
    bookList += `<p>${books[i].summary}</p>`;
    bookList += `<p><button type="button">삭제</button></p>`;
    bookList += "</div>";
    bookList += "</li>";
  }

  bookList += "</ul>";
  list.innerHTML = bookList;

  buttons = document.querySelectorAll("#content .list ul li button");
};

drawbooks();

span.addEventListener("click", function () {
  newbook.classList.add("on");
});

close.addEventListener("click", function () {
  newbook.classList.remove("on");
});

add.addEventListener("click", function () {
  let flag = true;

  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      alert("값을 입력해주세요!");
      return false;
    }
  }

  if (flag) {
    let newlist = {
      subject: inputs[0].value,
      author: inputs[1].value,
      publisher: inputs[2].value,
      date: inputs[3].value,
      price: inputs[4].value,
      summary: inputs[5].value,
      photo: inputs[6].value,
    };
    books.push(newlist);
  }

  inputs.forEach((item) => (item.value = ""));

  drawbooks();
});

buttons.forEach((button) => {
  button.onclick = function () {
    this.parentNode.parentNode.remove();
  };
});
