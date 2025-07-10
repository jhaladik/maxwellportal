        // Enhanced Mock Data for News Hub
        const mockNewsData = {
            articles: [
                {
                    id: 1,
                    title: "Keysight představuje revoluční 6G testovací platformu s AI optimalizací",
                    excerpt: "Nová E5080B platforma kombinuje pokročilé RF měření s umělou inteligencí pro automatickou optimalizaci testovacích postupů.",
                    category: "new-products",
                    date: "2025-01-15",
                    readTime: 8,
                    author: "TechRadar Industry",
                    image: "📡",
                    featured: true,
                    aiRelevance: 96,
                    crossLinks: ["RF analyzátory", "6G testing", "AI automation"],
                    relatedProducts: ["Keysight E5071C", "R&S FSW"],
                    trending: true
                },
                {
                    id: 2,
                    title: "Rohde & Schwarz vylepšuje FSW analyzátory pro 6GHz WiFi",
                    excerpt: "Nový firmware přidává podporu pro WiFi 6E/7 testování s rozšířenou bandwidth analýzou.",
                    category: "new-products", 
                    date: "2025-01-12",
                    readTime: 5,
                    author: "RF Testing Weekly",
                    image: "📊",
                    aiRelevance: 89,
                    crossLinks: ["WiFi testing", "Spectrum analysis"]
                },
                {
                    id: 3,
                    title: "ISO 17025:2025 draft - klíčové změny pro laboratorní managery",
                    excerpt: "Nová verze standardu klade větší důraz na digitální dokumentaci a automatizované procesy.",
                    category: "legislation",
                    date: "2025-01-10",
                    readTime: 12,
                    author: "ISO Watch",
                    image: "📋",
                    aiRelevance: 94,
                    crossLinks: ["Lab management", "Compliance"]
                },
                {
                    id: 4,
                    title: "Fluke 287 dostává Bluetooth upgrade - wireless data logging",
                    excerpt: "Populární multimetr získává wireless konektivitu pro real-time monitoring a cloud synchronizaci.",
                    category: "new-products",
                    date: "2025-01-08",
                    readTime: 6,
                    author: "Measurement News",
                    image: "🔢",
                    aiRelevance: 92,
                    crossLinks: ["Wireless measurement", "Data logging"],
                    relatedProducts: ["Fluke 287", "Keysight 34470A"]
                },
                {
                    id: 5,
                    title: "AI revolution v kalibračních laboratořích: Case study z BMW",
                    excerpt: "Automobilka implementovala AI-řízené kalibrační procesy s 45% úsporou času.",
                    category: "case-studies",
                    date: "2025-01-05",
                    readTime: 15,
                    author: "Automotive Testing",
                    image: "🚗",
                    aiRelevance: 87,
                    crossLinks: ["AI automation", "Calibration"]
                },
                {
                    id: 6,
                    title: "Market outlook: RF test equipment růst 12% v 2025",
                    excerpt: "5G deployment a 6G research pohánějí poptávku po high-end RF analyzátorech.",
                    category: "industry-trends",
                    date: "2025-01-03",
                    readTime: 10,
                    author: "Market Intelligence",
                    image: "📈",
                    aiRelevance: 83,
                    crossLinks: ["Market trends", "5G/6G"]
                },
                {
                    id: 7,
                    title: "Rigol přidává protokolové dekódování do DS1000Z série",
                    excerpt: "Firmware update přináší I2C, SPI a UART dekódování do entry-level osciloskopů.",
                    category: "new-products",
                    date: "2025-01-02",
                    readTime: 4,
                    author: "Oscilloscope Today",
                    image: "📊",
                    aiRelevance: 78,
                    crossLinks: ["Protocol analysis", "Embedded debug"]
                },
                {
                    id: 8,
                    title: "Cloud-based calibration services: trend či nutnost?",
                    excerpt: "Analýza rostoucího trendu cloudových kalibračních služeb a jejich impact na tradiční labs.",
                    category: "industry-trends",
                    date: "2024-12-28",
                    readTime: 11,
                    author: "Calibration World",
                    image: "☁️",
                    aiRelevance: 85,
                    crossLinks: ["Cloud services", "Calibration trends"]
                }
            ],

            categories: {
                'all': 'Všechny',
                'new-products': 'Nové produkty',
                'industry-trends': 'Trendy',
                'legislation': 'Legislativa', 
                'case-studies': 'Case Studies',
                'ai-recommended': '🤖 AI výběr'
            },

            trendingTopics: [
                { topic: "6G Testing", count: 12, growth: "+45%" },
                { topic: "AI Automation", count: 8, growth: "+23%" },
                { topic: "Wireless Multimeters", count: 6, growth: "+67%" },
                { topic: "ISO 17025 Updates", count: 5, growth: "+12%" },
                { topic: "Cloud Measurement", count: 4, growth: "+89%" }
            ]
        };

        // Global state
        let currentView = 'dashboard';
        let currentCategory = 'all';
        let currentArticle = null;

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            renderNewsGrid();
            setupGlobalSearch();
            animateCounters();
            console.log('News Hub initialized with', mockNewsData.articles.length, 'articles');
        });

        // Dashboard Functions
        function renderNewsGrid() {
            const newsGrid = document.getElementById('newsGrid');
            
            // Filter articles by category
            let articles = mockNewsData.articles;
            if (currentCategory === 'ai-recommended') {
                articles = articles.filter(a => a.aiRelevance >= 90);
            } else if (currentCategory !== 'all') {
                articles = articles.filter(a => a.category === currentCategory);
            }
            
            // Sort by relevance and date
            articles.sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return b.aiRelevance - a.aiRelevance;
            });

            newsGrid.innerHTML = articles.map(article => `
                <div class="news-article" onclick="showArticleDetail(${article.id})">
                    <div class="article-image">${article.image}</div>
                    <div class="article-content">
                        <div class="article-meta">
                            <span class="article-category">${mockNewsData.categories[article.category]}</span>
                            <span>📅 ${formatDate(article.date)}</span>
                            ${article.trending ? '<span style="color: var(--accent-orange);">🔥 Trending</span>' : ''}
                            <span class="ai-relevance">${article.aiRelevance}% AI match</span>
                        </div>
                        <h3 class="article-title">${article.title}</h3>
                        <p class="article-excerpt">${article.excerpt}</p>
                        <div class="article-actions">
                            <span class="read-time">⏱️ ${article.readTime} min čtení</span>
                            <div class="cross-links">
                                ${(article.crossLinks || []).slice(0, 2).map(link => 
                                    `<a href="#" class="cross-link" onclick="event.stopPropagation(); searchTopic('${link}')">${link}</a>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

            // Update stats
            const relevantCount = articles.filter(a => a.aiRelevance >= 85).length;
            console.log(`Rendered ${articles.length} articles, ${relevantCount} highly relevant`);
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

        // Category Filtering
        function filterCategory(category) {
            currentCategory = category;
            
            // Update active tab
            document.querySelectorAll('.filter-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Re-render grid
            renderNewsGrid();
            
            console.log('Filtered to category:', category);
        }

        // View Navigation Functions
        function showDashboard() {
            hideAllViews();
            document.getElementById('dashboardView').style.display = 'block';
            updateBreadcrumb('Maxwell Portal › <strong>News Hub</strong>');
            currentView = 'dashboard';
        }

        function showArticleDetail(articleId) {
            const article = mockNewsData.articles.find(a => a.id === articleId);
            if (!article) return;
            
            currentArticle = article;
            hideAllViews();
            document.getElementById('articleDetailView').classList.add('show');
            updateBreadcrumb(`Maxwell Portal › <a href="#" onclick="showDashboard()">News Hub</a> › <strong>${article.title}</strong>`);
            currentView = 'article';
            
            renderArticleDetail(article);
        }

        function showNewsletterView() {
            hideAllViews();
            document.getElementById('newsletterView').classList.add('show');
            updateBreadcrumb('Maxwell Portal › <a href="#" onclick="showDashboard()">News Hub</a> › <strong>Newsletter</strong>');
            currentView = 'newsletter';
        }

        function showAICurationDemo() {
            hideAllViews();
            document.getElementById('aiCurationView').classList.add('show');
            updateBreadcrumb('Maxwell Portal › <a href="#" onclick="showDashboard()">News Hub</a> › <strong>AI Kurátorka</strong>');
            currentView = 'curation';
            startCurationDemo();
        }

        function hideAllViews() {
            document.getElementById('dashboardView').style.display = 'none';
            document.getElementById('articleDetailView').classList.remove('show');
            document.getElementById('newsletterView').classList.remove('show');
            document.getElementById('aiCurationView').classList.remove('show');
        }

        function updateBreadcrumb(html) {
            document.getElementById('breadcrumb').innerHTML = html;
        }

        // Article Detail Functions
        function renderArticleDetail(article) {
            // Update article content
            document.getElementById('articleTitle').textContent = article.title;
            document.getElementById('articleSummary').textContent = article.excerpt;
            
            // Generate longer content for article detail
            const articleContent = document.getElementById('articleContent');
            if (article.id === 1) {
                // Keep the detailed content for featured article
                return;
            }
            
            // Generate content for other articles
            articleContent.innerHTML = `
                <h3>Přehled inovace</h3>
                <p>
                    Tento článek analyzuje nejnovější vývoj v oblasti měřící techniky s důrazem na praktické 
                    dopady pro laboratorní prostředí. Obsahuje technical details, market analysis a doporučení 
                    pro implementaci.
                </p>

                <h3>Technické specifikace</h3>
                <p>
                    Detailní rozbor technických parametrů a jejich význam pro různé aplikace. 
                    Srovnání s konkurenčními řešeními a analýza value proposition.
                </p>

                <h3>Impact na lab operations</h3>
                <p>
                    Analýza dopadu na běžné laboratorní procesy, ROI considerations a implementation timeline. 
                    Doporučení pro lab managery včetně budget planning a staff training requirements.
                </p>
            `;
        }

        // AI Curation Demo Functions
        function startCurationDemo() {
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
                }
            }, 1500);
        }

        // Search and Topic Functions
        function searchTopic(topic) {
            // Simulate topic search
            console.log('Searching for topic:', topic);
            
            // Filter articles by topic
            const relatedArticles = mockNewsData.articles.filter(article => 
                article.title.toLowerCase().includes(topic.toLowerCase()) ||
                article.excerpt.toLowerCase().includes(topic.toLowerCase()) ||
                (article.crossLinks && article.crossLinks.some(link => 
                    link.toLowerCase().includes(topic.toLowerCase())
                ))
            );
            
            alert(`🔍 Hledání tématu: "${topic}"\n\nNalezeno ${relatedArticles.length} souvisejících článků.\n\nV reálné aplikaci by se zobrazil filtrovaný seznam.`);
        }

        function setupGlobalSearch() {
            document.getElementById('globalSearch').addEventListener('input', function(e) {
                const query = e.target.value.toLowerCase();
                if (query.length > 2) {
                    // Search through articles
                    const matchingArticles = mockNewsData.articles.filter(article =>
                        article.title.toLowerCase().includes(query) ||
                        article.excerpt.toLowerCase().includes(query)
                    );
                    console.log('Article search results:', matchingArticles);
                }
            });
        }

        // Newsletter Functions
        function subscribeNewsletter() {
            const email = document.querySelector('.newsletter-input').value;
            if (email && email.includes('@')) {
                alert(`✅ Newsletter subscription successful!\n\nEmail: ${email}\n\nAI bude personalizovat obsah podle vaší role Lab Manager.\n\nPrvní newsletter dorazí v pátek.`);
                document.querySelector('.newsletter-input').value = '';
            } else {
                alert('Prosím zadejte platnou emailovou adresu.');
            }
        }

        function openFullNewsletter() {
            alert('📬 Otevírání kompletního newsletteru...\n\nV reálné aplikaci by se zobrazil:\n• Plný text všech článků\n• AI insights a trendy\n• Personalizované doporučení\n• Cross-links na produkty a kurzy');
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
                    const response = generateNewsAIResponse(message);
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
            messageDiv.style.background = sender === 'user' ? 'var(--accent-orange)' : 'var(--light-gray)';
            messageDiv.style.color = sender === 'user' ? 'white' : 'var(--dark-gray)';
            messageDiv.style.marginLeft = sender === 'user' ? '2rem' : '0';
            messageDiv.style.marginRight = sender === 'user' ? '0' : '2rem';
            messageDiv.textContent = message;
            chatBody.appendChild(messageDiv);
            chatBody.scrollTop = chatBody.scrollHeight;
        }

        function generateNewsAIResponse(message) {
            const lowerMessage = message.toLowerCase();
            
            if (lowerMessage.includes('6g') || lowerMessage.includes('keysight')) {
                return 'Keysight E5080B je top story tohoto týdne! Pro Lab Managery je zajímavá 50% úspora času testování a 18měsíční ROI. Chcete více detailů?';
            } else if (lowerMessage.includes('trend') || lowerMessage.includes('trending')) {
                return 'Top trendy: 6G testing (12 článků), AI automation (+23% growth), Wireless multimeters (+67%). Bluetooth v multimetrech je největší překvapení Q1.';
            } else if (lowerMessage.includes('iso') || lowerMessage.includes('17025')) {
                return 'ISO 17025:2025 draft přináší nové požadavky na digitální dokumentaci. Ovlivní 85% labs. Doporučuji přečíst náš detailed breakdown článek.';
            } else if (lowerMessage.includes('newsletter') || lowerMessage.includes('email')) {
                return 'Maxwell Newsletter má 94% open rate! AI personalizuje obsah podle vaší role a zájmů. Aktuální týdenní digest obsahuje 6 top článků pro Lab Managery.';
            } else if (lowerMessage.includes('ai') || lowerMessage.includes('automation')) {
                return 'AI automation je hot topic! BMW case study ukazuje 45% úsporu času. Trending také v tenderech - 40% nárůst poptávek po automated solutions.';
            } else if (lowerMessage.includes('product') || lowerMessage.includes('nový')) {
                return 'Nové produkty tento týden: Keysight 6G platform, R&S WiFi upgrade, Fluke Bluetooth multimetr. Všechny mají high AI relevance pro lab aplikace.';
            } else {
                return 'Mohu vám pomoci s hledáním článků, analýzou trendů, personalizovanými doporučeními nebo cross-linking na produkty. Co vás zajímá z měřícího světa?';
            }
        }

        function showUserMenu() {
            alert('Jan Novák\nLab Manager @ TechLab s.r.o.\n\nNews preferences:\n• AI relevance: 95%\n• Favorite topics: RF testing, AI automation\n• Newsletter: Weekly digest\n• Read articles: 23 this month\n\nProfil uživatele...');
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
                showNewsletterView();
            }
        });

        // Auto-refresh news (mock)
        setInterval(() => {
            if (currentView === 'dashboard') {
                console.log('Auto-checking for new articles...');
                // In real app, this would poll for new content
            }
        }, 60000); // Every minute