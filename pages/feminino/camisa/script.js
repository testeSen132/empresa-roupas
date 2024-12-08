function trocarImagem() {
    var imagem = document.getElementById("imagem");
    
    // Verificar qual imagem está sendo exibida e trocar
    if (imagem.src.match("imagem1")) {
        imagem.src = "imagens/"; // Substitua pelo caminho da sua segunda imagem
    } else {
        imagem.src = "imagem1.jpg"; // Substitua pelo caminho da sua primeira imagem
    }
}


const add = document.getElementById("plus")
const sub = document.getElementById("minus")
const count = document.getElementById("counter")

let myCount = 0

add.addEventListener("click", ()=>{
    myCount += 1
    count.innerText = myCount
})

sub.addEventListener("click", ()=>{

    if(myCount >= 1){
        myCount -= 1
        count.innerText = myCount    
    }

})

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
  