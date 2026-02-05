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
                        src="https://imagur.org/wp-content/uploads/2026/01/15a431fc-c0d6-49b2-b6d9-305d718737ac.jpg" 
                        alt="Dịch vụ kế toán trọn gói cho HKD và doanh nghiệp"
                        loading="lazy"
                    />
                </div>

                <!-- NỘI DUNG BÊN CẠNH ẢNH -->
                <br>
                <div class="hero-text">
                    <h2>Vì sao Hộ kinh doanh - Doanh nghiệp nên thuê Kế Toán?</h2>

<p>
    Bạn có nhận thấy cơ quan thuế đang <strong>siết chặt hơn bao giờ hết</strong>? 
    Việc <strong>xuất hóa đơn không đầy đủ</strong> hay <strong>kê khai thuế thiếu minh bạch</strong> 
    giờ đây không chỉ là lỗi nhỏ, mà có thể dẫn đến <strong>truy thu thuế hàng trăm triệu</strong> 
    và <strong>vi phạm pháp luật nghiêm trọng</strong>. Đừng để thói quen "kinh doanh lỏng lẻo" 
    của quá khứ trở thành gánh nặng pháp lý cho hiện tại.
</p>
<p>
Chúng tôi hiểu rằng với vai trò chủ Hộ kinh doanh cá thể (HKD) hoặc Doanh nghiệp nhỏ, bạn 
có rất nhiều việc phải lo toan. Việc tự mình xử lý kế toán và thuế không chỉ tốn thời gian 
mà còn dễ mắc sai lầm nghiêm trọng. Đó là lý do tại sao dịch vụ <strong>kế toán</strong> 
của chúng tôi có thể giúp bạn <strong>yên tâm kinh doanh</strong> mà không phải lo lắng 
về các vấn đề pháp lý và thuế má.
</p>
<p>
    <strong>Lợi ích của dịch vụ Kế Toán</strong> của chúng tôi:
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
    🏪 <strong>Thực tế:</strong> HKD, Doanh nghiệp chỉ tốn 1/10 số tiền nếu thuê kế toán toàn thời gian so với dịch vụ Kế toán của chúng tôi nhưng <strong>không lo phạt thuế, được tư vấn tối ưu, tập trung kinh doanh tốt hơn</strong>.
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
                   
                        <div class="benefit-card">
                            <div class="benefit-icon"><i class="fas fa-cogs" aria-hidden="true"></i></div>
                            <h3>Xuất hóa đơn bán hàng</h3>
                            <p>Xuất hóa đơn ngay 5-10 phút sau khi giao dịch.</p>
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

            

            </div>
        </article>
    </section>
    `;
});