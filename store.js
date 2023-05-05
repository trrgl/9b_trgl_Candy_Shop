const products = [
    {
      name: "Twix",
      price: 1200,
      description: "Chocolate",
      type: "chocolate",
      image:
        "https://www.twix.com/sites/g/files/fnmzdf236/files/migrate-product-files/pm57alsea7mspqhhgfuf.png",
    },
    {
      name: "Snickers",
      price: 1000,
      description: "Chocolate",
      type: "chocolate",
      image:
        "https://app.digitalconcept.mn/upload/media/product/0001/01/f67774e4cdd154de93d088249dc144f12d844eb5.png",
    },
    {
      name: "Gummy Bears",
      price: 7000,
      description: "Gummy",
      type: "gummy",
      image:
        "https://assets.haribo.com/image/upload/s--XcGtbueT--/ar_2700:3542,c_fill,f_auto,q_60/w_715/v1/consumer-sites/en-gb/Products/goldbears-uk.png",
    },
    {
      name: "Sour Patch",
      price: 2500,
      description: "Gummy",
      type: "gummy",
      image:
        "https://sourpatchkids.com/media/catalog/product/cache/992161bde3a6bb6f7a3fd204b6dbdce5/o/r/original_6.png",
    },
    {
      name: "Kisses",
      price: 3000,
      description: "Chocolate",
      type: "chocolate",
      image:
        "./kisses.png",
    },
    {
      name: "Swedish fish",
      price: 500,
      description: "Gummy",
      type: "gummy",
      image:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-2569/k2-_4311403c-9046-4458-8dc1-dee3cd50f2b8.v1.png",
    },
    {
      name: "Twizzlers",
      price: 700,
      description: "Gummy",
      type: "gummy",
      image:
        "https://i5.walmartimages.com/asr/7ebd80b3-dd9b-4d3a-9f03-90e244a47980.475fc6aec6428bd19b445f8d14a4ac89.png",
    },
    {
      name: "Reeses cups",
      price: 3200,
      description: "Chocolate",
      type: "chocolate",
      image:
        "https://s7d2.scene7.com/is/image/hersheysassets/0_34000_00440_9_701_44000_136_Item_Front?fmt=png-alpha&hei=908",
    },
    {
      name: "Nerds",
      price: 1500,
      description: "Candy",
      type: "candy",
      image:
        "https://itsugar.com/media/catalog/product/n/e/nerds_tin_candy.png",
    },
    {
      name: "Air heads",
      price: 800,
      description: "Gummy",
      type: "gummy",
      image:
        "https://s3.eu-west-1.amazonaws.com/storage.streetcandy.ie//product/60b9669dc3bf873b93336210/1629911546010_1623171777340_airheads-strawberry-bar-800x800-removebg-preview%20%281%29%20%281%29.png",
    },
    {
      name: "KitKat",
      price: 2700,
      description: "Chocolate",
      type: "chocolate",
      image:
        "https://www.kitkat.co.za/sites/default/files/2022-02/web-image-size-1-1-square%402x_2.png",
    },
    {
      name: "Hersheys",
      price: 3500,
      description: "Chocolate",
      type: "chocolate",
      image:
        "https://smartlabel.hersheys.com/images/4a64ca04-368d-4e8d-bc70-18acab950154.png",
    },
    {
      name: "Mars",
      price: 750,
      description: "Chocolate",
      type: "chocolate",
      image:
        "https://assets.stickpng.com/images/58d2a68cdc164e9dd9e668ee.png",
    },
    {
      name: "Bounty",
      price: 1200,
      description: "Chocolate",
      type: "chocolate",
      image:
        "https://assets.stickpng.com/thumbs/58d2a6c0dc164e9dd9e668f4.png",
    },
    {
      name: "M & M",
      price: 1800,
      description: "Chocolate",
      type: "chocolate",
      image:
        "https://pngimg.com/d/m_m_PNG33.png",
    },
    {
      name: "Skittles",
      price: 2600,
      description: "Candy",
      type: "candy",
      image:
        "https://www.skittles.com/cdn-cgi/image/width=472,height=472,f=auto,quality=90/sites/g/files/fnmzdf586/files/migrate-product-files/hunk4iq6aw4bbf3iwp6i.png",
    },
  ];
  
  function PrintProducts() {
    const productsContainer = document.getElementById("products");
    let newDiv = "";
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
  
    //   console.log(${product.name} - ${product.price});
  
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <img class='productImage' src="${product.image}"
        <h3 class="title">${product.name}</h3>
        <p>${product.description}</p>
        <p id="price">${product.price}</p>
        <div style="display: flex;">
          <button id="edit" onclick="AddItem('${product.name}')">+</button>
          <button id="edit" onclick="MinusItem('${product.name}')">-</button>
        </div>
      `;
  
      newDiv += div.outerHTML;
    }
  
    productsContainer.innerHTML = newDiv;
  }
  
  window.onload = PrintProducts;
  
  const userbasket = [];
  
  function AddItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity += 1;
    } else {
      userbasket.push({ name: itemName, quantity: 1 });
    }
  
    Basket();
  }
  
  function MinusItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity -= 1;
  
      if (userbasket[itemIndex].quantity === 0) {
        userbasket.splice(itemIndex, 1);
      }
    }
  
    Basket();
  }
  
  function Purchase() {
    let total = 0;
    for (let i = 0; i < userbasket.length; i++) {
      const { name, quantity } = userbasket[i];
      const product = products.find((p) => p.name === name);
      if (product) {
        total += product.price * quantity;
      }
    }
  
    document.getElementById("total").innerHTML = total;
    Clear();
  }
  
  function Clear() {
    userbasket = [];
  }
  
  function Basket() {
    const basketDiv = document.getElementById("basket");
    const basketHtml = userbasket
      .map(
        ({ name, quantity }) => `
      <h1>${name} - ${quantity}</h1>
    `
      )
      .join("");
    basketDiv.innerHTML = basketHtml;
  }
  