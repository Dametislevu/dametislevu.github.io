window.onload = function() {
  const burgerMenuIcon = document.getElementById('burger-menu-icon');
  const navigation = document.getElementById('navigation');
  const menu = document.getElementById('menu');
  const burgerMenuIconItems = burgerMenuIcon.querySelectorAll('.burger-menu-icon__line');

  function mobileMenuToggle(){
    burgerMenuIcon.classList.toggle('burger-menu-icon--slide-in');
    navigation.classList.toggle('navigation--slide-in');
    menu.classList.toggle('menu--slide-in');
    for (var i = 0; i < burgerMenuIconItems.length; i++) {
      burgerMenuIconItems[i].classList.toggle('burger-menu-icon__line--slide-in');
    }
  }

  if (window.innerWidth <= 1366){
    navigation.addEventListener("click", mobileMenu, false);
    function mobileMenu(e){
      if (menu.classList.contains('menu--slide-in')){
        if (e.target.nodeName == "A"){
          mobileMenuToggle();
        }
        else if (e.target.classList.contains('burger-menu-icon')){
          mobileMenuToggle();
        }
        else if (e.target.classList.contains('burger-menu-icon__line')){
          mobileMenuToggle();
        }
      }
      else {
        mobileMenuToggle();
      }
    }
  }
}
