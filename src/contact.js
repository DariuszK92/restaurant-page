import { Loader } from '@googlemaps/js-api-loader';

function createContact(){
  const card = document.querySelector('.card');
  
  const title = document.createElement('h2');
  title.innerText = "Contact";
  const telephone = document.createElement('div');
  telephone.innerText = "Call us +49 921-001-982"
  const email = document.createElement('div');
  email.innerText = "Or send us an email at: Tessima@contact.com";
  card.appendChild(title)
  card.appendChild(telephone)
  card.appendChild(email)
  const empty = document.createElement('div');
  empty.innerText = "   "
  card.appendChild(empty);
  const address = document.createElement('div');
  address.innerText = "Address:"
  card.appendChild(address);
  const address2 = document.createElement('div');
  address2.innerText = "8155 Foxrun Ave."
  card.appendChild(address2);
  const address3 = document.createElement('div');
  address3.innerText = "Levittown, NY 11756"
  card.appendChild(address3);

  const local = document.createElement('div');
  local.setAttribute('id', 'map');
  card.appendChild(local)
 

  const loader = new Loader({
    apiKey: "",
    version: "weekly",
    libraries: ["places"]
  });

  const mapOptions = {
    center: {
      lat: 40.785, lng: -73.968 
    },
    zoom: 16,
  };
  
  // Promise
  loader
    .load()
    .then((google) => {
      new google.maps.Map(document.getElementById("map"), mapOptions);
    })
    .catch(e => {
      // do something
    });
  

};

export default createContact;
