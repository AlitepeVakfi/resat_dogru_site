/**
 * Dr. Reşat Doğru Official Website
 * Loads content from content.json for easy editing
 */

let translations = {};
let currentLang = 'tr';

// =====================
// Load Content from JSON
// =====================
async function loadContent() {
    try {
        const response = await fetch('content.json');
        const data = await response.json();
        translations = data;

        // Initialize language
        const detectedLang = detectBrowserLanguage();
        setLanguage(detectedLang);

        // Load images
        if (data.images) {
            loadImages(data.images);
        }

        // Load Ministry Actions
        loadMinistryActions();

        // Load Legislative Activities
        loadLegislativeActivities();

        // Load Motions
        loadMotions();

        // Load Awards
        loadAwards();

        // Set TBMM Profile Link
        setTBMMProfileLink();
    } catch (error) {
        console.error('Error loading content.json:', error);
    }
}

function loadImages(images) {
    // Portrait
    const portrait = document.getElementById('portrait-img');
    if (portrait && images.portrait) {
        portrait.src = images.portrait;
        portrait.alt = 'Dr. Reşat Doğru';
    }

    // Gallery
    const galleryContainer = document.getElementById('gallery-grid');
    if (galleryContainer && images.gallery) {
        galleryContainer.innerHTML = '';
        images.gallery.forEach((src, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item aspect-square rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all group';
            item.innerHTML = `
                <img src="${src}" alt="Galeri ${index + 1}" 
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            `;
            item.addEventListener('click', () => openLightbox(src, `Fotoğraf ${index + 1}`));
            galleryContainer.appendChild(item);
        });
    }
}

function loadMinistryActions() {
    if (translations[currentLang]?.ministry_items) {
        const ministryContainer = document.getElementById('ministry-grid');
        if (ministryContainer) {
            ministryContainer.innerHTML = '';
            translations[currentLang].ministry_items.forEach(item => {
                ministryContainer.innerHTML += `
                    <div class="bg-navy-dark/50 backdrop-blur border border-blue-500/20 p-6 rounded-xl hover:bg-navy-dark transition-all group">
                        <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <svg class="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-2">${item.title}</h3>
                        <p class="text-blue-100/70 leading-relaxed">${item.desc}</p>
                    </div>
                `;
            });
        }
    }
}

function loadLegislativeActivities() {
    if (translations[currentLang]?.legislative_items) {
        const legList = document.getElementById('legislative-list');
        if (legList) {
            legList.innerHTML = '';
            translations[currentLang].legislative_items.forEach(item => {
                const typeLabel = item.type || 'Kanun Teklifi';
                const dateInfo = item.date ? `<span class="text-xs text-gray-400 ml-2">${item.date}</span>` : '';
                legList.innerHTML += `
                    <div class="flex gap-4 p-5 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div class="flex-shrink-0">
                            <div class="w-14 h-14 bg-navy/5 text-navy rounded-lg flex flex-col items-center justify-center text-xs font-bold border border-navy/10">
                                <span class="text-[10px] uppercase">${typeLabel}</span>
                                <span class="text-sm mt-0.5">${item.code || ''}</span>
                            </div>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-bold text-gray-800 mb-1">${item.title}${dateInfo}</h4>
                            <p class="text-sm text-gray-500 leading-relaxed">${item.desc}</p>
                        </div>
                    </div>
                `;
            });
        }
    }
}

function loadMotions() {
    if (translations[currentLang]?.motions_items) {
        const motionsList = document.getElementById('motions-list');
        if (motionsList) {
            motionsList.innerHTML = '';
            translations[currentLang].motions_items.forEach(item => {
                const typeColor = item.type === 'Sözlü Soru Önergesi' || item.type === 'Oral Question' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                    item.type === 'Genel Kurul Konuşması' || item.type === 'Assembly Speech' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                        item.type === 'Yazılı Soru Önergesi' || item.type === 'Written Question' ? 'bg-green-50 text-green-700 border-green-100' :
                            'bg-gray-50 text-gray-700 border-gray-100';
                const codeOrDate = item.code || item.date || '';
                motionsList.innerHTML += `
                    <div class="p-4 bg-white rounded-lg border border-gray-100 hover:shadow-sm transition-shadow">
                        <div class="flex items-start gap-3 mb-2">
                            <span class="text-xs font-semibold px-2 py-1 rounded ${typeColor} border">
                                ${item.type}
                            </span>
                            ${codeOrDate ? `<span class="text-xs text-gray-400">${codeOrDate}</span>` : ''}
                        </div>
                        <h4 class="font-bold text-gray-800 text-sm mb-1">${item.title}</h4>
                        <p class="text-xs text-gray-500 leading-relaxed">${item.desc}</p>
                    </div>
                `;
            });
        }
    }
}

