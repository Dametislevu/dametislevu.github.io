window.onload = function() {
  const burgerMenuIcon = document.getElementById('burger-menu-icon');
  const navigation = document.getElementById('navigation');
  const menu = document.getElementById('menu');
  const burgerMenuIconItems = burgerMenuIcon.querySelectorAll('.burger-menu-icon__line');
  const documentBody = document.getElementById('body');
  const readMoreCompanies = document.getElementById('read-more--companies');
  const companiesList = document.getElementsByClassName('companies-list__item');

  function mobileMenuToggle(){
    documentBody.classList.toggle('no-scroll');
    burgerMenuIcon.classList.toggle('burger-menu-icon--slide-in');
    navigation.classList.toggle('navigation--slide-in');
    menu.classList.toggle('menu--slide-in');
    for (var i = 0; i < burgerMenuIconItems.length; i++) {
      burgerMenuIconItems[i].classList.toggle('burger-menu-icon__line--slide-in');
    }
  }

  if (window.innerWidth <= 1366){
    navigation.addEventListener("click", mobileMenu, false);
    readMoreCompanies.addEventListener("click", toggleMoreCompanies, false);
    for (var i=3; i<companiesList.length; i++) {
      companiesList[i].style.display = "none";
    }
    companiesList[2].style.marginBottom = "0";
    function mobileMenu(e){
      if (menu.classList.contains('menu--slide-in')){
        if (e.target.nodeName == "A"){
          mobileMenuToggle();}
        else if (e.target.classList.contains('burger-menu-icon')){
          mobileMenuToggle();}
        else if (e.target.classList.contains('burger-menu-icon__line')){
          mobileMenuToggle();}
      }
      else {
        mobileMenuToggle();}
    }
    
    function toggleMoreCompanies(){
      if (companiesList[4].style.display == "block"){
        companiesList[2].style.marginBottom = "0";
        for (var i=3; i<companiesList.length; i++) {
          companiesList[i].style.display = "none";
        }
      }
      else {
        companiesList[2].style.marginBottom = "40px";
        for (var i=3; i<companiesList.length; i++) {
          companiesList[i].style.display = "block";
        }
      }
    }
  }
}
