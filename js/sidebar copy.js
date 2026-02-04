// standalone-sidebar.js - Thống kê Kế Toán / GPKD / Thuế (REALISTIC VERSION)

class StandaloneSidebar {
    constructor() {
        this.isOpen = false;
        this.lastStats = this.loadStats();
        this.todayKey = new Date().toISOString().slice(0, 10);
        this.updateInterval = null;

        this.injectCSS();
        this.createSidebarHTML();
        this.addOnlineIndicator();
        this.init();
    }

    async init() {
        this.setupElements();
        this.setupEventListeners();

        if (!this.lastStats) {
            this.lastStats = this.createInitialStats();
            this.saveStats(this.lastStats);
        }

        this.refreshDisplay();
        this.startUpdates();
    }

    /* ================== STORAGE ================== */
    saveStats(stats) {
        localStorage.setItem('htu_sidebar_stats', JSON.stringify({
            data: stats,
            date: this.todayKey,
            timestamp: Date.now()
        }));
    }

    loadStats() {
        const saved = localStorage.getItem('htu_sidebar_stats');
        if (!saved) return null;

        const parsed = JSON.parse(saved);
        if (parsed.date !== this.todayKey) return null;

        return parsed.data;
    }

    /* ================== CSS ================== */
    injectCSS() {
        if (document.getElementById('htu-sidebar-style')) return;

        const css = `
        .standalone-sidebar-overlay {
            position: fixed; inset: 0;
            background: rgba(0,0,0,.45);
            opacity: 0; pointer-events: none;
            transition: .25s;
            z-index: 9998;
        }
        .standalone-sidebar-overlay.active {
            opacity: 1; pointer-events: auto;
        }
        .standalone-sidebar {
            position: fixed;
            right: -360px; top: 0;
            width: 340px; height: 100%;
            background: #f7f9fb;
            box-shadow: -6px 0 20px rgba(0,0,0,.15);
            transition: .3s;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            font-family: system-ui, -apple-system, BlinkMacSystemFont;
        }
        .standalone-sidebar.active { right: 0; }
        .standalone-sidebar-header {
            display: flex; align-items: center;
            justify-content: space-between;
            padding: 14px 16px;
            background: #1f2937;
            color: #fff;
        }
        .standalone-sidebar-logo {
            display: flex; align-items: center; gap: 10px;
            font-weight: 600;
        }
        .standalone-sidebar-logo span span {
            color: #9ca3af; font-weight: 400;
            font-size: 12px;
        }
        .standalone-sidebar-header button {
            background: none; border: none;
            color: #fff; font-size: 18px;
            cursor: pointer;
        }
        .standalone-sidebar-content {
            padding: 16px;
            overflow-y: auto;
            flex: 1;
        }
        .standalone-sidebar-content section {
            background: #fff;
            border-radius: 10px;
            padding: 12px 14px;
            margin-bottom: 12px;
            box-shadow: 0 2px 6px rgba(0,0,0,.06);
        }
        .standalone-sidebar-content h4 {
            margin: 0 0 6px;
            font-size: 14px;
            color: #111827;
        }
        .standalone-sidebar-content p {
            margin: 4px 0;
            font-size: 13px;
            color: #374151;
        }
        .standalone-sidebar-footer {
            padding: 10px 14px;
            background: #e5e7eb;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
        }
        #onlineIndicator {
            background: #1f2937;
            color: #fff;
            padding: 8px 12px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            gap: 6px;
            box-shadow: 0 4px 12px rgba(0,0,0,.2);
        }
        #onlineBadge {
            background: #10b981;
            padding: 2px 8px;
            border-radius: 12px;
            font-weight: 600;
            font-size: 12px;
        }`;
        const style = document.createElement('style');
        style.id = 'htu-sidebar-style';
        style.textContent = css;
        document.head.appendChild(style);
    }

