// header.js
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("headerContainer");
    if (!container) return;

    container.innerHTML = `
        <header class="app-header" role="banner">
            <div class="header-content container">
                <!-- Logo -->
                <div class="logo" itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
                    <meta itemprop="name" content="Hà Tùng">
                    <div class="logo-icon">
                        <img src="https://raw.githubusercontent.com/Datkep92/hoangtung/main/images/htu_vuong512notext.jpg"
                             alt="HTU Transport Logo"
                             width="50"
                             height="50">
                    </div>
                    <div class="logo-text">HTU<span>Transport</span></div>
                </div>
            </div>
        </header>
    `;

    // Optional: Header scroll effect
    const header = container.querySelector(".app-header");
    const logoText = container.querySelector(".logo-text");
    const logoIcon = container.querySelector(".logo-icon img");
    const scrollThreshold = 50;

    function updateHeaderOnScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add("scrolled");
            logoText.style.fontSize = "18px";
            logoIcon.style.width = "40px";
            logoIcon.style.height = "40px";
        } else {
            header.classList.remove("scrolled");
            logoText.style.fontSize = "24px";
            logoIcon.style.width = "50px";
            logoIcon.style.height = "50px";
        }
    }

    window.addEventListener("scroll", updateHeaderOnScroll);
    updateHeaderOnScroll();
});
