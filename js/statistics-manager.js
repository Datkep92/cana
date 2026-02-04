// ==================================================
// STATISTICS MANAGER
// Chuẩn THUẾ – GPKD – KẾ TOÁN
// Dao động nhẹ – Không ảo
// ==================================================

class StatisticsManager {
    constructor() {
        this.config = null;
        this.liveData = null;
        this.realData = null;

        this.timer = null;
        this.initialized = false;
    }

    // ================= INIT =================

    async init() {
        if (this.initialized) return;
        this.initialized = true;

        await this.loadConfig();
        await this.loadLiveData();
        await this.loadRealData(true);

        this.renderAll();
        this.startAutoUpdate();
    }

    // ================= DEFAULT =================

    getDefaultConfig() {
        return {
            business_type: "TAX_GPKD",
            auto_update: true,
            last_reset: this.today(),
            manual_override: {
                online: null,
                processing: null,
                completed: null
            }
        };
    }

    getDefaultLiveData() {
        return {
            online_users: 3,
            dossiers_processing: 5,
            dossiers_completed: 2,
            updated_at: Date.now()
        };
    }

    // ================= LOAD =================

    async loadConfig() {
        if (!window.database) {
            this.config = JSON.parse(localStorage.getItem("stats_config"))
                || this.getDefaultConfig();
            return;
        }

        const snap = await database.ref("statistics/config").once("value");
        this.config = snap.val() || this.getDefaultConfig();
    }

    async loadLiveData() {
        if (!window.database) {
            this.liveData = JSON.parse(localStorage.getItem("stats_live"))
                || this.getDefaultLiveData();
            return;
        }

        const snap = await database.ref("statistics/live").once("value");
        this.liveData = snap.val() || this.getDefaultLiveData();
    }

    async loadRealData(force = false) {
        if (!window.database) {
            this.realData = { online: 3 };
            return;
        }

        if (!force && this.realData) return;

        const fiveMinAgo = Date.now() - 5 * 60 * 1000;
        const snap = await database.ref("user_sessions").once("value");
        const sessions = snap.val() || {};

        const realOnline = Object.values(sessions).filter(
            s => s.last_active > fiveMinAgo
        ).length;

        this.realData = {
            online: Math.max(1, realOnline)
        };
    }

    // ================= AUTO UPDATE =================

    startAutoUpdate() {
        if (!this.config.auto_update) return;

        clearInterval(this.timer);
        this.timer = setInterval(() => {
            if (!document.hidden) {
                this.softUpdate();
            }
        }, 10000); // 10s – giống hệ thống thật
    }

    // ================= CORE LOGIC =================

    softUpdate() {
        this.updateOnlineSoft();
        this.updateDossiersSoft();
        this.saveLiveData();
        this.renderLivePreview();
    }

    // ---- ONLINE: ±1–2, bám real ----
    updateOnlineSoft() {
        let current = this.liveData.online_users;
        let real = this.realData.online;

        if (this.config.manual_override.online !== null) {
            this.liveData.online_users = this.config.manual_override.online;
            return;
        }

        let delta = 0;

        if (current < real) delta = 1;
        else if (current > real) delta = -1;
        else delta = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0;

        delta = Math.max(-2, Math.min(2, delta));
        this.liveData.online_users = Math.max(1, current + delta);
    }

    // ---- DOSSIERS: ±3–5 / ngày ----
    updateDossiersSoft() {
        if (this.config.manual_override.processing !== null) {
            this.liveData.dossiers_processing = this.config.manual_override.processing;
            this.liveData.dossiers_completed = this.config.manual_override.completed || 0;
            return;
        }

        // mỗi 10s chỉ update 1 lần rất nhẹ
        if (Math.random() > 0.3) return;

        let p = this.liveData.dossiers_processing;
        let c = this.liveData.dossiers_completed;

        const processDelta = this.rand(-1, 2);
        const completeDelta = this.rand(0, 2);

        p = Math.max(0, p + processDelta);
        c = Math.max(0, c + completeDelta);

        this.liveData.dossiers_processing = p;
        this.liveData.dossiers_completed = c;
    }

    // ================= SAVE =================

    saveLiveData() {
        this.liveData.updated_at = Date.now();

        if (!window.database) {
            localStorage.setItem("stats_live", JSON.stringify(this.liveData));
            return;
        }

        database.ref("statistics/live").set(this.liveData);
    }

    // ================= UI =================

    renderAll() {
        this.renderLivePreview();
    }

    renderLivePreview() {
        const el = document.getElementById("livePreview");
        if (!el) return;

        el.innerHTML = `
            <div class="live-stat-card">
                <div class="icon"><i class="fas fa-user"></i></div>
                <div class="label">Đang truy cập</div>
                <div class="value">${this.liveData.online_users}</div>
            </div>

            <div class="live-stat-card">
                <div class="icon"><i class="fas fa-spinner"></i></div>
                <div class="label">Đang xử lý</div>
                <div class="value">${this.liveData.dossiers_processing}</div>
            </div>

            <div class="live-stat-card">
                <div class="icon"><i class="fas fa-check-circle"></i></div>
                <div class="label">Đã xử lý</div>
                <div class="value">${this.liveData.dossiers_completed}</div>
            </div>
        `;
    }

    // ================= UTILS =================

    rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    today() {
        return new Date().toISOString().split("T")[0];
    }
}

// ================= START =================

document.addEventListener("DOMContentLoaded", () => {
    window.statisticsManager = new StatisticsManager();

    if (window.database) {
        setTimeout(() => statisticsManager.init(), 800);
    } else {
        statisticsManager.init();
    }
});
