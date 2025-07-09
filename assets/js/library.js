        // Enhanced Mock Data
        const extendedMockData = {
            products: [
                {
                    id: 1,
                    name: 'Keysight 34470A Digital Multimeter',
                    brand: 'Keysight',
                    category: 'multimeters',
                    price: 1250,
                    image: '🔢',
                    inStock: true,
                    isNew: false,
                    popularity: 95,
                    specs: {
                        'Přesnost DC': '0.0024%',
                        'Rozsah napětí': '1000V DC/AC',
                        'Rozsah proudu': '10A DC/AC',
                        'Odpor': '100MΩ',
                        'Komunikace': 'USB, LAN, GPIB',
                        'Display': '4.3" color touchscreen',
                        'Paměť': '2M readings',
                        'Rychlost': '50,000 readings/s',
                        'Rozlišení': '7.5 digits',
                        'Teplotní koef.': '±0.0001%/°C'
                    },
                    features: ['True RMS', '7.5 digit', 'Graphical display', 'Data logging', 'Statistical functions', 'Histogram mode'],
                    description: 'Profesionální bench multimetr s nejvyšší přesností pro laboratorní aplikace. Ideální pro kalibrace, výzkum a vývoj.',
                    fullDescription: 'Keysight 34470A reprezentuje novou generaci digitálních multimetrů s bezkonkurenční přesností 7.5 číslic. Kombinuje rychlost, přesnost a intuitivní ovládání prostřednictvím 4.3" barevného dotykového displeje. Pokročilé měřící funkce včetně histogramového režimu a statistických analýz činí z tohoto přístroje ideální volbu pro náročné laboratorní aplikace.',
                    documentation: [
                        { name: 'User Manual', type: 'PDF', size: '15.2 MB', url: '#', icon: '📖' },
                        { name: 'Quick Start Guide', type: 'PDF', size: '2.8 MB', url: '#', icon: '🚀' },
                        { name: 'Programming Guide', type: 'PDF', size: '8.7 MB', url: '#', icon: '💻' },
                        { name: 'Calibration Certificate', type: 'PDF', size: '0.9 MB', url: '#', icon: '🔬' },
                        { name: 'SCPI Command Reference', type: 'PDF', size: '4.2 MB', url: '#', icon: '📋' },
                        { name: 'LabVIEW Drivers', type: 'ZIP', size: '12.1 MB', url: '#', icon: '🔧' }
                    ],
                    videos: [
                        { title: 'Unboxing and First Setup', duration: '8:32', thumbnail: '📹', url: '#' },
                        { title: 'Advanced Measurement Techniques', duration: '15:47', thumbnail: '📹', url: '#' },
                        { title: 'Remote Programming Tutorial', duration: '12:15', thumbnail: '📹', url: '#' }
                    ],
                    reviews: [
                        { 
                            user: 'Martin K.', 
                            role: 'Calibration Engineer', 
                            rating: 5, 
                            text: 'Výborná přesnost a stabilita. Používám pro referenční měření v kalibračním lab.',
                            date: '2025-01-10',
                            verified: true
                        },
                        {
                            user: 'Anna S.',
                            role: 'R&D Engineer', 
                            rating: 4,
                            text: 'Skvělý display a intuitivní ovládání. Jen mi chybí větší rychlost měření.',
                            date: '2025-01-05',
                            verified: true
                        }
                    ],
                    aiInsights: {
                        relevance: 98,
                        userMatch: 'Perfektní pro Lab Manager s požadavky na přesnost',
                        alternatives: ['Fluke 8846A', 'Rigol DM3068'],
                        compatibleWith: ['Kalibrační standardy', 'Test fixtures', 'Switching systems'],
                        useCases: ['Laboratorní kalibrace', 'R&D měření', 'Produkční testování']
                    }
                },
                {
                    id: 2,
                    name: 'Rigol DS1054Z Digital Oscilloscope',
                    brand: 'Rigol',
                    category: 'oscilloscopes',
                    price: 850,
                    image: '📊',
                    inStock: true,
                    isNew: true,
                    popularity: 87,
                    specs: {
                        'Bandwidth': '50MHz',
                        'Kanály': '4',
                        'Vzorkovací frekvence': '1GSa/s',
                        'Paměť': '24Mpts',
                        'Display': '7" color LCD',
                        'Trigger modes': '20+ types',
                        'Decodování': 'I2C, SPI, UART/RS232',
                        'Generátor': '25MHz, 2 kanály',
                        'Konektivita': 'USB, LAN',
                        'Update rate': '30,000 wfms/s'
                    },
                    features: ['Deep memory', 'Protocol decode', 'Waveform generator', 'Serial decode', 'Math functions', 'FFT analysis'],
                    description: 'Nejprodávanější osciloskop pro vzdělávací a průmyslové aplikace s výborným poměrem cena/výkon.',
                    fullDescription: 'Rigol DS1054Z se stal standardem v kategorii vstupních osciloskopů díky své bohaté funkcionalitě a přístupné ceně. S hlubokou pamětí 24 Mpts a integrovaným generátorem funkcí poskytuje kompletní řešení pro většinu měřících úloh. Protokolové dekodování a pokročilé matematické funkce jej činí ideálním pro digitální debugging.',
                    documentation: [
                        { name: 'User Manual', type: 'PDF', size: '12.8 MB', url: '#', icon: '📖' },
                        { name: 'Programming Guide', type: 'PDF', size: '6.4 MB', url: '#', icon: '💻' },
                        { name: 'Protocol Decode Manual', type: 'PDF', size: '3.2 MB', url: '#', icon: '🔍' },
                        { name: 'PC Software', type: 'EXE', size: '45.7 MB', url: '#', icon: '💾' }
                    ],
                    videos: [
                        { title: 'Getting Started with DS1054Z', duration: '12:18', thumbnail: '📹', url: '#' },
                        { title: 'Protocol Decoding Tutorial', duration: '18:22', thumbnail: '📹', url: '#' }
                    ],
                    reviews: [
                        {
                            user: 'Petr V.',
                            role: 'Electronics Engineer',
                            rating: 5,
                            text: 'Za tuto cenu neporazitelný. Používám denně pro debug embedded systémů.',
                            date: '2025-01-08',
                            verified: true
                        }
                    ],
                    aiInsights: {
                        relevance: 92,
                        userMatch: 'Skvělý vstupní osciloskop s profesionálními funkcemi',
                        alternatives: ['Siglent SDS1204X-E', 'Hantek DSO2D15'],
                        compatibleWith: ['Logic analyzery', 'Probe accessories', 'Function generators'],
                        useCases: ['Embedded debugging', 'Educational lab', 'Field service']
                    }
                },
                // ... (další produkty zůstávají stejné)
                {
                    id: 3,
                    name: 'Fluke 287 True-RMS Digital Multimeter',
                    brand: 'Fluke',
                    category: 'multimeters',
                    price: 890,
                    image: '🔢',
                    inStock: true,
                    isNew: false,
                    popularity: 91,
                    specs: {
                        'Přesnost DC': '0.025%',
                        'Rozsah napětí': '1000V DC/AC',
                        'Rozsah proudu': '10A DC/AC',
                        'Odpor': '50MΩ',
                        'Komunikace': 'IR, USB'
                    },
                    features: ['True RMS', 'Data logging', 'Trend capture', 'Peak capture'],
                    description: 'Robustní multimetr pro fieldwork s pokročilými diagnostickými funkcemi',
                    aiInsights: {
                        relevance: 85,
                        userMatch: 'Ideální pro field aplikace a troubleshooting',
                        alternatives: 'Keysight 34470A pro laboratorní použití'
                    }
                },
                {
                    id: 4,
                    name: 'Tektronix MSO2014B Mixed Signal Oscilloscope',
                    brand: 'Tektronix',
                    category: 'oscilloscopes',
                    price: 2450,
                    image: '📊',
                    inStock: false,
                    isNew: false,
                    popularity: 78,
                    specs: {
                        'Bandwidth': '100MHz',
                        'Analog kanály': '4',
                        'Digital kanály': '16',
                        'Vzorkovací frekvence': '1GSa/s',
                        'Paměť': '1Mpts'
                    },
                    features: ['Mixed signal', 'Serial protocol analysis', 'Advanced triggering'],
                    description: 'Mixed signal osciloskop pro debug digitálních systémů',
                    aiInsights: {
                        relevance: 75,
                        userMatch: 'Pro pokročilé digital debugging',
                        alternatives: 'Rigol MSO5074 pro podobnou funkcionalitu'
                    }
                },
                {
                    id: 5,
                    name: 'Rigol DG1022Z Arbitrary Waveform Generator',
                    brand: 'Rigol',
                    category: 'generators',
                    price: 320,
                    image: '🌊',
                    inStock: true,
                    isNew: true,
                    popularity: 82,
                    specs: {
                        'Frekvence': '25MHz',
                        'Kanály': '2',
                        'Vzorkovací frekvence': '125MSa/s',
                        'Paměť': '8kpts',
                        'Waveforms': 'Sine, Square, Ramp, Pulse, Noise, Arbitrary'
                    },
                    features: ['Dual channel', 'Arbitrary waveform', 'Frequency sweep', 'Modulation'],
                    description: 'Versatilní generátor pro testing a stimulaci signálů',
                    aiInsights: {
                        relevance: 88,
                        userMatch: 'Perfektní doplněk k osciloskopu pro testing',
                        alternatives: 'Keysight 33220A pro vyšší výkon'
                    }
                },
                {
                    id: 6,
                    name: 'Rohde & Schwarz FSW Signal Analyzer',
                    brand: 'Rohde & Schwarz',
                    category: 'analyzers',
                    price: 25000,
                    image: '📡',
                    inStock: true,
                    isNew: false,
                    popularity: 65,
                    specs: {
                        'Frekvence': '2Hz - 67GHz',
                        'Displayed Average Noise Level': '-174 dBm/Hz',
                        'Phase Noise': '-136 dBc/Hz',
                        'Dynamic Range': '110 dB',
                        'Analysis Bandwidth': '2 GHz'
                    },
                    features: ['High-end RF analysis', 'Real-time analysis', 'Vector signal analysis'],
                    description: 'Top-tier signálový analyzátor pro R&D aplikace',
                    aiInsights: {
                        relevance: 60,
                        userMatch: 'Overkill pro běžné lab aplikace',
                        alternatives: 'Rigol RSA3015N pro základní spektrální analýzu'
                    }
                }
            ],
            
            categories: {
                'multimeters': 'Multimetry',
                'oscilloscopes': 'Osciloskopy', 
                'generators': 'Generátory',
                'analyzers': 'Analyzátory',
                'power-supplies': 'Zdroje napětí'
            },
            
            searchSuggestions: [
                {
                    query: 'multimetr',
                    suggestions: ['Také potřebujete True RMS?', 'Bluetooth komunikace?', 'Data logging?']
                },
                {
                    query: 'osciloskop',
                    suggestions: ['Kolik kanálů potřebujete?', 'Jaká bandwidth?', 'Touch display?']
                },
                {
                    query: 'automotive',
                    suggestions: ['CAN bus decoding?', 'LIN protokol?', 'Automotive triggery?']
                }
            ]
        };

        // Global state
        let currentResults = [...extendedMockData.products];
        let comparisonList = [];
        let searchTimeout;
        let currentProduct = null;

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts();
            setupSearchListeners();
            console.log('Tech Library initialized with', extendedMockData.products.length, 'products');
        });

        // Smart Search Functionality
        function setupSearchListeners() {
            const searchInput = document.getElementById('smartSearch');
            
            searchInput.addEventListener('input', function(e) {
                clearTimeout(searchTimeout);
                const query = e.target.value.toLowerCase();
                
                if (query.length > 2) {
                    searchTimeout = setTimeout(() => {
                        performAISearch(query);
                        showLiveResults(query);
                    }, 300);
                } else {
                    hideLiveResults();
                }
            });
            
            // Hide live results when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.smart-search-container')) {
                    hideLiveResults();
                }
            });
        }

        function performAISearch(query) {
            console.log(`AI Search: "${query}"`);
            showLoading(true);
            
            setTimeout(() => {
                let filteredProducts = [...extendedMockData.products];
                
                // AI-enhanced search logic
                if (query.includes('multimetr') || query.includes('multimeter')) {
                    filteredProducts = filteredProducts.filter(p => p.category === 'multimeters');
                    if (query.includes('bluetooth') || query.includes('komunikace')) {
                        // Prioritize products with communication features
                        filteredProducts.forEach(p => {
                            if (p.specs['Komunikace'] && p.specs['Komunikace'].includes('USB')) {
                                p.aiInsights.relevance += 10;
                            }
                        });
                    }
                } else if (query.includes('osciloskop') || query.includes('scope')) {
                    filteredProducts = filteredProducts.filter(p => p.category === 'oscilloscopes');
                    if (query.includes('100mhz') || query.includes('100')) {
                        filteredProducts = filteredProducts.filter(p => 
                            p.specs['Bandwidth'] && p.specs['Bandwidth'].includes('100MHz')
                        );
                    }
                } else if (query.includes('automotive')) {
                    // Cross-category search for automotive applications
                    filteredProducts = filteredProducts.filter(p => 
                        p.features.some(f => f.toLowerCase().includes('protocol')) ||
                        p.description.toLowerCase().includes('automotive')
                    );
                }
                
                // Sort by AI relevance
                filteredProducts.sort((a, b) => (b.aiInsights?.relevance || 0) - (a.aiInsights?.relevance || 0));
                
                currentResults = filteredProducts;
                renderProducts();
                showLoading(false);
                
                // Update results count
                document.getElementById('resultsCount').textContent = filteredProducts.length;
            }, 800);
        }

        function showLiveResults(query) {
            const liveResults = document.getElementById('liveResults');
            const results = currentResults.slice(0, 5); // Show top 5 results
            
            if (results.length === 0) {
                liveResults.innerHTML = '<div class="live-result-item">Žádné výsledky nenalezeny</div>';
            } else {
                liveResults.innerHTML = results.map(product => `
                    <div class="live-result-item" onclick="viewProduct(${product.id})">
                        <div class="live-result-title">${product.name}</div>
                        <div class="live-result-specs">
                            ${Object.entries(product.specs).slice(0, 2).map(([key, value]) => 
                                `${key}: ${value}`
                            ).join(' • ')}
                        </div>
                        <div class="live-result-ai">AI match: ${product.aiInsights?.relevance || 80}%</div>
                    </div>
                `).join('');
            }
            
            liveResults.classList.add('show');
        }

        function hideLiveResults() {
            document.getElementById('liveResults').classList.remove('show');
        }

        function performSearch(query) {
            document.getElementById('smartSearch').value = query;
            performAISearch(query);
            hideLiveResults();
        }

        // Filters and Sorting
        function applyFilters() {
            const category = document.getElementById('categoryFilter').value;
            const brand = document.getElementById('brandFilter').value;
            const priceMin = parseFloat(document.getElementById('priceMin').value) || 0;
            const priceMax = parseFloat(document.getElementById('priceMax').value) || Infinity;
            const inStock = document.getElementById('inStock').checked;
            const newProducts = document.getElementById('newProducts').checked;
            
            let filtered = [...extendedMockData.products];
            
            if (category) filtered = filtered.filter(p => p.category === category);
            if (brand) filtered = filtered.filter(p => p.brand.toLowerCase().replace(' & ', '-').replace(' ', '-') === brand);
            if (priceMin || priceMax < Infinity) {
                filtered = filtered.filter(p => p.price >= priceMin && p.price <= priceMax);
            }
            if (inStock) filtered = filtered.filter(p => p.inStock);
            if (newProducts) filtered = filtered.filter(p => p.isNew);
            
            currentResults = filtered;
            renderProducts();
            document.getElementById('resultsCount').textContent = filtered.length;
        }

        function applySorting() {
            const sortBy = document.getElementById('sortBy').value;
            
            switch (sortBy) {
                case 'relevance':
                    currentResults.sort((a, b) => (b.aiInsights?.relevance || 0) - (a.aiInsights?.relevance || 0));
                    break;
                case 'price-asc':
                    currentResults.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    currentResults.sort((a, b) => b.price - a.price);
                    break;
                case 'name':
                    currentResults.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'newest':
                    currentResults.sort((a, b) => b.isNew - a.isNew);
                    break;
            }
            
            renderProducts();
        }

        // Product Rendering
        function renderProducts() {
            const grid = document.getElementById('productsGrid');
            
            if (currentResults.length === 0) {
                grid.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                        <h3>Žádné produkty nenalezeny</h3>
                        <p>Zkuste upravit filtry nebo vyhledávací dotaz</p>
                    </div>
                `;
                return;
            }
            
            grid.innerHTML = currentResults.map(product => `
                <div class="product-card" onclick="viewProduct(${product.id})">
                    <div class="product-image">
                        ${product.image}
                        ${product.isNew ? '<div class="product-badge">Nový</div>' : ''}
                        ${!product.inStock ? '<div class="product-badge" style="background: var(--error-red);">Není skladem</div>' : ''}
                    </div>
                    <div class="product-info">
                        <div class="product-brand">${product.brand}</div>
                        <h3 class="product-title">${product.name}</h3>
                        
                        <div class="product-specs">
                            ${Object.entries(product.specs).slice(0, 3).map(([key, value]) => `
                                <div class="spec-item">
                                    <span class="spec-label">${key}:</span>
                                    <span class="spec-value">${value}</span>
                                </div>
                            `).join('')}
                        </div>
                        
                        <div class="product-price">
                            €${product.price.toLocaleString()} <span class="currency">bez DPH</span>
                        </div>
                        
                        <div class="product-actions">
                            <button class="btn btn-primary" onclick="event.stopPropagation(); addToTender(${product.id})">
                                🎯 Do tenderu
                            </button>
                            <button class="btn btn-icon" onclick="event.stopPropagation(); addToComparison(${product.id})" 
                                    title="Přidat k porovnání">
                                ⚖️
                            </button>
                            <button class="btn btn-icon" onclick="event.stopPropagation(); toggleWishlist(${product.id})" 
                                    title="Přidat do oblíbených">
                                ❤️
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Product Actions
        function viewProduct(productId) {
            const product = extendedMockData.products.find(p => p.id === productId);
            if (!product) return;
            
            currentProduct = product;
            showProductDetail(product);
        }

        function showProductDetail(product) {
            // Hide results section and show product detail
            document.querySelector('.results-section').style.display = 'none';
            document.getElementById('productDetailView').classList.add('show');
            
            // Update breadcrumb
            const breadcrumb = document.querySelector('.breadcrumb');
            breadcrumb.innerHTML = `
                <a href="#" onclick="goToHome()">Maxwell Portal</a> › 
                <a href="#" onclick="closeProductDetail()">Tech Library</a> › 
                <strong>${product.name}</strong>
            `;
            
            // Update basic info
            document.getElementById('detailImage').textContent = product.image;
            document.getElementById('detailBrand').textContent = product.brand;
            document.getElementById('detailName').textContent = product.name;
            document.getElementById('detailDescription').textContent = product.description;
            document.getElementById('detailPrice').innerHTML = `€${product.price.toLocaleString()} <span class="currency">bez DPH</span>`;
            
            // Add stock status to image
            const imageContainer = document.getElementById('detailImage');
            if (product.isNew) {
                imageContainer.innerHTML = `${product.image}<div class="product-badge">Nový</div>`;
            } else if (!product.inStock) {
                imageContainer.innerHTML = `${product.image}<div class="product-badge" style="background: var(--error-red);">Není skladem</div>`;
            } else {
                imageContainer.innerHTML = product.image;
            }
            
            // Update full description
            document.getElementById('detailFullDescription').textContent = product.fullDescription || product.description;
            
            // Update features
            const featuresContainer = document.getElementById('detailFeatures');
            featuresContainer.innerHTML = product.features.map(feature => 
                `<span class="feature-tag">${feature}</span>`
            ).join('');
            
            // Update key features list
            const keyFeaturesContainer = document.getElementById('detailKeyFeatures');
            keyFeaturesContainer.innerHTML = product.features.map(feature => 
                `<li>${feature}</li>`
            ).join('');
            
            // Update specifications table
            const specsTable = document.getElementById('detailSpecsTable').querySelector('tbody');
            specsTable.innerHTML = Object.entries(product.specs).map(([key, value]) => `
                <tr>
                    <td>${key}</td>
                    <td><strong>${value}</strong></td>
                </tr>
            `).join('');
            
            // Update documentation
            if (product.documentation) {
                const docContainer = document.getElementById('detailDocumentation');
                docContainer.innerHTML = product.documentation.map(doc => `
                    <div class="doc-item" onclick="downloadDocument('${doc.name}')">
                        <div class="doc-icon">${doc.icon}</div>
                        <div class="doc-info">
                            <div class="doc-name">${doc.name}</div>
                            <div class="doc-meta">${doc.type} • ${doc.size}</div>
                        </div>
                        <button class="doc-download">Stáhnout</button>
                    </div>
                `).join('');
            } else {
                document.getElementById('detailDocumentation').innerHTML = `
                    <div style="text-align: center; padding: 2rem; color: var(--medium-gray);">
                        <p>Dokumentace pro tento produkt bude brzy dostupná.</p>
                    </div>
                `;
            }
            
            // Update videos
            if (product.videos) {
                const videosContainer = document.getElementById('detailVideos');
                videosContainer.innerHTML = product.videos.map(video => `
                    <div class="video-item" onclick="playVideo('${video.title}')">
                        <div class="video-thumbnail">
                            ${video.thumbnail}
                            <div class="play-button">▶</div>
                        </div>
                        <div class="video-info">
                            <div class="video-title">${video.title}</div>
                            <div class="video-duration">${video.duration}</div>
                        </div>
                    </div>
                `).join('');
            } else {
                document.getElementById('detailVideos').innerHTML = `
                    <div style="text-align: center; padding: 2rem; color: var(--medium-gray);">
                        <p>Video návody pro tento produkt budou brzy dostupné.</p>
                    </div>
                `;
            }
            
            // Update reviews
            if (product.reviews) {
                const reviewsContainer = document.getElementById('detailReviews');
                reviewsContainer.innerHTML = product.reviews.map(review => `
                    <div class="review-item">
                        <div class="review-header">
                            <div class="review-author">
                                <div class="review-avatar">${review.user.charAt(0)}</div>
                                <div class="review-author-info">
                                    <h4>${review.user}</h4>
                                    <div class="review-role">${review.role}</div>
                                </div>
                            </div>
                            <div style="text-align: right;">
                                <div class="review-rating">
                                    ${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}
                                </div>
                                ${review.verified ? '<div class="verified-badge" style="margin-top: 0.5rem;">Ověřený nákup</div>' : ''}
                            </div>
                        </div>
                        <div class="review-text">${review.text}</div>
                        <div class="review-date">${review.date}</div>
                    </div>
                `).join('');
            } else {
                document.getElementById('detailReviews').innerHTML = `
                    <div style="text-align: center; padding: 2rem; color: var(--medium-gray);">
                        <p>Zatím žádné recenze. Buďte první, kdo ohodnotí tento produkt!</p>
                    </div>
                `;
            }
            
            // Update AI insights
            if (product.aiInsights) {
                document.getElementById('detailUserMatch').textContent = product.aiInsights.userMatch;
                
                if (product.aiInsights.alternatives) {
                    const altContainer = document.getElementById('detailAlternatives');
                    altContainer.innerHTML = product.aiInsights.alternatives.map(alt => 
                        `<div class="ai-item">${alt}</div>`
                    ).join('');
                }
                
                if (product.aiInsights.compatibleWith) {
                    const compatContainer = document.getElementById('detailCompatible');
                    compatContainer.innerHTML = product.aiInsights.compatibleWith.map(comp => 
                        `<div class="ai-item">${comp}</div>`
                    ).join('');
                }
                
                if (product.aiInsights.useCases) {
                    const useCasesContainer = document.getElementById('detailUseCases');
                    useCasesContainer.innerHTML = product.aiInsights.useCases.map(useCase => 
                        `<div class="ai-item">${useCase}</div>`
                    ).join('');
                }
            }
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        function closeProductDetail() {
            document.getElementById('productDetailView').classList.remove('show');
            document.querySelector('.results-section').style.display = 'block';
            currentProduct = null;
            
            // Reset breadcrumb
            const breadcrumb = document.querySelector('.breadcrumb');
            breadcrumb.innerHTML = `
                <a href="#" onclick="goToHome()">Maxwell Portal</a> › <strong>Tech Library</strong>
            `;
            
            // Reset to first tab
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.querySelector('.tab-button').classList.add('active');
            document.getElementById('tab-overview').classList.add('active');
        }

        function switchTab(tabName) {
            // Remove active class from all tabs and content
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to selected tab and content
            event.target.classList.add('active');
            document.getElementById(`tab-${tabName}`).classList.add('active');
        }

        function addToTenderFromDetail() {
            if (currentProduct) {
                addToTender(currentProduct.id);
            }
        }

        function addToComparisonFromDetail() {
            if (currentProduct) {
                addToComparison(currentProduct.id);
            }
        }

        function downloadDocument(docName) {
            alert(`Stahování dokumentu: ${docName}\n\nV reálné aplikaci by se spustilo stahování souboru.`);
        }

        function playVideo(videoTitle) {
            alert(`Přehrávání videa: ${videoTitle}\n\nV reálné aplikaci by se otevřel video player.`);
        }

        function addToTender(productId) {
            const product = extendedMockData.products.find(p => p.id === productId);
            alert(`Přidávám "${product.name}" do nového tenderu.\n\nPřesměrování na Mini Tenders sekci...`);
        }

        function addToComparison(productId) {
            const product = extendedMockData.products.find(p => p.id === productId);
            
            if (comparisonList.length >= 4) {
                alert('Můžete porovnat maximálně 4 produkty najednou.');
                return;
            }
            
            if (comparisonList.find(p => p.id === productId)) {
                alert('Tento produkt už je v porovnání.');
                return;
            }
            
            comparisonList.push(product);
            updateComparisonBar();
        }

        function updateComparisonBar() {
            const bar = document.getElementById('comparisonBar');
            const items = document.getElementById('comparisonItems');
            
            if (comparisonList.length === 0) {
                bar.classList.remove('show');
                return;
            }
            
            items.innerHTML = comparisonList.map(product => `
                <div class="comparison-item">
                    ${product.image} ${product.name}
                    <button class="comparison-remove" onclick="removeFromComparison(${product.id})" title="Odstranit">
                        ✕
                    </button>
                </div>
            `).join('');
            
            bar.classList.add('show');
        }

        function removeFromComparison(productId) {
            comparisonList = comparisonList.filter(p => p.id !== productId);
            updateComparisonBar();
        }

        function clearComparison() {
            comparisonList = [];
            updateComparisonBar();
        }

        function openComparison() {
            if (comparisonList.length < 2) {
                alert('Vyberte alespoň 2 produkty pro porovnání.');
                return;
            }
            
            alert(`Otevírám porovnání ${comparisonList.length} produktů:\n${comparisonList.map(p => p.name).join('\n')}\n\nComparison tool bude implementován v další fázi.`);
        }

        // View Toggle
        function toggleView(viewType) {
            const buttons = document.querySelectorAll('.view-toggle button');
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            // Grid vs List view implementation would go here
            console.log(`Switching to ${viewType} view`);
        }

        // Utility Functions
        function showLoading(show) {
            const overlay = document.getElementById('loadingOverlay');
            if (show) {
                overlay.classList.add('show');
            } else {
                overlay.classList.remove('show');
            }
        }

        function toggleWishlist(productId) {
            console.log(`Toggling wishlist for product ${productId}`);
            // Wishlist functionality would be implemented here
        }

        function navigateToSection(section) {
            alert(`Navigace do sekce: ${section}\n\nBude implementováno v následujících fázích.`);
        }

        function showUserMenu() {
            alert('Jan Novák\nLab Manager @ TechLab s.r.o.\n\nProfil uživatele...');
        }

        // Global search in header
        document.getElementById('globalSearch').addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            if (query.length > 2) {
                // Sync with smart search
                document.getElementById('smartSearch').value = query;
                performAISearch(query);
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // ESC to close product detail
            if (e.key === 'Escape' && currentProduct) {
                closeProductDetail();
            }
            
            // Ctrl/Cmd + K to focus search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                document.getElementById('smartSearch').focus();
            }
        });