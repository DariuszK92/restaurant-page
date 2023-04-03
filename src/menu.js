function createMenu(){
    const card = document.querySelector('.card');
  
    const title = document.createElement('h2');
    title.innerText = "Menu";
    card.appendChild(title);

    const title2 = document.createElement('h3');
    title2.innerText = "Pizzas";
    card.appendChild(title2);

    const item = document.createElement('div');
    item.classList.add('item')
    const name = document.createElement('span');
    name.innerText= "Pizza Havana";
    const price = document.createElement('span');
    price.innerText = "11$";
   
    item.appendChild(name);
    item.appendChild(price);
    card.appendChild(item);

    const ingredients1 = document.createElement('div');
    ingredients1.classList.add('ingredients');
    ingredients1.innerText="Pineapple, corn, ham, gouda, mushrooms";
    card.appendChild(ingredients1);


    const item2 = document.createElement('div');
    item2.classList.add('item')
    const name2 = document.createElement('span');
    name2.innerText= "Pizza Margherita";
    const price2 = document.createElement('span');
    price2.innerText = "8$";
    item2.appendChild(name2);
    item2.appendChild(price2);
    card.appendChild(item2);

    const ingredients2 = document.createElement('div');
    ingredients2.classList.add('ingredients');
    ingredients2.innerText="Cheese, tomato sauce, onion";
    card.appendChild(ingredients2);

    const item3 = document.createElement('div');
    item3.classList.add('item')
    const name3 = document.createElement('span');
    name3.innerText= "Pizza Capriciosa";
    const price3 = document.createElement('span');
    price3.innerText = "9$";
    item3.appendChild(name3);
    item3.appendChild(price3);
    card.appendChild(item3);

    const ingredients3 = document.createElement('div');
    ingredients3.classList.add('ingredients');
    ingredients3.innerText="Salami, Gouda, Emmentaler, Onion";
    card.appendChild(ingredients3);


    const item4 = document.createElement('div');
    item4.classList.add('item')
    const name4 = document.createElement('span');
    name4.innerText= "Pizza Seafood";
    const price4 = document.createElement('span');
    price4.innerText = "15$";
    item4.appendChild(name4);
    item4.appendChild(price4);
    card.appendChild(item4);

      const ingredients4 = document.createElement('div');
    ingredients4.classList.add('ingredients');
    ingredients4.innerText="Shrimps, octopus, gouda";
    card.appendChild(ingredients4);

    const item5 = document.createElement('div');
    item5.classList.add('item')
    const name5 = document.createElement('span');
    name5.innerText= "Pizza Italiano";
    const price5 = document.createElement('span');
    price5.innerText = "13$";
    item5.appendChild(name5);
    item5.appendChild(price5);
    card.appendChild(item5);

    const ingredients5 = document.createElement('div');
    ingredients5.classList.add('ingredients');
    ingredients5.innerText="Tomatoes, rucola, mozarella, prosciutto crudo";
    card.appendChild(ingredients5);
    
    const item6 = document.createElement('div');
    item6.classList.add('item')
    const name6 = document.createElement('span');
    name6.innerText= "Pizza Neapolitana";
    const price6 = document.createElement('span');
    price6.innerText = "12$";
    item6.appendChild(name6);
    item6.appendChild(price6);
    card.appendChild(item6);

    const ingredients6 = document.createElement('div');
    ingredients6.classList.add('ingredients');
    ingredients6.innerText="Mozarella, prosciutto crudo";
    card.appendChild(ingredients6);

    const title3 = document.createElement('h3');
    title3.innerText = "Burgers";
    card.appendChild(title3);

    const item7 = document.createElement('div');
    item7.classList.add('item')
    const name7 = document.createElement('span');
    name7.innerText= "Don Corleone - spicy";
    const price7 = document.createElement('span');
    price7.innerText = "14$";
    item7.appendChild(name7);
    item7.appendChild(price7);
    card.appendChild(item7);

    const ingredients7 = document.createElement('div');
    ingredients7.classList.add('ingredients');
    ingredients7.innerText="200g beef, crispy onion, jalapeno sauce, tomatoes, salad";
    card.appendChild(ingredients7);


    const item8 = document.createElement('div');
    item8.classList.add('item')
    const name8 = document.createElement('span');
    name8.innerText= "Mariano Italiano";
    const price8 = document.createElement('span');
    price8.innerText = "14$";
    item8.appendChild(name8);
    item8.appendChild(price8);
    card.appendChild(item8);

    const ingredients8 = document.createElement('div');
    ingredients8.classList.add('ingredients');
    ingredients8.innerText="200g beef, red onion, rucola, prosciutto, salad";
    card.appendChild(ingredients8);

    const item9 = document.createElement('div');
    item9.classList.add('item')
    const name9 = document.createElement('span');
    name9.innerText= "Papa Americano";
    const price9 = document.createElement('span');
    price9.innerText = "16$";
    item9.appendChild(name9);
    item9.appendChild(price9);
    card.appendChild(item9);

    const ingredients9 = document.createElement('div');
    ingredients9.classList.add('ingredients');
    ingredients9.innerText="200g beef,  onion, 2 slices bacon, emmentaler, BBQ sauce";
    card.appendChild(ingredients9);

    const title4 = document.createElement('h3');
    title4.innerText = "Beverages";
    card.appendChild(title4);

    const item10 = document.createElement('div');
    item10.classList.add('item')
    const name10 = document.createElement('span');
    name10.innerText= "Water";
    const price10 = document.createElement('span');
    price10.innerText = "1$";
    item10.appendChild(name10);
    item10.appendChild(price10);
    card.appendChild(item10);


    const item11 = document.createElement('div');
    item11.classList.add('item')
    const name11 = document.createElement('span');
    name11.innerText= "Tea";
    const price11 = document.createElement('span');
    price11.innerText = "1$";
    item11.appendChild(name11);
    item11.appendChild(price11);
    card.appendChild(item11);
    
    const item12 = document.createElement('div');
    item12.classList.add('item')
    const name12 = document.createElement('span');
    name12.innerText= "White IPA";
    const price12 = document.createElement('span');
    price12.innerText = "1$";
    item12.appendChild(name12);
    item12.appendChild(price12);
    card.appendChild(item12);
}

export default createMenu