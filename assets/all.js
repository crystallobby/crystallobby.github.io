(async () => {
    // kod hujowy pewnie ale shut the fuck up babe
    // ~olafciooox
    const html = document.documentElement;
    addEventListener("scroll", ev => {
        if (ev.target == document) {
            html.classList.toggle("scrolled", !!html.scrollTop);
            html.style.setProperty("--scrolltop", html.scrollTop + "px");
        }
    }, true);
})();
