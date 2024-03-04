var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

var addButtons = document.getElementsByClassName("button");

var items = [
  {
    name: "Berkeley",
    quantity: 0,
    dollars: 55,
    cents: 0,
  },
  {
    name: "Charms",
    quantity: 0,
    dollars: 44,
    cents: 0,
  },
  {
    name: "Gold Flake",
    quantity: 0,
    dollars: 92,
    cents: 0,
  },
  {
    name: "Light King",
    quantity: 0,
    dollars: 157,
    cents: 0,
  },
  {
    name: "King",
    quantity: 0,
    dollars: 157,
    cents: 0,
  },
  {
    name: "Wills Flake",
    quantity: 0,
    dollars: 82,
    cents: 0,
  },
  {
    name: "Duke",
    quantity: 0,
    dollars: 46,
    cents: 0,
  },
  {
    name: "Club",
    quantity: 0,
    dollars: 110,
    cents: 0,
  },
  {
    name: "Players",
    quantity: 0,
    dollars: 65,
    cents: 0,
  },
  {
    name: "Total",
    quantity: 0,
    dollars: 55,
    cents: 0,
  },
  {
    name: "Robo",
    quantity: 0,
    dollars: 50,
    cents: 0,
  },
  {
    name: "Pearls",
    quantity: 0,
    dollars: 115,
    cents: 0,
  },
  {
    name: "Stuffed toys",
    quantity: 0,
    dollars: 15,
    cents: 99,
  },
  {
    name: "Dream catcher drawing",
    quantity: 0,
    dollars: 18,
    cents: 49,
  },
];

function updateCart() {
  let cart = 0;
  for (index = 0; index < items.length; index++) {
    cart = cart + items[index].quantity;
  }
  cartValue.innerHTML = cart;
}

for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].onclick = (e) => {
    items[i].quantity++;
    updateCart();
  };
}

var finalDollars = 0;
var finalCents = 0;

function updatePrice() {
  let totalPriceInCents = 0;

  for (index = 0; index < items.length; index++) {
    totalPriceInCents =
      totalPriceInCents +
      items[index].quantity * (items[index].dollars * 100 + items[index].cents);
  }
  finalDollars = Math.floor(totalPriceInCents / 100);
  finalCents = totalPriceInCents % 100;
}

var whatsappLink =
  "https://api.whatsapp.com/send?phone=919849242921&text=Order%20details";

// WhatsApp intergration
function updateWhatsappLink() {
  for (let index = 0; index < items.length; index++) {
    if (items[index].quantity != 0) {
      whatsappLink += "%0A" + items[index].name + "%20" + items[index].quantity;
    }
  }
  whatsappLink +=
    "%0A" + "Total%20Price:%20Rs" + finalDollars + "%20";
}

cartButton.onclick = () => {
  updatePrice();
  
  updateWhatsappLink();
  window.open(whatsappLink, "_blank");

  for (let index = 0; index < items.length; index++) {
    if (items[index].quantity != 0) {
      console.log(
        "Item name: " +
          items[index].name +
          " - Quantity: " +
          items[index].quantity
      );
    }
  }

  console.log(
    "The total amount is " + finalDollars + "Rs and "
  );
};


