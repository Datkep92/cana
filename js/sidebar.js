// standalone-sidebar.js - Sidebar Kế Toán / Thuế / GPKD với danh sách công ty
// Phiên bản cập nhật: Thống kê thực tế + Danh sách công ty Phan Rang - Khánh Hòa

class StandaloneSidebar {
    constructor() {
        this.isOpen = false;
        this.todayKey = new Date().toISOString().slice(0, 10);
        this.lastStats = this.loadStats();
        this.updateInterval = null;
        
        this.createSidebarHTML();
        this.addHeaderButtons();
        this.init();
    }
    
    async init() {
        this.setupElements();
        this.setupEventListeners();
        
        // Nếu chưa có dữ liệu cũ, tạo mới lần đầu
        if (!this.lastStats) {
            this.lastStats = this.createInitialStats();
            this.saveStats(this.lastStats);
        }
        
        this.refreshDisplay();
        this.startUpdates();
    }

    /* ================= STORAGE ================= */
    saveStats(stats) {
        localStorage.setItem('htu_sidebar_stats', JSON.stringify({
            date: this.todayKey,
            data: stats,
            timestamp: new Date().getTime()
        }));
    }

    loadStats() {
        const saved = localStorage.getItem('htu_sidebar_stats');
        if (saved) {
            const parsed = JSON.parse(saved);
            // Chỉ sử dụng nếu là cùng ngày
            if (parsed.date === this.todayKey) {
                return parsed.data;
            }
        }
        return null;
    }
    
    /* ================= HTML STRUCTURE ================= */
    createSidebarHTML() {
        if (document.getElementById('standaloneSidebar')) return;
        
        const sidebarHTML = `
            <div class="standalone-sidebar-overlay" id="standaloneSidebarOverlay"></div>
            
            <aside class="standalone-sidebar" id="standaloneSidebar">
                <div class="standalone-sidebar-header">
                    <div class="standalone-sidebar-header-content">
                        <div class="standalone-sidebar-logo">
                            
                            <span>CANA<span>Accounting</span></span>
                        </div>
                        <div class="standalone-sidebar-subtitle">Thống kê & Dịch vụ</div>
                    </div>
                    <button class="standalone-sidebar-close" id="standaloneSidebarClose">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="standalone-sidebar-content" id="standaloneSidebarContent">
                    <!-- Nội dung sẽ được render động -->
                </div>
                
                <div class="standalone-sidebar-footer">
                    <div class="standalone-sidebar-update-time">
                        <i class="far fa-clock"></i>
                        <span>Cập nhật: <span id="standaloneLastUpdateTime">--:--</span></span>
                    </div>
                    <button class="standalone-btn-refresh-stats" id="standaloneRefreshStatsBtn">
                        <i class="fas fa-sync-alt"></i> Làm mới
                    </button>
                </div>
            </aside>
        `;
        
        document.body.insertAdjacentHTML('beforeend', sidebarHTML);
    }
    
    addHeaderButtons() {
        let headerActions = document.querySelector('.header-actions');
        
        if (!headerActions) {
            const header = document.querySelector('header') || document.body;
            headerActions = document.createElement('div');
            headerActions.className = 'header-actions';
            header.appendChild(headerActions);
        }
        
        if (!document.getElementById('accountingStatsBtn')) {
            // Lấy đường dẫn hiện tại
            const currentPath = window.location.pathname;
            
            // Kiểm tra xem có đang ở trang service hoặc tool không
            const isServicePage = currentPath.includes('/service');
            const isToolPage = currentPath.includes('/tool');
            
            // Tạo HTML dựa trên trang hiện tại
            let buttonsHTML;
            
            if (isServicePage || isToolPage) {
                // Nếu đang ở trang service hoặc tool: hiển thị nút Trang chủ
                buttonsHTML = this.createHomeButtonHTML();
            } else {
                // Nếu đang ở trang khác: hiển thị đầy đủ 3 nút
                buttonsHTML = this.createFullButtonsHTML();
            }
            
            headerActions.insertAdjacentHTML('beforeend', buttonsHTML);
        }
    }

