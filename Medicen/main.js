function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("open");
}

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".main-navbar");
  if (window.scrollY > 50) {
    navbar.style.padding = "5px 0";
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    navbar.style.padding = "10px 0";
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
  }
});

function toggleMenu() {
  document.getElementById("mobile-menu").classList.toggle("open");
}

function sendOrder() {
  const name = document.getElementById("fname").value.trim();
  const phone = document.getElementById("fphone").value.trim();
  const cat = document.getElementById("fcat").value;
  const msg = document.getElementById("fmsg").value.trim();
  if (!name || !phone) {
    alert("من فضلك اكتب اسمك ورقم هاتفك.");
    return;
  }
  const text = encodeURIComponent(
    `مرحباً، أنا ${name}\nرقمي: ${phone}\nالقسم: ${cat || "غير محدد"}\nالطلب: ${msg || "لم يُحدد"}`,
  );
  window.open(`https://wa.me/+201000000000?text=${text}`, "_blank");
  const t = document.getElementById("toast");
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3500);
  ["fname", "fphone", "fmsg"].forEach(
    (id) => (document.getElementById(id).value = ""),
  );
  document.getElementById("fcat").value = "";
}

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".service-card,.offer-card,.product-card,.map-info-item")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity .5s ease, transform .5s ease";
    obs.observe(el);
  });

function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu) {
    mobileMenu.classList.toggle("open");
  }
}