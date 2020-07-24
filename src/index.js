import { Header } from './header';
import { Home } from './home';
import { Footer } from "./footer";
import { Contact } from './contact';
import { Menu } from './menu'
// const header = Header();
var body = document.querySelector('body');
var mainContent = document.createElement('content');

var itemLists = [Home.homePageDOM, Menu.menuPageDOM, Contact.contactDivDOM];

Header.navItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        event.preventDefault();
        mainContent.innerHTML = "";
        mainContent.appendChild(itemLists[index]);
    });
});

mainContent.appendChild(Home.homePageDOM);

body.appendChild(Header.headerDOM);
body.appendChild(mainContent);
body.appendChild(Footer.footerDOM);
// mainContent.appendChild(Contact.contactDivDOM);
// mainContent.appendChild(Footer.footerDOM);
// console.log(Header.navItems);