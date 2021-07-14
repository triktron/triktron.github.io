window.addEventListener("load", function() {
  document.querySelectorAll('video').forEach((vid, i) => {
    vid.parentElement.addEventListener("mouseover", () => vid.play());
  });

  document.querySelectorAll('video').forEach((vid, i) => {
    vid.parentElement.addEventListener("mouseleave", () => vid.pause());
  });
});