function setTBMMProfileLink() {
    const profileLink = document.getElementById('tbmm-profile-link');
    if (profileLink && translations[currentLang]?.tbmm_profile_url) {
        profileLink.href = translations[currentLang].tbmm_profile_url;
    }
}

function loadAwards() {
    if (translations[currentLang]?.award_items) {
        const awardsGrid = document.getElementById('awards-grid');
        if (awardsGrid) {
            awardsGrid.innerHTML = '';
            translations[currentLang].award_items.forEach(item => {
                awardsGrid.innerHTML += `
                    <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:-translate-y-1 transition-transform">
                        <div class="w-12 h-12 mx-auto bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mb-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                        </div>
                        <div class="font-bold text-navy">${item.title}</div>
                        <div class="text-xs text-gray-500 uppercase tracking-wide mt-1">${item.org}</div>
                        <div class="text-sm font-semibold text-gray-400 mt-2">${item.year}</div>
                    </div>
                `;
            });
        }
    }
}

// =====================
// Language Switcher
// =====================
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    if (!translations[lang]) return;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update page title
    if (translations[lang].site_title) {
        document.title = translations[lang].site_title;
    }

    updateLanguageToggleUI(lang);
    localStorage.setItem('preferred-lang', lang);

    // Reload dynamic sections with new language
    loadMinistryActions();
    loadLegislativeActivities();
    loadMotions();
    loadAwards();
    setTBMMProfileLink();
}

function updateLanguageToggleUI(lang) {
    document.querySelectorAll('#lang-tr, .lang-tr-indicator').forEach(el => {
        el.classList.toggle('text-navy', lang === 'tr');
        el.classList.toggle('font-semibold', lang === 'tr');
        el.classList.toggle('text-gray-400', lang !== 'tr');
    });

    document.querySelectorAll('#lang-en, .lang-en-indicator').forEach(el => {
        el.classList.toggle('text-navy', lang === 'en');
        el.classList.toggle('font-semibold', lang === 'en');
        el.classList.toggle('text-gray-400', lang !== 'en');
    });
}

function toggleLanguage() {
    setLanguage(currentLang === 'tr' ? 'en' : 'tr');
}

function detectBrowserLanguage() {
    const saved = localStorage.getItem('preferred-lang');
    if (saved === 'tr' || saved === 'en') return saved;
    return navigator.language?.startsWith('tr') ? 'tr' : 'tr'; // Default to Turkish
}

// =====================
// Lightbox
// =====================
function openLightbox(src, caption) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const cap = document.getElementById('lightbox-caption');

    if (img) img.src = src;
    if (cap) cap.textContent = caption;

    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = '';
}

// =====================
// DOM Ready
// =====================
document.addEventListener('DOMContentLoaded', function () {
    // Load content from JSON
    loadContent();

    // Language toggle
    document.getElementById('lang-toggle')?.addEventListener('click', toggleLanguage);
    document.getElementById('lang-toggle-mobile')?.addEventListener('click', toggleLanguage);

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileMenu?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Header shadow on scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow-md', window.scrollY > 50);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - header.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Timeline animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });

    // Lightbox close handlers
    document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
    document.getElementById('lightbox')?.addEventListener('click', (e) => {
        if (e.target.id === 'lightbox') closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });

    // Contact form
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    form?.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            showStatus(translations[currentLang]?.form_error_empty || 'Lütfen tüm alanları doldurun.', 'error');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showStatus(translations[currentLang]?.form_error_email || 'Geçersiz e-posta adresi.', 'error');
            return;
        }

        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = '...';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            showStatus(translations[currentLang]?.form_success || 'Mesajınız gönderildi!', 'success');
            form.reset();
        }, 1500);
    });

    function showStatus(msg, type) {
        status.textContent = msg;
        status.classList.remove('hidden', 'text-green-600', 'text-red-600');
        status.classList.add(type === 'success' ? 'text-green-600' : 'text-red-600');
        setTimeout(() => status.classList.add('hidden'), 5000);
    }
});
