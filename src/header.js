{/* <header>
            <a href="" class="logo">
                <img src="images/logo.png" alt="Restaurant">
            </a>
            <nav>
                <ul>
                    <li>
                        <a class="nav-item active" href="" id="home">HOME</a>
                    </li>
                    <li>
                        <a class="nav-item" href="" id="menu">MENU</a>
                    </li>
                    <li>
                        <a class="nav-item" href="" id="about">ABOUT</a>
                    </li>
                    <li>
                        <a class="nav-item" href="" id="contact">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </header> */}


const Header = (() => {
    let headerDOM = document.createElement('header');
    let logoDOM = document.createElement('a');
    let logoImgDOM = document.createElement('img');
    let navDOM = document.createElement('nav');
    let ulNavDOM = document.createElement('ul');
    let navItems = ['home', 'menu', 'about', 'contact'];
    navItems.forEach(navItem => {
        let liDOM = document.createElement('li');
        let linkDOM = document.createElement('a');
        linkDOM.classList.add('nav-item');
        linkDOM.text = navItem.toUpperCase();
        linkDOM.setAttribute('id', navItem);
        liDOM.appendChild(linkDOM);
        ulNavDOM.appendChild(liDOM);
    });
    logoImgDOM.setAttribute('src', 'images/logo.png');
    logoDOM.appendChild(logoImgDOM);
    logoDOM.classList.add('logo');
    navDOM.appendChild(ulNavDOM);

    headerDOM.appendChild(logoDOM);
    headerDOM.appendChild(navDOM);

    return { headerDOM }
})();


export { Header }