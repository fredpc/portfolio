const btn = document.getElementById('to-top-btn');

window.onscroll = function () {
    if (document.documentElement.scrollTop || document.body.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function toTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; /* To Safari */
}