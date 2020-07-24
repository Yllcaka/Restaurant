const Header = (() => {
    let headerDOM = document.createElement('header');
    let logoDOM = document.createElement('a');
    let logoImgDOM = document.createElement('img');
    let navDOM = document.createElement('nav');
    let ulNavDOM = document.createElement('ul');
    let navItems = ['home', 'menu', 'contact'];
    navItems.forEach((navItem, index) => {
        let liDOM = document.createElement('li');
        let linkDOM = document.createElement('a');
        linkDOM.setAttribute('href', "");
        linkDOM.classList.add('nav-item');
        linkDOM.text = navItem.toUpperCase();
        linkDOM.setAttribute('id', navItem);
        liDOM.appendChild(linkDOM);
        ulNavDOM.appendChild(liDOM);
        navItems[index] = linkDOM;
    });
    logoImgDOM.setAttribute('src', 'images/logo.png');
    logoDOM.appendChild(logoImgDOM);
    logoDOM.classList.add('logo');
    navDOM.appendChild(ulNavDOM);

    headerDOM.appendChild(logoDOM);
    headerDOM.appendChild(navDOM);
    const build = () => headerDOM;
    return { build, navItems }
})();


export { Header }