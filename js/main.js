window.onload = function() {
  const burgerMenuIcon = document.getElementById('burger-menu-icon');
  const navigation = document.getElementById('navigation');
  const menu = document.getElementById('menu');
  const burgerMenuIconItems = burgerMenuIcon.querySelectorAll('.burger-menu-icon__line');
  const documentBody = document.getElementById('body');
  const readMoreCompanies = document.getElementById('read-more--companies');
  const companiesList = document.getElementsByClassName('companies-list__item');

  // MOBILE
  // JAVASCRIPT
  if (window.innerWidth <= 1366){
    navigation.addEventListener("click", mobileMenu, false);
    readMoreCompanies.addEventListener("click", toggleMoreCompanies, false);
    for (var i=3; i<companiesList.length; i++) {
      companiesList[i].style.display = "none";
    }
    companiesList[2].style.marginBottom = "0";
  }
  // Detects what elements was clicked when event listener was triggered and calls up toggle mobile menu function
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
  // Toggle more companies function which is triggered by event listener if window.innerWidth <= 1366px
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
  // Mobile menu function which toggles every class needed for menu open/close state. It is called in mobile menu function
  function mobileMenuToggle(){
    documentBody.classList.toggle('no-scroll');
    burgerMenuIcon.classList.toggle('burger-menu-icon--slide-in');
    navigation.classList.toggle('navigation--slide-in');
    menu.classList.toggle('menu--slide-in');
    for (var i = 0; i < burgerMenuIconItems.length; i++) {
      burgerMenuIconItems[i].classList.toggle('burger-menu-icon__line--slide-in');
    }
  }

  // Smooth Scroll
  const linksToAnchors = document.querySelectorAll('a[href^="#"]');
  linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

  function anchorLinkHandler(e) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top)-200;
    e.preventDefault();
    const targetID = this.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);

    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = "-1";
            clearInterval(checkIfDone);
        }
    }, 100);
}
}
