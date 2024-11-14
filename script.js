// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Active Link Highlighting in Navbar as You Scroll
window.onscroll = function() {
    // Active Link Highlighting in Navbar
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar ul li a");

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // Adjust for navbar height
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href").substring(1) === section.getAttribute("id")) {
                    link.classList.add("active");
                }
            });
        }
    });
};

// Scroll to Top when Home Link (#top) is Clicked
document.querySelector('a[href="#top"]').addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
