window.onload = function() {
  var burgerMenuIcon = document.getElementById('burger-menu-icon');
  var navigation = document.getElementById('navigation');
  var menu = document.getElementById('menu');
  addEventListener("click", mobileMenu, false);
  function mobileMenu(){
    burgerMenuIcon.classList.toggle('burger-menu-icon--slide-in');
    navigation.classList.toggle('navigation--slide-in');
    menu.classList.toggle('menu--slide-in');
  };
};
