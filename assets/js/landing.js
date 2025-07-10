        // Mock Data
        const mockData = {
            users: {
                current: {
                    name: 'Jan Novák',
                    role: 'Lab Manager',
                    company: 'TechLab s.r.o.',
                    interests: ['Multimetry', 'Osciloskopy', 'Kalibrace'],
                    experience: 'Intermediate'
                }
            },
            
            products: [
                {
                    id: 1,
                    name: 'Keysight 34470A Digital Multimeter',
                    category: 'Multimetry',
                    price: 1250,
                    specs: {
                        voltage: '1000V DC/AC',
                        current: '10A DC/AC',
                        resistance: '100MΩ',
                        accuracy: '0.0024%',
                        communication: 'USB, LAN'
                    },
                    features: ['True RMS', '7.5 digit', 'Graphical display']
                },
                {
                    id: 2,
                    name: 'Rigol DS1054Z Oscilloscope',
                    category: 'Osciloskopy',
                    price: 850,
                    specs: {
                        bandwidth: '50MHz',
                        channels: '4',
                        sampleRate: '1GSa/s',
                        memory: '24Mpts',
                        display: '7" color LCD'
                    },
                    features: ['Deep memory', 'Protocol decode', 'Waveform generator']
                }
            ],
            
            news: [
                {
                    id: 1,
                    title: 'Nové standardy pro kalibrace multimetrů',
                    category: 'Legislativa',
                    date: '2025-01-15',
                    summary: 'ISO vydalo nové požadavky na přesnost měření...',
                    relevance: 'high'
                },
                {
                    id: 2,
                    title: 'Keysight představuje novou sérii osciloskopů',
                    category: 'Nové produkty',
                    date: '2025-01-10',
                    summary: 'Nová série s bandwidth až 1GHz...',
                    relevance: 'medium'
                }
            ],
            
            tenders: [
                {
                    id: 1,
                    title: 'Multimetry pro laboratorní měření',
                    status: 'active',
                    deadline: '2025-01-25',
                    bids: 3,
                    budget: '5000-8000'
                }
            ],
            
            courses: [
                {
                    id: 1,
                    title: 'Základy měření stejnosměrných veličin',
                    duration: '3 hodiny',
                    level: 'Začátečník',
                    completion: 65
                }
            ]
        };

        // Global Search Functionality
        document.getElementById('globalSearch').addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            if (query.length > 2) {
                simulateSearch(query);
            }
        });

        function simulateSearch(query) {
            // Simulate AI-powered search with delay
            console.log(`AI Search: "${query}"`);
            
            // Mock search results based on query
            const searchResults = [];
            
            // Search products
            mockData.products.forEach(product => {
                if (product.name.toLowerCase().includes(query) || 
                    product.category.toLowerCase().includes(query)) {
                    searchResults.push({
                        type: 'product',
                        title: product.name,
                        section: 'Tech Library'
                    });
                }
            });
            
            // Search news
            mockData.news.forEach(article => {
                if (article.title.toLowerCase().includes(query)) {
                    searchResults.push({
                        type: 'news',
                        title: article.title,
                        section: 'News Hub'
                    });
                }
            });
            
            // AI enhancement
            if (query.includes('multimetr') || query.includes('multimeter')) {
                searchResults.unshift({
                    type: 'ai-suggestion',
                    title: 'AI doporučuje: Také potřebujete True RMS?',
                    section: 'AI Assistant'
                });
            }
        }

        // Navigation Functions

        function showUserMenu() {
            const user = mockData.users.current;
            alert(`${user.name}\n${user.role} @ ${user.company}\n\nZájmy: ${user.interests.join(', ')}\nÚroveň: ${user.experience}`);
        }

        // AI Assistant Functions
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
                
                // Simulate AI response
                setTimeout(() => {
                    const response = generateAIResponse(message);
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
            messageDiv.style.background = sender === 'user' ? '#3b82f6' : '#f3f4f6';
            messageDiv.style.color = sender === 'user' ? 'white' : '#1f2937';
            messageDiv.style.marginLeft = sender === 'user' ? '2rem' : '0';
            messageDiv.style.marginRight = sender === 'user' ? '0' : '2rem';
            messageDiv.textContent = message;
            chatBody.appendChild(messageDiv);
            chatBody.scrollTop = chatBody.scrollHeight;
        }

        function generateAIResponse(message) {
            const lowerMessage = message.toLowerCase();
            
            if (lowerMessage.includes('multimetr') || lowerMessage.includes('multimeter')) {
                return 'Mám pro vás 15 multimetrů v databázi. Nejpopulárnější je Keysight 34470A s přesností 0.0024%. Potřebujete True RMS měření?';
            } else if (lowerMessage.includes('osciloskop') || lowerMessage.includes('scope')) {
                return 'V Tech Library najdete 23 osciloskopů. Pro začátečníky doporučuji Rigol DS1054Z (50MHz, 4CH). Jaká bude aplikace?';
            } else if (lowerMessage.includes('tender') || lowerMessage.includes('poptávka')) {
                return 'Pomohu vám vytvořit tender. Začneme otázkou: Co budete měřit? Napište např. "napětí", "frekvenci" nebo "teplotu".';
            } else if (lowerMessage.includes('kurz') || lowerMessage.includes('učení')) {
                return 'V Academy máme 45 kurzů. Na základě vašeho profilu (Lab Manager) doporučuji začít s "Pokročilé techniky měření DC".';
            } else {
                return 'Můžu vám pomoci s vyhledáváním produktů, vytvořením tenderu, výběrem kurzů nebo analýzou novinek. Co vás zajímá?';
            }
        }

        // Counter Animation
        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number');
            
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                let count = 0;
                const increment = target / 100;
                
                const timer = setInterval(() => {
                    count += increment;
                    if (count >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(count);
                    }
                }, 20);
            });
        }

        // Initialize on load
        document.addEventListener('DOMContentLoaded', function() {
            // Animate counters when page loads
            setTimeout(animateCounters, 500);
            
            // Log initialization
            console.log('Maxwell Portal initialized');
            console.log('Current user:', mockData.users.current);
            console.log('Available products:', mockData.products.length);
            console.log('Available news:', mockData.news.length);
        });

        // Smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Search suggestions simulation
        const searchInput = document.getElementById('globalSearch');
        const searchSuggestions = [
            'multimetr do 1000V s bluetooth',
            'osciloskop 100MHz 4 kanály',
            'kalibrace ISO 17025',
            'kurz měření AC/DC',
            'tender laboratorní přístroje'
        ];

        searchInput.addEventListener('focus', function() {
            // Could show search suggestions here
            console.log('Search suggestions:', searchSuggestions);
        });