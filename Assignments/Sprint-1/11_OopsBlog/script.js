class Blog {
  constructor(title, details) {
    this.title = title;
    this.details = details;
    this.addTitle();
    this.addDescription();
  }
  //creating Heading element and that display the title of blog
  addTitle() {
    var title_card = document.createElement("h1");
    title_card.setAttribute("id", "blog-tile");
    document.getElementById("card-text").appendChild(title_card);
    title_card.innerHTML = this.title;
    console.log(title_card);
  }
  //creating paragraph element and that display the description of blog
  addDescription() {
    var description_card = document.createElement("p");
    description_card.setAttribute("id", "blog-desc");
    document.getElementById("card-text").appendChild(description_card);
    description_card.innerHTML = this.details;
    console.log(description_card);
  }
}
//display the form when clicking the button add Post
var open1 = document.getElementById("addBlog");
if (open1) {
  open1.addEventListener("click", function () {
    document.getElementById("popupContact").style.display = "block";
  });
}
//close the form when clicking close button
var exit1 = document.getElementById("close");
if (exit1) {
  exit1.addEventListener("click", function () {
    document.getElementById("popupContact").style.display = "none";
  });
}
//display the blog when clicking post button
var post1 = document.getElementById("post");
if (post1) {
  post1.addEventListener("click", function () {
    document.getElementById("popupContact").style.display = "none";
    var $img = document.createElement("img");
    $img.setAttribute("src", "./assets/java card image.svg");
    document.getElementById("card-text").appendChild($img);
    var $title = document.getElementById("title").value;
    var $detail = document.getElementById("detail").value;
    var object1 = new Blog($title, $detail);
  });
}
