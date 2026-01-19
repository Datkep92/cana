document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("galleryContainer");
  if (!container) return;

  container.innerHTML = `
  <section class="gallery-section modern-hero" id="gallery" aria-labelledby="galleryTitle">
    <div class="container">

      <!-- HÀNG 1: TIÊU ĐỀ -->
      <div class="hero-content">
        <h1 id="galleryTitle" class="hero-title" itemprop="headline">
          Đăng Ký, Sửa Đổi, Bổ Sung  
          <br>
          <span class="city-name">Giấy Phép Kinh Doanh / HKD</span>  
          <br>
          <span class="text-champagne">
            Phan Rang – Khánh Hòa · Chuyên Nghiệp · Nhanh Chóng
          </span>
        </h1>

        <div id="heroCtaContainer"></div>

        <div class="title-divider" aria-hidden="true">
          <div class="divider-line"></div>
          <div class="divider-icon"><i class="fas fa-file-contract"></i></div>
          <div class="divider-line"></div>
        </div>
      </div>

      <!-- HÀNG 2: ẢNH VÀ NỘI DUNG -->
      <div class="hero-row">
        <!-- ẢNH -->
        <div class="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=900" 
            alt="Dịch vụ giấy phép kinh doanh"
            loading="lazy"
          />
        </div>

        <!-- NỘI DUNG BÊN CẠNH ẢNH -->
        <div class="hero-text">
          <h2>Vì sao nên chọn KHtax cho dịch vụ Giấy Phép Kinh Doanh?</h2>

<p>
    <strong>KHtax</strong> chuyên cung cấp dịch vụ <strong>đăng ký, sửa đổi, bổ sung Giấy phép kinh doanh / Hộ kinh doanh cá thể</strong>
    tại <strong>Phan Rang – Ninh Thuận</strong> và <strong>Khánh Hòa</strong>.
    Chúng tôi thay bạn làm việc với cơ quan nhà nước – bạn chỉ cần ký hồ sơ.
</p>

<div class="business-benefits">
    <div class="benefit-item">
        <div class="benefit-icon-top"><i class="fas fa-bolt"></i></div>
        <h3>Thời gian nhanh chóng</h3>
        <p>Xử lý hồ sơ chỉ <strong>1-3 ngày làm việc</strong>, không để bạn chờ đợi lâu. Giảm 70% thời gian so với tự làm.</p>
    </div>
    
    <div class="benefit-item">
        <div class="benefit-icon-top"><i class="fas fa-shield-alt"></i></div>
        <h3>Đảm bảo đúng quy định</h3>
        <p>Hồ sơ chuẩn <strong>100% theo quy định mới nhất</strong>, không bị trả lại, không bị từ chối vì sai sót.</p>
    </div>
    
    <div class="benefit-item">
        <div class="benefit-icon-top"><i class="fas fa-hand-holding-usd"></i></div>
        <h3>Chi phí minh bạch</h3>
        <p>Báo giá <strong>rõ ràng ngay từ đầu</strong>, không phát sinh chi phí ẩn. Tiết kiệm 30-50% so với tự thực hiện.</p>
    </div>
    
    <div class="benefit-item">
        <div class="benefit-icon-top"><i class="fas fa-user-tie"></i></div>
        <h3>Chuyên gia pháp lý</h3>
        <p>Đội ngũ <strong>luật sư, chuyên gia</strong> am hiểu thủ tục hành chính, tư vấn loại hình doanh nghiệp tối ưu.</p>
    </div>
    
    <div class="benefit-item">
        <div class="benefit-icon-top"><i class="fas fa-headset"></i></div>
        <h3>Hỗ trợ trọn đời</h3>
        <p>Hỗ trợ <strong>miễn phí vĩnh viễn</strong> về thủ tục pháp lý sau khi cấp giấy phép. Luôn sẵn sàng tư vấn.</p>
    </div>
    
    <div class="benefit-item">
        <div class="benefit-icon-top"><i class="fas fa-map-marker-alt"></i></div>
        <h3>Phục vụ tận nơi</h3>
        <p>Nhân viên <strong>đến tận cửa hàng/nhà</strong> để ký hồ sơ, nhận chứng từ. Khách hàng không cần đi lại.</p>
    </div>
</div>

<p class="highlight-box">
    📋 <strong>Thực tế:</strong> Nhiều chủ cửa hàng mất 2-3 tuần, đi lại 5-7 lần để tự làm giấy phép. Với KHtax, bạn chỉ cần <strong>1 lần ký hồ sơ tại nhà</strong>, chúng tôi lo tất cả từ A đến Z.
</p>

          <ul class="feature-list">
            <li><i class="fas fa-check-circle"></i> Tư vấn MIỄN PHÍ trước khi làm</li>
            <li><i class="fas fa-check-circle"></i> Soạn hồ sơ trọn gói</li>
            <li><i class="fas fa-check-circle"></i> Đại diện nộp & theo dõi hồ sơ</li>
            <li><i class="fas fa-check-circle"></i> Nhận kết quả tận nơi</li>
          </ul>

          <div class="hero-badges">
            <span><i class="fas fa-bolt"></i> Xử lý nhanh 1–3 ngày</span>
            <span><i class="fas fa-shield-alt"></i> Bảo mật 100%</span>
            <span><i class="fas fa-hand-holding-usd"></i> Giá minh bạch</span>
          </div>
        </div>
      </div>

    </div>

    <!-- KHỐI NỘI DUNG CHÍNH -->
    <article class="gallery-content" itemprop="mainContentOfPage">
      <div class="container">
        <br>
        <!-- DỊCH VỤ DẠNG CARD -->
        <div class="services-section">
          <h2 class="section-title">Dịch vụ GPKD chính:</h2>
      
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon"><i class="fas fa-file-signature" aria-hidden="true"></i></div>
              <h3>Đăng ký GPKD mới</h3>
              <p>Tư vấn loại hình, soạn hồ sơ, nộp và nhận kết quả.</p>
            </div>

            <div class="benefit-card">
              <div class="benefit-icon"><i class="fas fa-edit" aria-hidden="true"></i></div>
              <h3>Thay đổi nội dung</h3>
              <p>Đổi tên, ngành nghề, vốn, địa chỉ, người đại diện.</p>
            </div>

            <div class="benefit-card">
              <div class="benefit-icon"><i class="fas fa-store" aria-hidden="true"></i></div>
              <h3>Đăng ký HKD cá thể</h3>
              <p>Thủ tục nhanh cho cá nhân &amp; hộ gia đình.</p>
            </div>

            <div class="benefit-card">
              <div class="benefit-icon"><i class="fas fa-plus-circle" aria-hidden="true"></i></div>
              <h3>Bổ sung ngành nghề</h3>
              <p>Mở rộng phạm vi kinh doanh hợp pháp.</p>
            </div>

            <div class="benefit-card">
              <div class="benefit-icon"><i class="fas fa-pause-circle" aria-hidden="true"></i></div>
              <h3>Tạm ngừng / Chấm dứt</h3>
              <p>Thủ tục ngừng hoặc đóng doanh nghiệp.</p>
            </div>

            <div class="benefit-card">
              <div class="benefit-icon"><i class="fas fa-copy" aria-hidden="true"></i></div>
              <h3>Cấp lại GPKD</h3>
              <p>Khi bị mất, hỏng hoặc thay đổi thông tin.</p>
            </div>
          </div>
        </div>

        <!-- CAM KẾT -->
        <div class="commitment-box">
          <h2>Cam kết của KHtax</h2>
          <div class="commitment-grid">
            <div>✔️ Tư vấn miễn phí 100%</div>
            <div>✔️ Thời gian xử lý nhanh</div>
            <div>✔️ Không phát sinh chi phí</div>
            <div>✔️ Bảo mật tuyệt đối</div>
            <div>✔️ Hỗ trợ 24/7</div>
          </div>
        </div>

        <!-- CTA CUỐI -->
        <div class="final-cta">
          <h2>Bạn cần làm giấy phép kinh doanh?</h2>
          <p>Gọi ngay để được tư vấn miễn phí trong 5 phút</p>
          <a href="tel:0933414148" class="btn btn-primary">
            <i class="fas fa-phone"></i> Gọi ngay: 0933.414.148
          </a>
        </div>

      </div>
    </article>
  </section>
  `;
});