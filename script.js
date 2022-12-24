

const hamburger = document.getElementById('hamburger');
const menuMobile = document.getElementsByClassName('menu-mobile')[0];
counter = 0;




  showMenu = ()=>{
    if(menuMobile.style.display == "none"){
        menuMobile.style.display = "flex"
        hamburger.style.display = "none"

       
        
    } else {
        menuMobile.style.display = "none"
        hamburger.style.display = "inital"
    }
   counter += 1;
    console.log(`${this.counter} cliques`)
}
  
