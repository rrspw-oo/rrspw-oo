/*switchTheme*/
const themeSwitchBtn = document.getElementById("themeSwitchBtn");
const root = document.documentElement;
themeSwitchBtn.addEventListener("click", () => {
  toggleTheme();
  toggleButton();
});

function toggleTheme() {
  root.classList.toggle("firstTheme");
  root.classList.toggle("secondTheme");
  themeSwitchBtn = root.classList.contains("firstTheme")
    ? "secondTheme"
    : "firstTheme";
}

function toggleButton() {
  themeSwitchBtn.classList.toggle("on");
}
window.addEventListener("load", function () {
  let liElements = document.querySelectorAll("li");

  function showContent(contentId) {
    let contentToShow = document.getElementById(contentId);
    if (!contentToShow.classList.contains("hidden")) {
      // If content is already displayed, hide it
      contentToShow.classList.add("hidden");
    } else {
      // Otherwise, hide other contents and display the clicked content
      let contents = document.querySelectorAll(".main-content > div");
      contents.forEach(function (content) {
        content.classList.add("hidden");
      });
      contentToShow.classList.remove("hidden");
    }
  }

  liElements.forEach(function (li) {
    li.addEventListener("click", function () {
      let clickedLi = this;
      clickedLi.classList.toggle("mosaic");

      if (clickedLi.classList.contains("mosaic")) {
        clickedLi.style.color = "--text-color";
      } else {
        clickedLi.style.color = "";
      }

      liElements.forEach(function (element) {
        if (element !== clickedLi) {
          element.classList.remove("mosaic");
          element.style.color = "";
        }
      });

      let contentId = clickedLi.dataset.content;

      showContent(contentId);
    });
  });
});

/*mouse*/

document.addEventListener("mousemove", function (e) {
  var trail = document.createElement("div");
  trail.classList.add("trail");
  trail.style.backgroundColor = getRandomColor();
  trail.style.left = e.clientX - 5 + "px";
  trail.style.top = e.clientY - 5 + "px";
  document.body.appendChild(trail);

  setTimeout(function () {
    trail.remove();
  }, 300);
});

function getRandomColor() {
  var colors = ["#ff6200", "#adff2f", "#cfecef"];
  return colors[Math.floor(Math.random() * colors.length)];
}
/* textEffect */
const gsTitle = {
  init() {
    this._root = document.querySelector("#Title");
    this._titles = this._root.querySelectorAll(".Title-title");
    this._frame = this._frame.bind(this);
    this.setTexts(["[R_R]", "rEn", "REN!", "roɔweiwu"]);
  },
  on() {
    if (!this._frameId) {
      this._frame();
    }
  },
  off() {
    clearTimeout(this._frameId);
    this._textContent(this._text);
    delete this._frameId;
  },
  setTexts([text, ...alt]) {
    this._text = text;
    this._textAlt = alt;
  },

  // private:
  _text: "",
  _textAlt: [],
  _rand(n) {
    return (Math.random() * n) | 0;
  },
  _textContent(txt) {
    this._titles.forEach((el) => (el.textContent = txt));
  },
  _frame() {
    const txt = Array.from(this._text);

    for (let i = 0; i < 6; ++i) {
      const ind = this._rand(this._text.length);

      txt[ind] = this._textAlt[this._rand(this._textAlt.length)][ind];
    }
    this._textContent(txt.join(""));
    this._root.classList.add("Title-glitch");
    setTimeout(() => {
      this._textContent(this._text);
      this._root.classList.remove("Title-glitch");
    }, 50 + Math.random() * 200);
    this._frameId = setTimeout(this._frame, 250 + Math.random() * 500);
  },
};

gsTitle.init();
gsTitle.on();
