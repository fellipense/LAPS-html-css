const sections = document.querySelectorAll("section");
const navs = document.querySelectorAll(".nav-link");

const avaliacoes = document.querySelectorAll(".avaliacoes *");

avaliacoes.forEach((item) => {
    item.setAttribute("tabindex", "-1")
})

window.addEventListener("scroll", () => {
    const currentYscroll = window.scrollY;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - sectionHeight/2;
        const id = section.getAttribute("id");
        const currentNavLink = document.querySelector(`.navbar a[href*="#${id}"]`);
        
        if (currentNavLink != null && currentYscroll > sectionTop && currentYscroll <= sectionTop + sectionHeight) {
            currentNavLink.classList.add("active");
        } else if (currentNavLink != null) {
            currentNavLink.classList.remove("active");
        }
    })
});