    /* ================== HTML ================== */
    createSidebarHTML() {
        if (document.getElementById('standaloneSidebar')) return;

        document.body.insertAdjacentHTML('beforeend', `
            <div class="standalone-sidebar-overlay" id="standaloneSidebarOverlay"></div>
            <aside class="standalone-sidebar" id="standaloneSidebar">
                <div class="standalone-sidebar-header">
                    <div class="standalone-sidebar-logo">
                        <img src="https://raw.githubusercontent.com/Datkep92/hoangtung/main/images/htu_vuong512notext.jpg" width="36">
                        <span>HTU <span>Accounting</span></span>
                    </div>
                    <button id="standaloneSidebarClose">✕</button>
                </div>
                <div class="standalone-sidebar-content" id="standaloneSidebarContent"></div>
                <div class="standalone-sidebar-footer">
                    <span>🕒 <b id="standaloneLastUpdateTime">--:--</b></span>
                    <button id="standaloneRefreshStatsBtn">↻</button>
                </div>
            </aside>
        `);
    }

    addOnlineIndicator() {
        if (document.getElementById('onlineIndicator')) return;
        document.body.insertAdjacentHTML('beforeend', `
            <div id="onlineIndicator" style="position:fixed;top:20px;right:20px;cursor:pointer;z-index:9999">
                👥 <span id="onlineBadge">0</span>
            </div>
        `);
    }

    /* ================== ELEMENTS ================== */
    setupElements() {
        this.sidebar = document.getElementById('standaloneSidebar');
        this.overlay = document.getElementById('standaloneSidebarOverlay');
        this.content = document.getElementById('standaloneSidebarContent');
        this.closeBtn = document.getElementById('standaloneSidebarClose');
        this.refreshBtn = document.getElementById('standaloneRefreshStatsBtn');
        this.timeEl = document.getElementById('standaloneLastUpdateTime');
        this.onlineBadge = document.getElementById('onlineBadge');
        this.indicator = document.getElementById('onlineIndicator');
    }

    setupEventListeners() {
        this.indicator.onclick = () => this.openSidebar();
        this.closeBtn.onclick = () => this.closeSidebar();
        this.overlay.onclick = () => this.closeSidebar();
        this.refreshBtn.onclick = () => this.refreshDisplay();
    }

    startUpdates() {
        this.updateInterval = setInterval(() => {
            this.updateOnline();
        }, 10000);
    }

    openSidebar() {
        this.sidebar.classList.add('active');
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.refreshDisplay();
    }

    closeSidebar() {
        this.sidebar.classList.remove('active');
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    /* ================== LOGIC ================== */
    createInitialStats() {
        return {
            online: 18,
            contracts_total: 128,
            gpkd_done: 342,
            gpkd_processing: 14,
            tax_done: 566,
            tax_processing: 19
        };
    }

    updateOnline() {
        const hour = new Date().getHours();
        const peak = (hour >= 8 && hour <= 11) || (hour >= 14 && hour <= 17);
        const step = Math.random() > 0.6 ? 2 : 1;

        let delta = Math.random() > 0.5 ? step : -step;
        if (!peak) delta = Math.random() > 0.7 ? delta : 0;

        this.lastStats.online = Math.min(
            60,
            Math.max(6, this.lastStats.online + delta)
        );

        this.saveStats(this.lastStats);
        this.refreshDisplay();
    }

    /* ================== UI ================== */
    refreshDisplay() {
        this.onlineBadge.textContent = this.lastStats.online;
        this.timeEl.textContent = new Date().toLocaleTimeString('vi-VN', {
            hour: '2-digit', minute: '2-digit'
        });

        this.content.innerHTML = `
            <section>
                <h4>📊 Truy cập hệ thống</h4>
                <p>Online hiện tại: <b>${this.lastStats.online}</b></p>
            </section>

            <section>
                <h4>📁 Hợp đồng kế toán</h4>
                <p>Đang quản lý: <b>${this.lastStats.contracts_total}</b></p>
            </section>

            <section>
                <h4>🧾 Giấy phép kinh doanh</h4>
                <p>Đã xử lý: <b>${this.lastStats.gpkd_done}</b></p>
                <p>Đang xử lý: <b>${this.lastStats.gpkd_processing}</b></p>
            </section>

            <section>
                <h4>⚖️ Thuế & quyết toán</h4>
                <p>Đã xử lý: <b>${this.lastStats.tax_done}</b></p>
                <p>Đang xử lý: <b>${this.lastStats.tax_processing}</b></p>
            </section>
        `;
    }
}

/* ================== INIT ================== */
document.addEventListener('DOMContentLoaded', () => {
    window.standaloneSidebar = new StandaloneSidebar();
});
