

document.body.style.overflow = 'hidden';


// Muestra la pantalla de carga al cargar la página
window.onload = function() {
    
    setTimeout(function() {
        
        document.getElementById('vertical-centered-box').style.display = 'none';
        document.body.style.overflow = '';
    }, 500); 

    
        window.scrollTo(0, 0); 

    
}

const stack = document.querySelector(".stack");
const cards = Array.from(stack.children)
  .reverse()
  .filter((child) => child.classList.contains("cardT"));

cards.forEach((card) => stack.appendChild(card));

function moveCard() {
  const lastCard = stack.lastElementChild;
  if (lastCard.classList.contains("cardT")) {
    lastCard.classList.add("swap");

    setTimeout(() => {
      lastCard.classList.remove("swap");
      stack.insertBefore(lastCard, stack.firstElementChild);
    }, 500);
  }
}

let autoplayInterval = setInterval(moveCard, 2000);

stack.addEventListener("click", function (e) {
  const card = e.target.closest(".cardT");
  if (card && card === stack.lastElementChild) {
    card.classList.add("swap");

    setTimeout(() => {
      card.classList.remove("swap");
      stack.insertBefore(card, stack.firstElementChild);
    }, 500);
  }
});






