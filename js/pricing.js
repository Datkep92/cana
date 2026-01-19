// ===== PRICING SYSTEM - OPTIMIZED VERSION =====
let pricingData = { prices: [], services: [] };
let pricingDatabase = null;
let showAllPricing = false;

// ===== HÀM CHÍNH - ĐẢM BẢO TẤT CẢ ĐỀU ĐƯỢC ĐỊNH NGHĨA =====

// 1. Hàm mở modal bảng giá đầy đủ
function openFullPricingPage() {
    createFullPricingModal();
}

// 2. Hàm đóng modal
function closeFullPricingPage() {
    const modal = document.getElementById('fullPricingModal');
    if (modal) {
        modal.remove();
    }
    
    // Xóa toast nếu có
    const toast = document.getElementById('quickBookToast');
    if (toast) {
        toast.remove();
    }
}

// 3. Hàm ẩn cảnh báo
function dismissWarning() {
    const warningBanner = document.getElementById('warningBanner');
    if (warningBanner) {
        warningBanner.style.opacity = '0';
        warningBanner.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            if (warningBanner.parentNode) {
                warningBanner.style.display = 'none';
            }
        }, 300);
    }
}

// 4. Hàm đăng ký nhanh
function quickBook(serviceTitle) {
    // Đóng modal bảng giá nếu đang mở
    closeFullPricingPage();
    
    // Tạo data service để truyền sang form đặt xe
    const serviceData = {
        title: serviceTitle,
        timestamp: Date.now()
    };
    
    // Lưu service đã chọn vào sessionStorage
    sessionStorage.setItem('selectedService', JSON.stringify(serviceData));
    
    // Tạo thông báo toast
    showQuickBookToast(serviceTitle);
    
    // Chuyển đến phần booking với animation
    setTimeout(() => {
        const bookingSection = document.getElementById('booking');
        if (bookingSection) {
            // Cuộn đến section booking
            bookingSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            // Thêm hiệu ứng highlight
            bookingSection.classList.add('highlight-booking');
            
            // Tự động focus vào field dịch vụ nếu có
            setTimeout(() => {
                const serviceSelect = document.querySelector('.form-select[name="service"]');
                if (serviceSelect) {
                    serviceSelect.focus();
                    
                    // Tìm option chứa serviceTitle
                    const options = Array.from(serviceSelect.options);
                    const matchingOption = options.find(option => 
                        option.text.includes(serviceTitle) || 
                        serviceTitle.includes(option.text)
                    );
                    
                    if (matchingOption) {
                        serviceSelect.value = matchingOption.value;
                    }
                }
                
                // Xóa highlight sau 3 giây
                setTimeout(() => {
                    bookingSection.classList.remove('highlight-booking');
                }, 3000);
                
            }, 500);
        } else {
            // Nếu không tìm thấy booking section, mở tab booking
            const bookingTab = document.querySelector('.tab-item[href="#booking"]');
            if (bookingTab) {
                bookingTab.click();
            }
        }
    }, 800);
}

// 5. Hàm đăng ký từ pricing preview
function quickBookPricing(serviceTitle, servicePrice) {
    if (document.getElementById('fullPricingModal')) {
        closeFullPricingPage();
    }
    
    const serviceData = {
        title: serviceTitle,
        price: servicePrice,
        timestamp: Date.now()
    };
    
    sessionStorage.setItem('selectedService', JSON.stringify(serviceData));
    showQuickBookToast(serviceTitle);
    
    setTimeout(() => {
        const bookingSection = document.getElementById('booking');
        if (bookingSection) {
            bookingSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            bookingSection.classList.add('highlight-booking');
            
            setTimeout(() => {
                const serviceSelect = document.querySelector('.form-select[name="service"]');
                if (serviceSelect) {
                    serviceSelect.focus();
                    
                    const options = Array.from(serviceSelect.options);
                    const matchingOption = options.find(option => 
                        option.text.toLowerCase().includes(serviceTitle.toLowerCase()) || 
                        serviceTitle.toLowerCase().includes(option.text.toLowerCase())
                    );
                    
                    if (matchingOption) {
                        serviceSelect.value = matchingOption.value;
                    }
                }
                
                setTimeout(() => {
                    bookingSection.classList.remove('highlight-booking');
                }, 3000);
                
            }, 500);
        }
    }, 800);
}