    createHomeButtonHTML() {
        return `
            <style>
                .header-buttons-container {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-right: 15px;
                    white-space: nowrap;
                }
                
                .header-home-btn {
                    background: #edd711;
                    border: 1px solid #d0d7de;
                    padding: 6px 12px;
                    border-radius: 6px;
                    font-size: 13px;
                    text-decoration: none;
                    color: #111827;
                    font-weight: 600;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    transition: all 0.2s ease;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    white-space: nowrap;
                    min-width: 90px;
                    text-align: center;
                    cursor: pointer;
                    border: none;
                    outline: none;
                }
                
                .header-home-btn:hover {
                    background: #f5e642;
                    border-color: #9ca3af;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 8px rgba(237, 215, 17, 0.2);
                }
                
                .header-home-btn i {
                    margin-right: 6px;
                    font-size: 14px;
                }
            </style>
            
            <div class="header-buttons-container">
                <a href="/" class="header-home-btn">
                    <i class="fas fa-home"></i>
                    Trang chủ
                </a>
                <button class="header-home-btn" id="accountingStatsBtn">
                    <i class="fas fa-chart-bar"></i>
                    Thống kê
                </button>
            </div>
        `;
    }

    createFullButtonsHTML() {
        return `
            <style>
                .header-buttons-container {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-right: 15px;
                    white-space: nowrap;
                }
                
                .header-tool-btn {
                    background: #edd711;
                    border: 1px solid #d0d7de;
                    padding: 6px 12px;
                    border-radius: 6px;
                    font-size: 13px;
                    text-decoration: none;
                    color: #111827;
                    font-weight: 600;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    transition: all 0.2s ease;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    white-space: nowrap;
                    min-width: 70px;
                    text-align: center;
                    cursor: pointer;
                    border: none;
                    outline: none;
                }
                
                .header-tool-btn i {
                    margin-right: 6px;
                    font-size: 14px;
                }
                
                .header-tool-btn:hover {
                    background: #f5e642;
                    border-color: #9ca3af;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 8px rgba(237, 215, 17, 0.2);
                }
            </style>
            
            <div class="header-buttons-container">
                <a href="/service" class="header-tool-btn">
                    <i class="fas fa-cogs"></i>
                    Dịch vụ
                </a>
                <a href="/tool" class="header-tool-btn">
                    <i class="fas fa-tools"></i>
                    Tool
                </a>
                <button class="header-tool-btn" id="accountingStatsBtn">
                    <i class="fas fa-chart-bar"></i>
                    Thống kê
                </button>
            </div>
        `;
    }
    
