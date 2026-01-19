// js/booking-telegram.js - Version 4.0 (KHtax Tax Service Booking)
class TelegramBooking {
    constructor() {
        this.config = null;
        this.isLoading = false;
        this.serviceTypes = [
            'Kế toán thuế trọn gói',
            'Quyết toán thuế TNDN/TNCN',
            'Thành lập doanh nghiệp',
            'Báo cáo tài chính năm',
            'Tư vấn thuế chuyên sâu',
            'Giấy phép kinh doanh',
            'Hoàn thuế GTGT',
            'Dịch vụ khác'
        ];
        this.userLocation = {
            city: 'Chưa rõ',
            region: 'Chưa rõ',
            country: 'Việt Nam',
            ip: 'Đang lấy...',
            isp: 'Mạng di động/Wifi'
        };
        this.init();
    }

    async init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeSystem());
        } else {
            this.initializeSystem();
        }
    }

    async initializeSystem() {
        try {
            await this.initializeFirebase();
            await this.loadTelegramConfig();
            await this.detectLocationByIP();
            this.addStyles();
            this.createBookingForm();
            this.createPopupElement();
            this.setupFormListeners();
            console.log('✅ Hệ thống sẵn sàng - IP:', this.userLocation.ip);
        } catch (error) {
            console.error('❌ Lỗi khởi tạo:', error);
        }
    }

    async initializeFirebase() {
        const config = {
            apiKey: "AIzaSyD-fCFDfgSVXiNdwyAm0kO32BxfPPTDswc",
  authDomain: "cana-6633e.firebaseapp.com",
  databaseURL: "https://cana-6633e-default-rtdb.firebaseio.com",
  projectId: "cana-6633e",
  storageBucket: "cana-6633e.firebasestorage.app",
  messagingSenderId: "123685281829",
  appId: "1:123685281829:web:7eeb47c7260a2136455fcc",
  measurementId: "G-4XYG3YEW1W"
        };
        if (typeof firebase === 'undefined') return;
        if (!firebase.apps.length) firebase.initializeApp(config);
    }

    async loadTelegramConfig() {
        try {
            const snapshot = await firebase.database().ref('telegram_configs').once('value');
            const data = snapshot.val();
            if (data && data.configs) {
                const configId = data.default || Object.keys(data.configs)[0];
                this.config = data.configs[configId];
            }
        } catch (e) {
            console.error('Lỗi tải Telegram Config');
        }
    }

    async detectLocationByIP() {
        try {
            const ipResponse = await fetch('https://api.ipify.org?format=json');
            const ipData = await ipResponse.json();
            this.userLocation.ip = ipData.ip;

            try {
                const response = await fetch('https://ipinfo.io/json');
                const data = await response.json();

                if (data && !data.error) {
                    const loc = data.loc ? data.loc.split(',') : [null, null];
                    this.userLocation = {
                        ip: data.ip || ipData.ip,
                        city: data.city || 'Không xác định',
                        region: data.region || 'Không xác định',
                        country: data.country || 'Không xác định',
                        latitude: loc[0],
                        longitude: loc[1],
                        timezone: data.timezone,
                        isp: data.org || 'Không xác định'
                    };
                }
            } catch (error) {
                console.warn('Location detection failed');
            }
        } catch (error) {
            console.warn('IP detection failed');
        }
    }

 addStyles() {
    if (document.getElementById('telegram-booking-css')) return;
    const style = document.createElement('style');
    style.id = 'telegram-booking-css';
    style.textContent = `
/* ===============================
   QUICK BOOKING SECTION
================================ */
.quick-booking {
    position: relative !important;
    padding: 60px 15px !important;
    margin: 0 !important;
    background: linear-gradient(135deg, #0a0a0a, #1a1a1a) !important;
    overflow: hidden !important;
    font-family: 'Segoe UI', 'Inter', 'Roboto', sans-serif !important;
    box-sizing: border-box !important;
    width: 100% !important;
    max-width: 100vw !important;
    display: block !important;
    clear: both !important;
}

/* Pattern overlay */
.quick-booking::before {
    content: '';
    position: absolute !important;
    inset: 0 !important;
    background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'><path fill='%23d4af37' fill-opacity='0.03' d='M0,0h1000v1000H0V0z M150,150h700v700H150V150z'/></svg>") !important;
    background-size: 50px !important;
    opacity: 0.3;
    z-index: 1;
}

/* ===============================
   BOOKING CARD
================================ */
.booking-card {
    position: relative !important;
    z-index: 2 !important;
    max-width: 600px !important;
    margin: 0 auto !important;
    padding: 40px 30px !important;
    background: rgba(20, 20, 20, 0.95) !important;
    border-radius: 20px !important;
    border: 2px solid rgba(212, 175, 55, 0.3) !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5) !important;
    box-sizing: border-box !important;
    width: 100% !important;
    display: block !important;
    overflow: hidden !important;
}

/* ===============================
   BOOKING HEADER
================================ */
.booking-header {
    margin-bottom: 30px !important;
    text-align: center !important;
}

.booking-title {
    text-align: center !important;
    font-size: 32px !important;
    font-weight: 700 !important;
    margin-bottom: 10px !important;
    text-transform: uppercase !important;
    background: linear-gradient(135deg, #d4af37, #ffd700) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
    padding: 0 10px !important;
    word-break: break-word !important;
    line-height: 1.3 !important;
    display: block !important;
}

.booking-subtitle {
    text-align: center !important;
    font-size: 16px !important;
    margin-bottom: 30px !important;
    color: rgba(255, 255, 255, 0.9) !important;
    padding: 0 10px !important;
    word-break: break-word !important;
    line-height: 1.5 !important;
    display: block !important;
}

/* ===============================
   FORM
================================ */
#bookingForm {
    display: block !important;
    width: 100% !important;
}

.form-group {
    margin-bottom: 20px !important;
    width: 100% !important;
    display: block !important;
    position: relative !important;
}

.form-label {
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    margin-bottom: 8px !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    color: #fff !important;
}

.form-label i {
    width: 20px !important;
    text-align: center !important;
    color: #d4af37 !important;
}

/* Input styling */
.form-input,
select.form-input,
textarea.form-input {
    width: 100% !important;
    padding: 14px 16px !important;
    font-size: 16px !important;
    color: #f8f1dd !important;
    background: rgba(68, 62, 36, 0.9) !important;
    border: 2px solid rgba(212, 175, 55, 0.2) !important;
    border-radius: 12px !important;
    transition: all 0.3s ease !important;
    box-sizing: border-box !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
    display: block !important;
    font-family: inherit !important;
    line-height: 1.5 !important;
    resize: vertical !important;
    min-height: 50px !important;
}

/* Textarea specific */
textarea.form-input {
    min-height: 100px !important;
    line-height: 1.5 !important;
    padding-top: 12px !important;
    padding-bottom: 12px !important;
}

/* Select arrow */
select.form-input {
    cursor: pointer !important;
    padding-right: 45px !important;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23d4af37' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E") !important;
    background-repeat: no-repeat !important;
    background-position: right 16px center !important;
    background-size: 16px !important;
}

/* Focus states */
.form-input:focus,
select.form-input:focus,
textarea.form-input:focus {
    outline: none !important;
    border-color: #d4af37 !important;
    background: rgba(50, 45, 25, 0.95) !important;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2) !important;
}

/* Placeholder */
.form-input::placeholder,
select.form-input::placeholder,
textarea.form-input::placeholder {
    color: rgba(255, 255, 255, 0.7) !important;
    opacity: 1 !important;
}

/* ===============================
   SUBMIT BUTTON
================================ */
.btn-submit {
    width: 100% !important;
    margin-top: 10px !important;
    padding: 16px !important;
    font-size: 16px !important;
    font-weight: 700 !important;
    letter-spacing: 0.5px !important;
    text-transform: uppercase !important;
    border: none !important;
    border-radius: 12px !important;
    cursor: pointer !important;
    color: #1a1a1a !important;
    background: linear-gradient(135deg, #d4af37, #ffd700) !important;
    transition: all 0.3s ease !important;
    display: block !important;
    text-align: center !important;
    position: relative !important;
    overflow: hidden !important;
    font-family: inherit !important;
}

/* Button hover effect */
.btn-submit:hover:not(:disabled) {
    transform: translateY(-3px) !important;
    box-shadow: 0 10px 25px rgba(212, 175, 55, 0.4) !important;
}

.btn-submit:active:not(:disabled) {
    transform: translateY(-1px) !important;
}

.btn-submit:disabled {
    opacity: 0.6 !important;
    cursor: not-allowed !important;
    transform: none !important;
}

/* Loading state */
.btn-submit.loading {
    background: linear-gradient(135deg, #b8860b, #d4af37) !important;
    color: rgba(26, 26, 26, 0.8) !important;
}

/* ===============================
   RESPONSIVE DESIGN
================================ */
@media (max-width: 768px) {
    .quick-booking {
        padding: 40px 15px !important;
    }
    
    .booking-card {
        padding: 30px 20px !important;
        border-radius: 16px !important;
    }
    
    .booking-title {
        font-size: 26px !important;
        padding: 0 5px !important;
    }
    
    .booking-subtitle {
        font-size: 15px !important;
        padding: 0 5px !important;
    }
    
    .form-input,
    select.form-input,
    textarea.form-input {
        padding: 12px 14px !important;
        font-size: 16px !important;
        border-radius: 10px !important;
        min-height: 48px !important;
    }
    
    textarea.form-input {
        min-height: 90px !important;
    }
    
    .btn-submit {
        padding: 14px !important;
        font-size: 16px !important;
        border-radius: 10px !important;
    }
}

@media (max-width: 480px) {
    .quick-booking {
        padding: 30px 12px !important;
    }
    
    .booking-card {
        padding: 25px 18px !important;
        border-radius: 14px !important;
        border-width: 1.5px !important;
    }
    
    .booking-title {
        font-size: 22px !important;
    }
    
    .booking-subtitle {
        font-size: 14px !important;
        margin-bottom: 25px !important;
    }
    
    .form-group {
        margin-bottom: 16px !important;
    }
    
    .form-input,
    select.form-input,
    textarea.form-input {
        padding: 11px 13px !important;
        font-size: 16px !important;
        border-radius: 8px !important;
        min-height: 46px !important;
    }
    
    textarea.form-input {
        min-height: 80px !important;
    }
    
    .btn-submit {
        padding: 13px !important;
        font-size: 15px !important;
        border-radius: 8px !important;
        margin-top: 15px !important;
    }
}

/* Safari specific fixes */
@supports (-webkit-touch-callout: none) {
    .quick-booking {
        -webkit-overflow-scrolling: touch !important;
    }
    
    .form-input,
    select.form-input {
        font-size: 16px !important; /* Prevent iOS zoom */
    }
}

/* Firefox specific */
@-moz-document url-prefix() {
    select.form-input {
        text-indent: 0.01px !important;
        text-overflow: '' !important;
    }
}

/* ===============================
   POPUP (Cập nhật thêm)
================================ */
.booking-popup {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    background: rgba(0, 0, 0, 0.95) !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    display: none !important;
    justify-content: center !important;
    align-items: center !important;
    z-index: 999999 !important;
    padding: 20px !important;
    box-sizing: border-box !important;
}

.booking-popup.active {
    display: flex !important;
    animation: fadeIn 0.3s ease-out !important;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.popup-content {
    background: rgba(20, 20, 20, 0.98) !important;
    border: 2px solid rgba(212, 175, 55, 0.5) !important;
    border-radius: 20px !important;
    padding: 40px !important;
    max-width: 400px !important;
    width: 90% !important;
    text-align: center !important;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    transform: scale(0.95) !important;
    transition: transform 0.3s ease !important;
}

.booking-popup.active .popup-content {
    transform: scale(1) !important;
}

.popup-icon {
    font-size: 60px !important;
    margin-bottom: 20px !important;
    color: #d4af37 !important;
    display: block !important;
}

.popup-title {
    font-size: 24px !important;
    font-weight: 700 !important;
    margin-bottom: 15px !important;
    color: #fff !important;
    display: block !important;
}

.popup-msg {
    font-size: 16px !important;
    line-height: 1.6 !important;
    color: rgba(255, 255, 255, 0.9) !important;
    margin-bottom: 25px !important;
    display: block !important;
}

.btn-close-popup {
    padding: 12px 30px !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    background: linear-gradient(135deg, #d4af37, #ffd700) !important;
    color: #1a1a1a !important;
    border: none !important;
    border-radius: 10px !important;
    cursor: pointer !important;
    transition: all 0.3s ease !important;
    width: 100% !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    display: block !important;
    margin: 0 auto !important;
}

.btn-close-popup:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4) !important;
}
`;

    document.head.appendChild(style);
}

    createBookingForm() {
        let container = document.getElementById('booking');
        if (!container) {
            container = document.createElement('section');
            container.id = 'booking';
            container.className = 'quick-booking';
            document.body.appendChild(container);
        } else {
            container.className = 'quick-booking';
        }
        container.innerHTML = `
        <div class="booking-card">
            <div class="booking-header">
                <h2 id="bookingTitle" class="booking-title">Đăng Ký Tư Vấn Dịch Vụ</h2>
                <p class="booking-subtitle">Chuyên viên sẽ liên hệ tư vấn miễn phí trong 15 phút</p>
            </div>
            <form id="bookingForm">
                <div class="form-group">
                    <label class="form-label" for="serviceType">
                        <i class="fas fa-file-invoice-dollar"></i> Loại dịch vụ cần tư vấn
                    </label>
                    <select id="serviceType" class="form-input">
                        ${this.serviceTypes.map(t => `<option value="${t}">${t}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label" for="customerPhone">
                        <i class="fas fa-phone"></i> Số điện thoại liên hệ
                    </label>
                    <input type="tel" id="customerPhone" class="form-input" placeholder="Nhập số điện thoại..." required autocomplete="off">
                </div>
                <div class="form-group">
                    <label class="form-label" for="customerName">
                        <i class="fas fa-user"></i> Họ tên của bạn
                    </label>
                    <input type="text" id="customerName" class="form-input" placeholder="Nhập họ tên đầy đủ">
                </div>
                <div class="form-group">
                    <label class="form-label" for="companyName">
                        <i class="fas fa-building"></i> Tên công ty/HKD (nếu có)
                    </label>
                    <input type="text" id="companyName" class="form-input" placeholder="Tên công ty (nếu có)">
                </div>
                <div class="form-group">
                    <label class="form-label" for="customerNote">
                        <i class="fas fa-comment-dots"></i> Nội dung cần tư vấn
                    </label>
                    <textarea id="customerNote" class="form-input" rows="3" placeholder="Mô tả chi tiết vấn đề bạn cần tư vấn về thuế/kế toán..."></textarea>
                </div>
                <button type="submit" id="bookingSubmitBtn" class="btn-submit">Gửi Yêu Cầu Tư Vấn Ngay</button>
            </form>
        </div>`;
    }

    createPopupElement() {
        const popup = document.createElement('div');
        popup.id = 'bookingPopup';
        popup.className = 'booking-popup';
        popup.innerHTML = `
            <div class="popup-content">
                <div class="popup-icon"><i class="fas fa-check-circle"></i></div>
                <div class="popup-title">Thành Công!</div>
                <div class="popup-msg" id="popupMsg">Chúng tôi đã nhận được yêu cầu tư vấn của bạn.</div>
                <button class="btn-close-popup" id="closePopupBtn">Đồng Ý</button>
            </div>`;
        document.body.appendChild(popup);

        popup.addEventListener('click', (e) => {
            if (e.target.classList.contains('booking-popup') || e.target.id === 'closePopupBtn') {
                this.hidePopup();
            }
        });
    }

    showPopup(title, msg, isError = false) {
        const popup = document.getElementById('bookingPopup');
        if (!popup) {
            console.error('Popup element not found!');
            return;
        }

        popup.querySelector('.popup-title').innerText = title;
        popup.querySelector('.popup-msg').innerText = msg;

        const icon = popup.querySelector('.popup-icon i');
        if (isError) {
            icon.className = 'fas fa-exclamation-triangle';
            icon.style.color = '#e53935';
        } else {
            icon.className = 'fas fa-check-circle';
            icon.style.color = '#2c7be5';
        }

        popup.classList.add('active');
        document.body.classList.add('has-popup');

        if (!isError) {
            setTimeout(() => {
                this.hidePopup();
            }, 5000);
        }
    }

    hidePopup() {
        const popup = document.getElementById('bookingPopup');
        if (popup) {
            popup.classList.remove('active');
            document.body.classList.remove('has-popup');
        }
    }

    setupFormListeners() {
        const phoneInput = document.getElementById('customerPhone');
        phoneInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '').substring(0, 11);
        });
        document.getElementById('bookingForm').addEventListener('submit', (e) => this.handleSubmit(e));
        this.loadSavedDraft();
    }

    loadSavedDraft() {
        try {
            const draft = JSON.parse(localStorage.getItem('tax_consultation_draft') || '{}');
            if (draft.phone) document.getElementById('customerPhone').value = draft.phone;
            if (draft.name) document.getElementById('customerName').value = draft.name;
            if (draft.company) document.getElementById('companyName').value = draft.company;
        } catch (e) { }
    }

    async handleSubmit(e) {
        e.preventDefault();
        if (this.isLoading) return;

        const data = {
            serviceType: document.getElementById('serviceType').value,
            phone: document.getElementById('customerPhone').value,
            name: document.getElementById('customerName').value,
            company: document.getElementById('companyName').value,
            note: document.getElementById('customerNote').value,
            location: this.userLocation,
            time: new Date().toLocaleString('vi-VN')
        };

        console.log('Submitting tax consultation data:', data);

        if (data.phone.length < 10) {
            this.showPopup('Lỗi', 'Vui lòng nhập đúng số điện thoại di động.', true);
            return;
        }

        const btn = document.getElementById('bookingSubmitBtn');
        this.isLoading = true;
        btn.innerHTML = 'ĐANG XỬ LÝ...';
        btn.disabled = true;

        try {
            await this.sendTelegram(data);
            await this.saveToFirebase(data);
            localStorage.setItem('tax_consultation_draft', JSON.stringify({
                name: data.name,
                phone: data.phone,
                company: data.company
            }));

            console.log('Success! Showing popup...');
            this.showPopup(
                'Đã Nhận Yêu Cầu',
                `Cảm ơn ${data.name || 'Quý khách'}! Chuyên viên sẽ liên hệ tư vấn miễn phí cho ${data.company ? `công ty ${data.company}` : 'bạn'} trong vòng 15 phút.`
            );

            e.target.reset();
            this.loadSavedDraft();
        } catch (error) {
            console.error('Error:', error);
            this.showPopup('Thất Bại', 'Không thể gửi yêu cầu. Vui lòng thử lại hoặc gọi Hotline: 0933.414.148', true);
        } finally {
            this.isLoading = false;
            btn.innerHTML = 'Gửi Yêu Cầu Tư Vấn Ngay';
            btn.disabled = false;
        }
    }

    async sendTelegram(d) {
        if (!this.config) throw new Error('Config missing');
        const message = `<b>📋 YÊU CẦU TƯ VẤN MỚI</b>\n` +
            `─────────────────────\n` +
            `👤 <b>Khách hàng:</b> ${d.name || 'N/A'}\n` +
            `📞 <b>SĐT:</b> <code>${d.phone}</code>\n` +
            `🏢 <b>Công ty:</b> ${d.company || 'Chưa có'}\n` +
            `📑 <b>Dịch vụ cần tư vấn:</b> ${d.serviceType}\n` +
            `📝 <b>Nội dung chi tiết:</b>\n${d.note || 'Không có mô tả thêm'}\n` +
            `─────────────────────\n` +
            `📍 <b>Khu vực:</b> ${d.location.city}, ${d.location.region}\n` +
            `🌐 <b>IP:</b> ${d.location.ip}\n` +
            `🕒 <b>Thời gian:</b> ${d.time}`;

        const promises = this.config.chatIds.map(id => fetch(`https://api.telegram.org/bot${this.config.botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: id,
                text: message,
                parse_mode: 'HTML'
            })
        }));
        await Promise.all(promises);
    }

    async saveToFirebase(data) {
        try {
            await firebase.database().ref('tax_consultations').push({
                ...data,
                timestamp: firebase.database.ServerValue.TIMESTAMP
            });
        } catch (e) {
            console.error('Firebase save error:', e);
        }
    }
}

function scrollToBookingSection() {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
        bookingSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        bookingSection.classList.add('highlight-booking');
        setTimeout(() => {
            bookingSection.classList.remove('highlight-booking');
        }, 3000);
    } else {
        if (window.completeBookingSystem) {
            window.completeBookingSystem.createBookingSection().then(() => {
                const newBookingSection = document.getElementById('booking');
                if (newBookingSection) {
                    newBookingSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    newBookingSection.classList.add('highlight-booking');
                    setTimeout(() => {
                        newBookingSection.classList.remove('highlight-booking');
                    }, 3000);
                }
            });
        }
    }
}

window.bookingSystem = {
    scrollToBooking: function() {
        scrollToBookingSection();
    }
};

// Khởi tạo hệ thống
new TelegramBooking();