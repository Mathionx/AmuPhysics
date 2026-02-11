/**
 * PHYSICS EXAM PREPARATION - ADVANCED MODULE SYSTEM
 * Arba Minch University | General Physics (Phys 1011)
 * @version 2.0.0
 */

class PhysicsExamApp {
    constructor() {
        this.config = {
            animations: true,
            mathJax: true,
            debug: false
        };
        
        this.stats = {
            totalExams: 3,
            totalQuestions: 85,
            questionTypes: 4
        };
        
        this.init();
    }
    
    init() {
        console.log('⚛️ Physics Exam Prep v2.0 initialized');
        this.animateCards();
        this.setupEventListeners();
        this.renderMath();
        this.showWelcomeMessage();
    }
    
    animateCards() {
        if (!this.config.animations) return;
        
        const cards = document.querySelectorAll('.exam-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * (index + 1));
        });
    }
    
    setupEventListeners() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === '1') {
                const exam = document.querySelector('[data-year="2017"]');
                if (exam) exam.click();
            } else if (e.key === '2') {
                const exam = document.querySelector('[data-year="2016"]');
                if (exam) exam.click();
            } else if (e.key === '3') {
                const exam = document.querySelector('[data-year="mixed"]');
                if (exam) exam.click();
            }
        });
        
        // Card hover effects
        const cards = document.querySelectorAll('.exam-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.card-icon i');
                if (icon) {
                    icon.style.transition = 'transform 0.3s';
                    icon.style.transform = 'scale(1.2) rotate(5deg)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.card-icon i');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0)';
                }
            });
        });
        
        // Formula card interactions
        const formulaCards = document.querySelectorAll('.formula-card');
        formulaCards.forEach(card => {
            card.addEventListener('click', function() {
                this.style.backgroundColor = 'var(--primary-2017)';
                this.style.color = 'white';
                setTimeout(() => {
                    this.style.backgroundColor = '#f8fafc';
                    this.style.color = 'var(--text-dark)';
                }, 200);
            });
        });
    }
    
    renderMath() {
        if (this.config.mathJax && window.MathJax) {
            MathJax.typesetPromise?.().catch(err => {
                console.warn('MathJax rendering failed:', err);
            });
        }
    }
    
    showWelcomeMessage() {
        console.log(`
    ╔══════════════════════════════════════════════════════════╗
    ║     ⚛️  PHYSICS EXAM PREPARATION - ARBA MINCH UNIV  ⚛️   ║
    ╠══════════════════════════════════════════════════════════╣
    ║                                                          ║
    ║   📘 2017 Exam - 45 Questions                          ║
    ║   📗 2016 Exam - Wave, SHM, Circuit                    ║
    ║   📙 Mixed Exam - 36 Questions                         ║
    ║                                                          ║
    ║   🚀 Press 1, 2, or 3 for quick navigation!            ║
    ║                                                          ║
    ╚══════════════════════════════════════════════════════════╝
        `);
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.physicsApp = new PhysicsExamApp();
});