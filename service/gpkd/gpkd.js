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
      <div class="hero-intro">
        <p class="hero-text">
          Bạn muốn kinh doanh bài bản và bền vững? <br>
          <strong>Giấy phép kinh doanh (GPKD)</strong> chính là nền tảng pháp lý bắt buộc đầu tiên. <br>
          Thế nhưng, câu chuyện "hành chính" không dừng lại ở việc xin mới. <br><br>

          Rất nhiều chủ cửa hàng, xưởng sản xuất tại <strong>Phan Rang, Ninh Thuận, Khánh Hòa</strong> đang loay hoay: từ thủ tục thành lập rườm rà, cho đến việc <strong>thay đổi thông tin, bổ sung ngành nghề</strong> khi cần mở rộng. Thậm chí, nhiều người vì ngại rắc rối mà mạo hiểm kinh doanh "chui" hoặc để giấy phép "đóng băng" – tự biến mình thành <strong>quả bom nổ chậm về pháp lý, thuế má và hình phạt.</strong> <br><br>

          <strong>=> Mọi vấn đề phát sinh từ GPKD, nếu không được xử lý đúng và kịp thời, đều là rủi ro khôn lường.</strong> <br><br>

          <strong>Giải pháp trọn gói của chúng tôi được thiết kế để xử lý mọi nhu cầu của bạn một cách dễ dàng:</strong> <br>
          ✅ <strong>Thành lập mới</strong> Doanh nghiệp/Hộ kinh doanh từ con số 0.<br>
          ✅ <strong>Sửa đổi, bổ sung</strong> ngành nghề kinh doanh.<br>
          ✅ <strong>Cập nhật thông tin</strong> (địa chỉ, người đại diện, vốn điều lệ...).<br>
          ✅ <strong>Tư vấn & xử lý</strong> mọi vấn đề pháp lý liên quan.<br><br>

          <strong>Mọi thắc mắc của bạn đều có lời giải đáp rõ ràng:</strong><br>
          ❓ <strong>"Tôi ở xa có làm được không?"</strong> – CÓ 
           <br>Chúng tôi <strong>hỗ trợ tận nơi</strong> trong khu vực Phan Rang, Ninh Thuận, Khánh Hòa.<br>
          ❓ <strong>"Bao lâu thì xong?"</strong> – RẤT NHANH 
           <br>Thời gian hoàn tất trung bình chỉ <strong>3-5 ngày</strong>.<br>
          ❓ <strong>"Nếu không được thì sao?"</strong> – Bạn hoàn toàn KHÔNG MẤT GÌ 
           <br>Cam kết <strong>"CÓ GPKD MỚI THU PHÍ"</strong>. Chúng tôi chịu mọi rủi ro thay bạn.<br><br>

          Tất cả được gói gọn trong <strong>một dịch vụ trọn vẹn</strong>: bạn <strong>không cần tự đi lại</strong>, <strong>không đau đầu với hồ sơ</strong>, chỉ tập trung vào kinh doanh chính của mình.<br><br>
        <br>
       
          </p>
      </div>

      <!-- HERO ROW -->
      <div class="hero-row">
        <div class="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Dịch vụ giấy phép kinh doanh chuyên nghiệp"
            loading="lazy"
          />
        </div>
 <br>
        <div class="hero-benefits">
          <h2>Dịch vụ GPKD trọn gói tại Phan Rang, Ninh Thuận, Khánh Hòa</h2>
          
          <p><strong>CANATax</strong> là chuyên gia đồng hành cùng doanh nghiệp & hộ kinh doanh, cung cấp dịch vụ <strong>Đăng ký - Sửa đổi - Cập nhật Giấy phép kinh doanh (GPKD/HKD)</strong> trọn gói, chính xác và nhanh chóng.</p>
          <p><strong>Bạn chỉ cần ký — Chúng tôi lo tất cả thủ tục.</strong></p>
 <br>
          <!-- BENEFITS -->
          <div class="business-benefits">
            <div class="benefit-item">
              <h3><i class="fas fa-bolt"></i> Siêu tốc & tiện lợi</h3>
              <p>Xử lý chỉ <strong>1–3 ngày</strong>, hỗ trợ tận nơi — bạn không cần đi đâu cả.</p>
            </div>
            
            <div class="benefit-item">
              <h3><i class="fas fa-shield-alt"></i> Chuẩn pháp lý 100%</h3>
              <p>Hồ sơ đúng quy định, giảm thiểu rủi ro bị trả, yêu cầu bổ sung.</p>
            </div>
            
            <div class="benefit-item">
              <h3><i class="fas fa-user-tie"></i> Chuyên gia giàu kinh nghiệm</h3>
              <p>Tư vấn đúng loại hình, đúng luật, tối ưu hóa thủ tục cho bạn.</p>
            </div>
            
            <div class="benefit-item">
              <h3><i class="fas fa-handshake"></i> Minh bạch & cam kết rõ ràng</h3>
              <p>Báo giá cố định từ đầu, <strong>không phát sinh chi phí</strong>.</p>
            </div>
            
            <div class="benefit-item">
              <h3><i class="fas fa-headset"></i> Hỗ trợ trọn đời</h3>
              <p>Tư vấn pháp lý miễn phí sau khi có GPKD, luôn sẵn sàng giải đáp.</p>
            </div>
            
            <div class="benefit-item">
              <h3><i class="fas fa-award"></i> Chịu rủi ro thay bạn</h3>
              <p>Chỉ thanh toán khi nhận GPKD hợp lệ. Không kết quả — không thu phí.</p>
            </div>
          </div>

          <div class="highlight-box">
            <p>📋 <strong>Thực tế:</strong> Tự làm thường mất 2–3 tuần và đi lại nhiều lần.
            Với CANATax, bạn chỉ cần <strong>1 lần ký tại nhà</strong>.</p>
          </div>

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

      <!-- KHỐI NỘI DUNG CHÍNH -->
      <article class="gallery-content" itemprop="mainContentOfPage">
        <div class="container">

          <!-- DỊCH VỤ DẠNG CARD -->
          <div class="services-section">
            <h2 class="section-title">Dịch vụ trọn gói từ A-Z cho mọi nhu cầu GPKD</h2>
            <p class="section-subtitle">Dù bạn đang bắt đầu, điều chỉnh hay kết thúc kinh doanh, chúng tôi đều có giải pháp pháp lý phù hợp và nhanh chóng.</p>
             <br>
            <div class="benefits-grid">

              <!-- Nhóm 1: Bắt đầu kinh doanh -->
              <div class="benefit-card card-highlight">
                <div class="benefit-icon"><i class="fas fa-rocket" aria-hidden="true"></i></div>
                <h3>Thành lập HKD/ Doanh nghiệp mới</h3>
                <p><strong>Đăng ký Doanh nghiệp / HKD</strong><br>
                Tư vấn loại hình tối ưu, soạn hồ sơ chuẩn, nộp và nhận kết quả nhanh.</p>
                <div class="price-tag">500.000đ</div>
              </div>

              <div class="benefit-card">
                <div class="benefit-icon"><i class="fas fa-store" aria-hidden="true"></i></div>
                <h3>Cập nhật dữ liệu dân cư mới</h3>
                <p>Cập nhật thông tin GPKD theo dữ liệu mới nhất sau khi sát nhập tỉnh cũng như CCCD lẫn MST mới.</p>
                <div class="price-tag">300.000đ</div>
              </div>

              <!-- Nhóm 2: Điều chỉnh & Mở rộng -->
              <div class="benefit-card">
                <div class="benefit-icon"><i class="fas fa-edit" aria-hidden="true"></i></div>
                <h3>Thay đổi thông tin GPKD</h3>
                <p>Đổi tên, địa chỉ, ngành nghề kinh doanh, sđt, vốn, người đại diện... Cập nhật GPKD theo tình hình thực tế.</p>
                <div class="price-tag">500.000đ</div>
              </div>

              <div class="benefit-card">
                <div class="benefit-icon"><i class="fas fa-layer-group" aria-hidden="true"></i></div>
                <h3>Bổ sung, xóa bỏ ngành nghề</h3>
                <p>Mở rộng phạm vi kinh doanh hợp pháp khi doanh nghiệp phát triển.</p>
                <div class="price-tag">500.000đ</div>
              </div>

              <!-- Nhóm 3: Quản lý & Kết thúc -->
              <div class="benefit-card">
                <div class="benefit-icon"><i class="fas fa-file-export" aria-hidden="true"></i></div>
                <h3>Cấp lại / Sao y GPKD</h3>
                <p>Xin lại bản gốc bị mất, hỏng hoặc sao y công chứng để giao dịch.</p>
                <div class="price-tag">500.000đ</div>
              </div>

              <div class="benefit-card">
                <div class="benefit-icon"><i class="fas fa-ban" aria-hidden="true"></i></div>
                <h3>Xử lý trạng thái</h3>
                <p>Thủ tục tạm dừng, chấm dứt, khôi phục hoạt động đúng quy định.</p>
                <div class="price-tag">500.000đ</div>
              </div>

            </div>
             <br>
            <div class="service-note">
              <p><strong>✨ Tất cả dịch vụ đều đi kèm:</strong> Tư vấn chuyên sâu, hỗ trợ tận nơi, cam kết thời gian và chỉ thanh toán khi thành công.</p>
            </div>
          </div>
          
        </div>
      </article>

    </div>
  </section>
  `;
});