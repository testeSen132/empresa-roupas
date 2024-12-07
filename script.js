const lastElem = Scroller.lastElementChild;
const firstElem = Scroller.firstElementChild;

let isAtEnd;
let isAtStart;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      isAtEnd = entry.isIntersecting && lastElem === entry.target;
      isAtStart = entry.isIntersecting && firstElem === entry.target;
      updateControls();
    });
  },
  { root: Scroller, threshold: 0.5 }
);

observer.observe(lastElem);
observer.observe(firstElem);

function updateControls() {
  // If the document direction is right-to-left (RTL), swap the values of isAtStart and isAtEnd
  if (document.firstElementChild.getAttribute('dir') === 'rtl')
    [isAtStart, isAtEnd] = [isAtEnd, isAtStart];

  if (document.activeElement === nextBtn && isAtEnd) {
    prevBtn.focus();
  } else if (document.activeElement === prevBtn && isAtStart) {
    nextBtn.focus();
  }

  nextBtn.toggleAttribute('disabled', isAtEnd);
  prevBtn.toggleAttribute('disabled', isAtStart);
}


// responsividade header

document.addEventListener("DOMContentLoaded", () => {
  // Menu hamburguer
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Submenu toggle
  const submenuToggles = document.querySelectorAll(".submenu-toggle");

  submenuToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const currentSubmenu = toggle.nextElementSibling;

    document.querySelectorAll(".submenu").forEach((submenu) =>{
      if (submenu !== currentSubmenu){
        submenu.classList.remove("expanded")
      }
    })

      // fechar as outras categorias

      currentSubmenu.classList.toggle("expanded");
    });
  });
});
