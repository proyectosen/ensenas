window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY > 0)
    })
    
    
     // Seleccionar todos los elementos de navegación y secciones
     const navItems = document.querySelectorAll('.nav1, .nav2, .nav3, .nav4');
     const sections = document.querySelectorAll('section');
    
     // Función para manejar el cambio de clase activa en el navbar
     function setActiveNav() {
         let index = -1;
         sections.forEach((section, i) => {
             const rect = section.getBoundingClientRect();
             if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                 index = i;
             }
         });
    
         if (index !== -1) {
             // Eliminar la clase 'active' de todos los enlaces
             navItems.forEach(item => item.classList.remove('active'));
             // Añadir la clase 'active' al enlace correspondiente
             navItems[index].classList.add('active');
         }
     }
    
     // Asignar el manejador del evento 'scroll' a la ventana
     window.addEventListener('scroll', setActiveNav);
    
     // Función para manejar el clic en el navbar
     function handleClick(event) {
         event.preventDefault();
    
         // Eliminar la clase 'active' de todos los elementos
         navItems.forEach(item => item.classList.remove('active'));
    
         // Añadir la clase 'active' al elemento clickeado
         event.currentTarget.classList.add('active');
    
         // Navegar a la sección correspondiente
         const targetId = event.currentTarget.getAttribute('href').substring(1);
         const targetSection = document.getElementById(targetId);
         targetSection.scrollIntoView({ behavior: 'smooth' });
     }
    
     // Asignar el manejador del evento 'click' a cada elemento de navegación
     navItems.forEach(item => item.addEventListener('click', handleClick));
     
     // Inicializar la clase activa al cargar la página
     setActiveNav();