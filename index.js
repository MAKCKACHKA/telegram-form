let tg = {
  token: "6866127779:AAG0vQHDIjHGP5FE3CsO6hfDQsu2Nuahh7o",
  chat_id: "@formTestMessages",
};

function sendMessage(text) {
  const url = `https://api.telegram.org/bot${tg.token}/sendMessage`;

  const obj = {
    chat_id: tg.chat_id,
    text: text,
  };

  const xht = new XMLHttpRequest();
  xht.open("POST", url, true);
  xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xht.send(JSON.stringify(obj));
}

const email = document.getElementById("email");
const phone = document.getElementById("phone");
const comments = document.getElementById("comments");
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  sendMessage(
    `email: ${email.value}\nnumber: ${phone.value}\ncomment: ${comments.value}\n`
  );

  alert("Глянь в чат");
  form.reset();
});
