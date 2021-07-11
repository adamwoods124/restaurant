function Menu() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem("Nigiri", "Freshly cut sushi served with rice and soy sauce")
  );
  menu.appendChild(
    createMenuItem("Sashimi", "Freshly cut fish served over rice")
  );
  menu.appendChild(createMenuItem("Bento", "Bento box with beef and sides"));
  menu.appendChild(createMenuItem("Seaweed Salad", "Green seaweed salad"));
  menu.appendChild(createMenuItem("Edamame", "Green soybeans in a soft shell"));
  menu.appendChild(
    createMenuItem("Avocado rolls", "Avocado and rice wrapped with seaweed")
  );
  menu.appendChild(createMenuItem("Donburi", "Rice and beef bowl"));
  menu.appendChild(createMenuItem("Tamago", "Egg on rice"));

  content.appendChild(menu);
  return content;
}

function createMenuItem(name, about) {
  let item = document.createElement("div");
  item.classList.add("menu-item");

  let title = document.createElement("h1");
  title.classList.add("item-title");
  title.innerHTML = name;

  let description = document.createElement("P");
  description.classList.add("description");
  description.innerHTML = about;

  item.appendChild(title);
  item.appendChild(description);

  return item;
}

export default Menu;
