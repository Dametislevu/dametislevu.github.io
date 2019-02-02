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

  // SMOOTH
  // SCROLL
  const linksToAnchors = document.querySelectorAll('a[href^="#"]');
  linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

  function anchorLinkHandler(e) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top)-100;
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

  // PARALLAX
  // EFFECTS 
  const categories = document.getElementById('categories');
  const companies = document.querySelector('.companies-list');
  const partnershipProgram = document.getElementById('partnership-program');
  const contact = document.querySelector('.socials');
  const faq = document.getElementById('faq');
  (() => {
    categories.classList.add('parallax');
    categories.style.transition = "all 500ms ease-in-out";
    companies.classList.add('parallax');
    companies.style.transition = "all 500ms ease-in-out"
    partnershipProgram.classList.add('parallax');
    partnershipProgram.style.transition = "all 500ms ease-in-out";
    contact.classList.add('parallax');
    faq.classList.add('parallax');
    contact.style.transition = "all 500ms ease-in-out"
    faq.style.transition = "all 500ms ease-in-out";
  })(); 
  window.addEventListener('scroll', e => {
    const categoriesPosition = categories.getBoundingClientRect();
    const companiesPosition = companies.getBoundingClientRect();
    const partnershipProgramPosition = partnershipProgram.getBoundingClientRect();
    const contactPosition = contact.getBoundingClientRect();
    const faqPosition = faq.getBoundingClientRect();

    if (window.innerHeight / 1.35 > categoriesPosition.top) {
      categories.classList.remove('parallax');
    };
    if (window.innerHeight / 1.35 > companiesPosition.top) {
      companies.classList.remove('parallax');
    };
    if (window.innerHeight / 1.35 > partnershipProgramPosition.top){
      partnershipProgram.classList.remove('parallax');
    };
    if (window.innerHeight / 1.35 > contactPosition.top) {
      contact.classList.remove('parallax');
    };
    if (window.innerHeight / 1.35 > faqPosition.top){
      faq.classList.remove('parallax');
    };
  });
}


