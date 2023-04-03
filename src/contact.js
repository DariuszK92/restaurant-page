

function createContact(){
  const card = document.querySelector('.card');
  
  const title = document.createElement('h2');
  title.innerText = "Contact";
  const telephone = document.createElement('div');
  telephone.innerText = "Call us +49 921-001-982"
  const email = document.createElement('div');
  email.innerText = "Or send us an email at: Tessima@contact.com"
  const local = document.createElement('div');
  local.setAttribute('id', 'map');
  card.appendChild(title)
  card.appendChild(telephone)
  card.appendChild(email)
  card.appendChild(local)


  

 

};

export default createContact;