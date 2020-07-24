
const Menu = (() => {
    let menuPageDOM = document.createElement('div'); //id="menu-page"
    let menuDOM = document.createElement('div'); //<div class="menu">
    let menuItems = {
        "Sicilian Pizza": ["Prosciutto", "Caciocavallo", "Anchovies", "Garlic"],
        "Pepperoni Pizza": ["Salami", "San Marzano tomatoes", "Mozzarella cheese", "Olives"],
        "Pizza Margherita": ["San Marzano Tomatoes", "Mozzarella Cheese", "Fresh basil", "Garlic"]
    }
    for (let menuItem in menuItems) {
        let menuItemDiv = document.createElement('div'); // class="menu-item"
        let menuItemPic = document.createElement('div'); // class="menu-item-pic"
        let itemImg = document.createElement('img');
        let menuItemContent = document.createElement('div'); //class="menu-item-content"
        let itemName = document.createElement('h3');
        let menuItemIngredients = document.createElement('ul');

        itemName.textContent = menuItem;
        menuItems[menuItem].forEach(ingredient => {
            let liIngredient = document.createElement('li');
            liIngredient.textContent = ingredient;
            menuItemIngredients.appendChild(liIngredient);
        });

        itemImg.setAttribute('src', 'images/pizza.png');
        menuItemDiv.classList.add('menu-item');
        menuItemPic.classList.add('menu-item-pic');
        menuItemContent.classList.add('menu-item-content');

        menuItemPic.appendChild(itemImg);
        menuItemDiv.appendChild(menuItemPic);
        menuItemContent.appendChild(itemName);
        menuItemContent.appendChild(menuItemIngredients);
        menuItemDiv.appendChild(menuItemContent);
        menuDOM.appendChild(menuItemDiv);
    }
    menuDOM.classList.add('menu');
    menuPageDOM.id = 'menu-page';
    menuPageDOM.appendChild(menuDOM);

    return { menuPageDOM }

})();

export { Menu }