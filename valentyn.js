const c = document.querySelector(".wrapper");
const b = document.querySelector(".no");
var myButton = document.getElementById('no-js');
var buttons = document.getElementById('yes');
var text = document.getElementById('text');
var img = document.getElementById('img');
var clickCount = 0;

function change() {
  const
    { width: cWidth, height: cHeight } = c.getBoundingClientRect(),
    { width: bWidth, height: bHeight } = b.getBoundingClientRect(),
    i = Math.floor(Math.random() * (cWidth - bWidth)) + 1,
    j = Math.floor(Math.random() * (cHeight - bHeight)) + 1;

  b.style.left = i + "px";
  b.style.top = j + "px";
}

myButton.addEventListener('click', function() {
    clickCount++;
    if (clickCount >= 10) {
        myButton.style.display = 'none';
        buttons.style.margin = 0;
        img.src = 'images/guncat.jpg'
        text.innerHTML = 'Snad jsem jasně řekl že ne není možnost!';
    } else if (clickCount >= 5) {
        text.innerHTML = 'Ale no tak, dostaneš i dobré papu meow';
    }
});

b.addEventListener("click", change);
