var wrapper = document.querySelector(".layoutmasonry");
var cards = document.querySelectorAll(".card");
var cols = Number(wrapper.style["column-count"]);
var out = [];
var col = 0;

while(col < cols) {
    for (var i = 0; i < cards.length; i += cols) {
        var val = cards[i + col];
        if (val !== undefined)
            out.push(val);
    }
    col++;
}

console.log(out);

out.forEach(it=>wrapper.appendChild(it));
