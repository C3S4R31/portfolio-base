const toggleMenu = () => {
    const menuDropdown = document.querySelector('.header__menu')
    const menuIcon = document.querySelector('.header__button i')  
    
    menuDropdown.classList.toggle('menu-hidden')

    if(menuDropdown.classList.contains('menu-hidden')){
        menuIcon.classList.remove('fa-xmark')
        menuIcon.classList.add('fa-bars')        
    }else{
        menuIcon.classList.remove('fa-bars')
        menuIcon.classList.add('fa-xmark')        
    }    
    
}

