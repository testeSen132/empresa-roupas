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
  