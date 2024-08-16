function navegacaoTabs() {
    const tabMenu = document.querySelectorAll(".js-tabmenu li");
    const tabContent = document.querySelectorAll(".js-tabcontent section");
    tabContent[0].classList.add("ativo");
  
    if (tabMenu.length && tabContent.length) {
      function activeTab(index) {
        tabContent.forEach((section) => {
          section.classList.remove("ativo");
        });
        tabContent[index].classList.add("ativo");
      }
  
      tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener("click", function () {
          activeTab(index);
        });
      });
    }
  }
  navegacaoTabs();
  
  function initAccord() {
    const accordionList = document.querySelectorAll(".js-accordion dt");
    const ativoClass = "ativo";
    accordionList[0].classList.add(ativoClass);
    accordionList[0].nextElementSibling.classList.add(ativoClass);
  
    if (accordionList.length) {
      function activeAccordion() {
        this.classList.toggle(ativoClass);
        this.nextElementSibling.classList.toggle("ativo");
      }
  
      accordionList.forEach((item) => {
        item.addEventListener("click", activeAccordion);
      });
    }
  }
  initAccord();
  
  function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      const topo = section.offsetTop;
  
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    /* Forma Alternativa */
    //  Primeiro Parâmetro - eixo x - segundo: eixo y
    //     window.scrollTo({
    //         top: topo,
    //         behavior: "smooth",
    //     });
    // }
  
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
  
  function initAnimaScroll() {
    const sections = document.querySelectorAll(".js-scroll");
    sections[0].classList.add("ativo");
  
    if (sections.length) {
      const windowMetade = window.innerHeight * 0.6;
  
      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = sectionTop - windowMetade < 0;
          if (isSectionVisible) {
            section.classList.add("ativo");
          }
        });
      }
    }
  
    window.addEventListener("scroll", animaScroll);
  }
  initAnimaScroll();
  