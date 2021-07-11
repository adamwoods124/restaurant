function Contact() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const contact = document.createElement("div");
  contact.classList.add("contact");

  let phone = document.createElement("div");
  phone.classList.add("phone");
  phone.innerHTML += "Phone: 333-523-2345";

  let address = document.createElement("div");
  address.innerHTML += "Address: 1234 South Street New York, NY";

  contact.appendChild(phone);
  contact.appendChild(address);

  content.appendChild(contact);
  return content;
}

export default Contact;
