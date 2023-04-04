import imagePizza from './pizza.jpg'

function createHome(){
    const card = document.querySelector('.card');
  
    const restaurantName = document.createElement('h1');
    restaurantName.innerText = "Buonasera";
    card.appendChild(restaurantName);


    const para1 = document.createElement('h3');
    para1.innerText = "Welcome to the best italian restaurant on the East Coast... many say that in the whole world!";
    card.appendChild(para1);

    const para2 = document.createElement('h3');
    para2.innerText = "Restaurant is located nearby Central Park in the quiet alley where you can enjoy your food and good italian music";
    card.appendChild(para2);

    const myIcon = new Image();
  myIcon.src = imagePizza;

  card.appendChild(myIcon);

   
   
}

export default createHome