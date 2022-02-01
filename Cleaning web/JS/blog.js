const navSlide  = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links')
 const navLinks  = document.querySelectorAll('.nav-links li')

   // toggle nav
  burger.addEventListener('click', ()=> { 

          nav.classList.toggle('nav-active')

          //Animate Slides
          navLinks.forEach((links,index) => {
              if(links.style.animation){
                  links.style.animation = ''
              }
              else{
                  links.style.animation = ` nav-link-fade 0.5s ease-in-out forwards ${index/7 + 1}s`
      
              }

          });

          burger.classList.toggle('toggle')
      
  })

     
 
}


navSlide();