function movePoint(event) {
  let secondHeart = document.getElementById("second-heart");
  let rect = secondHeart.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  let line = document.getElementsByClassName("line");

  for(let i=0; i<line.length;i++) {
    line[i].setAttribute("x2", x);
    line[i].setAttribute("y2", y);
  }
}

/*
function leave() {
    let line = document.getElementsByClassName("line");

  for(let i=0; i<line.length;i++) {
    line[i].setAttribute("x2", "calc(50% - 2px)");
    line[i].setAttribute("y2", "calc(50% - 2px)");
  }
}
*/
