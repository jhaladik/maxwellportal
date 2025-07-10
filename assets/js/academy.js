        // Enhanced Mock Data for Academy
        const mockAcademyData = {
            user: {
                name: "Jan Novák",
                role: "Lab Manager",
                experience: "Intermediate", 
                completedCourses: 3,
                certificates: 1,
                totalHours: 45,
                currentPath: "Lab Certification",
                learningStreak: 7,
                currentPathProgress: 65
            },

            courses: [
                {
                    id: 1,
                    title: "Základy měření stejnosměrných veličin",
                    duration: "3 hodiny",
                    level: "Začátečník",
                    progress: 100,
                    modules: 8,
                    completed: true,
                    score: 98,
                    practicalExercises: ["Multimeter basics", "Ohm's law verification"],
                    relatedProducts: ["Keysight 34470A", "Fluke 287"],
                    certificate: "DC Measurement Fundamentals"
                },
                {
                    id: 2,
                    title: "Pokročilé techniky měření AC",
                    duration: "5 hodin", 
                    level: "Pokročilý",
                    progress: 100,
                    modules: 12,
                    completed: true,
                    score: 94,
                    prerequisites: ["DC Fundamentals"]
                },
                {
                    id: 3,
                    title: "Kalibrační standardy a nejistoty",
                    duration: "6 hodin",
                    level: "Pokročilý",
                    progress: 65,
                    modules: 8,
                    completed: false,
                    currentModule: 6,
                    aiRecommendation: "Zaměřte se na moduly 4-6 - klíčové pro management procesů"
                },
                {
                    id: 4,
                    title: "Management laboratorních procesů",
                    duration: "4 hodiny",
                    level: "Expert",
                    progress: 0,
                    modules: 10,
                    completed: false,
                    locked: true,
                    prerequisites: ["Kalibrační standardy"]
                },
                {
                    id: 5,
                    title: "SCPI programování pro automatizaci",
                    duration: "4 hodiny",
                    level: "Pokročilý",
                    progress: 0,
                    modules: 8,
                    aiMatch: 96,
                    description: "Naučte se automatizovat měření pomocí SCPI protokolu"
                },
                {
                    id: 6,
                    title: "LabVIEW základy pro měření",
                    duration: "6 hodin",
                    level: "Začátečník", 
                    progress: 0,
                    modules: 12,
                    aiMatch: 89,
                    description: "Úvod do LabVIEW pro vytváření měřících aplikací"
                },
                {
                    id: 7,
                    title: "Statistická analýza měřených dat",
                    duration: "5 hodin",
                    level: "Expert",
                    progress: 0,
                    modules: 10,
                    aiMatch: 92,
                    description: "Pokročilé techniky analýzy a interpretace dat"
                }
            ],

            certifications: [
                {
                    id: 1,
                    name: "Lab Manager Certification",
                    description: "Comprehensive certification for laboratory management",
                    requirements: ["DC Fundamentals", "AC Theory", "Calibration", "Lab Management"],
                    duration: "8-12 weeks",
                    industryValue: "Recognized by ISO 17025 labs",
                    badge: "🏆",
                    progress: 65,
                    currentCourse: 3
                }
            ],

            skillAreas: [
                { name: "DC Theory", current: 90, target: 95, level: "Expert" },
                { name: "AC Measurements", current: 80, target: 90, level: "Advanced" },
                { name: "Calibration", current: 65, target: 85, level: "Intermediate" },
                { name: "Automation", current: 20, target: 70, level: "Beginner" }
            ],

            achievements: [
                { 
                    id: "first_course", 
                    name: "První kroky", 
                    description: "Dokončili jste první kurz",
                    badge: "🎯",
                    earned: true,
                    earnedDate: "2025-01-05"
                },
                { 
                    id: "dc_expert", 
                    name: "DC Expert", 
                    description: "100% v DC Fundamentals kurzu",
                    badge: "🏅",
                    earned: true,
                    earnedDate: "2025-01-10"
                },
                {
                    id: "learning_streak",
                    name: "Student měsíce",
                    description: "7 dní v řadě",
                    badge: "📚",
                    earned: true,
                    earnedDate: "2025-01-15"
                },
                {
                    id: "lab_leader",
                    name: "Lab Leader",
                    description: "Získejte Lab Manager Certification", 
                    badge: "👑",
                    earned: false,
                    progress: 65
                },
                {
                    id: "automation_master",
                    name: "Automation Master",
                    description: "Dokončete SCPI programování",
                    badge: "🚀",
                    earned: false,
                    progress: 0
                }
            ],

            assessmentQuestions: [
                {
                    id: 1,
                    question: "Jaká je vaše hlavní role v laboratoři?",
                    description: "Tato informace pomůže AI přizpůsobit následující otázky a doporučení",
                    type: "single-select",
                    options: [
                        { value: "lab-manager", text: "👨‍💼 Lab Manager - Řídím tým a procesy" },
                        { value: "technician", text: "🔧 Technician - Provádím měření a údržbu" },
                        { value: "engineer", text: "⚙️ Engineer - Návrhář měřících systémů" },
                        { value: "researcher", text: "🔬 Researcher - Výzkum a vývoj" }
                    ],
                    aiTip: "Každá role má specifické požadavky na dovednosti. Lab Manager se zaměřuje více na management a procesy, zatímco Technician potřebuje hands-on znalosti přístrojů."
                },
                {
                    id: 2,
                    question: "Jak často pracujete s multimetry?",
                    description: "Určuje úroveň vašich praktických zkušeností",
                    type: "frequency",
                    options: [
                        { value: "daily", text: "📅 Denně - jsem expert na multimetry" },
                        { value: "weekly", text: "📋 Týdně - pravidelně je používám" },
                        { value: "monthly", text: "📆 Měsíčně - občas potřebuji" },
                        { value: "rarely", text: "🤷 Zřídka - spíše teoretické znalosti" }
                    ],
                    aiTip: "Frequency of use directly correlates with practical knowledge level."
                },
                {
                    id: 3,
                    question: "Praktická otázka: Jaká je přesnost měření 10V DC s multimetrem 0.1% přesnosti?",
                    description: "Test praktických znalostí uncertainty calculations",
                    type: "calculation",
                    options: [
                        { value: "0.001v", text: "📐 ±0.001V" },
                        { value: "0.01v", text: "📐 ±0.01V" },
                        { value: "0.1v", text: "📐 ±0.1V" },
                        { value: "1v", text: "📐 ±1V" }
                    ],
                    correctAnswer: "0.01v",
                    aiTip: "0.1% z 10V = 0.01V uncertainty. This tests basic uncertainty calculation skills."
                },
                {
                    id: 4,
                    question: "Jaké jsou vaše career goals v oblasti measurementu?",
                    description: "Pomůže určit long-term learning path",
                    type: "multiple-select",
                    options: [
                        { value: "management", text: "👑 Lab Management a team leadership" },
                        { value: "automation", text: "🤖 Automatizace a programming" },
                        { value: "calibration", text: "🎯 Calibration a metrology" },
                        { value: "research", text: "🔬 Research a development" }
                    ],
                    aiTip: "Your goals will shape the recommended learning path and certification priorities."
                }
            ]
        };

        // Global state
        let currentView = 'dashboard';
        let currentCourse = null;
        let assessmentStep = 1;
        let assessmentAnswers = {};

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            renderDashboard();
            setupGlobalSearch();
            animateCounters();
            console.log('Academy initialized for', mockAcademyData.user.name, 'with', mockAcademyData.user.completedCourses, 'completed courses');
        });

        // Dashboard Functions
        function renderDashboard() {
            animateCounters();
            updateSkillVisualization();
            renderAchievements();
        }

        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number, .streak-number');
            
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

        function updateSkillVisualization() {
            // Skills are already rendered in HTML with CSS positioning
            // In a real app, this would update based on assessment results
            console.log('Skills visualization updated');
        }

        function renderAchievements() {
            // Achievement list is already in HTML
            // In a real app, this would be dynamic based on user progress
        }

        // View Navigation Functions
        function showDashboard() {
            hideAllViews();
            document.getElementById('dashboardView').style.display = 'block';
            updateBreadcrumb('Maxwell Portal › <strong>Academy</strong>');
            currentView = 'dashboard';
        }

        function showSkillAssessment() {
            hideAllViews();
            document.getElementById('assessmentView').classList.add('show');
            updateBreadcrumb('Maxwell Portal › <a href="#" onclick="showDashboard()">Academy</a> › <strong>Skill Assessment</strong>');
            currentView = 'assessment';
            resetAssessment();
        }

        function showCourseDetail(courseId) {
            const course = mockAcademyData.courses.find(c => c.id === courseId);
            if (!course) return;
            
            currentCourse = course;
            hideAllViews();
            document.getElementById('courseDetailView').classList.add('show');
            updateBreadcrumb(`Maxwell Portal › <a href="#" onclick="showDashboard()">Academy</a> › <strong>${course.title}</strong>`);
            currentView = 'course';
            
            renderCourseDetail(course);
        }

        function showLearningPath(pathId) {
            hideAllViews();
            document.getElementById('learningPathView').classList.add('show');
            updateBreadcrumb('Maxwell Portal › <a href="#" onclick="showDashboard()">Academy</a> › <strong>Lab Manager Certification</strong>');
            currentView = 'path';
        }

        function hideAllViews() {
            document.getElementById('dashboardView').style.display = 'none';
            document.getElementById('assessmentView').classList.remove('show');
            document.getElementById('courseDetailView').classList.remove('show');
            document.getElementById('learningPathView').classList.remove('show');
            document.getElementById('certificationView').classList.remove('show');
        }

        function updateBreadcrumb(html) {
            document.getElementById('breadcrumb').innerHTML = html;
        }

        // Skill Assessment Functions
        function resetAssessment() {
            assessmentStep = 1;
            assessmentAnswers = {};
            updateAssessmentProgress();
            showAssessmentStep(1);
            updateAssessmentButtons();
        }

        function nextAssessmentStep() {
            if (assessmentStep < 4) {
                assessmentStep++;
                updateAssessmentProgress();
                showAssessmentStep(assessmentStep);
                updateAssessmentButtons();
            } else {
                completeAssessment();
            }
        }

        function previousAssessmentStep() {
            if (assessmentStep > 1) {
                assessmentStep--;
                updateAssessmentProgress();
                showAssessmentStep(assessmentStep);
                updateAssessmentButtons();
            }
        }

        function updateAssessmentProgress() {
            for (let i = 1; i <= 4; i++) {
                const step = document.getElementById(`assessStep${i}`);
                const line = document.getElementById(`assessLine${i}`);
                
                if (i < assessmentStep) {
                    step.className = 'progress-step completed';
                    if (line) line.className = 'progress-line completed';
                } else if (i === assessmentStep) {
                    step.className = 'progress-step active';
                } else {
                    step.className = 'progress-step';
                    if (line) line.className = 'progress-line';
                }
            }
        }

        function showAssessmentStep(step) {
            const questionData = mockAcademyData.assessmentQuestions[step - 1];
            if (!questionData) return;
            
            document.getElementById('questionNumber').textContent = `Otázka ${step} ze 4`;
            document.getElementById('questionText').textContent = questionData.question;
            document.getElementById('questionDescription').textContent = questionData.description;
            
            // Update answer options
            const optionsContainer = document.getElementById('answerOptions');
            optionsContainer.innerHTML = questionData.options.map(option => `
                <div class="answer-option" onclick="selectAnswer('${option.value}')">
                    <div class="option-text">${option.text}</div>
                </div>
            `).join('');
            
            // Update AI tip
            document.querySelector('.insight-text').textContent = questionData.aiTip;
        }

        function selectAnswer(value) {
            // Remove previous selection
            document.querySelectorAll('.answer-option').forEach(option => {
                option.classList.remove('selected');
            });
            
            // Add selection to clicked option
            event.currentTarget.classList.add('selected');
            
            // Store answer
            assessmentAnswers[assessmentStep] = value;
            
            // Enable next button
            document.getElementById('assessNextBtn').disabled = false;
            
            console.log('Selected answer:', value, 'for step:', assessmentStep);
        }

        function updateAssessmentButtons() {
            const prevBtn = document.getElementById('assessPrevBtn');
            const nextBtn = document.getElementById('assessNextBtn');
            const stepInfo = document.getElementById('assessStepInfo');
            
            prevBtn.disabled = assessmentStep === 1;
            nextBtn.disabled = !assessmentAnswers[assessmentStep];
            stepInfo.textContent = `Krok ${assessmentStep} ze 4`;
            
            if (assessmentStep === 4) {
                nextBtn.textContent = '✅ Dokončit assessment';
            } else {
                nextBtn.textContent = 'Další →';
            }
        }

        function completeAssessment() {
            showLoading(true);
            
            setTimeout(() => {
                showLoading(false);
                
                // Generate AI-based results
                const results = generateAssessmentResults();
                
                alert(`🎉 Assessment dokončen!\n\nVaše výsledky:\n${results.summary}\n\nAI doporučuje zaměřit se na: ${results.recommendations.join(', ')}\n\nPersonalizované kurzy byly aktualizovány v dashboardu.`);
                
                showDashboard();
            }, 2000);
        }

        function generateAssessmentResults() {
            // Mock AI analysis based on answers
            const role = assessmentAnswers[1] || 'lab-manager';
            const frequency = assessmentAnswers[2] || 'weekly';
            const calculation = assessmentAnswers[3] || '';
            const goals = assessmentAnswers[4] || 'management';
            
            let summary = `Role: ${role}, Experience: ${frequency}`;
            let recommendations = [];
            
            if (role === 'lab-manager') {
                recommendations.push('Management procesů', 'Team leadership');
            }
            
            if (frequency === 'daily') {
                recommendations.push('Pokročilé techniky měření');
            } else if (frequency === 'rarely') {
                recommendations.push('Praktické základy');
            }
            
            if (calculation !== '0.01v') {
                recommendations.push('Uncertainty calculations');
            }
            
            return { summary, recommendations };
        }

        // Course Detail Functions
        function renderCourseDetail(course) {
            document.getElementById('courseLevel').textContent = course.level;
            document.getElementById('courseLevel').className = `course-level ${course.level.toLowerCase()}`;
            document.getElementById('courseDuration').textContent = course.duration;
            document.getElementById('courseModules').textContent = `${course.modules} modulů`;
            document.getElementById('courseProgress').textContent = course.completed ? 'Dokončeno' : `${course.progress}% dokončeno`;
            document.getElementById('courseTitle').textContent = course.title;
            
            if (course.description) {
                document.getElementById('courseDescription').textContent = course.description;
            }
            
            if (course.aiRecommendation) {
                document.getElementById('courseAIRecommendation').textContent = course.aiRecommendation;
            }
            
            // Update module list based on course
            if (course.id === 3) {
                // Current course with detailed modules already in HTML
                return;
            }
            
            // For other courses, generate module list
            const moduleList = document.getElementById('moduleList');
            const modules = generateModulesForCourse(course);
            
            moduleList.innerHTML = modules.map((module, index) => `
                <div class="module-item" onclick="openModule(${index + 1})">
                    <div class="module-number ${module.status}">${module.status === 'completed' ? '✓' : index + 1}</div>
                    <div class="module-content">
                        <h4 class="module-title">${module.title}</h4>
                        <div class="module-duration">${module.duration}</div>
                        <div class="module-status ${module.status}">${module.statusText}</div>
                    </div>
                </div>
            `).join('');
        }

        function generateModulesForCourse(course) {
            // Mock module generation based on course
            const baseModules = [
                { title: "Úvod a základy", duration: "30 min" },
                { title: "Teoretické principy", duration: "45 min" },
                { title: "Praktické aplikace", duration: "60 min" },
                { title: "Pokročilé techniky", duration: "45 min" },
                { title: "Troubleshooting", duration: "30 min" },
                { title: "Best practices", duration: "40 min" },
                { title: "Praktické cvičení", duration: "60 min" },
                { title: "Závěrečný test", duration: "30 min" }
            ];
            
            return baseModules.slice(0, course.modules).map((module, index) => ({
                ...module,
                status: course.completed ? 'completed' : (index < Math.floor(course.modules * course.progress / 100) ? 'completed' : ''),
                statusText: course.completed ? 'Dokončeno' : (index < Math.floor(course.modules * course.progress / 100) ? 'Dokončeno' : 'Nedostupné')
            }));
        }

        function continueCourse() {
            if (currentCourse) {
                alert(`📚 Pokračování v kurzu: ${currentCourse.title}\n\nOtevírání learning interface...\n\nV reálné aplikaci by se otevřel interaktivní obsah modulu.`);
            }
        }

        function resetCourse() {
            if (currentCourse) {
                const confirmReset = confirm(`Opravdu chcete restartovat kurz "${currentCourse.title}"?\n\nVeškerý pokrok bude ztracen.`);
                if (confirmReset) {
                    alert('Kurz byl restartován. Pokrok nastaven na 0%.');
                }
            }
        }

        function openModule(moduleId) {
            alert(`📖 Otevírání modulu ${moduleId}\n\nV reálné aplikaci by se načetl interaktivní obsah:\n• Video lekce\n• Praktická cvičení\n• Kvízy s AI vyhodnocením\n• Simulace přístrojů`);
        }

        function continueLearningPath() {
            alert('🚀 Pokračování v certifikační cestě...\n\nPřesměrování na aktuální kurz: "Kalibrační standardy a nejistoty"');
            showCourseDetail(3);
        }

        function downloadCertificatePreview() {
            alert('📜 Stahování náhledu certifikátu...\n\nCertifikát bude dostupný po dokončení všech požadovaných kurzů.\n\nVáš pokrok: 65% (3/4 kurzy dokončeny)');
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

        // Global search setup
        function setupGlobalSearch() {
            document.getElementById('globalSearch').addEventListener('input', function(e) {
                const query = e.target.value.toLowerCase();
                if (query.length > 2) {
                    // Search through courses
                    const matchingCourses = mockAcademyData.courses.filter(course =>
                        course.title.toLowerCase().includes(query) ||
                        (course.description && course.description.toLowerCase().includes(query))
                    );
                    console.log('Course search results:', matchingCourses);
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
                    const response = generateAcademyAIResponse(message);
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
            messageDiv.style.background = sender === 'user' ? 'var(--academy-red)' : 'var(--light-gray)';
            messageDiv.style.color = sender === 'user' ? 'white' : 'var(--dark-gray)';
            messageDiv.style.marginLeft = sender === 'user' ? '2rem' : '0';
            messageDiv.style.marginRight = sender === 'user' ? '0' : '2rem';
            messageDiv.textContent = message;
            chatBody.appendChild(messageDiv);
            chatBody.scrollTop = chatBody.scrollHeight;
        }

        function generateAcademyAIResponse(message) {
            const lowerMessage = message.toLowerCase();
            
            if (lowerMessage.includes('kurz') || lowerMessage.includes('course')) {
                return 'Na základě vašeho profilu Lab Manager doporučuji dokončit aktuální certifikační cestu. Zaměřte se na "Kalibrační standardy" - je klíčový pro vaši roli.';
            } else if (lowerMessage.includes('certifikace') || lowerMessage.includes('certification')) {
                return 'Vaše Lab Manager Certification je na 65%. Po dokončení získáte průmyslově uznávaný certifikát kompatibilní s ISO 17025. Průměrný nárůst platu: +12%.';
            } else if (lowerMessage.includes('skill') || lowerMessage.includes('dovednost')) {
                return 'Vaše nejsilnější oblast je DC Theory (90%). Doporučuji se zaměřit na Automatizaci (20%) - biggest improvement opportunity pro lab managery.';
            } else if (lowerMessage.includes('time') || lowerMessage.includes('čas')) {
                return 'Na základě vašeho tempa dokončíte certifikaci za 3-4 týdny. Doporučuji 30-45 minut denně pro optimální learning retention.';
            } else if (lowerMessage.includes('automation') || lowerMessage.includes('automatizace')) {
                return 'SCPI programování má 96% AI match s vaším profilem. Je nejrychlejší cesta ke zlepšení automation skills. Chcete začít tento kurz?';
            } else if (lowerMessage.includes('assessment') || lowerMessage.includes('hodnocení')) {
                return 'Skill assessment doporučuji opakovat každé 3 měsíce. Na základě vašeho pokroku byste měli vidět improvement v Calibration oblasti.';
            } else {
                return 'Jsem zde pro personalizované vzdělávací poradenství. Mohu analyzovat váš pokrok, doporučit kurzy, nebo pomoci s learning strategií. Co vás zajímá?';
            }
        }
        function showUserMenu() {
            alert('Jan Novák\nLab Manager @ TechLab s.r.o.\n\nAcademy Progress:\n• 3 kurzy dokončeny\n• 1 certifikace v procesu\n• 7 dní learning streak\n\nProfil uživatele...');
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (currentView !== 'dashboard') {
                    showDashboard();
                }
            }
            
            if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
                e.preventDefault();
                showSkillAssessment();
            }
        });

        // Auto-save learning progress (mock)
        setInterval(() => {
            if (currentView === 'course' && currentCourse) {
                console.log('Auto-saving learning progress for course:', currentCourse.title);
            }
        }, 30000); // Every 30 seconds