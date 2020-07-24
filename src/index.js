import { Header } from './header';
import { Home } from './home';
import { Footer } from "./footer";
import { Contact } from './contact';
import { Menu } from './menu'

const Main = (() => {
    let body = document.querySelector('body');
    let mainContent = document.createElement('content');

    let itemLists = [Home.build(), Menu.build(), Contact.build()];

    const init = () => {


        Header.navItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                event.preventDefault();
                let activateDOM = document.querySelector('.active');
                activateDOM.classList.remove('active');

                event.preventDefault();
                console.log(Header.navItems);
                item.classList.add('active');
                mainContent.innerHTML = "";
                mainContent.appendChild(itemLists[index]);
            });
        });

        mainContent.appendChild(Home.build());
        Header.navItems[0].classList.add('active');
        body.appendChild(Header.build());
        body.appendChild(mainContent);
        body.appendChild(Footer.build());
    }
    return { init }
})();

Main.init();
// mainContent.appendChild(Contact.contactDivDOM);
// mainContent.appendChild(Footer.footerDOM);
// console.log(Header.navItems);