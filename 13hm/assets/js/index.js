"use strict";

const articles = [
  {
    title: "Watch Dogs: Початок історії",
    imageUrl: "assets/pic2.png",
    category: "Відеоігри",
    content:
      "Watch Dogs - це відома серія відкритого світу, розроблена і випущена компанією Ubisoft. Перша гра у серії вийшла 27 травня 2014 року і швидко стала популярною серед гравців. У грі гравець приймає роль хакера на ім'я Ейден Пірс, який має унікальні здібності в галузі комп'ютерної безпеки. Він має можливість взламувати електронні системи, включаючи мобільні телефони, камери спостереження та інші пристрої, щоб здійснювати різні місії та завдання. Watch Dogs вражає своїм відкритим світом Чікаго, який відтворений з великою увагою до деталей. Гравець може вільно рухатися по місту, взаємодіяти з NPC та виконувати різноманітні завдання.",
    date: "1 січня 2014",
  },
  {
    title: "Watch Dogs 2: Нові пригоди в Сан-Франциско",
    imageUrl: "assets/pic1.png",
    category: "Відеоігри",
    content:
      "Друга частина серії, Watch Dogs 2, вийшла 15 листопада 2016 року. Гравець у цій грі грає за Маркуса Голлоуєя, молодого та талановитого хакера з Окленда. Він приєднується до хакерської групи DedSec, щоб відстоювати свободу і конфіденційність громадян від тираничних корпорацій та урядових структур. Watch Dogs 2 переносить гравця до відкритого світу Сан-Франциско, який відтворений з вражаючою точністю. Гравець може експериментувати з різними хакерськими атаками, взаємодіяти з іншими персонажами гри та вивчати живий і реалістичний міст.",
    date: "15 листопада 2016",
  },
  {
    title: "Watch Dogs: Legion - Революція в Лондоні",
    imageUrl: "assets/pic3.png",
    category: "Відеоігри",
    content:
      "Watch Dogs: Legion, випущена 29 жовтня 2020 року, відзначається своєю унікальною системою рекрутації персонажів. У грі гравець може рекрутувати будь-яких NPC у великому Лондоні. Кожен персонаж має свою власну історію, навички та характеристики. Це відкриває безліч можливостей для гравця, оскільки він може вибрати персонажа, який найкраще відповідає його стильові гри. Гравець може використовувати хакерські можливості кожного персонажа для вирішення завдань і боротьби з корупцією в місті.",
    date: "29 жовтня 2020",
  },
  {
    title: "Майбутнє Watch Dogs: Що очікувати?",
    imageUrl: "assets/pic4.png",
    category: "Відеоігри",
    content:
      "Згідно з останніми новинами, розробники готуються до випуску нової гри у серії Watch Dogs. Хоча точні подробиці ще не розголошені, заочно можна очікувати ще більше захоплюючих пригод та революційних хакерських можливостей. Фанатів серії очікує захоплюючий світ, неймовірні інновації та безліч сюрпризів, які роблять Watch Dogs такою захоплюючою грою для гравців усього світу.",
    date: "20 листопада 2023",
  },
];
const article = articles.map((a) => createArticleNewsEl(a));
document.body.append(...article);

function createArticleNewsEl(articles) {
  const articleNewsEl = document.createElement("article");
  articleNewsEl.classList.add("articleNews");

  const headerEl = createHeaderElement();
  const titleEl = createTitle(articles);
  const likeIcon = createLikeIcon();
  const imgEl = createImg(articles);
  const categoryEl = createCategoryElement(articles);
  const contentEl = createContentElement(articles);
  const dateEl = createDateElement(articles);
  const deleteIcon = createDeleteIcon();
  headerEl.append(titleEl, likeIcon, imgEl);
  articleNewsEl.append(headerEl, categoryEl, contentEl, dateEl, deleteIcon);

  return articleNewsEl;
}

function createHeaderElement() {
  const headerEl = document.createElement("div");
  headerEl.classList.add("header");
  return headerEl;
}

function createTitle({ title }) {
  const titleEl = document.createElement("h1");
  titleEl.classList.add("article-title");
  titleEl.textContent = title;
  return titleEl;
}

function createLikeIcon() {
  const likeIcon = document.createElement("i");
  likeIcon.id = "like";
  likeIcon.classList.add("fa-solid", "fa-heart");
  likeIcon.style.color = "#f3f1f8";

  function likeArticle(e) {
    likeIcon.style.color = "#dbd053";
  }
  likeIcon.onclick = likeArticle;

  return likeIcon;
}

function createImg({ imageUrl, date }) {
  const imgEl = document.createElement("img");
  imgEl.src = imageUrl;
  imgEl.alt = `Game Image ${date}`;
  imgEl.classList.add("header-image");
  return imgEl;
}

function createCategoryElement({ category }) {
  const categoryEl = document.createElement("h2");
  categoryEl.classList.add("category");
  categoryEl.textContent = category;
  return categoryEl;
}

function createContentElement({ content }) {
  const contentEl = document.createElement("p");
  contentEl.classList.add("article-content");
  contentEl.textContent = content;
  return contentEl;
}

function createDateElement({ date }) {
  const dateEl = document.createElement("div");
  dateEl.classList.add("date");
  dateEl.textContent = `Дата: ${date}`;
  return dateEl;
}

function createDeleteIcon() {
  const deleteIcon = document.createElement("i");
  deleteIcon.id = "deletebtn";
  deleteIcon.classList.add("fa-solid", "fa-trash");
  deleteIcon.style.color = "#f3f1f8";

  function deleteArticle(e) {
    e.target.closest(".articleNews").remove();
  }
  deleteIcon.onclick = deleteArticle;

  return deleteIcon;
}
