const Footer = (() => {
    let footerDOM = document.createElement('footer');
    let footerContainerDOM = document.createElement('div');
    let footerContent = ['Contact Us', 'About Us', 'Contact Us', 'More From Us'];
    footerContent.forEach(item => {
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        h2.textContent = item;
        let ul = document.createElement('ul');
        for (let i = 0; i < 4; i++) {
            let li = document.createElement('li');
            li.textContent = 'Lorem ipsum dolor sit';
            ul.appendChild(li);
        }
        div.appendChild(h2);
        div.appendChild(ul);
        footerContainerDOM.appendChild(div);
    });
    footerContainerDOM.setAttribute('class', 'footer-container');
    footerDOM.appendChild(footerContainerDOM);
    footerDOM.setAttribute('id', 'footer');
    const build = () => footerDOM;
    return { build }

})();

export { Footer }