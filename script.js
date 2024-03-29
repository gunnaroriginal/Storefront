const productContainer = document.getElementById("productContainer");

const navElement = document.getElementById("navigation");

GetProductData();
GetCategoryData();

// fetch

function GetProductData() {
  fetch("https://dummyjson.com/products")
    .then((result) => {
      return result.json();
    })
    .then((json) => {
      ProductReceived(json);
    });
}

function GetCategoryData() {
  fetch("https://dummyjson.com/products/categories")
    .then((result) => {
      //console.log(result);
      return result.json();
    })

    .then((json) => {
      ReciveCategoryData(json);
    });
}

// controller

function ProductReceived(productData) {
  console.log(productData);

  let myProducts = productData.products;

  let myFeaturedProducts = [];

  myFeaturedProducts.push(
    myProducts[1],
    myProducts[2],
    myProducts[3],
    myProducts[4],
    myProducts[5],
    myProducts[6],
    myProducts[7]
  );

  console.log(myFeaturedProducts);
  buildProuctCard(myFeaturedProducts);
}

function ReciveCategoryData(myCategories) {
  //console.log(myCategories);
  CreateNavBar(myCategories);
}

function NavCallBack(myCategory) {
  console.log(myCategory);

  if (myCategory == "all") {
    CreateProductView(myProducts);
  } else {
    console.log(myCategory);

    let mySelectedProducts = [];

    myProducts.forEach((product) => {
      if (myCategory == product.category) {
        console.log(product);
        mySelectedProducts.push(product);
      }
    });
    //console.log(mySelectedProducts);

    CreateProductView(mySelectedProducts);
  }
}

// view

function buildProuctCard(myFeaturedProducts) {
  myFeaturedProducts.forEach((product) => {
    let productCard = `
    <figure class="product-card" onclick="buildProductDetails(${product.id})">
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
    </a>
    <span class="discountPercentage">
         <div class="star">
         <h4>TILBUD ${product.discountPercentage} ¤</h4>
         </div>
         
        </span>
    <div class="img-container">
      <img src="${product.thumbnail}" />
    </div>
    <header>
      <h2>${product.title}</h2>
    </header>
    <figcaption>
      
      <footer>
        <span class="price">
         <h4>${product.price} ¤</h4>
        </span>
        <h5>${product.stock} in stock</h5>
        <span class="rating">
          <p>${product.rating}</p>
        </span>
      </footer>
    </figcaption>
  </figure>
  `;
    productContainer.innerHTML += productCard;
  });
}

function rickRoll() {}
