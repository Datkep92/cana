document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("trangchuContainer");
    if (!container) return;

    container.innerHTML = `
    <section class="trangchu-section modern-hero" id="trangchu" aria-labelledby="trangchuTitle">
        <div class="container">

            <!-- HÀNG 1: TIÊU ĐỀ -->
            <div class="hero-content">
                <h1 id="trangchuTitle" class="hero-title" itemprop="headline">
                    Dịch Vụ Thuế - Kế Toán Trọn Gói
                    <br>
                    <span class="city-name">Phan Rang & Khánh Hòa</span>
                    <br>
                    <span class="text-champagne">Tư vấn thuế • Báo cáo tài chính • Thành lập doanh nghiệp • Quyết toán thuế</span>
                </h1>

                <div id="heroCtaContainer"></div>

                <div class="title-divider" aria-hidden="true">
                    <div class="divider-line"></div>
                    <div class="divider-icon"><i class="fas fa-file-invoice-dollar"></i></div>
                    <div class="divider-line"></div>
                </div>
            </div>

            <!-- HÀNG 2: ẢNH VÀ GIỚI THIỆU -->
            <div class="hero-row">
                <!-- ẢNH -->
                <div class="hero-image">
                    <img 
                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=900" 
                        alt="Dịch vụ thuế kế toán trọn gói tại Phan Rang Khánh Hòa"
                        loading="lazy"
                    />
                </div>

                <!-- NỘI DUNG BÊN CẠNH ẢNH -->
                <div class="hero-text">
                    <h2>Vì sao doanh nghiệp nên chọn KHtax?</h2>
                    <p>
                        <strong>KHtax</strong> - Đơn vị cung cấp dịch vụ <strong>tư vấn thuế, kế toán và giấy phép doanh nghiệp</strong> chuyên nghiệp hàng đầu tại khu vực <strong>Phan Rang - Ninh Thuận, Khánh Hòa và lân cận</strong>. Chúng tôi mang đến giải pháp tài chính - thuế toàn diện, chính xác và đúng hạn cho mọi doanh nghiệp.
                    </p>

                    <ul class="feature-list">
                        <li><i class="fas fa-check-circle"></i> Đội ngũ kế toán trưởng 10+ năm kinh nghiệm</li>
                        <li><i class="fas fa-check-circle"></i> Cam kết báo cáo đúng hạn 100%</li>
                        <li><i class="fas fa-check-circle"></i> Tư vấn tối ưu thuế, giảm chi phí hợp pháp</li>
                        <li><i class="fas fa-check-circle"></i> Bảo mật thông tin khách hàng tuyệt đối</li>
                    </ul>

                    <div class="hero-badges">
                        <span><i class="fas fa-user-tie"></i> Chuyên gia thuế</span>
                        <span><i class="fas fa-shield-alt"></i> Đảm bảo pháp lý</span>
                        <span><i class="fas fa-headset"></i> Hỗ trợ 24/7</span>
                    </div>
                </div>
            </div>

        </div>

        <!-- KHỐI NỘI DUNG CHÍNH -->
        <article class="trangchu-content" itemprop="mainContentOfPage">
            <div class="container">

                <!-- DỊCH VỤ DẠNG CARD -->
                <div class="services-section">
                    <h2 class="section-title">Dịch Vụ Chính Của KHtax</h2>
                    
                    <div class="benefits-grid">
                        <div class="benefit-card">
                            <div class="benefit-icon"><i class="fas fa-calculator" aria-hidden="true"></i></div>
                            <h3>Kế toán thuế trọn gói</h3>
                            <p>Ghi sổ, hạch toán, lập báo cáo tài chính, báo cáo thuế hàng tháng/quý/năm.</p>
                        </div>

                        <div class="benefit-card">
                            <div class="benefit-icon"><i class="fas fa-file-contract" aria-hidden="true"></i></div>
                            <h3>Tư vấn & quyết toán thuế</h3>
                            <p>Tư vấn chính sách thuế, hoàn thuế, quyết toán thuế TNDN/TNCN.</p>
                        </div>

                        <div class="benefit-card">
                            <div class="benefit-icon"><i class="fas fa-building" aria-hidden="true"></i></div>
                            <h3>Thành lập doanh nghiệp</h3>
                            <p>Tư vấn, soạn hồ sơ, đăng ký kinh doanh, giấy phép con.</p>
                        </div>

                        <div class="benefit-card">
                            <div class="benefit-icon"><i class="fas fa-chart-line" aria-hidden="true"></i></div>
                            <h3>Báo cáo tài chính</h3>
                            <p>Lập, kiểm tra và nộp báo cáo tài chính theo quy định.</p>
                        </div>

                        <div class="benefit-card">
                            <div class="benefit-icon"><i class="fas fa-cogs" aria-hidden="true"></i></div>
                            <h3>Hệ thống kế toán</h3>
                            <p>Thiết lập, hướng dẫn và tối ưu hóa quy trình kế toán nội bộ.</p>
                        </div>

                        <div class="benefit-card">
                            <div class="benefit-icon"><i class="fas fa-handshake" aria-hidden="true"></i></div>
                            <h3>Đại diện làm việc với thuế</h3>
                            <p>Trực tiếp làm việc, giải trình, bảo vệ quyền lợi doanh nghiệp.</p>
                        </div>
                    </div>
                </div>

               

            </div>
        </article>
    </section>
    `;
});