// standalone-sidebar.js - Header Buttons + Sidebar Thống kê (Kế Toán / Thuế / GPKD)

class StandaloneSidebar {
    constructor() {
        this.isOpen = false;
        this.todayKey = new Date().toISOString().slice(0, 10);
        this.lastStats = this.loadStats();

        this.injectCSS();
        this.createHTML();
        this.init();
    }

    /* ================= INIT ================= */
    init() {
        this.cacheElements();
        this.bindEvents();

        if (!this.lastStats) {
            this.lastStats = this.createInitialStats();
            this.saveStats(this.lastStats);
        }

        this.refreshDisplay();
        this.startAutoUpdate();
    }

    /* ================= STORAGE ================= */
    saveStats(stats) {
        localStorage.setItem('htu_sidebar_stats', JSON.stringify({
            date: this.todayKey,
            data: stats
        }));
    }

    loadStats() {
        const raw = localStorage.getItem('htu_sidebar_stats');
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (parsed.date !== this.todayKey) return null;
        return parsed.data;
    }

    /* ================= CSS ================= */
    injectCSS() {
        if (document.getElementById('htuSidebarStyle')) return;

        const style = document.createElement('style');
        style.id = 'htuSidebarStyle';
        style.textContent = `
/* ===== HEADER BUTTONS ===== */
.htu-header-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.htu-btn {
    background: #f5f7fa;
    border: 1px solid #d0d7de;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 13px;
    cursor: pointer;
    text-decoration: none;
    color: #111827;
    white-space: nowrap;
}

.htu-btn.stats {
    font-weight: 600;
}

/* ===== OVERLAY ===== */
.htu-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.45);
    opacity: 0;
    pointer-events: none;
    transition: .25s;
    z-index: 9998;
}
.htu-overlay.active {
    opacity: 1;
    pointer-events: auto;
}

/* ===== SIDEBAR ===== */
.htu-sidebar {
    position: fixed;
    right: -360px;
    top: 0;
    width: 360px;
    height: 100vh;
    background: #fff;
    z-index: 9999;
    transition: .3s;
    display: flex;
    flex-direction: column;
}
.htu-sidebar.active { right: 0; }

.htu-header {
    padding: 16px;
    background: #111827;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.htu-header b span {
    color: #10b981;
}

.htu-content {
    padding: 16px;
    overflow-y: auto;
    flex: 1;
}

.htu-menu a {
    display: block;
    padding: 10px 12px;
    margin-bottom: 8px;
    background: #f3f4f6;
    border-radius: 8px;
    color: #111827;
    text-decoration: none;
    font-size: 14px;
}
.htu-menu a:hover { background: #e5e7eb; }

.htu-section {
    margin-top: 20px;
}
.htu-section h4 {
    font-size: 14px;
    margin-bottom: 8px;
}
.htu-section p {
    font-size: 13px;
    margin: 4px 0;
    color: #374151;
}

.htu-footer {
    padding: 10px 16px;
    border-top: 1px solid #eee;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
}
        `;
        document.head.appendChild(style);
    }

    /* ================= HTML ================= */
    createHTML() {

        /* HEADER BUTTONS */
        const header = document.querySelector('.app-header .header-content');
        if (header && !document.getElementById('htuHeaderActions')) {
            header.insertAdjacentHTML('beforeend', `
                <nav id="htuHeaderActions" class="htu-header-actions">
                    <a href="/service" class="htu-btn">Dịch vụ</a>
                    <a href="/tool" class="htu-btn">Tool</a>
                    <button class="htu-btn stats" id="htuStatsBtn">Thống kê</button>
                </nav>
            `);
        }

        /* SIDEBAR */
        document.body.insertAdjacentHTML('beforeend', `
            <div class="htu-overlay" id="htuOverlay"></div>

            <aside class="htu-sidebar" id="htuSidebar">
                <div class="htu-header">
                    <b>HTU <span>Accounting</span></b>
                    <button id="htuClose" style="background:none;border:none;color:#fff;font-size:18px">×</button>
                </div>

                <div class="htu-content">
                    <div class="htu-menu">
                        <a href="/service">📌 Dịch vụ</a>
                        <a href="/blog">📰 Blog</a>
                        <a href="/tool">🛠 Tool kế toán & bán hàng</a>
                    </div>

                    <div class="htu-section" id="htuStats"></div>
                </div>

                <div class="htu-footer">
                    <span>🕒 <b id="htuTime">--:--</b></span>
                    <button id="htuRefresh">⟳</button>
                </div>
            </aside>
        `);
    }

    /* ================= ELEMENTS ================= */
    cacheElements() {
        this.statsBtn = document.getElementById('htuStatsBtn');
        this.sidebar = document.getElementById('htuSidebar');
        this.overlay = document.getElementById('htuOverlay');
        this.closeBtn = document.getElementById('htuClose');
        this.statsEl = document.getElementById('htuStats');
        this.timeEl = document.getElementById('htuTime');
        this.refreshBtn = document.getElementById('htuRefresh');
    }

    bindEvents() {
        this.statsBtn.onclick = () => this.open();
        this.closeBtn.onclick = () => this.close();
        this.overlay.onclick = () => this.close();
        this.refreshBtn.onclick = () => this.updateStats(true);
    }

    /* ================= LOGIC ================= */
    createInitialStats() {
        return {
            online: 18,
            contracts: 126,
            gpkd_done: 342,
            gpkd_processing: 14,
            tax_done: 568,
            tax_processing: 21
        };
    }

    fluctuate(val, min, max, step) {
        const delta = Math.floor(Math.random() * (step * 2 + 1)) - step;
        return Math.max(min, Math.min(max, val + delta));
    }

    updateStats() {
        this.lastStats.online = this.fluctuate(this.lastStats.online, 10, 60, 2);
        this.lastStats.gpkd_done = this.fluctuate(this.lastStats.gpkd_done, 300, 1000, 3);
        this.lastStats.gpkd_processing = this.fluctuate(this.lastStats.gpkd_processing, 8, 40, 2);
        this.lastStats.tax_done = this.fluctuate(this.lastStats.tax_done, 500, 2000, 4);
        this.lastStats.tax_processing = this.fluctuate(this.lastStats.tax_processing, 10, 60, 3);

        this.saveStats(this.lastStats);
        this.refreshDisplay();
    }

    startAutoUpdate() {
        setInterval(() => this.updateStats(), 10000);
    }

    /* ================= UI ================= */
    refreshDisplay() {
        this.timeEl.textContent = new Date().toLocaleTimeString('vi-VN', {
            hour: '2-digit',
            minute: '2-digit'
        });

        this.statsEl.innerHTML = `
            <h4>📊 Thống kê hôm nay</h4>
            <p>👥 Online: <b>${this.lastStats.online}</b></p>
            <p>📁 Hợp đồng: <b>${this.lastStats.contracts}</b></p>
            <p>🏢 GPKD đã xử lý: <b>${this.lastStats.gpkd_done}</b></p>
            <p>⏳ GPKD đang xử lý: <b>${this.lastStats.gpkd_processing}</b></p>
            <p>💰 Thuế đã xử lý: <b>${this.lastStats.tax_done}</b></p>
            <p>⌛ Thuế đang xử lý: <b>${this.lastStats.tax_processing}</b></p>
        `;
    }

    open() {
        this.sidebar.classList.add('active');
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.sidebar.classList.remove('active');
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/* ================= INIT ================= */
document.addEventListener('DOMContentLoaded', () => {
    window.htuSidebar = new StandaloneSidebar();
});

