let baGss = document.getElementById("bag");
let baDs = document.getElementById("bags");
let home = document.getElementById("home");
let homeb = document.getElementById("homeb");
let coll = document.getElementById("collection");
let collb = document.getElementById("collb");
let collII = document.getElementById("coll-2");
let market = document.getElementById("market");
let marketb = document.getElementById("marketb");
let con = document.getElementById("contact");
let conb = document.getElementById("conb");


baGss.onclick = function() {
    home.classList.add("bags");
    coll.classList.add("bags");
    collII.classList.add("bags");
    market.classList.add("bags");
    con.classList.add("bags");
    baDs.classList.remove("bags");
    baDs.classList.add("active");
};

homeb.onclick = function() {
    home.classList.remove("bags");
    coll.classList.remove("bags");
    collII.classList.remove("bags");
    market.classList.remove("bags");
    con.classList.remove("bags");
};

collb.onclick = function() {
    baDs.classList.add("bags");
    coll.classList.remove("bags");
    collII.classList.remove("bags");
    market.classList.add("bags");
    home.classList.add("bags");
    con.classList.add("bags");
};

marketb.onclick = function() {
    market.classList.remove("bags");
    baDs.classList.add("bags");
    coll.classList.remove("bags");
    collII.classList.remove("bags");
    home.classList.add("bags");
    con.classList.add("bags");
    coll.classList.add("bags");
    collII.classList.add("bags");
};

conb.onclick = function() {
    home.classList.remove("bags");
    coll.classList.remove("bags");
    collII.classList.remove("bags");
    market.classList.remove("bags");
    con.classList.remove("bags");
};