    /* ================= DANH SÁCH CÔNG TY PHAN RANG - KHÁNH HÒA ================= */
    getPhanRangCompanies() {
        return [
            {
                id: "CT001",
                name: "Công ty TNHH Thủy sản Phan Rang",
                type: "company",
                industry: "Thủy sản",
                service: "Kế toán + Thuế",
                status: "active",
                since: "2022",
                location: "Phan Rang",
                badge: "VIP"
            },
            {
                id: "CT002",
                name: "HKD Vật liệu xây dựng Sỹ Hào",
                type: "hkd",
                industry: "Vật liệu xây dựng",
                service: "Khai thuế tháng",
                status: "active",
                since: "2023",
                location: "Phan Rang",
                badge: null
            },
            {
                id: "CT003",
                name: "Công ty CP Du lịch Ninh Thuận",
                type: "company",
                industry: "Du lịch",
                service: "Kế toán trọn gói",
                status: "active",
                since: "2021",
                location: "Phan Rang",
                badge: "VIP"
            },
            {
                id: "CT004",
                name: "HKD Nông sản Thành Công",
                type: "hkd",
                industry: "Nông sản",
                service: "Kế toán đơn giản",
                status: "pending",
                since: "2024",
                location: "Phan Rang",
                badge: "New"
            },
            {
                id: "CT005",
                name: "Công ty TNHH Xây dựng Khánh Hòa",
                type: "company",
                industry: "Xây dựng",
                service: "Kế toán + Thuế + GPKD",
                status: "active",
                since: "2020",
                location: "Cam Ranh",
                badge: "VIP"
            },
            {
                id: "CT006",
                name: "HKD Thực phẩm sạch Mai Linh",
                type: "hkd",
                industry: "Thực phẩm",
                service: "Khai thuế quý",
                status: "active",
                since: "2023",
                location: "Ninh Hải",
                badge: null
            },
            {
                id: "CT007",
                name: "Công ty TNHH Dịch vụ Biển Đông",
                type: "company",
                industry: "Dịch vụ biển",
                service: "Kế toán + Báo cáo",
                status: "active",
                since: "2022",
                location: "Cam Ranh",
                badge: null
            },
            {
                id: "CT008",
                name: "HKD Quán ăn Hải Sản Tươi",
                type: "hkd",
                industry: "Ẩm thực",
                service: "Kế toán đơn giản",
                status: "pending",
                since: "2024",
                location: "Phan Rang",
                badge: "New"
            },
            {
                id: "CT009",
                name: "Công ty CP Nước giải khát Miền Trung",
                type: "company",
                industry: "Sản xuất",
                service: "Kế toán phức tạp",
                status: "active",
                since: "2019",
                location: "Khánh Hòa",
                badge: "VIP"
            },
            {
                id: "CT010",
                name: "HKD Vận tải Biển Cả",
                type: "hkd",
                industry: "Vận tải",
                service: "Kế toán + Thuế GTGT",
                status: "active",
                since: "2023",
                location: "Cam Ranh",
                badge: null
            }
        ];
    }

    renderCompaniesSlider() {
        const companies = this.getPhanRangCompanies();
        
        return `
            <div class="companies-slider-container">
                <h4><i class="fas fa-building"></i> DOANH NGHIỆP ĐANG LIÊN KẾT</h4>
                <div class="companies-count">${companies.length} doanh nghiệp tại Phan Rang - Khánh Hòa</div>
                
                <div class="companies-slider">
                    ${companies.map(company => `
                        <div class="company-card" data-id="${company.id}">
                            <div class="company-header">
                                <div class="company-logo">
                                    <i class="fas fa-${company.type === 'company' ? 'building' : 'store'}"></i>
                                </div>
                                ${company.badge ? `<span class="company-badge ${company.badge.toLowerCase()}">${company.badge}</span>` : ''}
                            </div>
                            
                            <div class="company-name" title="${company.name}">${company.name}</div>
                            
                            <div class="company-info">
                                <span class="company-type">
                                    <i class="fas fa-${company.type === 'company' ? 'briefcase' : 'user-tie'}"></i>
                                    ${company.type === 'company' ? 'Doanh nghiệp' : 'HKD'}
                                </span>
                                <span class="company-industry">
                                    <i class="fas fa-industry"></i>
                                    ${company.industry}
                                </span>
                            </div>
                            
                            <div class="company-status ${company.status}">
                                <i class="fas fa-circle"></i>
                                ${company.status === 'active' ? 'Đang hoạt động' : 'Chờ duyệt'}
                            </div>
                            
                            <div class="company-service">
                                <i class="fas fa-cogs"></i>
                                ${company.service}
                            </div>
                            
                            <div class="company-footer">
                                <span class="company-location">
                                    <i class="fas fa-map-marker-alt"></i>
                                    ${company.location}
                                </span>
                                <span class="company-since">
                                    <i class="fas fa-calendar-alt"></i>
                                    Từ ${company.since}
                                </span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <style>
                    .companies-slider-container {
                        margin: 20px 0;
                        padding: 15px;
                        background: #313123;
                        border-radius: 10px;
                    }
                    
                    .companies-slider-container h4 {
                        margin-bottom: 5px;
                        color: #d1bf00;
                    }
                    
                    .companies-count {
                        font-size: 12px;
                        color: #918b8b;
                        margin-bottom: 15px;
                    }
                    
                    .companies-slider {
                        display: flex;
                        gap: 12px;
                        overflow-x: auto;
                        padding: 10px 5px;
                        scrollbar-width: thin;
                        -webkit-overflow-scrolling: touch;
                    }
                    
                    .companies-slider::-webkit-scrollbar {
                        height: 4px;
                    }
                    
                    .companies-slider::-webkit-scrollbar-thumb {
                        background: #678dc6;
                        border-radius: 2px;
                    }
                    
                    .company-card {
                        min-width: 200px;
                        max-width: 220px;
                        background: white;
                        border: 1px solid #292d33;
                        border-radius: 10px;
                        padding: 15px;
                        cursor: pointer;
                        transition: all 0.3s;
                        flex-shrink: 0;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                    }
                    
                    .company-card:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                        border-color: #2563eb;
                    }
                    
