(() => {
    'use strict';

    // ==========================================
    // 1. CONSTANTS & DATA DEFINITIONS
    // ==========================================
    const CONSTANTS = {
        PRICE_DATA: {
            bang_gia: {
                cho: [
                    {
                        can_nang: '<1kg',
                        goi: {
                            '10_buoc': { long_sat: 6400, long_dai: 6400 },
                            '12_buoc': { long_sat: 9600, long_dai: 9600 },
                            '18_buoc': { long_sat: 16000, long_dai: 16000 },
                            cao: { day_du: 18000, toan_dien: 26000 },
                            cat_tia: { day_du: 36000, toan_dien: 42400 },
                        },
                    },
                    {
                        can_nang: '1-3kg',
                        goi: {
                            '10_buoc': { long_sat: 8000, long_dai: 8000 },
                            '12_buoc': { long_sat: 11200, long_dai: 11200 },
                            '18_buoc': { long_sat: 17600, long_dai: 17600 },
                            cao: { day_du: 20000, toan_dien: 28000 },
                            cat_tia: { day_du: 40800, toan_dien: 47200 },
                        },
                    },
                    {
                        can_nang: '3-5kg',
                        goi: {
                            '10_buoc': { long_sat: 11200, long_dai: 11200 },
                            '12_buoc': { long_sat: 14400, long_dai: 14400 },
                            '18_buoc': { long_sat: 20800, long_dai: 20800 },
                            cao: { day_du: 24000, toan_dien: 32000 },
                            cat_tia: { day_du: 43200, toan_dien: 49600 },
                        },
                    },
                    {
                        can_nang: '5-8kg',
                        goi: {
                            '10_buoc': { long_sat: 12000, long_dai: 13600 },
                            '12_buoc': { long_sat: 16000, long_dai: 17600 },
                            '18_buoc': { long_sat: 22400, long_dai: 24000 },
                            cao: { day_du: 28000, toan_dien: 36000 },
                            cat_tia: { day_du: 50400, toan_dien: 56800 },
                        },
                    },
                    {
                        can_nang: '8-12kg',
                        goi: {
                            '10_buoc': { long_sat: 14400, long_dai: 17600 },
                            '12_buoc': { long_sat: 18400, long_dai: 21600 },
                            '18_buoc': { long_sat: 24800, long_dai: 28000 },
                            cao: { day_du: 33000, toan_dien: 41000 },
                            cat_tia: { day_du: 57600, toan_dien: 64000 },
                        },
                    },
                    {
                        can_nang: '12-15kg',
                        goi: {
                            '10_buoc': { long_sat: 16000, long_dai: 19200 },
                            '12_buoc': { long_sat: 20000, long_dai: 23200 },
                            '18_buoc': { long_sat: 26400, long_dai: 29600 },
                            cao: { day_du: 35000, toan_dien: 43000 },
                            cat_tia: { day_du: 60000, toan_dien: 66400 },
                        },
                    },
                    {
                        can_nang: '15-20kg',
                        goi: {
                            '10_buoc': { long_sat: 19200, long_dai: 22400 },
                            '12_buoc': { long_sat: 23200, long_dai: 26400 },
                            '18_buoc': { long_sat: 29600, long_dai: 32800 },
                            cao: { day_du: 40000, toan_dien: 48000 },
                            cat_tia: { day_du: 66400, toan_dien: 72800 },
                        },
                    },
                    {
                        can_nang: '20-30kg',
                        goi: {
                            '10_buoc': { long_sat: 24000, long_dai: 28000 },
                            '12_buoc': { long_sat: 28000, long_dai: 32000 },
                            '18_buoc': { long_sat: 34400, long_dai: 38400 },
                            cao: { day_du: 48000, toan_dien: 56000 },
                            cat_tia: { day_du: 78400, toan_dien: 84800 },
                        },
                    },
                ],
                meo: [
                    {
                        can_nang: '<1kg',
                        goi: {
                            '10_buoc': { khong_long: 8000, long_dai: 8000 },
                            '12_buoc': { khong_long: 11200, long_dai: 11200 },
                            '18_buoc': { long_sat: 17600, long_dai: 17600 },
                            cao: { day_du: 22000, toan_dien: 30000 },
                            cat_tia: { day_du: 36000, toan_dien: 42400 },
                        },
                    },
                    {
                        can_nang: '1-3kg',
                        goi: {
                            '10_buoc': { khong_long: 9600, long_dai: 9600 },
                            '12_buoc': { khong_long: 14400, long_dai: 14400 },
                            '18_buoc': { long_sat: 20800, long_dai: 20800 },
                            cao: { day_du: 26000, toan_dien: 34000 },
                            cat_tia: { day_du: 40800, toan_dien: 47200 },
                        },
                    },
                    {
                        can_nang: '3-5kg',
                        goi: {
                            '10_buoc': { khong_long: 12800, long_dai: 12800 },
                            '12_buoc': { khong_long: 16000, long_dai: 17600 },
                            '18_buoc': { khong_long: 22400, long_dai: 24000 },
                            cao: { day_du: 30000, toan_dien: 38000 },
                            cat_tia: { day_du: 45600, toan_dien: 52000 },
                        },
                    },
                    {
                        can_nang: '5-8kg',
                        goi: {
                            '10_buoc': { khong_long: 14400, long_dai: 16000 },
                            '12_buoc': { khong_long: 17600, long_dai: 19200 },
                            '18_buoc': { khong_long: 24000, long_dai: 25600 },
                            cao: { day_du: 32000, toan_dien: 40000 },
                            cat_tia: { day_du: 50400, toan_dien: 56800 },
                        },
                    },
                    {
                        can_nang: '8-12kg',
                        goi: {
                            '10_buoc': { khong_long: 16000, long_dai: 17600 },
                            '12_buoc': { khong_long: 20800, long_dai: 22400 },
                            '18_buoc': { khong_long: 27200, long_dai: 28800 },
                            cao: { day_du: 36000, toan_dien: 44000 },
                            cat_tia: { day_du: 55200, toan_dien: 61600 },
                        },
                    },
                ],
                dich_vu_le: {
                    danh_rang: 7000,
                    combo_vip: 8000,
                    tam_thao_moc: 10000,
                    tam_trang: 10000,
                    hap_dau: 10000,
                    spa_express: 10000,
                    tam_ve: 10000,
                    tay_cau: 15000,
                    cat_mong: 15000,
                },
            },
        },
        SERVICE_DISPLAY_NAMES: {
            danh_rang: 'Đánh răng/7k',
            combo_vip: 'Combo Vip/8k',
            tam_thao_moc: 'Tắm thảo mọc/10k',
            tam_trang: 'Tắm trắng/10k',
            hap_dau: 'Hấp dầu/10k',
            spa_express: 'Spa Express/10k',
            tam_ve: 'Tắm ve/10k',
            tay_cau: 'Tẩy dầu/15k',
            cat_mong: 'Cắt móng/15k',
        },
        FUR_OPTION_MAP: {
            cho: {
                '10_buoc': [
                    { value: 'long_dai', label: 'Lông dài' },
                    { value: 'long_sat', label: 'Lông sát' },
                ],
                '12_buoc': [
                    { value: 'long_dai', label: 'Lông dài' },
                    { value: 'long_sat', label: 'Lông sát' },
                ],
                '18_buoc': [
                    { value: 'long_dai', label: 'Lông dài' },
                    { value: 'long_sat', label: 'Lông sát' },
                ],
                cao: [
                    { value: 'day_du', label: 'Đầy đủ' },
                    { value: 'toan_dien', label: 'Toàn diện' },
                ],
                cat_tia: [
                    { value: 'day_du', label: 'Đầy đủ' },
                    { value: 'toan_dien', label: 'Toàn diện' },
                ],
            },
            meo: {
                '10_buoc': [
                    { value: 'long_dai', label: 'Lông dài' },
                    { value: 'khong_long', label: 'Không lông' },
                ],
                '12_buoc': [
                    { value: 'long_dai', label: 'Lông dài' },
                    { value: 'khong_long', label: 'Không lông' },
                ],
                '18_buoc': [
                    { value: 'long_dai', label: 'Lông dài' },
                    { value: 'long_sat', label: 'Lông sát' },
                ],
                cao: [
                    { value: 'day_du', label: 'Đầy đủ' },
                    { value: 'toan_dien', label: 'Toàn diện' },
                ],
                cat_tia: [
                    { value: 'day_du', label: 'Đầy đủ' },
                    { value: 'toan_dien', label: 'Toàn diện' },
                ],
            },
        },
        PET_HEADERS: {
            cho: {
                '10_buoc': [
                    { keys: ['long_sat'], label: 'Lông sát' },
                    { keys: ['long_dai'], label: 'Lông dài' }
                ],
                '12_buoc': [
                    { keys: ['long_sat'], label: 'Lông sát' },
                    { keys: ['long_dai'], label: 'Lông dài' }
                ],
                '18_buoc': [
                    { keys: ['long_sat'], label: 'Lông sát' },
                    { keys: ['long_dai'], label: 'Lông dài' }
                ],
                cao: [
                    { keys: ['day_du'], label: 'Đầy đủ' },
                    { keys: ['toan_dien'], label: 'Toàn diện' }
                ],
                cat_tia: [
                    { keys: ['day_du'], label: 'Đầy đủ' },
                    { keys: ['toan_dien'], label: 'Toàn diện' }
                ]
            },
            meo: {
                '10_buoc': [
                    { keys: ['khong_long'], label: 'Không lông' },
                    { keys: ['long_dai'], label: 'Lông dài' }
                ],
                '12_buoc': [
                    { keys: ['khong_long'], label: 'Không lông' },
                    { keys: ['long_dai'], label: 'Lông dài' }
                ],
                '18_buoc': [
                    { keys: ['khong_long', 'long_sat'], label: 'Không lông / Sát' },
                    { keys: ['long_dai'], label: 'Lông dài' }
                ],
                cao: [
                    { keys: ['day_du'], label: 'Đầy đủ' },
                    { keys: ['toan_dien'], label: 'Toàn diện' }
                ],
                cat_tia: [
                    { keys: ['day_du'], label: 'Đầy đủ' },
                    { keys: ['toan_dien'], label: 'Toàn diện' }
                ]
            }
        },
        PACKAGES: [
            { key: '10_buoc', label: '10 bước' },
            { key: '12_buoc', label: '12 bước' },
            { key: '18_buoc', label: '18 bước' },
            { key: 'cao', label: 'Cạo' },
            { key: 'cat_tia', label: 'Cắt/Tỉa' }
        ]
    };

    // ==========================================
    // 2. RUNTIME STATE MANAGEMENT
    // ==========================================
    const state = {
        activeFormType: null,  // 'package' | 'retail'
        activePriceTab: 'cho',  // 'cho' | 'meo'
        highlightConfig: {
            petType: null,
            weight: null,
            packageKey: null,
            furKey: null
        }
    };

    // ==========================================
    // 3. DOM ELEMENTS CACHING
    // ==========================================
    const DOM = {
        // App Core Tab Navigation
        mainTabs: document.querySelectorAll('[data-main-tab]'),
        tabPanels: document.querySelectorAll('.tab-panel'),

        // Forms & Submit Actions
        packageForm: document.getElementById('package-form'),
        retailForm: document.getElementById('retail-form'),

        // Package Form Fields
        packageWeightInput: document.getElementById('package-weight'),
        packageUntangleInput: document.getElementById('package-untangle-price'),
        packageTuaSelect: document.getElementById('package-tua'),
        packageFurSelect: document.getElementById('package-loai-tua'),
        packagePetCheckbox: document.getElementById('package-pet'),
        packageSwitchControl: document.getElementById('package-pet')?.closest('.switch-control'),

        // Retail Form Fields
        retailPriceInput: document.getElementById('retail-price'),
        retailUntangleInput: document.getElementById('retail-untangle-price'),
        retailPercentInput: document.getElementById('retail-percent'),

        // Custom Component Wrappers
        customSelects: document.querySelectorAll('.custom-select'),
        serviceSheets: document.querySelectorAll('[data-service-sheet]'),

        // Shared Modal Dialogs
        resultCard: document.getElementById('result-card'),
        resultContent: document.getElementById('result-content'),
        cancelResultBtn: document.getElementById('cancel-result'),
        resetResultBtn: document.getElementById('reset-result'),

        showPriceGridBtn: document.getElementById('show-price-grid'),
        priceGridCard: document.getElementById('price-grid-card'),
        priceGridContent: document.getElementById('price-grid-content'),
        closePriceGridBtn: document.getElementById('close-price-grid'),
        priceGridTabs: document.querySelectorAll('[data-price-tab]'),
    };

    // ==========================================
    // 4. UTILITY HELPER FUNCTIONS
    // ==========================================
    const UTILS = {
        // Simple element creators
        createElement(tagName, className, textContent) {
            const el = document.createElement(tagName);
            if (className) el.className = className;
            if (typeof textContent === 'string') el.textContent = textContent;
            return el;
        },

        // Pet configuration helpers
        getPetType(checkbox) {
            return checkbox?.checked ? 'Mèo' : 'Chó';
        },

        getPetTypeKey(checkbox) {
            return checkbox?.checked ? 'meo' : 'cho';
        },

        // Weight mapping functions
        getWeightRange(weight) {
            if (weight < 1) return '<1kg';
            if (weight <= 3) return '1-3kg';
            if (weight <= 5) return '3-5kg';
            if (weight <= 8) return '5-8kg';
            if (weight <= 12) return '8-12kg';
            if (weight <= 15) return '12-15kg';
            if (weight <= 20) return '15-20kg';
            if (weight <= 30) return '20-30kg';
            return null;
        },

        // Formatters & Parsers
        formatCurrency(value) {
            return Number(value).toLocaleString('vi-VN');
        },

        parseNumericValue(value) {
            const cleaned = String(value).replaceAll(/[^\d]/g, '');
            return cleaned === '' ? null : Number(cleaned);
        },

        formatPercentInput(value) {
            if (!value) return '';
            const rawNumber = this.parseNumericValue(value);
            return Number.isNaN(rawNumber) ? '' : `${rawNumber}%`;
        },

        // DOM input extraction
        getCurrencyValue(el) {
            if (!el) return 0;
            const valueDigits = String(el.value || '').replaceAll(/\D/g, '');
            const rawDigits = String(el.dataset.raw || '').replaceAll(/\D/g, '');
            let finalDigits = rawDigits || valueDigits;

            if (!finalDigits) return 0;

            if (el.id === 'retail-price') {
                if (finalDigits.length > 0 && finalDigits.length <= 3) {
                    const base = finalDigits;
                    el.dataset.base = base;
                    finalDigits = `${base}000`;
                    el.dataset.raw = finalDigits;
                }
            } else {
                el.dataset.raw = finalDigits;
            }

            return Number(finalDigits);
        },

        getSelectedValues(field) {
            if (!field) return [];
            if (field.tagName === 'SELECT') {
                return Array.from(field.selectedOptions).map((opt) => opt.value);
            }
            return Array.from(field.querySelectorAll('input[type="checkbox"]:checked')).map((input) => input.value);
        },

        getSelectedCheckboxDetails(field) {
            if (!field) return [];
            return Array.from(field.querySelectorAll('input[type="checkbox"]:checked')).map((input) => ({
                value: Number(input.value) || 0,
                label: input.parentElement?.textContent.trim() || input.value,
            }));
        },

        getSelectedServiceLabels(fieldId) {
            const field = document.getElementById(fieldId);
            return this.getSelectedValues(field).map((key) => CONSTANTS.SERVICE_DISPLAY_NAMES[key] || key);
        },

        getDefaultFurOption(options) {
            if (!Array.isArray(options) || options.length === 0) return '';
            return options.find((opt) => opt.value === 'long_dai')?.value
                || options.find((opt) => opt.value === 'day_du')?.value
                || options[0].value;
        },

        // Pricing calculators
        getPackagePrice({ petType, weight, packageKey, furKey }) {
            const range = this.getWeightRange(weight);
            if (!range) return null;

            const list = CONSTANTS.PRICE_DATA.bang_gia[petType];
            if (!list) return null;

            const group = list.find((item) => item.can_nang === range);
            if (!group?.goi) return null;

            const pkg = group.goi[packageKey];
            return pkg ? pkg[furKey] : null;
        },

        getServicePrice(key) {
            return CONSTANTS.PRICE_DATA.bang_gia.dich_vu_le[key] || 0;
        }
    };

    // ==========================================
    // 5. CORE UI RENDERING LOGIC
    // ==========================================
    const RENDERERS = {
        // Modal management
        openModal(modal) {
            if (!modal) return;
            modal.classList.remove('hidden');
            if (typeof modal.showModal === 'function') {
                try {
                    if (!modal.open) modal.showModal();
                } catch {
                    modal.setAttribute('open', '');
                }
            } else {
                modal.setAttribute('open', '');
            }
        },

        closeModal(modal) {
            if (!modal) return;
            if (typeof modal.close === 'function' && modal.open) {
                modal.close();
            }
            modal.classList.add('hidden');
        },

        // Pricing tables creation
        getSubOptionPrice(goiData, subOptKeys) {
            if (!goiData) return '-';
            const keys = Array.isArray(subOptKeys) ? subOptKeys : [subOptKeys];
            for (const key of keys) {
                if (goiData[key] !== undefined) {
                    return UTILS.formatCurrency(goiData[key]);
                }
            }
            return '-';
        },

        buildPriceTable(rows, petType) {
            const wrap = UTILS.createElement('div', 'price-grid-table-wrap');
            const table = UTILS.createElement('table', 'price-grid-table');
            const thead = document.createElement('thead');
            
            // Header Row 1
            const hr1 = document.createElement('tr');
            const thWeight = UTILS.createElement('th', null, 'Cân nặng');
            thWeight.rowSpan = 2;
            hr1.appendChild(thWeight);

            CONSTANTS.PACKAGES.forEach((pkg) => {
                const th = UTILS.createElement('th', null, pkg.label);
                th.colSpan = 2;
                hr1.appendChild(th);
            });
            thead.appendChild(hr1);

            // Header Row 2
            const hr2 = document.createElement('tr');
            CONSTANTS.PACKAGES.forEach((pkg) => {
                const opts = CONSTANTS.PET_HEADERS[petType]?.[pkg.key] || [];
                opts.forEach((opt) => {
                    hr2.appendChild(UTILS.createElement('th', null, opt.label));
                });
            });
            thead.appendChild(hr2);
            table.appendChild(thead);

            // Table Data Rows
            const tbody = document.createElement('tbody');
            rows.forEach((row) => {
                const tr = document.createElement('tr');
                tr.appendChild(UTILS.createElement('td', null, row.can_nang));

                CONSTANTS.PACKAGES.forEach((pkg) => {
                    const goiData = row.goi?.[pkg.key];
                    const opts = CONSTANTS.PET_HEADERS[petType]?.[pkg.key] || [];
                    opts.forEach((opt) => {
                        const cellPrice = this.getSubOptionPrice(goiData, opt.keys);
                        const td = UTILS.createElement('td', null, cellPrice);
                        
                        // Highlight logic
                        const shouldHighlight = this.shouldHighlightCell(
                            row.can_nang,
                            pkg.key,
                            opt.keys,
                            petType
                        );
                        
                        if (shouldHighlight) {
                            td.classList.add('is-highlighted');
                        }
                        
                        tr.appendChild(td);
                    });
                });
                tbody.appendChild(tr);
            });
            
            table.appendChild(tbody);
            wrap.appendChild(table);
            return wrap;
        },

        shouldHighlightCell(weightRange, packageKey, furKeys, petType) {
            const config = state.highlightConfig;
            
            // Check if we have highlight configuration
            if (!config.petType || !config.weight || !config.packageKey || !config.furKey) {
                return false;
            }
            
            // Check if pet type matches
            if (config.petType !== petType) {
                return false;
            }
            
            // Check if package matches
            if (config.packageKey !== packageKey) {
                return false;
            }
            
            // Check if weight range matches
            const configWeightRange = UTILS.getWeightRange(config.weight);
            if (configWeightRange !== weightRange) {
                return false;
            }
            
            // Check if fur type matches (furKeys can be an array)
            const furKeysArray = Array.isArray(furKeys) ? furKeys : [furKeys];
            if (!furKeysArray.includes(config.furKey)) {
                return false;
            }
            
            return true;
        },

        renderPriceGrid(tabKey = state.activePriceTab) {
            if (!DOM.priceGridContent) return;
            state.activePriceTab = tabKey;
            DOM.priceGridContent.textContent = '';

            const caption = UTILS.createElement('p', 'price-grid-caption', '* Vuốt ngang để xem đầy đủ bảng giá');
            const table = this.buildPriceTable(CONSTANTS.PRICE_DATA.bang_gia[tabKey] || [], tabKey);

            DOM.priceGridContent.appendChild(caption);
            DOM.priceGridContent.appendChild(table);

            DOM.priceGridTabs.forEach((tab) => {
                const isActive = tab.dataset.priceTab === state.activePriceTab;
                tab.classList.toggle('is-active', isActive);
                tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });
        },

        updateHighlightConfig(petType, weight, packageKey, furKey) {
            state.highlightConfig = {
                petType,
                weight,
                packageKey,
                furKey
            };
        },

        clearHighlightConfig() {
            state.highlightConfig = {
                petType: null,
                weight: null,
                packageKey: null,
                furKey: null
            };
        },

        // Custom selects creation
        renderCustomSelectOptions(wrapper, selectEl) {
            const popup = wrapper.querySelector('.custom-select-popup');
            const label = wrapper.querySelector('.custom-select-label');
            if (!popup || !label || !selectEl) return;

            const options = Array.from(selectEl.options);
            const selectedOption = options.find((opt) => opt.selected) || options[0];
            label.textContent = selectedOption ? selectedOption.textContent : 'Chọn';
            popup.innerHTML = '';

            options.forEach((opt) => {
                const btn = UTILS.createElement('button', 'custom-select-option', opt.textContent);
                btn.type = 'button';
                btn.dataset.value = opt.value;
                btn.setAttribute('role', 'option');
                btn.setAttribute('aria-selected', opt.selected ? 'true' : 'false');

                if (opt.selected) btn.classList.add('is-selected');

                btn.addEventListener('click', () => {
                    selectEl.value = opt.value;
                    selectEl.dispatchEvent(new Event('change', { bubbles: true }));
                    this.closeCustomSelect(wrapper);
                });

                popup.appendChild(btn);
            });
        },

        closeCustomSelect(wrapper) {
            if (!wrapper) return;
            wrapper.classList.remove('open');
            const trigger = wrapper.querySelector('.custom-select-trigger');
            const popup = wrapper.querySelector('.custom-select-popup');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
            if (popup) popup.classList.add('hidden');
        },

        closeAllCustomSelects() {
            DOM.customSelects.forEach((wrapper) => this.closeCustomSelect(wrapper));
        },

        // Result displays
        renderResult(title, details) {
            if (!DOM.resultContent) return;
            DOM.resultContent.textContent = '';

            const summary = UTILS.createElement('div', 'result-summary');
            summary.appendChild(UTILS.createElement('div', 'result-summary-label', 'Tổng kết'));
            summary.appendChild(UTILS.createElement('div', 'result-summary-value', title));

            const list = UTILS.createElement('div', 'result-details');
            details.forEach(({ label, value }) => {
                const row = UTILS.createElement('div', 'result-row');
                row.appendChild(UTILS.createElement('span', 'result-row-label', label));
                row.appendChild(UTILS.createElement('span', 'result-row-value', value));
                list.appendChild(row);
            });

            DOM.resultContent.appendChild(summary);
            DOM.resultContent.appendChild(list);
            this.openModal(DOM.resultCard);
        },

        renderErrors(errors) {
            const mapping = errors.map((err, index) => ({
                label: `Lỗi ${index + 1}`,
                value: err,
            }));
            this.renderResult('Cần kiểm tra lại dữ liệu', mapping);
        }
    };

    // ==========================================
    // 6. CORE APP ACTIONS
    // ==========================================
    const ACTIONS = {
        // Option syncing
        updatePackageFurOptions(petTypeKey, packageKey) {
            if (!DOM.packageFurSelect) return;
            const options = CONSTANTS.FUR_OPTION_MAP[petTypeKey]?.[packageKey] || [];
            const prevSelected = DOM.packageFurSelect.value;

            DOM.packageFurSelect.innerHTML = options
                .map((opt) => `<option value="${opt.value}">${opt.label}</option>`)
                .join('');

            if (options.some((opt) => opt.value === prevSelected)) {
                DOM.packageFurSelect.value = prevSelected;
            } else {
                DOM.packageFurSelect.value = UTILS.getDefaultFurOption(options);
            }

            DOM.packageFurSelect.dispatchEvent(new Event('change'));
        },

        syncPackageOptions() {
            if (DOM.packageSwitchControl && DOM.packagePetCheckbox) {
                DOM.packageSwitchControl.classList.toggle('is-dog', !DOM.packagePetCheckbox.checked);
                DOM.packageSwitchControl.classList.toggle('is-cat', DOM.packagePetCheckbox.checked);
            }
            this.updatePackageFurOptions(
                UTILS.getPetTypeKey(DOM.packagePetCheckbox),
                DOM.packageTuaSelect?.value
            );
        },

        syncCheckboxCards() {
            document.querySelectorAll('.checkbox-item input[type="checkbox"]').forEach((input) => {
                const parent = input.closest('.checkbox-item');
                if (!parent) return;

                const updateState = () => parent.classList.toggle('is-checked', input.checked);
                input.addEventListener('change', updateState);
                updateState();
            });
        },

        refreshCheckboxCardStates() {
            document.querySelectorAll('.checkbox-item input[type="checkbox"]').forEach((input) => {
                input.closest('.checkbox-item')?.classList.toggle('is-checked', input.checked);
            });
        },

        updateServiceSummary(group) {
            const summary = group.querySelector('[data-service-summary]');
            if (!summary) return;
            
            const checkedLabels = Array.from(group.querySelectorAll('.checkbox-item input[type="checkbox"]:checked'))
                .map((input) => input.parentElement?.textContent.trim())
                .filter(Boolean);

            if (checkedLabels.length === 0) {
                summary.textContent = 'Chưa chọn dịch vụ';
            } else if (checkedLabels.length === 1) {
                summary.textContent = checkedLabels[0];
            } else {
                summary.textContent = `${checkedLabels.length} dịch vụ đã chọn`;
            }
        },

        // Form Resets
        resetPackageForm() {
            if (!DOM.packageForm) return;
            DOM.packageForm.reset();
            if (DOM.packageUntangleInput) {
                DOM.packageUntangleInput.dataset.raw = '';
                DOM.packageUntangleInput.value = '';
            }
            DOM.packageTuaSelect?.dispatchEvent(new Event('change', { bubbles: true }));
            this.syncPackageOptions();
            this.refreshCheckboxCardStates();
        },

        resetRetailForm() {
            if (!DOM.retailForm) return;
            DOM.retailForm.reset();
            if (DOM.retailPriceInput) {
                DOM.retailPriceInput.dataset.raw = '';
                DOM.retailPriceInput.dataset.base = '';
                DOM.retailPriceInput.value = '';
            }
            if (DOM.retailUntangleInput) {
                DOM.retailUntangleInput.dataset.raw = '';
                DOM.retailUntangleInput.value = '';
            }
            if (DOM.retailPercentInput) {
                DOM.retailPercentInput.value = '';
            }
            this.refreshCheckboxCardStates();
        },

        resetActiveForm() {
            if (state.activeFormType === 'package') {
                this.resetPackageForm();
            } else if (state.activeFormType === 'retail') {
                this.resetRetailForm();
            }
        },

        switchMainTab(tabKey) {
            if (tabKey === 'package') {
                this.resetPackageForm();
            } else if (tabKey === 'retail') {
                this.resetRetailForm();
            }

            state.activeFormType = tabKey;

            DOM.mainTabs.forEach((tab) => {
                const isActive = tab.dataset.mainTab === tabKey;
                tab.classList.toggle('is-active', isActive);
                tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });

            DOM.tabPanels.forEach((panel) => {
                const id = panel.id;
                const targetId = `${tabKey}-panel`;
                const isActive = id === targetId;
                panel.classList.toggle('hidden', !isActive);
                panel.classList.toggle('is-active-panel', isActive);
                panel.setAttribute('data-active', isActive ? 'true' : 'false');
            });

            if (tabKey === 'package') {
                this.updatePackageFurOptions(
                    UTILS.getPetTypeKey(DOM.packagePetCheckbox),
                    DOM.packageTuaSelect?.value
                );
            }

            RENDERERS.closeModal(DOM.resultCard);
        }
    };

    // ==========================================
    // 7. INPUT RESTRICTIONS & FORMATTING
    // ==========================================
    const SETUP_INPUTS = {
        restrictNumeric(input, allowDecimal = false) {
            if (!input) return;

            input.addEventListener('input', () => {
                let val = input.value;
                const pattern = allowDecimal ? /[^0-9.,]/g : /\D/g;
                val = val.replace(pattern, '');

                if (allowDecimal) {
                    val = val.replaceAll(',', '.');
                    const parts = val.split('.');
                    if (parts.length > 2) {
                        val = `${parts[0]}.${parts.slice(1).join('')}`;
                    }
                }
                input.value = val;
            });
        },

        setupCurrencyInputs() {
            document.querySelectorAll('.currency').forEach((input) => {
                input.dataset.raw = '';
                input.dataset.base = '';

                input.addEventListener('input', (e) => {
                    const el = e.target;
                    const base = el.value.replaceAll(/\D/g, '').slice(0, 3);
                    el.dataset.base = base;
                    el.dataset.raw = base ? `${base}000` : '';
                    el.value = base;
                });

                input.addEventListener('focus', (e) => {
                    e.target.value = e.target.dataset.base || '';
                });

                input.addEventListener('blur', (e) => {
                    const el = e.target;
                    if (!el.dataset.raw && el.value) {
                        const base = el.value.replaceAll(/\D/g, '').slice(0, 3);
                        el.dataset.base = base;
                        el.dataset.raw = base ? `${base}000` : '';
                    }
                    const raw = el.dataset.raw || '';
                    el.value = raw ? `${UTILS.formatCurrency(raw)} VNĐ` : '';
                });

                input.addEventListener('change', (e) => {
                    if (!e.target.dataset.raw) {
                        e.target.value = '';
                        return;
                    }
                    e.target.value = `${UTILS.formatCurrency(e.target.dataset.raw)} VNĐ`;
                });
            });
        }
    };

    // ==========================================
    // 8. EVENT INTERACTION BINDINGS
    // ==========================================
    const bindEvents = () => {
        // Main tabs
        DOM.mainTabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                ACTIONS.switchMainTab(tab.dataset.mainTab);
            });
        });

        // Price grid triggers & tabs
        if (DOM.showPriceGridBtn) {
            DOM.showPriceGridBtn.addEventListener('click', () => {
                // Update highlight config based on current package form values
                if (state.activeFormType === 'package') {
                    const weightValue = DOM.packageWeightInput?.value.trim();
                    const weight = Number(weightValue);
                    const petTypeKey = UTILS.getPetTypeKey(DOM.packagePetCheckbox);
                    const packageKey = DOM.packageTuaSelect?.value;
                    const furKey = DOM.packageFurSelect?.value;
                    
                    if (weightValue && !Number.isNaN(weight) && weight > 0 && packageKey && furKey) {
                        RENDERERS.updateHighlightConfig(petTypeKey, weight, packageKey, furKey);
                        // Switch to the correct pet tab
                        RENDERERS.renderPriceGrid(petTypeKey);
                    } else {
                        RENDERERS.clearHighlightConfig();
                        RENDERERS.renderPriceGrid();
                    }
                } else {
                    RENDERERS.clearHighlightConfig();
                    RENDERERS.renderPriceGrid();
                }
                
                RENDERERS.openModal(DOM.priceGridCard);
            });
        }

        if (DOM.closePriceGridBtn) {
            DOM.closePriceGridBtn.addEventListener('click', () => {
                RENDERERS.closeModal(DOM.priceGridCard);
            });
        }

        DOM.priceGridTabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                RENDERERS.renderPriceGrid(tab.dataset.priceTab || 'cho');
            });
        });

        // Modals overlay & cancel closures
        if (DOM.resultCard) {
            DOM.resultCard.addEventListener('cancel', (e) => {
                e.preventDefault();
                RENDERERS.closeModal(DOM.resultCard);
            });
            DOM.resultCard.addEventListener('close', () => {
                DOM.resultCard.classList.add('hidden');
            });
        }

        if (DOM.priceGridCard) {
            DOM.priceGridCard.addEventListener('cancel', (e) => {
                e.preventDefault();
                RENDERERS.closeModal(DOM.priceGridCard);
            });
            DOM.priceGridCard.addEventListener('close', () => {
                DOM.priceGridCard.classList.add('hidden');
            });
        }

        if (DOM.cancelResultBtn) {
            DOM.cancelResultBtn.addEventListener('click', () => {
                RENDERERS.closeModal(DOM.resultCard);
            });
        }

        if (DOM.resetResultBtn) {
            DOM.resetResultBtn.addEventListener('click', () => {
                ACTIONS.resetActiveForm();
                RENDERERS.closeModal(DOM.resultCard);
            });
        }

        // Custom selector elements
        DOM.customSelects.forEach((wrapper) => {
            const selectEl = wrapper.querySelector('select');
            const trigger = wrapper.querySelector('.custom-select-trigger');
            if (!selectEl || !trigger) return;

            RENDERERS.renderCustomSelectOptions(wrapper, selectEl);

            trigger.addEventListener('click', () => {
                const isOpen = wrapper.classList.contains('open');
                RENDERERS.closeAllCustomSelects();

                if (!isOpen) {
                    wrapper.classList.add('open');
                    trigger.setAttribute('aria-expanded', 'true');
                    wrapper.querySelector('.custom-select-popup')?.classList.remove('hidden');
                }
            });

            selectEl.addEventListener('change', () => {
                RENDERERS.renderCustomSelectOptions(wrapper, selectEl);
            });
        });

        // Close dropdowns on document-wide click outside
        document.addEventListener('click', (e) => {
            DOM.customSelects.forEach((wrapper) => {
                if (!wrapper.contains(e.target)) {
                    RENDERERS.closeCustomSelect(wrapper);
                }
            });
        });

        // Service bottom sheets
        DOM.serviceSheets.forEach((group) => {
            const toggle = group.querySelector('[data-service-toggle]');
            const panel = group.querySelector('[data-service-panel]');
            const closeBtn = group.querySelector('[data-service-close]');
            if (!toggle || !panel) return;

            ACTIONS.updateServiceSummary(group);

            toggle.addEventListener('click', () => RENDERERS.openModal(panel));
            closeBtn?.addEventListener('click', () => RENDERERS.closeModal(panel));

            panel.addEventListener('cancel', (e) => {
                e.preventDefault();
                RENDERERS.closeModal(panel);
            });

            panel.addEventListener('close', () => {
                panel.classList.add('hidden');
            });

            group.querySelectorAll('.checkbox-item input[type="checkbox"]').forEach((input) => {
                input.addEventListener('change', () => {
                    ACTIONS.refreshCheckboxCardStates();
                    ACTIONS.updateServiceSummary(group);
                });
            });
        });

        // Form package options updating
        if (DOM.packagePetCheckbox) {
            DOM.packagePetCheckbox.addEventListener('change', () => ACTIONS.syncPackageOptions());
        }

        if (DOM.packageTuaSelect) {
            DOM.packageTuaSelect.addEventListener('change', () => ACTIONS.syncPackageOptions());
        }

        // Percent input focus/blur clean displays
        if (DOM.retailPercentInput) {
            DOM.retailPercentInput.addEventListener('focus', () => {
                DOM.retailPercentInput.value = DOM.retailPercentInput.value.replaceAll(/\D/g, '');
            });
            DOM.retailPercentInput.addEventListener('blur', () => {
                DOM.retailPercentInput.value = UTILS.formatPercentInput(DOM.retailPercentInput.value);
            });
        }

        // ==========================================
        // FORM SUBMISSIONS
        // ==========================================
        DOM.packageForm?.addEventListener('submit', (e) => {
            e.preventDefault();

            const petType = UTILS.getPetType(DOM.packagePetCheckbox);
            const weightRaw = DOM.packageWeightInput.value.trim();
            const untanglePrice = UTILS.getCurrencyValue(DOM.packageUntangleInput);
            const tua = DOM.packageTuaSelect.value;
            const loaiTua = DOM.packageFurSelect.value;
            const services = UTILS.getSelectedValues(document.getElementById('package-service-group'));
            const weight = Number(weightRaw);
            const errors = [];

            if (!weightRaw) {
                errors.push('Cân nặng là bắt buộc.');
            } else if (Number.isNaN(weight) || weight <= 0) {
                errors.push('Cân nặng phải là số lớn hơn 0.');
            }

            const packagePrice = UTILS.getPackagePrice({
                petType: UTILS.getPetTypeKey(DOM.packagePetCheckbox),
                weight,
                packageKey: tua,
                furKey: loaiTua,
            });

            if (packagePrice === null || Number.isNaN(packagePrice)) {
                errors.push('Không tìm thấy giá gói cho lựa chọn hiện tại.');
            }

            if (errors.length > 0) {
                RENDERERS.renderErrors(errors);
                return;
            }

            const servicePrice = services.reduce((sum, key) => sum + UTILS.getServicePrice(key), 0);
            const untangleCharge = Math.round(untanglePrice * 0.5);
            const totalPrice = packagePrice + servicePrice + untangleCharge;
            const selectedServiceLabels = UTILS.getSelectedServiceLabels('package-service-group');

            const results = [
                { label: 'Loại thú cưng', value: petType },
                { label: 'Cân nặng', value: `${weight} kg` },
                { label: 'Chọn tua', value: document.querySelector('#package-tua option:checked')?.textContent || '' },
                { label: 'Loại tua', value: document.querySelector('#package-loai-tua option:checked')?.textContent || '' },
            ];

            if (untanglePrice > 0) {
                results.push({ label: 'Giá gỡ rối', value: `${UTILS.formatCurrency(untanglePrice)} VNĐ` });
                results.push({ label: 'Phụ phí gỡ rối (50%)', value: `${UTILS.formatCurrency(untangleCharge)} VNĐ` });
            }

            results.push({ label: 'Dịch vụ lẻ', value: selectedServiceLabels.join(', ') || 'Không có' });
            results.push({ label: 'Giá gói', value: `${UTILS.formatCurrency(packagePrice)} VNĐ` });
            results.push({ label: 'Phụ phí dịch vụ lẻ', value: `${UTILS.formatCurrency(servicePrice)} VNĐ` });
            results.push({ label: 'Tổng cộng', value: `${UTILS.formatCurrency(totalPrice)} VNĐ` });

            RENDERERS.renderResult(`${UTILS.formatCurrency(totalPrice)} VNĐ`, results);
        });

        DOM.retailForm?.addEventListener('submit', (e) => {
            e.preventDefault();

            const price = UTILS.getCurrencyValue(DOM.retailPriceInput);
            const untanglePrice = UTILS.getCurrencyValue(DOM.retailUntangleInput);
            const percentRaw = DOM.retailPercentInput.value.trim();
            const serviceItems = UTILS.getSelectedCheckboxDetails(document.getElementById('retail-service-group'));
            const percent = UTILS.parseNumericValue(percentRaw);
            const errors = [];

            if (price <= 0) {
                errors.push('Giá tiền là bắt buộc.');
            } else if (Number.isNaN(price) || price < 0) {
                errors.push('Giá tiền phải là số hợp lệ.');
            }

            if (!percentRaw) {
                errors.push('Phần trăm là bắt buộc.');
            } else if (Number.isNaN(percent) || percent < 0 || percent > 100) {
                errors.push('Phần trăm phải là số từ 0 đến 100.');
            }

            if (errors.length > 0) {
                RENDERERS.renderErrors(errors);
                return;
            }

            const servicePrice = serviceItems.reduce((sum, item) => sum + item.value, 0);
            const percentAmount = Math.round(price * (percent / 100));
            const untangleCharge = Math.round(untanglePrice * 0.5);
            const selectedServiceLabels = serviceItems.map((item) => `${item.label}(${UTILS.formatCurrency(item.value)} VNĐ)`);
            const totalPrice = percentAmount + servicePrice + untangleCharge;

            const results = [
                { label: 'Giá tiền', value: `${UTILS.formatCurrency(price)} VNĐ` },
                { label: 'Phần trăm', value: `${percent}%` },
            ];

            if (untanglePrice > 0) {
                results.push({ label: 'Giá gỡ rối', value: `${UTILS.formatCurrency(untanglePrice)} VNĐ` });
                results.push({ label: 'Phụ phí gỡ rối (50%)', value: `${UTILS.formatCurrency(untangleCharge)} VNĐ` });
            }

            results.push({ label: 'Dịch vụ lẻ', value: selectedServiceLabels.join(', ') || 'Không có' });
            results.push({ label: 'Số tiền phần trăm', value: `${UTILS.formatCurrency(percentAmount)} VNĐ` });
            results.push({ label: 'Tổng dịch vụ lẻ', value: `${UTILS.formatCurrency(servicePrice)} VNĐ` });
            results.push({ label: 'Tổng cộng', value: `${UTILS.formatCurrency(totalPrice)} VNĐ` });

            RENDERERS.renderResult(`${UTILS.formatCurrency(totalPrice)} VNĐ`, results);
        });
    };

    // ==========================================
    // 9. APP INITIALIZATION
    // ==========================================
    const init = () => {
        SETUP_INPUTS.restrictNumeric(DOM.packageWeightInput, true);
        SETUP_INPUTS.restrictNumeric(DOM.retailPercentInput, false);
        SETUP_INPUTS.setupCurrencyInputs();

        ACTIONS.syncCheckboxCards();
        ACTIONS.syncPackageOptions();
        ACTIONS.switchMainTab('package');

        bindEvents();
    };

    // Run once DOM components are safe
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
