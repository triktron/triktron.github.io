// window.addEventListener("resize", () => resize());
// resize();
//
// function resize() {
//   var colmns = Math.round(window.innerWidth / 450);
//       var cards = Array.from(document.querySelectorAll(".card_container"));
//       var container = document.querySelector(".layoutmasonry");
//       container.style["column-count"] = colmns;
//
//
//       cards.sort((a,b) => (Number(b.getAttribute("order")) || 0) - (Number(a.getAttribute("order")) || 0))
//
//       for (var column = 0; column < colmns; column++)
//           for (var i = 0; i < cards.length; i += colmns)
//             if (cards[i + column])
//               container.append(cards[i + column]);
// }


/* sweetScroll load */
document.addEventListener("DOMContentLoaded", function () {
  const sweetScroll = new SweetScroll({/* some options */});
}, false);

document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

document.querySelector(".req-fullscreen").addEventListener("click", () => {
  var elem = document.body;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
});
