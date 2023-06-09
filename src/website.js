import createContact from './contact'
import createMenu from './menu'
import createHome from './home'


function createNav(){
    const nav = document.createElement('div');
    nav.className = "nav";
    const home = document.createElement('div');
    home.addEventListener("click", () => {
        home.classList.add('clicked');
        contact.classList.remove('clicked');
        menu.classList.remove('clicked');
        removeChilds();
        createHome();
      });
    home.innerText = 'HOME'
    const menu = document.createElement('div');
    menu.addEventListener("click", () => {
        menu.classList.add('clicked');
        contact.classList.remove('clicked');
        home.classList.remove('clicked');
        removeChilds();
        createMenu();
      });
    menu.innerText='MENU'
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.addEventListener("click", () => {
        contact.classList.add('clicked');
        menu.classList.remove('clicked');
        home.classList.remove('clicked');
        removeChilds();
        createContact();

      });
    contact.innerText="CONTACT"
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    return nav;
}


function createMain(){
    const main = document.createElement('div');
    main.className='main';
    const card = document.createElement('div');
    card.classList.add('card');
    main.appendChild(card);
    return main
}



  function initializeWebsite() {
    const content = document.getElementById("content");
    content.appendChild(createNav());
    content.appendChild(createMain());
    createHome()
    
  }

  function removeChilds(){
    const card = document.querySelector('.card');
    while (card.firstChild) {
        card.removeChild(card.lastChild);
      }
  }




  
  export default initializeWebsite;