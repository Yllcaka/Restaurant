{/* <div id="contact">
<h2>Contact Us</h2>
<form>
    <div>
        <label for="name">Name: </label>
        <input type="text" name="name" id="name">
    </div>

    <div>
        <label for="lastName">Last Name: </label>
        <input type="text" name="lastName" id="lastName">
    </div>

    <div>
        <label for="email">E-mail: </label>
        <input type="email" name="email" id="email">
    </div>

    <div>
        <label for="phoneNumber">Phone Number: </label>
        <input type="tel" name="phoneNumber" id="phoneNumber">
    </div>

    <button>Contact Us</button>

</form>
</div> */}

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
    return { contactDivDOM }
})();

export { Contact }