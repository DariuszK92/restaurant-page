function createMenu(){
    const card = document.querySelector('.card');
  
    const title = document.createElement('h2');
    title.innerText = "Menu";
    card.appendChild(title);

    const item = document.createElement('div');
    item.classList.add('item')
    const name = document.createElement('span');
    name.innerText= "Pizza Havana";
    const price = document.createElement('span');
    price.innerText = "10$";
   
    item.appendChild(name);
    item.appendChild(price);
    card.appendChild(item);


    const item2 = document.createElement('div');
    item2.classList.add('item')
    const name2 = document.createElement('span');
    name2.innerText= "Pizza Havana";
    const price2 = document.createElement('span');
    price2.innerText = "10$";
    item2.appendChild(name2);
    item2.appendChild(price2);
    card.appendChild(item2);

}

export default createMenu