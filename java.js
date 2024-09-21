let myBtn = document.querySelector("button");
let mySelectFrom = document.querySelector(".selectFrom");
let mySelectTo = document.querySelector(".selectTo");
let myAreaFrom = document.querySelector(".areaFrom");
let myAreaTo = document.querySelector(".areaTo");

for (lang in countries) {
  lang_option = `<option  value=${lang}>${countries[lang]}</option>`;

  mySelectFrom.innerHTML += lang_option;
  mySelectTo.innerHTML += lang_option;
}

myBtn.addEventListener("click", () => {
  if (myAreaFrom.value == "") {
    myAreaTo.value = "";
  } else {
    fetch(
      `https://api.mymemory.translated.net/get?q=${myAreaFrom.value}&langpair=${mySelectFrom.value}|${mySelectTo.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        myAreaTo.value = data.responseData.translatedText;
        // console.log(data.responseData.translatedText);
      });
  }
});
