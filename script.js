
        // Smooth scrolling for navigation links
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

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Active navigation highlighting
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Download Resume functionality
        function downloadResume() {
            const resumeContent = `
MEGHNA SUDKE
Full Stack Developer | React.js | Node.js | Python

📧 meghnasudke6123@gmail.com
📱 +91 9146208447
💼 linkedin.com/in/meghna-sudke
💻 github.com/meghna60

═══════════════════════════════════════════════════════════

PROFESSIONAL EXPERIENCE
═══════════════════════════════════════════════════════════

Full Stack Developer | PRYM AEROSPACE PVT LTD, Jalna
Feb 2025 – Present

• Built scalable full-stack applications using React.js, Node.js, and Python
• Designed responsive user interfaces with Figma and modern CSS frameworks
• Integrated MongoDB database using Mongoose ODM for efficient data management
• Implemented robust authentication systems and comprehensive error handling
• Collaborated with cross-functional teams to deliver high-quality solutions

═══════════════════════════════════════════════════════════

FEATURED PROJECTS
═══════════════════════════════════════════════════════════

🏥 COVID Precaution Application
Technologies: React.js, Node.js, Firebase
• Comprehensive healthcare app for locating COVID care centers
• Real-time data integration with interactive maps
• Emergency medical assistance features

🎓 LearnQuest E-Learning Platform
Technologies: HTML5, CSS3, JavaScript, Firebase
• Feature-rich educational platform with video lectures
• Interactive quiz system and coding practice environment
• AI-powered resume builder and productivity tools

═══════════════════════════════════════════════════════════

EDUCATION
═══════════════════════════════════════════════════════════

🎓 BE Computer Science and Engineering (2025)
   Mauli College of Engineering & Technology, Shegaon
   CGPA: 8.63

📜 Diploma in Computer Engineering (2022)
   Government Polytechnic Jalna
   CGPA: 7.79

🏫 Higher Secondary Education (2019)
   S B High School, Jalna
   Percentage: 84%

═══════════════════════════════════════════════════════════

TECHNICAL SKILLS
═══════════════════════════════════════════════════════════

Programming Languages: C++, Python, JavaScript, React.js
Web Technologies: HTML5, CSS3, Bootstrap, Node.js, Express.js
Databases: MongoDB, MySQL, Firebase, SQL
Tools & Platforms: Visual Studio, Figma, Git, Mongoose, Postman

═══════════════════════════════════════════════════════════

CERTIFICATIONS
═══════════════════════════════════════════════════════════

🏆 C++ Programming Certification - Udemy (6 Months)
   • Advanced Object-Oriented Programming (OOP)
   • Standard Template Library (STL) mastery
   • Pointers and Memory Management
   • File Handling and Advanced Concepts

═══════════════════════════════════════════════════════════

ACHIEVEMENTS & HIGHLIGHTS
═══════════════════════════════════════════════════════════

✓ Maintained consistent academic excellence with 8.63 CGPA
✓ Built 10+ projects demonstrating full-stack capabilities
✓ Expertise in modern web development frameworks
✓ Strong foundation in software engineering principles
✓ Passionate about continuous learning and innovation

═══════════════════════════════════════════════════════════

Thank you for considering my application!
Looking forward to contributing to your team's success.
            `.trim();

            const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Meghna_Sudke_Resume_2025.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            // Show a nice feedback message
            const button = event.target;
            const originalText = button.innerHTML;
            button.innerHTML = '✓ Downloaded!';
            button.style.background = '#10b981';
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = '';
            }, 2000);
        }

        // Add some interactive effects
        document.querySelectorAll('.project-card, .skill-category, .contact-item').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Add typing effect to hero title
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const text = heroTitle.textContent;
            heroTitle.textContent = '';
            let i = 0;
            
            setTimeout(() => {
                const typeWriter = () => {
                    if (i < text.length) {
                        heroTitle.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 100);
                    }
                };
                typeWriter();
            }, 1500);
        }
