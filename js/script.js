const factHolder = document.querySelector(".fact");
const newBtn = document.querySelector(".new");

fetch("https://gereksiz-bilgiler-api.herokuapp.com/").then(response => response.json())
.then(data => {
    factHolder.innerText = data.fact;
})
.catch(err => {
    console.log(err);
});

newBtn.addEventListener("click", () => {
    location.reload();
});