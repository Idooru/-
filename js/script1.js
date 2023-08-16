import books from "./booklist.js";

const $list = $(".list");
const $span = $("#content h2 span");
const $newbook = $("#newbook");
const $close = $("#newbook form .close");
const $add = $("#newbook form .add");
const $input = $("#newbook form div:nth-child(1) input");

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
  $list.html(bookList);
};

drawbooks();

$span.on("click", function () {
  $newbook.addClass("on");
});

$close.on("click", function () {
  $newbook.removeClass("on");
});

$add.on("click", function () {
  let flag = true;

  $input.each(function () {
    if (!$(this).val()) {
      flag = false;
    }
  });

  if (!flag) {
    alert("모든 값을 넣어주세요!");
    return;
  }

  const newlist = {
    subject: $("form input").eq(0).val(),
    author: $("form input").eq(1).val(),
    publisher: $("form input").eq(2).val(),
    date: $("form input").eq(3).val(),
    price: $("form input").eq(4).val(),
    summary: $("form input").eq(5).val(),
    photo: $("form input").eq(6).val(),
  };

  books.push(newlist);
  drawbooks();
});

$("#content .list").on("click", "ul li p button", function () {
  let num = $(this).parent().parent().parent().index();
  books.splice(num, 1);
  drawbooks();
});
