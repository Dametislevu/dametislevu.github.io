window.onload = function() {
  const burgerMenuIcon = document.getElementById('burger-menu-icon');
  const navigation = document.getElementById('navigation');
  const menu = document.getElementById('menu');

  if (window.innerWidth <= 1366){
    navigation.addEventListener("click", mobileMenu, false);
    function mobileMenu(e){
      if (menu.classList.contains('menu--slide-in')){
        if (e.target.nodeName == "A"){
          burgerMenuIcon.classList.remove('burger-menu-icon--slide-in');
          navigation.classList.remove('navigation--slide-in');
          menu.classList.remove('menu--slide-in');
        }
        else if (e.target.classList.contains('burger-menu-icon')){
          burgerMenuIcon.classList.remove('burger-menu-icon--slide-in');
          navigation.classList.remove('navigation--slide-in');
          menu.classList.remove('menu--slide-in');
        }
      }
      else {
        burgerMenuIcon.classList.add('burger-menu-icon--slide-in');
        navigation.classList.add('navigation--slide-in');
        menu.classList.add('menu--slide-in');
      }
    }   
  }
}
