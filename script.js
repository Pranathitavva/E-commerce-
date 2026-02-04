// ===== Mobile Navbar Toggle =====
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close navbar on mobile when clicking links
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// ===== Quantity Control =====
let qty = 1;
const qtyValue = document.getElementById("qtyValue");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

plusBtn.addEventListener("click", () => {
  qty++;
  qtyValue.textContent = qty;
});

minusBtn.addEventListener("click", () => {
  if (qty > 1) {
    qty--;
    qtyValue.textContent = qty;
  }
});

// ===== Add to Cart Demo =====
let cartCount = 0;
const cartCountEl = document.getElementById("cartCount");
const addToCartBtn = document.getElementById("addToCartBtn");

addToCartBtn.addEventListener("click", () => {
  cartCount += qty;
  cartCountEl.textContent = cartCount;

  alert(`Added ${qty} item(s) to cart! 🛒`);

  qty = 1;
  qtyValue.textContent = qty;
});

// ===== Size Selection =====
const sizeBtns = document.querySelectorAll(".size-btn");
sizeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sizeBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// ======================================================
// ✅ Color Selection with Image Change (Black/Silver/Blue)
// ======================================================
const mainImage = document.getElementById("mainProductImage");
const colorBtns = document.querySelectorAll(".color-btn");

// You can replace these images with your own watch images
const watchImages = {
  black: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900",
  silver: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=900",
  blue: "https://images.unsplash.com/photo-1503602642458-232111445657?w=900",
};

colorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    colorBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const selectedColor = btn.dataset.color;

    // Change Image Based on Color
    mainImage.src = watchImages[selectedColor];
  });
});

// ======================================================
// ✅ Dynamic Related Products (View Button)
// ======================================================
const productTitle = document.getElementById("productTitle");
const productDesc = document.getElementById("productDesc");
const productPrice = document.getElementById("productPrice");
const productOffer = document.getElementById("productOffer");
const badgeText = document.getElementById("badgeText");

const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const newTitle = btn.dataset.title;
    const newPrice = btn.dataset.price;
    const newOldPrice = btn.dataset.oldprice;
    const newOffer = btn.dataset.offer;
    const newBadge = btn.dataset.badge;
    const newDesc = btn.dataset.desc;
    const newImage = btn.dataset.image;

    // Update Product Section
    productTitle.textContent = newTitle;
    productDesc.textContent = newDesc;
    badgeText.textContent = newBadge;
    productOffer.textContent = newOffer;

    // Update Price
    productPrice.innerHTML = `${newPrice} <span class="old">${newOldPrice}</span>`;

    // Update Main Image
    mainImage.src = newImage;

    // Scroll to Product
    document.getElementById("product").scrollIntoView({ behavior: "smooth" });
  });
});
