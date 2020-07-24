const Contact = (() => {
    let contactDivDOM = document.createElement('div');
    let formDOM = document.createElement('form');
    let h2DOM = document.createElement('h2');
    let formElements = ['name', 'lastName', 'email', 'phoneNumber'];
    let formTypes = ['text', 'text', 'email', 'tel'];
    let labelContent = ['Name: ', 'Last Name: ', 'E-mail: ', 'Phone Number: '];
    formElements.forEach((item, index) => {
        let div = document.createElement('div');
        let label = document.createElement('label');
        let input = document.createElement('input');
        label.setAttribute('for', item);
        input.setAttribute('name', item);
        input.setAttribute('id', item);
        input.setAttribute('type', formTypes[index]);
        label.textContent = labelContent[index];
        div.appendChild(label);
        div.appendChild(input);
        formDOM.appendChild(div);

        // formElements[index] = 
    });
    h2DOM.textContent = "Contact Us";
    contactDivDOM.id = 'contact-page';
    contactDivDOM.appendChild(h2DOM);
    contactDivDOM.appendChild(formDOM);
    const build = () => contactDivDOM;
    return { build }
})();

export { Contact }