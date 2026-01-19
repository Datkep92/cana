// mobile-nav.js - KHtax Version
document.addEventListener("DOMContentLoaded", function () {
    const navContainer = document.getElementById("nav");
    if (!navContainer) return;

    // HTML mobile nav cho KHtax
    navContainer.innerHTML = `
    <nav class="bottom-tab-bar" role="navigation" aria-label="Menu di động KHtax">
        <div class="tab-items">
            <div class="tab-items">
            <a href="/cana/" class="tab-item">
                <div class="tab-icon"><i class="fas fa-home"></i></div>
                <div class="tab-label">Trang chủ</div>
            </a>
            <a href="#services" class="tab-item">
                <div class="tab-icon"><i class="fas fa-calculator"></i></div>
                <div class="tab-label">Dịch vụ</div>
            </a>
            <a href="javascript:void(0)" class="tab-item" onclick="if(window.bookingSystem) window.bookingSystem.scrollToBooking();">
                <div class="tab-icon"><i class="fas fa-comments-dollar"></i></div>
                <div class="tab-label">Tư vấn</div>
            </a>
            <a href="#blog" class="tab-item">
                <div class="tab-icon"><i class="fas fa-newspaper"></i></div>
                <div class="tab-label">Blog</div>
            </a>
            <a href="javascript:void(0)" class="tab-item" onclick="openFullPricingPage()" id="pricingTab">
                <div class="tab-icon"><i class="fas fa-tag"></i></div>
                <div class="tab-label">Bảng giá</div>
            </a>
        </div>
    </nav>
    `;

    const tabs = navContainer.querySelectorAll(".tab-item");

    // Xử lý click cho tab Dịch vụ
    const serviceTab = navContainer.querySelector('a[href="#services"]');
    if (serviceTab) {
        serviceTab.addEventListener("click", function (e) {
            e.preventDefault();
            
            // Kiểm tra xem có phần tử #services trong trang hiện tại không
            const serviceSection = document.querySelector("#services");
            
            if (serviceSection) {
                // Nếu có, cuộn tới phần tử
                window.scrollTo({
                    top: serviceSection.offsetTop - 70,
                    behavior: "smooth"
                });
            } else {
                // Nếu không có, chuyển hướng tới trang dịch vụ
                window.location.href = "/service";
            }
        });
    }

    // Map tab href tới section (loại bỏ tab trang chủ vì nó là link tới URL)
    const tabSections = {};
    tabs.forEach(tab => {
        const href = tab.getAttribute("href");
        if (href && href.startsWith("#")) {
            const section = document.querySelector(href);
            if (section) tabSections[href] = section.offsetTop;
        }
    });

    // Smooth scroll cho các tab khác (trừ Dịch vụ đã xử lý riêng)
    tabs.forEach(tab => {
        const href = tab.getAttribute("href");
        if (href && href.startsWith("#") && href !== "#services") {
            tab.addEventListener("click", function (e) {
                e.preventDefault();
                const section = document.querySelector(href);
                if (section) {
                    window.scrollTo({
                        top: section.offsetTop - 70,
                        behavior: "smooth"
                    });
                }
            });
        }
    });

    // Highlight tab khi scroll (chỉ highlight các tab có href="#...")
    function updateActiveTab() {
        const scrollPos = window.scrollY + 80;
        let activeSet = false;

        for (const [href, top] of Object.entries(tabSections)) {
            const section = document.querySelector(href);
            if (!section) continue;

            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                tabs.forEach(t => t.classList.remove("active"));
                const activeTab = navContainer.querySelector(`a[href="${href}"]`);
                if (activeTab) activeTab.classList.add("active");
                activeSet = true;
            }
        }

        if (!activeSet) tabs.forEach(t => t.classList.remove("active"));
    }

    window.addEventListener("scroll", updateActiveTab);
    updateActiveTab();

});
