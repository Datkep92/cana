document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("galleryContainer");
    if (!container) return;

    container.innerHTML = `
    <section class="gallery-section modern-hero" id="gallery" aria-labelledby="galleryTitle">
        <div class="container">

            <!-- HÀNG 1: TIÊU ĐỀ -->
            <div class="hero-content">
                <h1 id="galleryTitle" class="hero-title" itemprop="headline">
                    Dịch Vụ Kế Toán Trọn Gói
                    <br>
                    <span class="city-name">Cho HKD & Doanh Nghiệp</span>
                    <br>
                    <span class="text-champagne">Phan Rang & Khánh Hòa - Chuyên Nghiệp & Tận Tâm</span>
                </h1>

                <div id="heroCtaContainer"></div>

                <div class="title-divider" aria-hidden="true">
                    <div class="divider-line"></div>
                    <div class="divider-icon"><i class="fas fa-calculator"></i></div>
                    <div class="divider-line"></div>
                </div>
            </div>

            <!-- HÀNG 2: ẢNH VÀ GIỚI THIỆU -->
            <div class="hero-row">
                <!-- ẢNH -->
                <div class="hero-image">
                    <img 
                        src="https://i.ibb.co/x8mK2QRC/b6f4177a-0371-49f2-bb57-2c15ffd8f5c4.jpg" 
                        alt="Dịch vụ kế toán trọn gói cho HKD và doanh nghiệp"
                        loading="lazy"
                    />
                </div>

                <!-- NỘI DUNG BÊN CẠNH ẢNH -->
                <div class="hero-text">
                    <h2>Vì sao HKD nhỏ lẻ, tạp hóa, cửa hàng nên chọn KHtax?</h2>

<p>
    <strong>KHtax</strong> thấu hiểu đặc thù kinh doanh của các Hộ kinh doanh cá thể, cửa hàng tạp hóa, nhà thuốc, tiệm ăn, quán cafe... tại <strong>Phan Rang - Ninh Thuận, Khánh Hòa</strong>. Chúng tôi mang đến giải pháp thuế-kế toán <strong>tối ưu chi phí, dễ hiểu và phù hợp</strong> với quy mô kinh doanh nhỏ.
</p>

<div class="business-benefits">
    <!-- Hàng 1: 3 cột -->
    <div class="benefit-item">
        <h3><i class="fas fa-money-bill-wave"></i> Tiết kiệm tối đa chi phí</h3>
        <p>Chỉ từ <strong>300.000đ/tháng</strong> - rẻ hơn nhiều so với thuê kế toán toàn thời gian (15-20 triệu/năm). Không phải trả lương tháng 13, BHXH, phụ cấp.</p>
    </div>
    
    <div class="benefit-item">
        <h3><i class="fas fa-gavel"></i> Tránh rủi ro pháp lý & phạt thuế</h3>
        <p>HKD dễ bị phạt vì khai sai, nộp chậm (phạt 10-50% số thuế thiếu). Chúng tôi đảm bảo <strong>đúng hạn, chính xác 100%</strong>, không lo cơ quan thuế kiểm tra.</p>
    </div>
    
    <div class="benefit-item">
        <h3><i class="fas fa-clock"></i> Tiết kiệm thời gian tập trung kinh doanh</h3>
        <p>Bạn không cần mất 2-3 ngày/tháng để làm sổ sách, nộp thuế. Thời gian đó dành để <strong>chăm sóc khách hàng, phát triển cửa hàng</strong>.</p>
    </div>
    
    <!-- Hàng 2: 3 cột -->
    <div class="benefit-item">
        <h3><i class="fas fa-lightbulb"></i> Tư vấn chi phí hợp lý được trừ</h3>
        <p>Giúp bạn tối ưu các khoản chi phí hợp lý (tiền điện nước, thuê mặt bằng, hao mòn tài sản...) để <strong>giảm nghĩa vụ thuế</strong> mà vẫn đúng luật.</p>
    </div>
    
    <div class="benefit-item">
        <h3><i class="fas fa-file-invoice"></i> Quản lý hóa đơn chuyên nghiệp</h3>
        <p>Hướng dẫn bạn cách lưu trữ hóa đơn mua vào, xuất hóa đơn bán ra đúng quy định, tránh bị phạt về hóa đơn.</p>
    </div>
        <h3>Quản lý hóa đơn chuyên nghiệp</h3>
        <p>Hướng dẫn bạn cách lưu trữ hóa đơn mua vào, xuất hóa đơn bán ra đúng quy định, tránh bị phạt về hóa đơn.</p>
    </div>
    
    <div class="benefit-item">
        <h3><i class="fas fa-headset"></i> Hỗ trợ mọi lúc - Không giới hạn</h3>
        <p>Bất kỳ thắc mắc về thuế, hóa đơn, chứng từ... đều được giải đáp ngay qua Zalo/Điện thoại. <strong>Không tính phí tư vấn thêm</strong>.</p>
    </div>
</div>

<p class="highlight-box">
    💡 <strong>Thực tế:</strong> Nhiều chủ cửa hàng tạp hóa, quán ăn nhỏ phải nộp phạt 5-10 triệu đồng/năm vì khai thuế sai. Với KHtax, bạn chỉ tốn 3-4 triệu đồng/năm để <strong>an tâm tuyệt đối, tập trung kinh doanh và phát triển</strong>.
</p>

                    <ul class="feature-list">
                        <li><i class="fas fa-check-circle"></i> Tiết kiệm chi phí thuê kế toán toàn thời gian</li>
                        <li><i class="fas fa-check-circle"></i> Đảm bảo tính pháp lý, tránh rủi ro thuế</li>
                        <li><i class="fas fa-check-circle"></i> Tối ưu thuế, giảm nghĩa vụ thuế hợp pháp</li>
                        <li><i class="fas fa-check-circle"></i> Báo cáo đúng hạn, không lo bị phạt</li>
                    </ul>

                    <div class="hero-badges">
                        <span><i class="fas fa-user-tie"></i> Kế toán trưởng 10+ năm kinh nghiệm</span>
                        <span><i class="fas fa-shield-alt"></i> Bảo mật thông tin 100%</span>
                        <span><i class="fas fa-headset"></i> Hỗ trợ 24/7</span>
                    </div>
                </div>
            </div>

        </div>

        <!-- KHỐI NỘI DUNG CHÍNH -->
        <article class="gallery-content" itemprop="mainContentOfPage">
            <div class="container">

                <!-- DỊCH VỤ THUẾ CÁ NHÂN VÀ DOANH NGHIỆP -->
<div class="services-section">
    <h2 class="section-title">Dịch Vụ Thuế Chi Tiết</h2>
    
    <h3 class="subsection-title">Dịch vụ thuế cho Cá Nhân (Thuế TNCN):</h3>
    <div class="benefits-grid">
        <div class="benefit-card">
            <div class="benefit-icon"><i class="fas fa-user-check" aria-hidden="true"></i></div>
            <h3>Khai thuế TNCN hàng tháng/quý</h3>
            <p>Lập và nộp tờ khai thuế thu nhập cá nhân định kỳ theo quy định.</p>
        </div>

        <div class="benefit-card">
            <div class="benefit-icon"><i class="fas fa-file-contract" aria-hidden="true"></i></div>
            <h3>Quyết toán thuế TNCN cuối năm</h3>
            <p>Tổng hợp, đối chiếu và quyết toán thuế thu nhập cá nhân cuối năm.</p>
        </div>

        <div class="benefit-card">
            <div class="benefit-icon"><i class="fas fa-home" aria-hidden="true"></i></div>
            <h3>Thuế thu nhập từ cho thuê tài sản</h3>
            <p>Khai thuế, quyết toán thu nhập từ cho thuê nhà, đất, tài sản.</p>
        </div>

        <div class="benefit-card">
            <div class="benefit-icon"><i class="fas fa-chart-line" aria-hidden="true"></i></div>
            <h3>Thuế thu nhập từ đầu tư vốn</h3>
            <p>Khai thuế thu nhập từ cổ tức, lãi cho vay, đầu tư tài chính.</p>
        </div>

        <div class="benefit-card">
            <div class="benefit-icon"><i class="fas fa-exchange-alt" aria-hidden="true"></i></div>
            <h3>Thuế thu nhập từ chuyển nhượng</h3>
            <p>Khai thuế chuyển nhượng bất động sản, chứng khoán, tài sản.</p>
        </div>

        <div class="benefit-card">
            <div class="benefit-icon"><i class="fas fa-hand-holding-usd" aria-hidden="true"></i></div>
            <h3>Hoàn thuế TNCN</h3>
            <p>Thực hiện thủ tục hoàn thuế khi đủ điều kiện theo luật thuế.</p>
        </div>
    </div>

    <h3 class="subsection-title" style="margin-top: 50px;">Dịch vụ thuế cho Doanh Nghiệp/HKD:</h3>
    <div class="benefits-grid">
        <div class="benefit-card">
            <div class="benefit-icon"><i class="fas fa-percentage" aria-hidden="true"></i></div>
            <h3>Khai thuế GTGT (VAT)</h3>
            <p>Khai thuế giá trị gia tăng hàng tháng/quý theo phương pháp khấu trừ/trực tiếp.</p>
        </div>

        <div class="benefit-card">
            <div class="benefit-icon"><i class="fas fa-building" aria-hidden="true"></i></div>
            <h3>Khai thuế TNDN tạm tính</h3>
            <p>Khai thuế thu nhập doanh nghiệp tạm tính hàng quý theo quy định.</p>
        </div>

        <div class="benefit-card">
            <div class="benefit-icon"><i class="fas fa-file-invoice-dollar" aria-hidden="true"></i></div>
            <h3>Quyết toán thuế TNDN năm</h3>
            <p>Lập tờ khai quyết toán thuế TNDN, báo cáo tài chính năm.</p>
        </div>

        <div class="benefit-card">
            <div class="benefit-icon"><i class="fas fa-id-card" aria-hidden="true"></i></div>
            <h3>Thuế môn bài</h3>
            <p>Đăng ký, khai và nộp thuế môn bài cho doanh nghiệp/HKD hàng năm.</p>
        </div>

        <div class="benefit-card">
            <div class="benefit-icon"><i class="fas fa-recycle" aria-hidden="true"></i></div>
            <h3>Thuế bảo vệ môi trường</h3>
            <p>Khai thuế bảo vệ môi trường, thuế tài nguyên (nếu có).</p>
        </div>

        <div class="benefit-card">
            <div class="benefit-icon"><i class="fas fa-undo-alt" aria-hidden="true"></i></div>
            <h3>Hoàn thuế GTGT</h3>
            <p>Thực hiện thủ tục hoàn thuế GTGT cho doanh nghiệp xuất khẩu, đầu tư.</p>
        </div>
    </div>
</div>

                    
                <!-- QUY TRÌNH LÀM VIỆC -->
                <div class="process-section">
                    <h2 class="section-title">Quy Trình Làm Việc</h2>
                    <div class="process-steps">
                        <div class="process-step">
                            <div class="step-number">1</div>
                            <h3>Tư vấn ban đầu</h3>
                            <p>Khảo sát nhu cầu, tư vấn dịch vụ phù hợp với doanh nghiệp</p>
                        </div>
                        <div class="process-step">
                            <div class="step-number">2</div>
                            <h3>Ký hợp đồng</h3>
                            <p>Thỏa thuận phạm vi công việc, chi phí, thời hạn rõ ràng</p>
                        </div>
                        <div class="process-step">
                            <div class="step-number">3</div>
                            <h3>Tiếp nhận chứng từ</h3>
                            <p>Hướng dẫn cách thức chuyển chứng từ hàng tháng thuận tiện</p>
                        </div>
                        <div class="process-step">
                            <div class="step-number">4</div>
                            <h3>Xử lý kế toán</h3>
                            <p>Ghi sổ, lập báo cáo thuế, báo cáo tài chính chuyên nghiệp</p>
                        </div>
                        <div class="process-step">
                            <div class="step-number">5</div>
                            <h3>Báo cáo kết quả</h3>
                            <p>Gửi báo cáo định kỳ và tư vấn chiến lược cho doanh nghiệp</p>
                        </div>
                        <div class="process-step">
                            <div class="step-number">6</div>
                            <h3>Hỗ trợ sau dịch vụ</h3>
                            <p>Giải đáp thắc mắc, tư vấn phát triển bền vững</p>
                        </div>
                    </div>
                </div>

                <!-- KHU VỰC PHỤC VỤ & CTA -->
                <div class="service-footer">
                    <div class="service-area">
                        <h3><i class="fas fa-map-marker-alt"></i> Khu Vực Phục Vụ</h3>
                        <p><strong>Phan Rang - Tháp Chàm (Ninh Thuận)</strong>, <strong>Nha Trang - Cam Ranh (Khánh Hòa)</strong> và toàn khu vực Miền Trung - Tây Nguyên.</p>
                    </div>

                    <div class="final-cta">
                        <h3>Để lại thông tin để được tư vấn miễn phí</h3>
                        <p>Chuyên gia KHtax sẽ liên hệ tư vấn chi tiết trong 15 phút</p>
                        <a href="javascript:void(0)" onclick="if(window.bookingSystem) window.bookingSystem.scrollToBooking();" class="btn btn-primary">
                            <i class="fas fa-calendar-check"></i> Đăng Ký Tư Vấn Ngay
                        </a>
                    </div>
                </div>

            </div>
        </article>
    </section>
    `;
});