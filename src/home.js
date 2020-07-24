const Home = (() => {
    let homePageDOM = document.createElement('div');
    let homePageContentDOM = document.createElement('div');
    let textDivDOM = document.createElement('div');
    let h1DOM = document.createElement('h1');
    let pizzaImgDOM = document.createElement('img');
    let paragraphContent = [
        "A Restaurant only about Pizza's.",
        "Our primary goal is to make the best Pizza’s you ever eaten"
    ];

    h1DOM.textContent = 'Pizza Restaurant';
    textDivDOM.appendChild(h1DOM);
    paragraphContent.forEach(p => {
        let paragraph = document.createElement('p');
        paragraph.textContent = p;
        textDivDOM.appendChild(paragraph);

    });
    homePageContentDOM.appendChild(textDivDOM);
    homePageContentDOM.classList.add('home-page-content');


    homePageDOM.appendChild(homePageContentDOM);
    pizzaImgDOM.setAttribute('src', 'images/pizza.png');
    homePageContentDOM.appendChild(pizzaImgDOM);
    homePageDOM.id = 'home-page';
    const build = () => homePageDOM;
    return { build }

})();

export { Home }