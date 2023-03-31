

function createContact(){
  const card = document.querySelector('.card');
  
  const title = document.createElement('div');
  title.innerText = "Contact";
  card.appendChild(title)
};

export default createContact;