                    .company-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        margin-bottom: 10px;
                    }
                    
                    .company-logo {
                        width: 40px;
                        height: 40px;
                        background: linear-gradient(135deg, #2563eb, #1d4ed8);
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-size: 18px;
                    }
                    
                    .company-badge {
                        padding: 3px 8px;
                        border-radius: 12px;
                        font-size: 10px;
                        font-weight: 600;
                        text-transform: uppercase;
                    }
                    
                    .company-badge.vip {
                        background: #fef3c7;
                        color: #92400e;
                    }
                    
                    .company-badge.new {
                        background: #dbeafe;
                        color: #1e40af;
                    }
                    
                    .company-name {
                        font-weight: 600;
                        font-size: 14px;
                        margin-bottom: 8px;
                        color: #111827;
                        line-height: 1.3;
                        height: 36px;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    
                    .company-info {
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                        margin-bottom: 10px;
                        font-size: 11px;
                        color: #6b7280;
                    }
                    
                    .company-info i {
                        margin-right: 5px;
                        width: 12px;
                    }
                    
                    .company-status {
                        display: inline-flex;
                        align-items: center;
                        gap: 5px;
                        padding: 3px 8px;
                        border-radius: 12px;
                        font-size: 11px;
                        font-weight: 500;
                        margin-bottom: 10px;
                    }
                    
                    .company-status.active {
                        background: #d1fae5;
                        color: #065f46;
                    }
                    
                    .company-status.pending {
                        background: #fef3c7;
                        color: #92400e;
                    }
                    
                    .company-status i {
                        font-size: 6px;
                    }
                    
                    .company-service {
                        font-size: 11px;
                        color: #374151;
                        margin-bottom: 10px;
                        padding: 5px;
                        background: #f3f4f6;
                        border-radius: 6px;
                    }
                    
                    .company-service i {
                        margin-right: 5px;
                        color: #2563eb;
                    }
                    
                    .company-footer {
                        display: flex;
                        justify-content: space-between;
                        font-size: 10px;
                        color: #9ca3af;
                        border-top: 1px solid #f3f4f6;
                        padding-top: 8px;
                    }
                    
                    @media (max-width: 768px) {
                        .company-card {
                            min-width: 180px;
                            padding: 12px;
                        }
                        
                        .companies-slider {
                            gap: 8px;
                        }
                    }
                </style>
            </div>
        `;
    }
    
    /* ================= ELEMENTS & EVENTS ================= */
    setupElements() {
        this.sidebar = document.getElementById('standaloneSidebar');
        this.sidebarOverlay = document.getElementById('standaloneSidebarOverlay');
        this.sidebarContent = document.getElementById('standaloneSidebarContent');
        this.sidebarClose = document.getElementById('standaloneSidebarClose');
        this.refreshStatsBtn = document.getElementById('standaloneRefreshStatsBtn');
        this.lastUpdateTimeEl = document.getElementById('standaloneLastUpdateTime');
        this.statsBtn = document.getElementById('accountingStatsBtn');
    }
    
    setupEventListeners() {
        if (this.statsBtn) {
            this.statsBtn.addEventListener('click', () => this.openSidebar());
        }
        
        if (this.sidebarClose) {
            this.sidebarClose.addEventListener('click', () => this.closeSidebar());
        }
        
        if (this.sidebarOverlay) {
            this.sidebarOverlay.addEventListener('click', () => this.closeSidebar());
        }
        
        if (this.refreshStatsBtn) {
            this.refreshStatsBtn.addEventListener('click', () => this.updateStatistics(true));
        }
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeSidebar();
            }
        });
    }
    
    /* ================= STATS LOGIC THỰC TẾ ================= */
    createInitialStats() {
        const now = new Date();
        const hour = now.getHours();
        const day = now.getDate();
        
        // Xác định phase tháng cho thuế
        let taxPhase, taxTodayMin, taxTodayMax;
        if (day <= 10) {
            taxPhase = "đầu tháng";
            taxTodayMin = 2;
            taxTodayMax = 4;
        } else if (day <= 20) {
            taxPhase = "giữa tháng";
            taxTodayMin = 5;
            taxTodayMax = 10;
        } else {
            taxPhase = "cuối tháng";
            taxTodayMin = 10;
            taxTodayMax = 15;
        }
        
        return {
            // Online theo giờ thực tế
            current_online: this.getCurrentOnlineByHour(hour),
            
            // Kế toán - Doanh nghiệp/HKD
            total_customers: this.getRandomValue(350, 400),
            new_customers_today: this.getRandomValue(2, 5),
            accumulated_new: this.getRandomValue(10, 20),
            
            // Thuế - Theo phase tháng
            tax_total_processed: this.getRandomValue(550, 600),
            tax_today_processed: this.getRandomValue(taxTodayMin, taxTodayMax),
            tax_month_phase: taxPhase,
            tax_today_target: `${taxTodayMin}-${taxTodayMax}`,
            
            // GPKD - Random ổn định
            gpkd_total_processed: this.getRandomValue(330, 360),
            gpkd_today_processed: this.getRandomValue(2, 5),
            
            // Thời gian
            is_working_hours: (hour >= 8 && hour < 17),
            peak_intensity: this.getPeakLabel(hour),
            last_update: now.getTime()
        };
    }
    
    getCurrentOnlineByHour(hour) {
        // Online theo khung giờ thực tế
        if (hour >= 0 && hour < 7) return this.getRandomValue(1, 3);    // Đêm khuya
        if (hour >= 7 && hour < 8) return this.getRandomValue(3, 5);    // Sáng sớm
        if (hour >= 8 && hour < 12) return this.getRandomValue(12, 18); // Cao điểm sáng
        if (hour >= 12 && hour < 14) return this.getRandomValue(5, 10); // Nghỉ trưa
        if (hour >= 14 && hour < 17) return this.getRandomValue(15, 20); // Cao điểm chiều
        if (hour >= 17 && hour < 20) return this.getRandomValue(8, 12); // Tối làm việc
        return this.getRandomValue(2, 6); // Tối muộn
    }
    
    getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    getPeakLabel(hour) {
        if (hour >= 8 && hour < 12) return 'cao điểm sáng';
        if (hour >= 14 && hour < 17) return 'cao điểm chiều';
        if (hour >= 8 && hour < 17) return 'giờ hành chính';
        return 'ngoài giờ';
    }
    
    // Biến động nhẹ ±1
    fluctuateValue(current, min, max) {
        const change = Math.random() > 0.5 ? 1 : -1;
        let newValue = current + change;
        return Math.min(max, Math.max(min, newValue));
    }
    
    /* ================= UPDATES ================= */
    startUpdates() {
        // Cập nhật định kỳ mỗi 30s
        this.updateInterval = setInterval(() => {
            this.updateStatistics(false);
        }, 30000);
    }
    
    updateStatistics(isManual = false) {
        try {
            const now = new Date();
            const hour = now.getHours();
            const day = now.getDate();
            
            if (!this.lastStats || isManual) {
                this.lastStats = this.createInitialStats();
            } else {
                // Cập nhật online với biến động nhẹ ±1
                const targetOnline = this.getCurrentOnlineByHour(hour);
                this.lastStats.current_online = this.fluctuateValue(
                    this.lastStats.current_online, 
                    Math.max(1, targetOnline - 2), 
                    Math.min(20, targetOnline + 2)
                );
                
                // Chỉ cập nhật hồ sơ trong giờ hành chính
                if (this.lastStats.is_working_hours && hour >= 8 && hour < 17) {
                    // Có thể thêm hồ sơ mới mỗi 30s (xác suất thấp)
                    if (Math.random() > 0.8) {
                        this.lastStats.new_customers_today = Math.min(
                            5, 
                            this.lastStats.new_customers_today + 1
                        );
                    }
                    
                    if (Math.random() > 0.7) {
                        this.lastStats.tax_today_processed = Math.min(
                            parseInt(this.lastStats.tax_today_target.split('-')[1]),
                            this.lastStats.tax_today_processed + 1
                        );
                    }
                    
                    if (Math.random() > 0.9) {
                        this.lastStats.gpkd_today_processed = Math.min(
                            5,
                            this.lastStats.gpkd_today_processed + 1
                        );
                    }
                }
                
                this.lastStats.is_working_hours = (hour >= 8 && hour < 17);
                this.lastStats.peak_intensity = this.getPeakLabel(hour);
                this.lastStats.last_update = now.getTime();
            }
            
            this.saveStats(this.lastStats);
            this.refreshDisplay();
            
        } catch (error) {
            console.error("Lỗi cập nhật thống kê:", error);
        }
    }
    
    /* ================= UI CONTROLS ================= */
    openSidebar() {
        this.isOpen = true;
        this.sidebar.classList.add('active');
        this.sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.refreshDisplay();
    }
    
    closeSidebar() {
        this.isOpen = false;
        this.sidebar.classList.remove('active');
        this.sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    refreshDisplay() {
        if (!this.lastStats) return;
        
        // Cập nhật Thời gian
        if (this.lastUpdateTimeEl) {
            this.lastUpdateTimeEl.textContent = new Date().toLocaleTimeString('vi-VN', {
                hour: '2-digit',
                minute: '2-digit'
            });
        }

        // Render nội dung sidebar
        this.updateUI(this.lastStats);
    }
    
    updateUI(stats) {
    if (!this.sidebarContent || !stats) return;
    
    // Đảm bảo tất cả các thuộc tính đều tồn tại
    const safeStats = {
        current_online: stats.current_online || 0,
        peak_intensity: stats.peak_intensity || 'bình thường',
        is_working_hours: stats.is_working_hours || false,
        
        // Kế toán
        total_customers: stats.total_customers || 0,
        new_customers_today: stats.new_customers_today || 0,
        accumulated_new: stats.accumulated_new || 0,
        
        // Thuế
        tax_total_processed: stats.tax_total_processed || 0,
        tax_today_processed: stats.tax_today_processed || 0,
        tax_month_phase: stats.tax_month_phase || 'giữa tháng',
        tax_today_target: stats.tax_today_target || '5-10',
        
        // GPKD
        gpkd_total_processed: stats.gpkd_total_processed || 0,
        gpkd_today_processed: stats.gpkd_today_processed || 0
    };
    
    this.sidebarContent.innerHTML = `
        <div class="standalone-stats-section">
            <h4><i class="fas fa-chart-line"></i> THỐNG KÊ HOẠT ĐỘNG</h4>
            
            <div class="standalone-stat-item">
                <div class="standalone-stat-icon online">
                    <i class="fas fa-user-friends"></i>
                </div>
                <div class="standalone-stat-info">
                    <div class="standalone-stat-label">Đang online</div>
                    <div class="standalone-stat-value">${safeStats.current_online}</div>
                    <div class="standalone-stat-sub">Khách hàng & đối tác</div>
                </div>
               
            </div>
            
            
        </div>
        
        
        
        <div class="standalone-stats-section">
            <h4><i class="fas fa-calculator"></i> KẾ TOÁN DOANH NGHIỆP</h4>
            
            <div class="standalone-stat-item">
                <div class="standalone-stat-icon cars">
                    <i class="fas fa-building"></i>
                </div>
                <div class="standalone-stat-info">
                    <div class="standalone-stat-label">Doanh nghiệp/HKD</div>
                    <div class="standalone-stat-value">${safeStats.total_customers}</div>
                    <div class="standalone-stat-sub">Đang sử dụng dịch vụ</div>
                </div>
            </div>
            
            <div class="standalone-stat-item">
                <div class="standalone-stat-icon booking">
                    <i class="fas fa-user-plus"></i>
                </div>
                <div class="standalone-stat-info">
                    <div class="standalone-stat-label">Doanh Nghiệp Mới hôm nay</div>
                    <div class="standalone-stat-value">+${safeStats.new_customers_today}</div>
                </div>
            </div>
        </div>
        
        <div class="standalone-stats-section">
            <h4><i class="fas fa-file-invoice-dollar"></i> THUẾ </h4>
            
            <div class="standalone-pricing-item">
                <div class="route-header">
                    <div class="route-icon"><i class="fas fa-receipt"></i></div>
                    <div class="route-title">Hồ sơ đã xử lý</div>
                </div>
                <div class="route-details">
                    <span class="route-price">${safeStats.tax_total_processed}</span>
                    <small style="color: #666; margin-left: 10px;">Hôm nay: +${safeStats.tax_today_processed}</small>
                </div>
            </div>
            
           
        </div>
        
        <div class="standalone-stats-section">
            <h4><i class="fas fa-building"></i> GPKD & ĐĂNG KÝ KINH DOANH</h4>
            
            <div class="standalone-pricing-item">
                <div class="route-header">
                    <div class="route-icon"><i class="fas fa-file-contract"></i></div>
                    <div class="route-title">Hồ sơ đã xử lý</div>
                </div>
                <div class="route-details">
                    <span class="route-price">${safeStats.gpkd_total_processed}</span>
                    <small style="color: #666; margin-left: 10px;">Hôm nay: +${safeStats.gpkd_today_processed}</small>
                </div>
            </div>
        </div>
        ${this.renderCompaniesSlider()}
        <div class="standalone-stats-section">
            <h4><i class="fas fa-bolt"></i> HÀNH ĐỘNG NHANH</h4>
            <div style="display: grid; gap: 10px; margin-top: 15px;">
                <a href="/service" style="width: 100%; text-align: center; padding: 12px; background: #2563eb; color: white; border-radius: 5px; text-decoration: none; display: block; font-weight: bold;">
                    <i class="fas fa-cogs"></i> Dịch vụ kế toán
                </a>
                <a href="/tool" style="width: 100%; text-align: center; padding: 12px; background: #10b981; color: white; border-radius: 5px; text-decoration: none; display: block; font-weight: bold;">
                    <i class="fas fa-tools"></i> Công cụ & Tool
                </a>
                <a href="/blog" style="width: 100%; text-align: center; padding: 12px; background: #8b5cf6; color: white; border-radius: 5px; text-decoration: none; display: block; font-weight: bold;">
                    <i class="fas fa-newspaper"></i> Blog kiến thức
                </a>
            </div>
        </div>
    `;
    
    // Thêm event listeners cho các card công ty
    this.setupCompanyCardEvents();
}
    
    setupCompanyCardEvents() {
        const companyCards = document.querySelectorAll('.company-card');
        companyCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const companyId = card.getAttribute('data-id');
                this.openCompanyDetail(companyId);
            });
        });
    }
    
    openCompanyDetail(companyId) {
        const companies = this.getPhanRangCompanies();
        const company = companies.find(c => c.id === companyId);
        
        if (!company) return;
        
        // Tạo modal hoặc hiển thị chi tiết
        alert(`Chi tiết doanh nghiệp:\n\n` +
              `Tên: ${company.name}\n` +
              `Loại: ${company.type === 'company' ? 'Doanh nghiệp' : 'Hộ kinh doanh'}\n` +
              `Ngành: ${company.industry}\n` +
              `Dịch vụ: ${company.service}\n` +
              `Trạng thái: ${company.status === 'active' ? 'Đang hoạt động' : 'Chờ duyệt'}\n` +
              `Địa điểm: ${company.location}\n` +
              `Hợp tác từ: ${company.since}`);
    }
}

// Khởi tạo
document.addEventListener('DOMContentLoaded', () => {
    window.standaloneSidebar = new StandaloneSidebar();
});