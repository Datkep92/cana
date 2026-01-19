// hero-cta.js
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("heroCtaContainer");
    if (!container) return;

    container.innerHTML = `
        <div class="hero-cta" itemprop="potentialAction" itemscope itemtype="https://schema.org/ReserveAction">
            <meta itemprop="name" content="Đặt xe dịch vụ">
            <a href="tel:0567033888" class="btn btn-primary btn-call" itemprop="target" aria-label="Gọi ngay để đặt xe">
                <i class="fas fa-phone-alt" aria-hidden="true"></i> Gọi Ngay
            </a>
            <a href="javascript:void(0)" class="btn btn-outline" onclick="window.bookingSystem.scrollToBooking()" aria-label="Đặt xe trực tuyến">
                <i class="fas fa-calendar-alt" aria-hidden="true"></i> Tư Vấn
            </a>
        </div>
    `;
});
