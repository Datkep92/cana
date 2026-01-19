document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("benefitsContainer");
    if (!container) return;

    container.innerHTML = `
    <section class="benefits-section" id="benefits" aria-labelledby="benefitsTitle">
        <div class="container">
            <div class="section-header">
                <h2 id="benefitsTitle" class="section-title">Tại sao nên chọn KHtax?</h2>
                <div class="title-divider" aria-hidden="true">
                    <div class="divider-line"></div>
                    <div class="divider-icon"><i class="fas fa-award"></i></div>
                    <div class="divider-line"></div>
                </div>
                <p class="section-description">Lựa chọn KHtax là lựa chọn sự chuyên nghiệp, tin cậy và hiệu quả cho công tác thuế - kế toán của doanh nghiệp.</p>
            </div>
            
            <div class="benefits-grid">
                <div class="benefit-card">
                    <div class="benefit-icon"><i class="fas fa-user-tie" aria-hidden="true"></i></div>
                    <div class="benefit-info">
                        <h3 class="benefit-title">Đội Ngũ Chuyên Gia</h3>
                        <p class="benefit-desc">Kế toán trưởng, chuyên viên thuế có 10+ năm kinh nghiệm, am hiểu pháp luật sâu sắc.</p>
                    </div>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon"><i class="fas fa-shield-alt" aria-hidden="true"></i></div>
                    <div class="benefit-info">
                        <h3 class="benefit-title">Tuân Thủ Pháp Luật 100%</h3>
                        <p class="benefit-desc">Đảm bảo mọi báo cáo, hồ sơ chính xác, đúng hạn, tuân thủ quy định thuế hiện hành.</p>
                    </div>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon"><i class="fas fa-chart-line" aria-hidden="true"></i></div>
                    <div class="benefit-info">
                        <h3 class="benefit-title">Tư Vấn Tối Ưu Thuế</h3>
                        <p class="benefit-desc">Đề xuất giải pháp tài chính - thuế thông minh, giúp doanh nghiệp tiết kiệm tối đa chi phí.</p>
                    </div>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon"><i class="fas fa-history" aria-hidden="true"></i></div>
                    <div class="benefit-info">
                        <h3 class="benefit-title">Báo Cáo Đúng Hạn</h3>
                        <p class="benefit-desc">Cam kết hoàn thành và nộp báo cáo thuế, tài chính đúng thời hạn pháp luật quy định.</p>
                    </div>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon"><i class="fas fa-lock" aria-hidden="true"></i></div>
                    <div class="benefit-info">
                        <h3 class="benefit-title">Bảo Mật Tuyệt Đối</h3>
                        <p class="benefit-desc">Mọi thông tin, dữ liệu tài chính của khách hàng được bảo mật an toàn tuyệt đối.</p>
                    </div>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon"><i class="fas fa-headset" aria-hidden="true"></i></div>
                    <div class="benefit-info">
                        <h3 class="benefit-title">Hỗ Trợ Chuyên Sâu 24/7</h3>
                        <p class="benefit-desc">Tư vấn, giải đáp mọi thắc mắc về thuế, kế toán kịp thời, mọi lúc, mọi nơi.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
});