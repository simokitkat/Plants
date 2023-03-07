// Logo

let logo = document.querySelector("header>nav>.logo");

logo.onclick = function () {
  window.location.reload();
};

//Burger icon

let burger = document.querySelector(".burger");

let closingBtn = document.querySelector(".close");

let ul = document.querySelector("header>nav>ul");

let links = document.querySelectorAll("header>nav>ul>li>a");

burger.addEventListener("click", function () {
  burger.classList.add("active");

  closingBtn.classList.add("active");

  ul.classList.add("active");
});

closingBtn.addEventListener("click", function () {
  burger.classList.remove("active");

  closingBtn.classList.remove("active");

  ul.classList.remove("active");
});

links.forEach((link) => {
  link.addEventListener("click", function () {
    burger.classList.remove("active");

    closingBtn.classList.remove("active");

    ul.classList.remove("active");
  });
});

//welcome

let welcomeBtn = document.querySelector(".welcome .container .text button");

let aboutLink = document.querySelector('header nav ul li [href="#about"]');

welcomeBtn.onclick = function () {
  aboutLink.click();
};

//Services

let buttons = document.querySelectorAll(".btns button");

let gardens = document.querySelectorAll(".gardens");

let planting = document.querySelectorAll(".planting");

let lawn = document.querySelector(".lawn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.innerHTML === "Gardens") {
      gardens.forEach((garden) => {
        garden.classList.remove("inactive");
      });

      planting.forEach((plant) => {
        plant.classList.add("inactive");
      });

      lawn.classList.add("inactive");
    } else if (button.innerHTML === "Lawn") {
      lawn.classList.remove("inactive");

      planting.forEach((plant) => {
        plant.classList.add("inactive");
      });

      gardens.forEach((garden) => {
        garden.classList.add("inactive");
      });
    } else {
      planting.forEach((plant) => {
        plant.classList.remove("inactive");
      });

      gardens.forEach((garden) => {
        garden.classList.add("inactive");
      });

      lawn.classList.add("inactive");
    }
  });

  button.addEventListener("blur", function () {
    gardens.forEach((garden) => {
      garden.classList.remove("inactive");
    });

    planting.forEach((plant) => {
      plant.classList.remove("inactive");
    });

    lawn.classList.remove("inactive");
  });
});

// Prices:

let pricesSection = document.querySelector(".prices");

let prices = document.querySelectorAll(".accordion>div");

let accordion = document.querySelector(".accordion");

let pricesH3 = document.querySelector(".prices .container .right h3");

prices.forEach((price) => {
  price.addEventListener("click", function () {
    prices.forEach((element) => {
      if (element !== price) {
        element.classList.remove("open");
      }
    });

    price.classList.toggle("open");

    if (price.classList.contains("open")) {
      accordion.classList.add("transform");

      pricesSection.classList.add("open");

      pricesH3.classList.add("open");
    } else {
      accordion.classList.remove("transform");

      pricesSection.classList.remove("open");

      pricesH3.classList.remove("open");
    }
  });
});

let orderLinks = document.querySelectorAll(".accordion>div .hidden a");

orderLinks.forEach((link) => {
  link.addEventListener("click", function () {
    if (!link.parentElement.parentElement.classList.contains("open")) {
      link.parentElement.parentElement.classList.add("open");
    } else {
      link.parentElement.parentElement.classList.remove("open");
    }
  });
});

let pricesBtn = document.querySelector(".prices .container .right button");

let contactsLink = document.querySelector(
  'header nav ul li [href="#contacts"]'
);

pricesBtn.onclick = function () {
  contactsLink.click();
};

// Contacts:

let image = document.querySelector(".contacts .container>img");

let dropDown = document.querySelector(".contacts .container>.drop-down");

let citySelect = document.querySelector(
  ".contacts .container .drop-down form .select"
);

let citySelectContent = document.querySelector(
  ".contacts .container .drop-down form .select p"
);

let contactsArrow = document.querySelector(
  ".contacts .container .drop-down form .arrow"
);

let optionsList = document.querySelector(
  ".contacts .container .drop-down form .list"
);

let options = document.querySelectorAll(
  ".contacts .container .drop-down form .list>div"
);

let card = document.querySelector(".contacts .container .drop-down .city-card");

citySelect.onclick = function () {
  citySelect.classList.toggle("activate");

  contactsArrow.classList.toggle("activate");

  image.classList.toggle("activate");
};

// OOP for the city card
const cityCards = {
  "Canandaigua, NY": {
    "City:": "Canandaigua, NY",
    "Phone:": "+1	585	393 0001",
    "Office adress:": "151 Charlotte Street",
  },
  "New York City": {
    "City:": "New York City",
    "Phone:": "+1	212	456 0002",
    "Office adress:": "9 East 91st Street",
  },
  "Yonkers, NY": {
    "City:": "Yonkers, NY",
    "Phone:": "+1	914	678 0003",
    "Office adress:": "511 Warburton Ave",
  },
  "Sherrill, NY": {
    "City:": "Sherrill, NY",
    "Phone:": "+1	315	908 0004",
    "Office adress:": "14 WEST Noyes BLVD",
  },
};

let h3s = Array.from(
  document.querySelectorAll(".contacts .container .drop-down .city-card>div h3")
);

options.forEach((option) => {
  option.addEventListener("click", function () {
    citySelectContent.innerHTML = this.innerHTML;

    citySelect.classList.toggle("activate");

    contactsArrow.classList.toggle("activate");

    citySelectContent.parentElement.style.cssText = "background: #C1E698";

    dropDown.classList.add("activate");

    for (let key in cityCards) {
      if (key == option.innerHTML) {
        for (let i = 0; i < h3s.length; i++) {
          if (Object.keys(cityCards[key]).includes(h3s[i].innerHTML)) {
            h3s[i].nextElementSibling.innerHTML =
              cityCards[key][h3s[i].innerHTML];
          }
        }
      }
    }

    card.classList.add("activate");

    image.classList.add("deactivate");
  });
});
