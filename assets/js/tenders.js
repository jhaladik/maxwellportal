        // Enhanced Mock Data for Mini Tenders
        const mockTenderData = {
            tenders: [
                {
                    id: 1,
                    title: 'Multimetry pro laboratorní měření',
                    tenderId: 'TND-2025-001',
                    status: 'active',
                    deadline: '2025-01-25',
                    created: '2025-01-08',
                    budget: '€5,000 - €8,000',
                    bids: 3,
                    progress: 65,
                    requirements: {
                        category: 'Multimetry',
                        voltage: 'Do 1000V DC/AC',
                        accuracy: '±0.01%',
                        features: ['True RMS', 'Data logging', 'USB komunikace'],
                        application: 'Laboratorní měření'
                    },
                    aiAnalysis: {
                        successProbability: 87,
                        estimatedPrice: '€3,200',
                        recommendedAction: 'Zvážit přidání GPIB komunikace pro lepší automatizaci',
                        marketInsight: 'Podobné tendery průměrně €3,200 s 94% úspěšností'
                    },
                    bids: [
                        {
                            id: 1,
                            partner: 'Micronix',
                            product: 'Keysight 34470A Digital Multimeter',
                            price: 1250,
                            delivery: '2 týdny',
                            warranty: '3 roky',
                            support: 'Český tech support',
                            score: 96,
                            recommended: true,
                            aiAnalysis: 'Nejlepší poměr cena/výkon. Splňuje všechny požadavky + bonus funkce.'
                        },
                        {
                            id: 2,
                            partner: 'TestEquip Pro',
                            product: 'Fluke 8846A Precision Multimeter',
                            price: 1450,
                            delivery: '3 týdny',
                            warranty: '2 roky',
                            support: 'Email support',
                            score: 91,
                            recommended: false,
                            aiAnalysis: 'Vyšší přesnost, ale vyšší cena. Vhodné pro referenční měření.'
                        },
                        {
                            id: 3,
                            partner: 'InstruMart',
                            product: 'Rigol DM3068 Digital Multimeter',
                            price: 890,
                            delivery: '1 týden',
                            warranty: '2 roky',
                            support: 'Telefonní podpora',
                            score: 78,
                            recommended: false,
                            aiAnalysis: 'Nejnižší cena, ale omezené funkce. Splňuje základní požadavky.'
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'Osciloskopy pro automotive debugging',
                    tenderId: 'TND-2025-002',
                    status: 'active',
                    deadline: '2025-01-30',
                    created: '2025-01-10',
                    budget: '€8,000 - €12,000',
                    bids: 2,
                    progress: 40,
                    requirements: {
                        category: 'Osciloskopy',
                        bandwidth: '100MHz',
                        channels: '4 analog + 16 digital',
                        features: ['CAN/LIN decode', 'Automotive triggery', 'Touch display'],
                        application: 'Automotive debugging'
                    },
                    aiAnalysis: {
                        successProbability: 92,
                        estimatedPrice: '€9,500',
                        recommendedAction: 'Excellent specification. High success probability.',
                        marketInsight: 'Automotive test equipment trending +25% this quarter'
                    }
                },
                {
                    id: 3,
                    title: 'Zdroje napětí pro production testing',
                    tenderId: 'TND-2025-003',
                    status: 'closed',
                    deadline: '2025-01-15',
                    created: '2025-01-02',
                    budget: '€15,000 - €25,000',
                    bids: 5,
                    progress: 100,
                    requirements: {
                        category: 'Zdroje napětí',
                        voltage: '0-100V',
                        current: '0-50A',
                        features: ['Programmable', 'SCPI commands', 'Rack mount'],
                        application: 'Production testing'
                    },
                    aiAnalysis: {
                        successProbability: 100,
                        estimatedPrice: '€18,500',
                        recommendedAction: 'Successfully completed',
                        marketInsight: 'Winner: Best overall value with fast delivery'
                    }
                }
            ],

            wizardData: {
                currentStep: 1,
                maxSteps: 4,
                selections: {},
                specifications: {},
                matchingProducts: []
            },

            products: [
                {
                    name: 'Keysight 34470A Digital Multimeter',
                    compatibility: 96,
                    price: 1250,
                    category: 'multimeters'
                },
                {
                    name: 'Fluke 8846A Precision Multimeter', 
                    compatibility: 91,
                    price: 1450,
                    category: 'multimeters'
                },
                {
                    name: 'Rigol DM3068 Digital Multimeter',
                    compatibility: 78,
                    price: 890,
                    category: 'multimeters'
                },
                {
                    name: 'Tektronix MSO2014B Mixed Signal Oscilloscope',
                    compatibility: 94,
                    price: 2450,
                    category: 'oscilloscopes'
                },
                {
                    name: 'Rigol DS1054Z Digital Oscilloscope',
                    compatibility: 87,
                    price: 850,
                    category: 'oscilloscopes'
                }
            ]
        };

        // Global state
        let currentView = 'dashboard';
        let currentTender = null;
        let wizardStep = 1;
        let wizardData = {
            selections: {},
            specifications: {},
            matchingProducts: []
        };

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            renderDashboard();
            setupGlobalSearch();
            animateCounters();
            console.log('Mini Tenders initialized with', mockTenderData.tenders.length, 'active tenders');
        });

        // Dashboard Functions
        function renderDashboard() {
            renderTenderList();
            updateDashboardStats();
        }

        function renderTenderList() {
            const tenderList = document.getElementById('tenderList');
            
            tenderList.innerHTML = mockTenderData.tenders.map(tender => `
                <div class="tender-item" onclick="showTenderDetail(${tender.id})">
                    <div class="tender-header">
                        <div>
                            <div class="tender-title">${tender.title}</div>
                            <div class="tender-id">${tender.tenderId}</div>
                        </div>
                        <div class="tender-status status-${tender.status}">
                            ${tender.status === 'active' ? 'Aktivní' : tender.status === 'closed' ? 'Uzavřen' : 'Návrh'}
                        </div>
                    </div>
                    
                    <div class="tender-meta">
                        <div class="meta-item">
                            <div class="meta-label">Nabídky</div>
                            <div class="meta-value">${tender.bids.length || tender.bids}</div>
                        </div>
                        <div class="meta-item">
                            <div class="meta-label">Deadline</div>
                            <div class="meta-value">${formatDate(tender.deadline)}</div>
                        </div>
                        <div class="meta-item">
                            <div class="meta-label">Rozpočet</div>
                            <div class="meta-value">${tender.budget}</div>
                        </div>
                        <div class="meta-item">
                            <div class="meta-label">AI Success</div>
                            <div class="meta-value">${tender.aiAnalysis.successProbability}%</div>
                        </div>
                    </div>
                    
                    <div class="tender-progress">
                        <div class="progress-bar" style="width: ${tender.progress}%"></div>
                    </div>
                    
                    <div class="tender-ai-insight">
                        🤖 ${tender.aiAnalysis.marketInsight}
                    </div>
                </div>
            `).join('');
        }

        function updateDashboardStats() {
            // Stats are already in HTML, could be dynamic here
            setTimeout(animateCounters, 500);
        }

        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number');
            
            counters.forEach(counter => {
                const target = parseFloat(counter.getAttribute('data-target'));
                let count = 0;
                const increment = target / 50;
                
                const timer = setInterval(() => {
                    count += increment;
                    if (count >= target) {
                        counter.textContent = target % 1 === 0 ? target : target.toFixed(1);
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(count);
                    }
                }, 30);
            });
        }

        // View Navigation Functions
        function showDashboard() {
            hideAllViews();
            document.getElementById('dashboardView').style.display = 'block';
            updateBreadcrumb('Maxwell Portal › <strong>Mini Tenders</strong>');
            currentView = 'dashboard';
        }

        function showCreateTender() {
            hideAllViews();
            document.getElementById('createTenderView').classList.add('show');
            updateBreadcrumb('Maxwell Portal › <a href="#" onclick="showDashboard()">Mini Tenders</a> › <strong>Vytvořit tender</strong>');
            currentView = 'create';
            resetWizard();
        }

        function showTenderDetail(tenderId) {
            const tender = mockTenderData.tenders.find(t => t.id === tenderId);
            if (!tender) return;
            
            currentTender = tender;
            hideAllViews();
            document.getElementById('tenderDetailView').classList.add('show');
            updateBreadcrumb(`Maxwell Portal › <a href="#" onclick="showDashboard()">Mini Tenders</a> › <strong>${tender.title}</strong>`);
            currentView = 'detail';
            
            renderTenderDetail(tender);
        }

        function showAIMatchingDemo() {
            hideAllViews();
            document.getElementById('aiMatchingView').classList.add('show');
            updateBreadcrumb('Maxwell Portal › <a href="#" onclick="showDashboard()">Mini Tenders</a> › <strong>AI Matching Demo</strong>');
            currentView = 'matching';
            startMatchingDemo();
        }

        function hideAllViews() {
            document.getElementById('dashboardView').style.display = 'none';
            document.getElementById('createTenderView').classList.remove('show');
            document.getElementById('tenderDetailView').classList.remove('show');
            document.getElementById('aiMatchingView').classList.remove('show');
        }

        function updateBreadcrumb(html) {
            document.getElementById('breadcrumb').innerHTML = html;
        }

        // Create Tender Wizard Functions
        function resetWizard() {
            wizardStep = 1;
            wizardData = { selections: {}, specifications: {}, matchingProducts: [] };
            
            // Reset UI
            updateWizardProgress();
            showWizardStep(1);
            updateWizardButtons();
        }

        function nextStep() {
            if (wizardStep < 4) {
                wizardStep++;
                updateWizardProgress();
                showWizardStep(wizardStep);
                updateWizardButtons();
                
                if (wizardStep === 2) {
                    updateMatchingCounter();
                } else if (wizardStep === 4) {
                    generateFinalSpecs();
                }
            } else {
                createTender();
            }
        }

        function previousStep() {
            if (wizardStep > 1) {
                wizardStep--;
                updateWizardProgress();
                showWizardStep(wizardStep);
                updateWizardButtons();
            }
        }

        function updateWizardProgress() {
            for (let i = 1; i <= 4; i++) {
                const step = document.getElementById(`step${i}`);
                const line = document.getElementById(`line${i}`);
                
                if (i < wizardStep) {
                    step.className = 'progress-step completed';
                    if (line) line.className = 'progress-line completed';
                } else if (i === wizardStep) {
                    step.className = 'progress-step active';
                } else {
                    step.className = 'progress-step';
                    if (line) line.className = 'progress-line';
                }
            }
        }

        function showWizardStep(step) {
            document.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));
            document.getElementById(`wizardStep${step}`).classList.add('active');
        }

        function updateWizardButtons() {
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const stepInfo = document.getElementById('stepInfo');
            
            prevBtn.disabled = wizardStep === 1;
            stepInfo.textContent = `Krok ${wizardStep} ze 4`;
            
            if (wizardStep === 4) {
                nextBtn.textContent = '✨ Vytvořit tender';
                nextBtn.className = 'btn btn-primary';
            } else {
                nextBtn.textContent = 'Další →';
                nextBtn.className = 'btn btn-primary';
            }
        }

        function selectOption(type, value) {
            // Remove previous selection
            document.querySelectorAll('.option-card').forEach(card => {
                card.classList.remove('selected');
            });
            
            // Add selection to clicked card
            event.currentTarget.classList.add('selected');
            
            // Store selection
            wizardData.selections[type] = value;
            
            // Generate AI suggestions based on selection
            if (type === 'category' && value === 'voltage-current') {
                updateAISuggestions([
                    'True RMS měření pro AC signály',
                    'Data logging pro trend analýzu',
                    'Komunikační rozhraní pro automatizaci'
                ]);
            }
            
            console.log('Selected:', type, value);
        }

        function updateSpecs() {
            const range = document.getElementById('measurementRange').value;
            const accuracy = document.getElementById('accuracyRequirement').value;
            
            wizardData.specifications.range = range;
            wizardData.specifications.accuracy = accuracy;
            
            updateMatchingCounter();
        }

        function updateMatchingCounter() {
            // Simulate matching based on current specs
            let matchCount = 0;
            
            if (wizardData.selections.category === 'voltage-current') {
                matchCount = mockTenderData.products.filter(p => p.category === 'multimeters').length;
            } else if (wizardData.selections.category === 'frequency') {
                matchCount = mockTenderData.products.filter(p => p.category === 'oscilloscopes').length;
            }
            
            // Reduce count based on specs
            if (wizardData.specifications.accuracy === 'precision') {
                matchCount = Math.floor(matchCount * 0.6);
            }
            
            document.getElementById('matchCount').textContent = matchCount;
        }

        function addSuggestion(type) {
            wizardData.specifications[type] = true;
            event.target.style.background = 'var(--success-green)';
            event.target.style.color = 'white';
            event.target.innerHTML = '✓ ' + event.target.textContent;
        }

        function addSpec(spec) {
            addSuggestion(spec);
            updateMatchingCounter();
        }

        function generateFinalSpecs() {
            const finalSpecs = document.getElementById('finalSpecs');
            const specs = [];
            
            // Generate specs based on wizard selections
            if (wizardData.selections.category === 'voltage-current') {
                specs.push({ label: 'Kategorie', value: 'Multimetry' });
                specs.push({ label: 'Rozsah', value: 'Do 1000V DC/AC' });
                specs.push({ label: 'Přesnost', value: '±0.01%' });
                if (wizardData.specifications['true-rms']) {
                    specs.push({ label: 'Měření', value: 'True RMS' });
                }
                if (wizardData.specifications.communication) {
                    specs.push({ label: 'Komunikace', value: 'USB, LAN' });
                }
            }
            
            if (wizardData.selections.application) {
                const appLabels = {
                    'laboratory': 'Laboratorní měření',
                    'field': 'Field/servisní použití',
                    'production': 'Produkční testování'
                };
                specs.push({ label: 'Aplikace', value: appLabels[wizardData.selections.application] });
            }
            
            finalSpecs.innerHTML = specs.map(spec => `
                <div class="requirement-item">
                    <div class="requirement-label">${spec.label}</div>
                    <div class="requirement-value">${spec.value}</div>
                </div>
            `).join('');
            
            // Set default deadline to 2 weeks from now
            const deadline = new Date();
            deadline.setDate(deadline.getDate() + 14);
            document.getElementById('tenderDeadline').value = deadline.toISOString().split('T')[0];
        }

        function createTender() {
            const title = document.getElementById('tenderTitle').value;
            const deadline = document.getElementById('tenderDeadline').value;
            
            if (!title || !deadline) {
                alert('Prosím vyplňte název tenderu a deadline.');
                return;
            }
            
            showLoading(true);
            
            setTimeout(() => {
                showLoading(false);
                alert(`✅ Tender "${title}" byl úspěšně vytvořen!\n\nAI automaticky rozeslal upozornění ${Math.floor(Math.random() * 8) + 3} relevantním partnerům.\n\nOčekávané první nabídky do 24 hodin.`);
                showDashboard();
            }, 2000);
        }

        // Tender Detail Functions
        function renderTenderDetail(tender) {
            // Update basic info
            document.getElementById('detailTitle').textContent = tender.title;
            document.getElementById('detailId').textContent = tender.tenderId;
            document.getElementById('detailStatus').textContent = tender.status === 'active' ? 'Aktivní' : 'Uzavřen';
            document.getElementById('detailDeadline').textContent = formatDate(tender.deadline);
            document.getElementById('detailBudget').textContent = tender.budget;
            
            // Update requirements
            const requirementsContainer = document.getElementById('detailRequirements');
            requirementsContainer.innerHTML = Object.entries(tender.requirements).map(([key, value]) => `
                <div class="requirement-item">
                    <div class="requirement-label">${key}</div>
                    <div class="requirement-value">${Array.isArray(value) ? value.join(', ') : value}</div>
                </div>
            `).join('');
            
            // Update bids
            document.getElementById('bidsCount').textContent = `${tender.bids.length} nabídky`;
            renderBids(tender.bids);
        }

        function renderBids(bids) {
            const bidsList = document.getElementById('bidsList');
            
            bidsList.innerHTML = bids.map(bid => `
                <div class="bid-item ${bid.recommended ? 'recommended' : ''}">
                    ${bid.recommended ? '<div class="recommended-badge">🏆 AI doporučuje</div>' : ''}
                    
                    <div class="bid-header">
                        <div>
                            <div class="bid-partner">${bid.partner}</div>
                            <div class="bid-product">${bid.product}</div>
                        </div>
                        <div class="bid-price">
                            €${bid.price.toLocaleString()}
                            <span class="bid-currency">bez DPH</span>
                        </div>
                    </div>
                    
                    <div class="bid-details">
                        <div class="bid-detail-item">
                            <div class="bid-detail-label">Dodání</div>
                            <div class="bid-detail-value">${bid.delivery}</div>
                        </div>
                        <div class="bid-detail-item">
                            <div class="bid-detail-label">Záruka</div>
                            <div class="bid-detail-value">${bid.warranty}</div>
                        </div>
                        <div class="bid-detail-item">
                            <div class="bid-detail-label">Support</div>
                            <div class="bid-detail-value">${bid.support}</div>
                        </div>
                        <div class="bid-detail-item">
                            <div class="bid-detail-label">AI Score</div>
                            <div class="bid-detail-value">${bid.score}%</div>
                        </div>
                    </div>
                    
                    <div class="bid-ai-analysis">
                        🤖 ${bid.aiAnalysis}
                    </div>
                    
                    <div class="bid-actions">
                        <button class="btn btn-primary" onclick="selectBid(${bid.id})">
                            ${bid.recommended ? '👑 Vybrat vítěze' : '✓ Vybrat nabídku'}
                        </button>
                        <button class="btn btn-secondary" onclick="negotiateBid(${bid.id})">
                            💬 Vyjednat
                        </button>
                        <button class="btn btn-secondary" onclick="viewPartnerProfile('${bid.partner}')">
                            🏢 Profil partnera
                        </button>
                    </div>
                </div>
            `).join('');
        }

        function selectBid(bidId) {
            const bid = currentTender.bids.find(b => b.id === bidId);
            if (bid) {
                alert(`🎉 Vybrali jste nabídku od ${bid.partner}!\n\nPřesměrování na ${bid.partner} e-shop pro finalizaci objednávky...\n\nTender bude automaticky označen jako uzavřený.`);
            }
        }

        function negotiateBid(bidId) {
            alert('💬 Otvírám komunikační kanál s dodavatelem...\n\nV reálné aplikaci by se otevřel chat nebo emailový thread pro vyjednávání podmínek.');
        }

        function viewPartnerProfile(partner) {
            alert(`🏢 Zobrazuji profil partnera: ${partner}\n\nV reálné aplikaci by se zobrazily:\n• Historie dodávek\n• Hodnocení kvality\n• Certifikace\n• Kontaktní údaje`);
        }

        // AI Matching Demo Functions
        function startMatchingDemo() {
            const steps = document.querySelectorAll('.process-step');
            let currentStep = 0;
            
            function activateStep(index) {
                if (index > 0) {
                    steps[index - 1].classList.remove('active');
                    steps[index - 1].classList.add('completed');
                    steps[index - 1].querySelector('.step-result').classList.add('show');
                }
                
                if (index < steps.length) {
                    steps[index].classList.add('active');
                }
            }
            
            // Simulate processing steps
            activateStep(0);
            
            const interval = setInterval(() => {
                currentStep++;
                activateStep(currentStep);
                
                if (currentStep >= steps.length) {
                    clearInterval(interval);
                    showMatchingResults();
                }
            }, 1500);
        }

        function showMatchingResults() {
            const results = [
                { product: 'Keysight 34470A Digital Multimeter', score: 96 },
                { product: 'Fluke 8846A Precision Multimeter', score: 91 },
                { product: 'Rigol DM3068 Digital Multimeter', score: 78 },
                { product: 'Agilent 34450A DMM', score: 85 },
                { product: 'Tektronix DMM4050 Digital Multimeter', score: 82 }
            ];
            
            const resultsContainer = document.getElementById('matchingResults');
            resultsContainer.innerHTML = results.map(result => `
                <div class="result-item fade-in">
                    <div class="result-product">${result.product}</div>
                    <div class="result-score">${result.score}%</div>
                </div>
            `).join('');
        }

        // Utility Functions
        function formatDate(dateString) {
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            return new Date(dateString).toLocaleDateString('cs-CZ', options);
        }

        function showLoading(show) {
            const overlay = document.getElementById('loadingOverlay');
            if (show) {
                overlay.classList.add('show');
            } else {
                overlay.classList.remove('show');
            }
        }

        function updateAISuggestions(suggestions) {
            // Update AI suggestions in the current step
            console.log('AI Suggestions updated:', suggestions);
        }

        // Global search setup
        function setupGlobalSearch() {
            document.getElementById('globalSearch').addEventListener('input', function(e) {
                const query = e.target.value.toLowerCase();
                if (query.length > 2) {
                    // Search through tenders
                    const matchingTenders = mockTenderData.tenders.filter(tender =>
                        tender.title.toLowerCase().includes(query) ||
                        tender.tenderId.toLowerCase().includes(query)
                    );
                    console.log('Search results:', matchingTenders);
                }
            });
        }

        // AI Assistant Functions (inherited from previous phases)
        function toggleAIChat() {
            const chat = document.getElementById('aiChat');
            chat.classList.toggle('open');
        }

        function sendAIMessage() {
            const input = document.getElementById('aiInput');
            const message = input.value.trim();
            if (message) {
                addAIMessage(message, 'user');
                input.value = '';
                
                setTimeout(() => {
                    const response = generateTenderAIResponse(message);
                    addAIMessage(response, 'ai');
                }, 1000);
            }
        }

        function handleAIInput(event) {
            if (event.key === 'Enter') {
                sendAIMessage();
            }
        }

        function addAIMessage(message, sender) {
            const chatBody = document.getElementById('aiChatBody');
            const messageDiv = document.createElement('div');
            messageDiv.className = 'ai-message';
            messageDiv.style.background = sender === 'user' ? 'var(--purple)' : 'var(--light-gray)';
            messageDiv.style.color = sender === 'user' ? 'white' : 'var(--dark-gray)';
            messageDiv.style.marginLeft = sender === 'user' ? '2rem' : '0';
            messageDiv.style.marginRight = sender === 'user' ? '0' : '2rem';
            messageDiv.textContent = message;
            chatBody.appendChild(messageDiv);
            chatBody.scrollTop = chatBody.scrollHeight;
        }

        function generateTenderAIResponse(message) {
            const lowerMessage = message.toLowerCase();
            
            if (lowerMessage.includes('tender') || lowerMessage.includes('poptávka')) {
                return 'Pomohu vám vytvořit optimální tender. Klikněte na "Vytvořit nový tender" a projdeme to krok za krokem s AI asistencí.';
            } else if (lowerMessage.includes('nabídka') || lowerMessage.includes('bid')) {
                return 'Mohu analyzovat přijaté nabídky podle ceny, dodací lhůty, technických parametrů a reliability dodavatele. Chcete porovnat konkrétní nabídky?';
            } else if (lowerMessage.includes('cena') || lowerMessage.includes('price')) {
                return 'Podle aktuálních tržních dat jsou průměrné ceny: Multimetry €800-1500, Osciloskopy €1000-3000, Zdroje €2000-5000. Potřebujete analýzu konkrétní kategorie?';
            } else if (lowerMessage.includes('dodavatel') || lowerMessage.includes('partner')) {
                return 'Máme 34 aktivních partnerů s průměrným hodnocením 4.8/5. Nejlepší podle kategorie: Keysight (multimetry), Rigol (osciloskopy), Fluke (field instrumenty).';
            } else if (lowerMessage.includes('úspěšnost') || lowerMessage.includes('success')) {
                return 'Aktuální úspěšnost tenderů je 89%. Klíčové faktory: jasná specifikace (+25%), komunikační interface (+15%), realistický rozpočet (+30%).';
            } else {
                return 'Jsem specialista na tendery. Mohu pomoci s vytvořením specifikace, analýzou nabídek, výběrem dodavatelů nebo market intelligence. Co vás zajímá?';
            }
        }

        function showUserMenu() {
            alert('Jan Novák\nLab Manager @ TechLab s.r.o.\n\nProfil uživatele...');
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (currentView !== 'dashboard') {
                    showDashboard();
                }
            }
            
            if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
                e.preventDefault();
                showCreateTender();
            }
        });