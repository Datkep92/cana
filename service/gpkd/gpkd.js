document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("galleryContainer");
  if (!container) return;

  container.innerHTML = `
  <section class="gallery-section modern-hero" id="gallery" aria-labelledby="galleryTitle">
    <div class="container">

      <!-- HERO HEADER -->
      <div class="hero-content">
        <h1 id="galleryTitle" class="hero-title" itemprop="headline">
          Đăng Ký, Sửa Đổi, Bổ Sung<br>
          <span class="city-name">Giấy Phép Kinh Doanh</span><br>
          <span class="text-champagne">
            Phan Rang – Khánh Hòa · Chuyên Nghiệp · Nhanh Chóng
          </span>
        </h1>

        <div id="heroCtaContainer"></div>

        <div class="title-divider" aria-hidden="true">
          <div class="divider-line"></div>
          <div class="divider-icon">
            <i class="fas fa-file-contract"></i>
          </div>
          <div class="divider-line"></div>
        </div>
      </div>

      <!-- HERO INTRO -->
      <p class="hero-text">
        Làm giấy phép kinh doanh <strong>trọn gói từ A–Z</strong>, không cần đi lại, không rắc rối hồ sơ.<br>
        Hỗ trợ tận nhà tại <strong>Phan Rang, Ninh Thuận, Khánh Hòa</strong>, nhận kết quả sau <strong>3–5 ngày</strong>.
        <br><br>
        <strong>Chỉ thanh toán khi nhận được giấy phép – không có kết quả, không thu phí.</strong>
      </p>

      <!-- HERO ROW -->
      <div class="hero-row">
        <div class="hero-image">
          <img 
            src="https://imagur.org/wp-content/uploads/2026/01/698d821e-0e7e-4196-b214-77adb9d4e33a.jpg"
            alt="Dịch vụ giấy phép kinh doanh"
            loading="lazy"
          />
        </div>

        <div class="hero-text">
          <h2>Vì sao nên chọn CANATax?</h2>

          <p>
            <strong>CANATax</strong> chuyên dịch vụ
            <strong>đăng ký – sửa đổi – bổ sung Giấy phép kinh doanh / Hộ kinh doanh cá thể</strong>
            tại <strong>Phan Rang – Ninh Thuận – Khánh Hòa</strong>.
            <br>Bạn chỉ cần ký hồ sơ – chúng tôi lo toàn bộ thủ tục.
          </p>

          <!-- BENEFITS -->
          <div class="business-benefits">

            <div class="benefit-item">
              <h3><i class="fas fa-clock"></i> Xử lý nhanh</h3>
              <p>Hoàn tất hồ sơ chỉ <strong>1–3 ngày làm việc</strong>, nhanh hơn 70% so với tự làm.</p>
            </div>

            <div class="benefit-item">
              <h3><i class="fas fa-shield-alt"></i> Đúng quy định</h3>
              <p>Hồ sơ chuẩn <strong>100%</strong>, hạn chế bị trả hoặc yêu cầu bổ sung.</p>
            </div>

            <div class="benefit-item">
              <h3><i class="fas fa-money-check-alt"></i> Chi phí minh bạch</h3>
              <p>Báo giá rõ ràng từ đầu, <strong>không phát sinh</strong>.</p>
            </div>

            <div class="benefit-item">
              <h3><i class="fas fa-user-tie"></i> Chuyên gia pháp lý</h3>
              <p>Đội ngũ nhiều kinh nghiệm, tư vấn đúng loại hình – đúng luật.</p>
            </div>

            <div class="benefit-item">
              <h3><i class="fas fa-headset"></i> Hỗ trợ trọn đời</h3>
              <p>Miễn phí tư vấn pháp lý sau khi có GPKD.</p>
            </div>

            <div class="benefit-item">
              <h3><i class="fas fa-truck"></i> Phục vụ tận nơi</h3>
              <p>Nhận – giao hồ sơ & GPKD <strong>tại nhà</strong>.</p>
            </div>

          </div>

          <p class="highlight-box">
            📋 <strong>Thực tế:</strong> Tự làm thường mất 2–3 tuần và đi lại nhiều lần.
            Với CANATax, bạn chỉ cần <strong>1 lần ký tại nhà</strong>.
          </p>

          <!-- BADGES -->
          <div class="hero-badges">
            <span><i class="fas fa-clock"></i> 3–5 ngày có kết quả</span>
            <span><i class="fas fa-shield-alt"></i> Bảo mật 100%</span>
            <span><i class="fas fa-money-check-alt"></i> Thanh toán sau</span>
            <span><i class="fas fa-truck"></i> Giao tận tay</span>
            <span><i class="fas fa-user-check"></i> Hỗ trợ tận nơi</span>
          </div>

        </div>
      </div>
    </div>

    <!-- KHỐI NỘI DUNG CHÍNH --> <article class="gallery-content" itemprop="mainContentOfPage"> <div class="container"> <br> <!-- DỊCH VỤ DẠNG CARD --> <div class="services-section"> <h2 class="section-title">Dịch vụ GPKD chính:</h2> <div class="benefits-grid"> <div class="benefit-card"> <div class="benefit-icon"><i class="fas fa-file-signature" aria-hidden="true"></i></div> <h3>Đăng ký GPKD mới</h3> <p>Tư vấn loại hình, soạn hồ sơ, nộp và nhận kết quả.</p> </div> <div class="benefit-card"> <div class="benefit-icon"><i class="fas fa-edit" aria-hidden="true"></i></div> <h3>Thay đổi nội dung</h3> <p>Đổi tên, ngành nghề, vốn, địa chỉ, người đại diện.</p> </div> <div class="benefit-card"> <div class="benefit-icon"><i class="fas fa-store" aria-hidden="true"></i></div> <h3>Đăng ký HKD cá thể</h3> <p>Thủ tục nhanh cho cá nhân &amp; hộ gia đình.</p> </div> <div class="benefit-card"> <div class="benefit-icon"><i class="fas fa-plus-circle" aria-hidden="true"></i></div> <h3>Bổ sung ngành nghề</h3> <p>Mở rộng phạm vi kinh doanh hợp pháp.</p> </div> <div class="benefit-card"> <div class="benefit-icon"><i class="fas fa-pause-circle" aria-hidden="true"></i></div> <h3>Tạm ngừng / Chấm dứt</h3> <p>Thủ tục ngừng hoặc đóng doanh nghiệp.</p> </div> <div class="benefit-card"> <div class="benefit-icon"><i class="fas fa-copy" aria-hidden="true"></i></div> <h3>Cấp lại GPKD</h3> <p>Khi bị mất, hỏng hoặc thay đổi thông tin.</p> </div> </div> </div>


      </div>
    </article>
  </section>
  `;
});