// 6. Hiển thị thông báo toast
function showQuickBookToast(serviceTitle) {
    let toast = document.getElementById('quickBookToast');
    
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'quickBookToast';
        toast.className = 'quick-book-toast';
        document.body.appendChild(toast);
        
        if (!document.getElementById('toastCSS')) {
            const style = document.createElement('style');
            style.id = 'toastCSS';
            style.textContent = `
                .quick-book-toast {
                    position: fixed;
                    top: 100px;
                    right: 20px;
                    background: rgba(30, 30, 30, 0.95);
                    border: 2px solid var(--champagne);
                    border-radius: 12px;
                    padding: 15px 20px;
                    color: var(--text-primary);
                    font-size: 14px;
                    z-index: 999999;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    max-width: 350px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(10px);
                    transform: translateX(400px);
                    opacity: 0;
                    transition: all 0.4s ease;
                }
                
                .quick-book-toast.show {
                    transform: translateX(0);
                    opacity: 1;
                }
                
                .toast-icon {
                    width: 36px;
                    height: 36px;
                    background: var(--gradient-gold);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--primary-black);
                    font-size: 18px;
                    flex-shrink: 0;
                }
                
                .toast-content {
                    flex: 1;
                }
                
                .toast-title {
                    font-weight: 700;
                    margin-bottom: 4px;
                    color: var(--champagne);
                }
                
                .toast-message {
                    color: var(--text-secondary);
                    font-size: 13px;
                    line-height: 1.4;
                }
                
                .toast-close {
                    background: transparent;
                    border: none;
                    color: var(--text-tertiary);
                    font-size: 16px;
                    cursor: pointer;
                    padding: 5px;
                    transition: all 0.2s ease;
                }
                
                .toast-close:hover {
                    color: var(--text-primary);
                }
                
                @media (max-width: 768px) {
                    .quick-book-toast {
                        top: 80px;
                        right: 15px;
                        left: 15px;
                        max-width: none;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="fas fa-clipboard-check"></i>
        </div>
        <div class="toast-content">
            <div class="toast-title">Đã chọn dịch vụ</div>
            <div class="toast-message">${serviceTitle.substring(0, 50)}${serviceTitle.length > 50 ? '...' : ''}</div>
        </div>
        <button class="toast-close" onclick="this.parentElement.classList.remove('show')">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

// 7. Tìm service từ pricing
function findServiceFromPricing(pricingTitle) {
    const services = window.servicesData?.services || {};
    
    const normalizeText = (text) => {
        return text.toLowerCase()
            .replace(/[^\w\s]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    };
    
    const normalizedPricingTitle = normalizeText(pricingTitle);
    
    for (const [id, service] of Object.entries(services)) {
        const serviceTitle = service.title || '';
        const normalizedServiceTitle = normalizeText(serviceTitle);
        
        if (normalizedServiceTitle === normalizedPricingTitle) {
            return { id, service };
        }
    }
    
    for (const [id, service] of Object.entries(services)) {
        const serviceTitle = service.title || '';
        const normalizedServiceTitle = normalizeText(serviceTitle);
        
        if (normalizedPricingTitle.includes(normalizedServiceTitle) ||
            normalizedServiceTitle.includes(normalizedPricingTitle)) {
            return { id, service };
        }
    }
    
    return null;
}

// 8. Hiển thị chi tiết service từ pricing
function showServiceDetailFromPricing(serviceTitle) {
    closeFullPricingPage();
    
    const serviceMatch = findServiceFromPricing(serviceTitle);
    
    if (serviceMatch) {
        setTimeout(() => {
            showServiceDetail(serviceMatch.id);
        }, 300);
    } else {
        setTimeout(() => {
            alert('Không tìm thấy thông tin chi tiết cho dịch vụ này. Vui lòng liên hệ để biết thêm thông tin.');
            openFullPricingPage();
        }, 300);
    }
}

// 9. Toggle view more
function toggleViewMore() {
    showAllPricing = !showAllPricing;
    renderPricingTable();
    
    if (showAllPricing) {
        document.getElementById('pricingSection').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 10. Request quote
function requestQuote(title, price) {
    const phoneNumber = '0567033888';
    const message = `Xin chào, tôi muốn nhận báo giá cho: ${title} ${price ? `(Giá tham khảo: ${price})` : ''}`;
    const whatsappUrl = `https://wa.me/84${phoneNumber.substring(1)}?text=${encodeURIComponent(message)}`;
    const zaloUrl = `https://zalo.me/${phoneNumber}`;
    
    if (confirm(`Bạn muốn liên hệ qua WhatsApp hay Zalo để nhận báo giá chi tiết cho "${title}"?`)) {
        window.open(whatsappUrl, '_blank');
    } else {
        window.open(zaloUrl, '_blank');
    }
}

// ===== CÁC HÀM HỖ TRỢ KHÁC =====

async function loadAllPricingData() {
    try {
        let [pricingSnapshot, servicesSnapshot] = await Promise.all([
            pricingDatabase.ref('pricing').once('value'),
            pricingDatabase.ref('services').once('value')
        ]);
        
        const pricing = pricingSnapshot.val();
        const services = servicesSnapshot.val();
        
        pricingData = {
            prices: pricing?.prices || getDefaultPricing(),
            services: extractServicesPricing(services),
            last_updated: new Date().toISOString()
        };
        
        localStorage.setItem('cana_pricing', JSON.stringify(pricingData));
        renderPricingTable();
        
    } catch (error) {
        console.error("Error loading pricing data:", error);
        loadPricingFromLocalStorage();
    }
}

function extractServicesPricing(servicesData) {
    const servicesPricing = [];
    
    if (servicesData && servicesData.services) {
        Object.entries(servicesData.services).forEach(([id, service]) => {
            if (service.pricing && service.pricing.length > 0) {
                const priceItem = service.pricing[0];
                
                servicesPricing.push({
                    id: `service_${id}`,
                    source: 'service',
                    service_id: id,
                    category: 'Dịch Vụ',
                    title: service.title,
                    description: service.description?.substring(0, 80) + '...' || '',
                    current_price: priceItem.price,
                    custom_price: service.custom_price || null,
                    original_price: service.original_price || null,
                    note: priceItem.label ? `(${priceItem.label})` : '',
                    order: parseInt(service.order || 999)
                });
            }
        });
        
        servicesPricing.sort((a, b) => a.order - b.order);
    }
    
    return servicesPricing;
}

function renderPricingTable() {
    const pricingSection = document.getElementById('pricingSection');
    if (!pricingSection) return;
    
    const { prices = [], services = [] } = pricingData;
    const lastUpdated = pricingData.last_updated ? 
        new Date(pricingData.last_updated).toLocaleDateString('vi-VN') : 'Chưa cập nhật';
    
    if (prices.length === 0 && services.length === 0) {
        pricingSection.innerHTML = `
            <div class="empty-pricing">
                <i class="fas fa-tags"></i>
                <p>Chưa có bảng giá</p>
                <small>Vui lòng liên hệ: 0567.033.888</small>
            </div>
        `;
        return;
    }
    
    let allItems = prices.map(item => ({
        ...item,
        source: 'pricing'
    }));

    allItems.sort((a, b) => (b.order || 0) - (a.order || 0));
    const latestItems = allItems.slice(0, 6);
    
    let html = `
    <div class="pricing-preview">
        <div class="pricing-header">
            <div class="header-top">
                <h2 class="pricing-title">
                    Bảng Giá Dịch Vụ
                </h2>
                <span style="display:block; width:100%; margin-top:6px;">
                    Giá mang tính chất tham khảo – phụ thuộc vào quy mô doanh nghiệp, 
                    loại hình dịch vụ, vui lòng liên hệ để được tư vấn báo giá chính xác
                </span>
            </div>
        </div>

        <div class="pricing-preview-grid">
`;
    
    latestItems.forEach((item, index) => {
        const isService = item.source === 'service';
        const hasDiscount = item.original_price && item.current_price;
        const priceValue = item.custom_price || item.current_price || 'Liên hệ';
        
        const getCategoryIcon = (category) => {
            if (category.includes('Thuế')) return 'fa-file-invoice-dollar';
            if (category.includes('Kế toán')) return 'fa-calculator';
            if (category.includes('GPKD')) return 'fa-file-contract';
            if (category.includes('Bảo hiểm')) return 'fa-shield-alt';
            return 'fa-briefcase';
        };
        
        html += `
            <div class="pricing-preview-card ${isService ? 'service-card' : ''} ${hasDiscount ? 'has-discount' : ''}">
                <div class="preview-card-header">
                    <span class="route-badge">
                        <i class="fas ${getCategoryIcon(item.category)}"></i> ${item.category || 'Dịch vụ'}
                    </span>
                    ${index < 3 ? `<span class="new-badge">MỚI</span>` : ''}
                </div>
                
                <div class="preview-card-content">
                    <h3 class="preview-item-title">${item.title}</h3>
                    
                    ${item.description ? `
                        <div class="preview-item-desc">
                            ${item.description}
                        </div>
                    ` : ''}
                    
                    <div class="preview-price-section">
                        ${hasDiscount ? `
                            <div class="preview-price-original">
                                <del>${item.original_price}</del>
                            </div>
                        ` : ''}
                        
                        <div class="preview-price-current">
                            <span class="price-amount">${priceValue}</span>
                        </div>
                    </div>
                    
                    <div class="preview-mini-buttons">
                        <button class="mini-call-btn" onclick="window.location.href='tel:0567033888'" title="Gọi tư vấn">
                            <i class="fas fa-phone-alt"></i>
                            <span>Tư vấn</span>
                        </button>
                        <button class="mini-book-btn" onclick="quickBookPricing('${item.title}', '${priceValue}')" title="Đăng ký dịch vụ">
                            <i class="fas fa-clipboard-check"></i>
                            <span>Đăng ký</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += `
            </div>
            
            <div class="pricing-preview-footer">
                <button class="btn-view-all-pricing" onclick="openFullPricingPage()">
                    <i class="fas fa-list-alt"></i>
                    Xem Toàn Bộ Bảng Giá
                </button>
            </div>
        </div>
    `;
    
    pricingSection.innerHTML = html;
    addMiniButtonsCSS();
}

function addMiniButtonsCSS() {
    if (document.getElementById('miniButtonsCSS')) return;
    
    const style = document.createElement('style');
    style.id = 'miniButtonsCSS';
    style.textContent = `
        .preview-mini-buttons {
            display: flex;
            gap: 8px;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid rgba(212, 175, 55, 0.1);
            justify-content: space-between;
        }
        
        .mini-call-btn,
        .mini-book-btn {
            flex: 1;
            padding: 8px 10px;
            border-radius: 8px;
            border: 1px solid transparent;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 4px;
            min-height: 60px;
            text-align: center;
            background: rgba(255, 255, 255, 0.05);
        }
        
        .mini-call-btn {
            color: #2196F3;
            border-color: rgba(33, 150, 243, 0.2);
        }
        
        .mini-call-btn:hover {
            background: rgba(33, 150, 243, 0.1);
            transform: translateY(-2px);
        }
        
        .mini-book-btn {
            color: #4CAF50;
            border-color: rgba(76, 175, 80, 0.2);
        }
        
        .mini-book-btn:hover {
            background: rgba(76, 175, 80, 0.1);
            transform: translateY(-2px);
        }
        
        .mini-call-btn i,
        .mini-book-btn i {
            font-size: 14px;
            margin-bottom: 2px;
        }
        
        .mini-call-btn span,
        .mini-book-btn span {
            font-size: 11px;
            line-height: 1.2;
            display: block;
        }
        
        @media (max-width: 768px) {
            .preview-mini-buttons {
                gap: 6px;
            }
            
            .mini-call-btn,
            .mini-book-btn {
                padding: 6px 8px;
                min-height: 55px;
            }
        }
    `;
    document.head.appendChild(style);
}

function getDefaultPricing() {
    return [
        {
            id: 'price1',
            category: 'Thành Lập Doanh Nghiệp',
            title: 'GPKD Trọn Gói',
            description: 'Đăng ký kinh doanh, con dấu, khai thuế ban đầu',
            original_price: '5.000.000 VND',
            current_price: '3.500.000 VND',
            note: 'Cho doanh nghiệp tư nhân',
            order: 1
        },
        {
            id: 'price2',
            category: 'Dịch Vụ Kế Toán',
            title: 'Kế Toán Tháng',
            description: 'Báo cáo thuế hàng tháng, sổ sách kế toán',
            current_price: '1.200.000 VND/tháng',
            note: 'Cho doanh nghiệp dưới 20 triệu doanh thu',
            order: 2
        },
        {
            id: 'price3',
            category: 'Khai Thuế',
            title: 'Kê Khai Thuế GTGT',
            description: 'Hỗ trợ kê khai thuế GTGT hàng tháng/quý',
            current_price: '800.000 VND/lần',
            note: 'Bao gồm tư vấn chính sách thuế',
            order: 3
        },
        {
            id: 'price4',
            category: 'Bảo Hiểm',
            title: 'Bảo Hiểm Xã Hội',
            description: 'Đăng ký và duy trì BHXH cho nhân viên',
            current_price: '500.000 VND/tháng',
            note: 'Từ 1-5 nhân viên',
            order: 4
        },
        {
            id: 'price5',
            category: 'Giấy Phép',
            title: 'Giấy Phép Vệ Sinh ATTP',
            description: 'Xin giấy phép vệ sinh an toàn thực phẩm',
            current_price: '4.500.000 VND',
            note: 'Bao gồm hồ sơ và thủ tục',
            order: 5
        },
        {
            id: 'price6',
            category: 'Tư Vấn Thuế',
            title: 'Tư Vấn Hoàn Thuế',
            description: 'Tư vấn và hỗ trợ thủ tục hoàn thuế',
            current_price: 'Liên hệ',
            note: 'Phí tùy theo giá trị hoàn thuế',
            order: 6
        }
    ];
}

function createFullPricingModal() {
    const { prices = [], services = [] } = pricingData;
    const lastUpdated = pricingData.last_updated
        ? new Date(pricingData.last_updated).toLocaleDateString('vi-VN')
        : 'Chưa cập nhật';

    const sortedPrices = prices
        .map(item => ({ ...item, source: 'pricing' }))
        .sort((a, b) => (b.order || 0) - (a.order || 0));

    const sortedServices = services
        .map(item => ({ ...item, source: 'service' }))
        .sort((a, b) => (b.order || 0) - (a.order || 0));

    const allItems = [...sortedPrices, ...sortedServices];
    
    let html = `
        <div class="full-pricing-overlay" id="fullPricingModal">
            <div class="full-pricing-container">
                <div class="full-pricing-header-mini">
                    <div class="mini-header-left">
                        <h3 class="mini-header-title">
                            <i class="fas fa-file-invoice-dollar"></i>
                            Bảng Giá Đầy Đủ
                        </h3>
                        <div class="mini-header-info">
                            <span class="item-count">${allItems.length} dịch vụ</span>
                            <span class="header-divider">•</span>
                            <span class="update-info">Cập nhật: ${lastUpdated}</span>
                        </div>
                    </div>
                    <button class="btn-close-mini" onclick="closeFullPricingPage()" title="Đóng">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="pricing-warning-banner" id="warningBanner">
                    <div class="warning-content">
                        <i class="fas fa-exclamation-triangle"></i>
                        <div class="warning-text">
                            <strong>Lưu ý:</strong> Giá chỉ mang tính chất tham khảo. Liên hệ để có báo giá chính xác nhất.
                        </div>
                    </div>
                    <button class="btn-dismiss-warning" onclick="dismissWarning()" title="Ẩn cảnh báo">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="full-pricing-content" id="pricingContent">
    `;
    
    const categories = {};
    allItems.forEach(item => {
        const category = item.category || (item.source === 'service' ? 'Dịch Vụ' : 'Khác');
        if (!categories[category]) {
            categories[category] = [];
        }
        categories[category].push(item);
    });
    
    Object.entries(categories).forEach(([category, items]) => {
        const getCategoryIcon = (cat) => {
            if (cat.includes('Thuế')) return 'fa-file-invoice-dollar';
            if (cat.includes('Kế toán')) return 'fa-calculator';
            if (cat.includes('GPKD')) return 'fa-file-contract';
            if (cat.includes('Bảo hiểm')) return 'fa-shield-alt';
            if (cat.includes('Giấy phép')) return 'fa-certificate';
            return 'fa-briefcase';
        };
        
        html += `
            <div class="pricing-category-section">
                <h3 class="category-title-mini">
                    <i class="fas ${getCategoryIcon(category)}"></i>
                    ${category}
                    <span class="category-count-mini">${items.length}</span>
                </h3>
                
                <div class="pricing-table-mini">
        `;
        
        items.forEach(item => {
            const isService = item.source === 'service';
            const hasDiscount = item.original_price && item.current_price;
            const priceValue = item.custom_price || item.current_price || 'Liên hệ';
            
            html += `
                <div class="full-pricing-item ${isService ? 'service-item' : ''}">
                    <div class="item-main-info">
                        <div class="item-header-mini">
                            <h4 class="item-title-mini">${item.title}</h4>
                            ${isService ? 
                                `<span class="item-service-badge">
                                    <i class="fas fa-briefcase"></i>
                                </span>` : ''
                            }
                        </div>
                        
                        ${item.description ? `
                            <div class="item-desc-mini">
                                ${item.description}
                            </div>
                        ` : ''}
                    </div>
                    
                    <div class="item-price-actions">
                        <div class="item-pricing-mini">
                            ${hasDiscount ? `
                                <div class="price-discounted">
                                    <del>${item.original_price}</del>
                                </div>
                            ` : ''}
                            
                            <div class="price-current-mini">
                                <span class="price-label">Giá:</span>
                                <strong class="price-value">${priceValue}</strong>
                            </div>
                        </div>
                        
                        <div class="item-action-buttons">
                            <button class="btn-quick-book-full" onclick="quickBook('${item.title}')" title="Đăng ký dịch vụ">
                                <i class="fas fa-clipboard-check"></i>
                                <span>Đăng ký</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    html += `
                </div>
                
                <div class="full-pricing-footer-mini">
                    <div class="footer-actions">
                        <button class="footer-btn call-btn" onclick="window.location.href='tel:0567033888'" title="Gọi điện">
                            <div class="btn-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <span class="btn-label">Gọi</span>
                        </button>
                        
                        <button class="footer-btn zalo-btn" onclick="window.open('https://zalo.me/0567033888', '_blank')" title="Nhắn tin Zalo">
                            <div class="btn-icon">
                                <i class="fab fa-zalo"></i>
                            </div>
                            <span class="btn-label">Zalo</span>
                        </button>
                        
                        <button class="footer-btn whatsapp-btn" onclick="window.open('https://wa.me/84931243679?text=Tôi muốn nhận báo giá dịch vụ thuế/kế toán', '_blank')" title="Nhắn tin WhatsApp">
                            <div class="btn-icon">
                                <i class="fab fa-whatsapp"></i>
                            </div>
                            <span class="btn-label">WhatsApp</span>
                        </button>
                        
                        <button class="footer-btn book-btn" onclick="quickBook('Tư vấn dịch vụ')" title="Đăng ký tư vấn">
                            <div class="btn-icon">
                                <i class="fas fa-calendar-alt"></i>
                            </div>
                            <span class="btn-label">Đăng ký</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const overlay = document.createElement('div');
    overlay.innerHTML = html;
    document.body.appendChild(overlay);
    
    if (!document.getElementById('fullPricingCSS')) {
        const style = document.createElement('style');
        style.id = 'fullPricingCSS';
        style.textContent = getFullPricingCSS();
        document.head.appendChild(style);
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeFullPricingPage();
    });
    
    overlay.querySelector('.full-pricing-overlay').addEventListener('click', function(e) {
        if (e.target === this) closeFullPricingPage();
    });
}

function getFullPricingCSS() {
    return `
        .full-pricing-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 99999;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            animation: fadeIn 0.3s ease;
            backdrop-filter: blur(10px);
        }
        
        .full-pricing-container {
            width: 100%;
            height: 100%;
            max-width: 1000px;
            max-height: 100vh;
            background: var(--primary-black);
            display: flex;
            flex-direction: column;
            animation: slideUp 0.3s ease;
            border-radius: 0;
        }
        
        .full-pricing-header-mini {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            background: rgba(20, 20, 20, 0.98);
            border-bottom: 1px solid rgba(212, 175, 55, 0.2);
            backdrop-filter: blur(10px);
            position: sticky;
            top: 0;
            z-index: 100;
            flex-shrink: 0;
            height: 70px;
            box-sizing: border-box;
        }
        
        .mini-header-left {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
        
        .mini-header-title {
            font-size: 18px;
            color: var(--champagne);
            margin: 0;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 600;
        }
        
        .mini-header-info {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            color: var(--text-tertiary);
        }
        
        .item-count {
            background: rgba(212, 175, 55, 0.1);
            color: var(--light-champagne);
            padding: 2px 8px;
            border-radius: 10px;
            font-weight: 600;
        }
        
        .header-divider {
            opacity: 0.5;
        }
        
        .update-info {
            opacity: 0.8;
        }
        
        .btn-close-mini {
            width: 40px;
            height: 40px;
            background: rgba(212, 175, 55, 0.1);
            border: 1px solid rgba(212, 175, 55, 0.3);
            border-radius: 10px;
            color: var(--text-primary);
            font-size: 18px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        
        .btn-close-mini:hover {
            background: rgba(212, 175, 55, 0.2);
            transform: rotate(90deg);
        }
        
        .pricing-warning-banner {
            padding: 10px 20px;
            background: linear-gradient(90deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.05) 100%);
            border-bottom: 1px solid rgba(255, 152, 0, 0.2);
            transition: all 0.3s ease;
            flex-shrink: 0;
        }
        
        .warning-content {
            display: flex;
            align-items: flex-start;
            gap: 12px;
        }
        
        .warning-content i {
            color: #FF9800;
            font-size: 16px;
            margin-top: 2px;
            flex-shrink: 0;
        }
        
        .warning-text {
            color: var(--text-secondary);
            font-size: 13px;
            line-height: 1.4;
            flex: 1;
        }
        
        .warning-text strong {
            color: #FF9800;
        }
        
        .btn-dismiss-warning {
            background: transparent;
            border: none;
            color: var(--text-tertiary);
            font-size: 14px;
            cursor: pointer;
            padding: 5px;
            margin-left: 10px;
            transition: all 0.2s ease;
        }
        
        .btn-dismiss-warning:hover {
            color: var(--text-primary);
        }
        
        .full-pricing-content {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            background: var(--primary-black);
        }
        
        .pricing-category-section {
            margin-bottom: 25px;
        }
        
        .category-title-mini {
            font-size: 16px;
            color: var(--text-primary);
            margin: 0 0 15px 0;
            padding-bottom: 8px;
            border-bottom: 1px solid rgba(212, 175, 55, 0.2);
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 600;
        }
        
        .category-count-mini {
            background: rgba(212, 175, 55, 0.1);
            color: var(--champagne);
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 12px;
            font-weight: 700;
        }
        
        .full-pricing-item {
            background: rgba(255, 255, 255, 0.03);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            padding: 15px;
            margin-bottom: 12px;
            transition: all 0.3s ease;
        }
        
        .full-pricing-item:hover {
            background: rgba(212, 175, 55, 0.05);
            border-color: rgba(212, 175, 55, 0.2);
        }
        
        .item-main-info {
            margin-bottom: 15px;
        }
        
        .item-header-mini {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 8px;
            gap: 10px;
        }
        
        .item-title-mini {
            font-size: 15px;
            color: var(--text-primary);
            margin: 0;
            line-height: 1.4;
            flex: 1;
            font-weight: 600;
        }
        
        .item-service-badge {
            background: rgba(212, 175, 55, 0.1);
            color: var(--champagne);
            width: 24px;
            height: 24px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            flex-shrink: 0;
        }
        
        .item-desc-mini {
            color: var(--text-tertiary);
            font-size: 13px;
            line-height: 1.5;
        }
        
        .item-price-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            padding-top: 15px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .item-pricing-mini {
            flex: 1;
        }
        
        .price-discounted {
            margin-bottom: 4px;
        }
        
        .price-discounted del {
            color: var(--text-tertiary);
            font-size: 12px;
        }
        
        .price-current-mini {
            display: flex;
            align-items: baseline;
            gap: 8px;
        }
        
        .price-label {
            color: var(--text-secondary);
            font-size: 13px;
        }
        
        .price-value {
            font-size: 18px;
            color: var(--champagne);
            font-weight: 700;
        }
        
        .item-action-buttons {
            display: flex;
            gap: 8px;
            flex-shrink: 0;
        }
        
        .btn-quick-book-full {
            padding: 10px 12px;
            background: rgba(76, 175, 80, 0.1);
            border: 1px solid rgba(76, 175, 80, 0.3);
            border-radius: 8px;
            color: #4CAF50;
            font-weight: 600;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        
        .btn-quick-book-full:hover {
            background: rgba(76, 175, 80, 0.2);
            transform: translateY(-2px);
        }
        
        .full-pricing-footer-mini {
            padding: 15px 20px;
            background: rgba(20, 20, 20, 0.98);
            border-top: 1px solid rgba(212, 175, 55, 0.2);
            backdrop-filter: blur(10px);
            position: sticky;
            bottom: 0;
            z-index: 100;
            flex-shrink: 0;
            height: 70px;
            box-sizing: border-box;
        }
        
        .footer-actions {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100%;
            gap: 5px;
        }
        
        .footer-btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            background: transparent;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 8px 12px;
            border-radius: 10px;
            flex: 1;
            max-width: 80px;
        }
        
        .footer-btn:hover {
            background: rgba(255, 255, 255, 0.05);
            color: var(--text-primary);
            transform: translateY(-2px);
        }
        
        .btn-icon {
            width: 32px;
            height: 32px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
        }
        
        .call-btn .btn-icon {
            background: rgba(33, 150, 243, 0.1);
            color: #2196F3;
        }
        
        .zalo-btn .btn-icon {
            background: rgba(0, 104, 255, 0.1);
            color: #0068FF;
        }
        
        .whatsapp-btn .btn-icon {
            background: rgba(37, 211, 102, 0.1);
            color: #25D366;
        }
        
        .book-btn .btn-icon {
            background: rgba(156, 39, 176, 0.1);
            color: #9C27B0;
        }
        
        .btn-label {
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .full-pricing-content::-webkit-scrollbar {
            width: 6px;
        }
        
        .full-pricing-content::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
        }
        
        .full-pricing-content::-webkit-scrollbar-thumb {
            background: var(--champagne);
            border-radius: 3px;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @media (max-width: 768px) {
            .full-pricing-container {
                max-height: 100vh;
                border-radius: 0;
                width: 100%;
            }
            
            .full-pricing-content {
                padding: 15px;
            }
            
            .item-price-actions {
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }
            
            .item-action-buttons {
                width: 100%;
            }
            
            .btn-quick-book-full {
                flex: 1;
                justify-content: center;
            }
            
            .footer-btn {
                padding: 6px 8px;
                max-width: 70px;
            }
            
            .btn-icon {
                width: 28px;
                height: 28px;
                font-size: 14px;
            }
            
            .btn-label {
                font-size: 10px;
            }
        }
        
        @media (max-width: 480px) {
            .full-pricing-header-mini,
            .full-pricing-footer-mini {
                height: 60px;
                padding: 10px 15px;
            }
            
            .mini-header-title {
                font-size: 16px;
            }
            
            .mini-header-info {
                font-size: 11px;
            }
            
            .pricing-warning-banner {
                padding: 8px 15px;
            }
            
            .warning-text {
                font-size: 12px;
            }
            
            .item-title-mini {
                font-size: 14px;
            }
            
            .price-value {
                font-size: 16px;
            }
            
            .btn-quick-book-full {
                padding: 8px 10px;
                font-size: 12px;
            }
        }
    `;
}

function loadPricingFromLocalStorage() {
    const saved = localStorage.getItem('cana_pricing');
    if (saved) {
        pricingData = JSON.parse(saved);
        renderPricingTable();
    } else {
        pricingData = {
            prices: getDefaultPricing(),
            services: [],
            last_updated: new Date().toISOString()
        };
        renderPricingTable();
    }
}

async function initPricing() {
    try {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyD-fCFDfgSVXiNdwyAm0kO32BxfPPTDswc",
                authDomain: "cana-6633e.firebaseapp.com",
                databaseURL: "https://cana-6633e-default-rtdb.firebaseio.com",
                projectId: "cana-6633e",
                storageBucket: "cana-6633e.firebasestorage.app",
                messagingSenderId: "123685281829",
                appId: "1:123685281829:web:7eeb47c7260a2136455fcc",
                measurementId: "G-4XYG3YEW1W"
            });
        }
        pricingDatabase = firebase.database();
        await loadAllPricingData();
    } catch (error) {
        console.error("Pricing initialization error:", error);
        loadPricingFromLocalStorage();
    }
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function() {
    initPricing();
    
    // Debug: Kiểm tra các hàm đã được định nghĩa
    console.log('openFullPricingPage defined:', typeof openFullPricingPage !== 'undefined');
    console.log('closeFullPricingPage defined:', typeof closeFullPricingPage !== 'undefined');
    console.log('quickBook defined:', typeof quickBook !== 'undefined');
});