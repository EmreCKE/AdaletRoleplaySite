window.addEventListener("scroll", function() {
    if (window.scrollY > 40) {
        document.querySelector("#navbar").style.opacity = 0.8;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});

$("#navbar a,  .btn").on("click", function(event) {
    if (this.hash != "") {
        event.preventDefault();
        const hash = this.hash;

        $("html, body").animate({
                scrollTop: $(hash).offset().top - 100
            },
            1200
        );
    }
});