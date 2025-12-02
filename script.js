const storeConfig = {
  whatsappNumber: "966560716389", // 🔧 غير رقم الواتساب هنا
  companyName: "المعلم للرفوف",
  defaultMessage: "مرحباً، أنا مهتم بمنتج: ",
};

// تصفية المنتجات حسب الفئة
document.addEventListener("DOMContentLoaded", function () {
  initializeCategoryFilter();
  initializeWhatsAppButtons();
});

// تهيئة تصفية المنتجات
function initializeCategoryFilter() {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const productCards = document.querySelectorAll(".product-card");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // إزالة النشاط من جميع الأزرار
      categoryButtons.forEach((btn) => btn.classList.remove("active"));

      // إضافة النشاط للزر المحدد
      this.classList.add("active");

      const category = this.getAttribute("data-category");
      filterProducts(category, productCards);
    });
  });
}

// تصفية المنتجات
function filterProducts(category, productCards) {
  productCards.forEach((card) => {
    if (category === "all" || card.getAttribute("data-category") === category) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

// تهيئة أزرار الواتساب
function initializeWhatsAppButtons() {
  const whatsappButtons = document.querySelectorAll(".whatsapp-btn");

  whatsappButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const productName = this.getAttribute("data-product");
      const message = `${storeConfig.defaultMessage}${productName} - ${storeConfig.companyName}`;
      const whatsappURL = `https://wa.me/${
        storeConfig.whatsappNumber
      }?text=${encodeURIComponent(message)}`;

      // فتح الواتساب في نافذة جديدة
      window.open(whatsappURL, "_blank");
    });
  });
}
