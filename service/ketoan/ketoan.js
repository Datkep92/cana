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
                        src="https://i.ibb.co/v4gch8Bb/15a431fc-c0d6-49b2-b6d9-305d718737ac.jpg" 
                        alt="Dịch vụ kế toán trọn gói cho HKD và doanh nghiệp"
                        loading="lazy"
                    />
                </div>

                <!-- NỘI DUNG BÊN CẠNH ẢNH -->
                <div class="hero-text">
                    <h2>Vì sao cửa hàng tạp hóa, ăn uống nên chọn KHtax?</h2>

<p>
    <strong>KHtax</strong> hiểu rõ đặc thù kinh doanh của các cửa hàng tạp hóa, quán ăn, tiệm cafe. Chúng tôi mang đến <strong>giải pháp kế toán đơn giản, hiệu quả với chi phí thấp nhất</strong>.
</p>

<div class="business-benefits">
    <div class="benefit-item">
        <div class="benefit-icon-top"><i class="fas fa-money-bill-wave"></i></div>
        <h3>Chi phí cực thấp</h3>
        <p>Chỉ từ <strong>300.000đ/tháng</strong> - bằng 1/10 so với thuê kế toán toàn thời gian. Phù hợp với quy mô nhỏ.</p>
    </div>
    
    <div class="benefit-item">
        <div class="benefit-icon-top"><i class="fas fa-gavel"></i></div>
        <h3>Tránh phạt thuế</h3>
        <p>Đảm bảo <strong>khai thuế đúng, nộp đúng hạn</strong>, không lo bị phạt từ 5-20 triệu/năm vì sai sót.</p>
    </div>
    
    <div class="benefit-item">
        <div class="benefit-icon-top"><i class="fas fa-clock"></i></div>
        <h3>Tiết kiệm thời gian</h3>
        <p>Không mất 2-3 ngày/tháng làm sổ sách. <strong>Dành thời gian chăm sóc khách hàng, nhập hàng</strong>.</p>
    </div>
    
    <div class="benefit-item">
        <div class="benefit-icon-top"><i class="fas fa-calculator"></i></div>
        <h3>Kê khai dễ dàng</h3>
        <p>Chỉ cần <strong>chụp hóa đơn gửi Zalo</strong>. Phần còn lại KHtax lo từ A đến Z.</p>
    </div>
    
    <div class="benefit-item">
        <div class="benefit-icon-top"><i class="fas fa-lightbulb"></i></div>
        <h3>Tối ưu chi phí hợp lý</h3>
        <p>Được tư vấn các khoản <strong>chi phí được trừ hợp pháp</strong> để giảm nghĩa vụ thuế.</p>
    </div>
    
    <div class="benefit-item">
        <div class="benefit-icon-top"><i class="fas fa-headset"></i></div>
        <h3>Hỗ trợ tận tình</h3>
        <p>Được <strong>tư vấn miễn phí mọi lúc</strong> về thuế, hóa đơn, chứng từ kinh doanh.</p>
    </div>
</div>

<p class="highlight-box">
    🏪 <strong>Thực tế:</strong> Chủ cửa hàng tạp hóa chỉ tốn 4 triệu/năm cho dịch vụ KHtax nhưng <strong>không lo phạt thuế, được tư vấn tối ưu, tập trung kinh doanh tốt hơn</strong>.
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

                <!-- DỊCH VỤ KẾ TOÁN DẠNG CARD -->
                <div class="services-section">
                    <h2 class="section-title">Dịch Vụ Kế Toán Chi Tiết</h2>
                    
                    <h3 class="subsection-title">Dịch vụ kế toán cho Hộ Kinh Doanh Cá Thể (HKD):</h3>
                    <div class="benefits-grid">
                        <div class="benefit-card">
                            <div class="benefit-icon"><i class="fas fa-file-invoice" aria-hidden="true"></i></div>
                            <h3>Khai thuế GTGT</h3>
                            <p>Lập và nộp tờ khai thuế GTGT hàng tháng/quý đúng hạn.</p>
                        </div>

                        <div class="benefit-card">
                            <div class="benefit-icon"><i class="fas fa-user-circle" aria-hidden="true"></i></div>
                            <h3>Khai thuế TNCN</h3>
                            <p>Tính và khai thuế thu nhập cá nhân cho chủ HKD (nếu có).</p>
                        </div>

                        <div class="benefit-card">
                            <div class="benefit-icon"><i class="fas fa-book" aria-hidden="true"></i></div>
                            <h3>Lập sổ sách kế toán</h3>
                            <p>Sổ thu chi, sổ quỹ, sổ theo dõi công nợ đơn giản.</p>
                        </div>

                        <div class="benefit-card">
                            <div class="benefit-icon"><i class="fas fa-graduation-cap" aria-hidden="true"></i></div>
                            <h3>Tư vấn chế độ kế toán</h3>
                            <p>Áp dụng chế độ kế toán phù hợp với quy mô HKD.</p>
                        </div>

                        <div class="benefit-card">
                            <div class="benefit-icon"><i class="fas fa-receipt" aria-hidden="true"></i></div>
                            <h3>Quản lý hóa đơn</h3>
                            <p>Báo cáo tình hình sử dụng hóa đơn theo quy định.</p>
                        </div>

                        <div class="benefit-card">
                            <div class="benefit-icon"><i class="fas fa-calculator" aria-hidden="true"></i></div>
                            <h3>Quyết toán thuế cuối năm</h3>
                            <p>Tổng hợp và quyết toán thuế năm cho HKD.</p>
                        </div>
                    </div>

                    <h3 class="subsection-title" style="margin-top: 50px;">Dịch vụ kế toán cho Doanh Nghiệp:</h3>
                    <div class="benefits-grid">
                        <div class="benefit-card">
                            <div class="benefit-icon"><i class="fas fa-cogs" aria-hidden="true"></i></div>
                            <h3>Kế toán thuế trọn gói</h3>
                            <p>Bao gồm tất cả công việc kế toán, thuế hàng tháng/quý/năm.</p>
                        </div>

                        <div class="benefit-card">
                            <div class="benefit-icon"><i class="fas fa-chart-line" aria-hidden="true"></i></div>
                            <h3>Báo cáo tài chính</h3>
                            <p>Lập báo cáo tài chính năm đầy đủ, chính xác.</p>
                        </div>

                        <div class="benefit-card">
                            <div class="benefit-icon"><i class="fas fa-balance-scale" aria-hidden="true"></i></div>
                            <h3>Quyết toán thuế TNDN</h3>
                            <p>Lập tờ khai quyết toán thuế TNDN, tối ưu chi phí.</p>
                        </div>

                        <div class="benefit-card">
                            <div class="benefit-icon"><i class="fas fa-users" aria-hidden="true"></i></div>
                            <h3>Kê khai thuế TNCN</h3>
                            <p>Tính và kê khai thuế TNCN cho người lao động.</p>
                        </div>

                        <div class="benefit-card">
                            <div class="benefit-icon"><i class="fas fa-archive" aria-hidden="true"></i></div>
                            <h3>Quản lý chứng từ</h3>
                            <p>Kiểm tra, phân loại, lưu trữ hóa đơn đầu vào, đầu ra.</p>
                        </div>

                        <div class="benefit-card">
                            <div class="benefit-icon"><i class="fas fa-handshake" aria-hidden="true"></i></div>
                            <h3>Đại diện làm việc với thuế</h3>
                            <p>Trực tiếp làm việc khi có thanh tra, kiểm tra thuế.</p>
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