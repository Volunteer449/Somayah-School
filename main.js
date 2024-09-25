
// تشغيل القائمة البرغر عند الضغط
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu.style.display === "flex") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "flex";
  }
}
     