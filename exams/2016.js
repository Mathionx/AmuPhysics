/**
 * 2016 E.C PHYSICS EXAM - COMPLETE FIXED VERSION
 * Arba Minch University | Natural and Computational Sciences
 * Department of Physics | First Year Natural Science
 * 
 * NOTE: Questions 3-18 are missing from original exam paper
 * Numbering preserved as per original: 1,2,19,20
 */

class PhysicsExam2016 {
    constructor() {
        // ============ PART I: TRUE/FALSE (5 Questions) ============
        this.tfQuestions = [
            {
                id: 1,
                text: "Water waves and sound waves are examples of electromagnetic waves.",
                answer: false,
                explanation: "<strong>FALSE.</strong> Water waves and sound waves are <em>mechanical</em> waves, not electromagnetic. They require a medium to propagate. EM waves (light, radio, X-rays) can travel through vacuum."
            },
            {
                id: 2,
                text: "In a laminar flow, the flow is steady; the velocity of the fluid at each point remains varies with time.",
                answer: false,
                explanation: "<strong>FALSE.</strong> The statement is contradictory. In laminar/steady flow, the velocity at each point <em>does NOT vary</em> with time. It remains constant at each fixed point."
            },
            {
                id: 3,
                text: "Two objects of different density and the same volume immersed in water, both of them are denser than water can experience equal buoyant force on them.",
                answer: true,
                explanation: "<strong>TRUE.</strong> Buoyant force depends ONLY on: F_b = ρ_fluid × V_submerged × g. Same volume, same fluid, same g → same buoyant force. Density of objects doesn't affect buoyant force."
            },
            {
                id: 4,
                text: "A magnetic field is a phenomenon that describes the magnetic force influence on moving electric charges inside the field.",
                answer: true,
                explanation: "<strong>TRUE.</strong> Magnetic fields exert forces on <em>moving</em> charged particles (F = qv × B). Stationary charges experience no magnetic force."
            },
            {
                id: 5,
                text: "If two objects are in thermal equilibrium, then they have the same temperature and there is net energy transfer between the two objects.",
                answer: false,
                explanation: "<strong>FALSE.</strong> Thermal equilibrium means SAME temperature and <em>NO NET</em> energy transfer. Energy transfer occurs when temperatures differ."
            }
        ];

        // ============ PART II: MULTIPLE CHOICE ============
        // NOTE: Questions 3-18 are missing from the original exam paper
        // Numbering preserved: 1, 2, 19, 20
        this.mcQuestions = [
            {
                id: 1,
                number: 1,
                text: "________ is a mechanism of heat transfer through vacuum space.",
                options: [
                    "A. Convection",
                    "B. Conduction",
                    "C. Radiation",
                    "D. Refraction"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> Radiation (infrared, light) can travel through vacuum. Conduction needs direct contact, convection needs fluid medium. Refraction is bending of waves, not heat transfer."
            },
            {
                id: 2,
                number: 2,
                text: "Which of the following is not a necessary condition for simple harmonic oscillations to occur?",
                options: [
                    "A. there must be a stable equilibrium position.",
                    "B. there must be no dissipation of energy.",
                    "C. the acceleration is proportional to the displacement and opposite in direction.",
                    "D. there must be a constant Velocity."
                ],
                answer: "D",
                explanation: "<strong>D is correct (NOT necessary).</strong> In SHM, velocity is NOT constant - it varies sinusoidally. A, B, C are necessary for ideal SHM."
            },
            {
                id: 19,
                number: 19,
                text: "An isolated charged point particle produces an electric field with magnitude E at a point 2m away from the charge. A point at which the field magnitude is E/4 is:",
                options: [
                    "A. 1m away from the particle",
                    "B. 0.5m away from the particle",
                    "C. 2m away from the particle",
                    "D. 4m away from the particle"
                ],
                answer: "D",
                explanation: "<strong>D is correct.</strong> Electric field E ∝ 1/r². So E₁/E₂ = (r₂/r₁)². Given E₂ = E/4 = E₁/4, then E₁/(E₁/4) = 4 = (r₂/2)² → r₂/2 = 2 → r₂ = 4m."
            },
            {
                id: 20,
                number: 20,
                text: "The potential difference between two points is 150V. If a particle with a charge of 2C is transported from one of these points to the other, the magnitude of the work done is:",
                options: [
                    "A. 200J",
                    "B. 150J",
                    "C. 300J",
                    "D. 100J"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> Work = q × ΔV = (2 C)(150 V) = 300 J. Work is independent of path; depends only on potential difference and charge."
            }
        ];

        // ============ PART III: SHORT ANSWER ============
        
        // Definition Questions (3)
        this.definitionQuestions = [
            {
                id: 1,
                number: 1,
                text: "__________ is defined as the amount of heat energy required to raise the temperature of a substance by 1°C.",
                answer: "Heat capacity",
                acceptable: ["heat capacity", "Heat capacity", "thermal capacity", "Thermal capacity"],
                explanation: "Heat capacity (C) is the heat required to raise temperature by 1°C (units: J/°C). Specific heat capacity is per unit mass."
            },
            {
                id: 2,
                number: 2,
                text: "__________ is the property that determines whether an object is in thermal equilibrium with other objects.",
                answer: "Temperature",
                acceptable: ["temperature", "Temperature"],
                explanation: "Temperature is the physical property that determines thermal equilibrium (Zeroth Law). Objects at same temperature are in thermal equilibrium."
            },
            {
                id: 3,
                number: 3,
                text: "__________ is a system which does not exchange heat with its surrounding and no work is done on the external environment.",
                answer: "Isolated system",
                acceptable: ["isolated system", "Isolated system", "isolated", "Isolated"],
                explanation: "An isolated system exchanges neither energy (heat/work) nor matter with surroundings. Thermally insulated + no mechanical interaction."
            }
        ];

        // Wave Question - Using asset image
        this.waveQuestion = {
            id: 4,
            number: 4,
            text: "What is wavelength of the wave shown in the diagram below?",
            imagePath: "../assets/shortanswer_Q4.jpg",
            answer: "1.5 m",
            acceptable: ["1.5 m", "1.5m", "1.5", "1.5 meters"],
            explanation: "The diagram shows 2 complete wave cycles in 3 meters. Therefore, wavelength λ = 3m/2 = 1.5m. Amplitude is 0.5m (half of peak-to-trough height of 1m)."
        };

        // SHM Problem 2016
        this.shmProblem = {
            id: 5,
            number: 5,
            equation: "x(t) = 5.10 \\sin(1.2\\pi t - \\frac{\\pi}{4})",
            parts: [
                {
                    label: "a",
                    text: "Amplitude (A)",
                    answer: "5.10 m",
                    value: "5.10 m",
                    explanation: "In SHM equation x = A sin(ωt + φ), amplitude A is the coefficient of sine function. Here A = 5.10 m."
                },
                {
                    label: "b",
                    text: "Period (T)",
                    answer: "1.67 s",
                    value: "1.67 s",
                    explanation: "ω = 1.2π rad/s. T = 2π/ω = 2π/(1.2π) = 2/1.2 = 1.666... ≈ 1.67 s."
                },
                {
                    label: "c",
                    text: "Maximum acceleration (a_max)",
                    answer: "72.34 m/s²",
                    value: "72.34 m/s²",
                    explanation: "a_max = ω²A = (1.2π)² × 5.10 = (1.44π²) × 5.10 = 1.44 × 9.8696 × 5.10 = 72.34 m/s²."
                },
                {
                    label: "d",
                    text: "Maximum velocity (v_max)",
                    answer: "19.22 m/s",
                    value: "19.22 m/s",
                    explanation: "v_max = ωA = (1.2π) × 5.10 = 3.7699 × 5.10 = 19.22 m/s."
                }
            ]
        };

        // ============ PART IV: WORKOUT ============
        // Circuit Problem - Using asset image
        this.circuitProblem = {
            id: 1,
            title: "Combination Resistors Circuit",
            problemText: "For the combination resistors in a circuit as shown below. Voltage Source (V) = 12V, R₁ = R₂ = R₃ = R₄ = 10.0 Ω.",
            imagePath: "../assets/problems-Q1.jpg",
            parts: [
                {
                    label: "i",
                    text: "Calculate the equivalent resistance (R_eq). [1 point]",
                    answer: "25 Ω",
                    solution: `
                        <p><strong>Step 1: R₁ and R₂ are in series</strong></p>
                        <p>R₁₂ = R₁ + R₂ = 10Ω + 10Ω = <strong>20Ω</strong></p>
                        
                        <p><strong>Step 2: R₃ and R₄ are in parallel</strong></p>
                        <p>1/R₃₄ = 1/R₃ + 1/R₄ = 1/10 + 1/10 = 2/10 = 1/5</p>
                        <p>R₃₄ = <strong>5Ω</strong></p>
                        
                        <p><strong>Step 3: R₁₂ and R₃₄ are in series</strong></p>
                        <p>R_eq = R₁₂ + R₃₄ = 20Ω + 5Ω = <strong>25Ω</strong></p>
                    `
                },
                {
                    label: "ii",
                    text: "Current across resistor R₁ and R₃. [1 point]",
                    answer: "I₁ = 0.48 A, I₃ = 0.24 A",
                    solution: `
                        <p><strong>Current through R₁:</strong></p>
                        <p>I_total = V / R_eq = 12V / 25Ω = <strong>0.48 A</strong></p>
                        <p>R₁ is in the main branch, so I₁ = I_total = <strong>0.48 A</strong></p>
                        
                        <p><strong>Current through R₃:</strong></p>
                        <p>Voltage across parallel combination = I_total × R₃₄ = 0.48A × 5Ω = 2.4V</p>
                        <p>Since R₃ = R₄ = 10Ω in parallel, current splits equally:</p>
                        <p>I₃ = V_parallel / R₃ = 2.4V / 10Ω = <strong>0.24 A</strong></p>
                    `
                },
                {
                    label: "iii",
                    text: "Voltage drop across resistor R₁. [0.5 point]",
                    answer: "4.8 V",
                    solution: `
                        <p><strong>Ohm's Law:</strong> V = I × R</p>
                        <p>V₁ = I₁ × R₁ = 0.48 A × 10Ω = <strong>4.8 V</strong></p>
                        
                        <p><em>Check:</em> V₂ = 4.8 V, so V₁ + V₂ = 9.6 V across series pair.</p>
                        <p>Voltage across parallel combination = 12V - 9.6V = 2.4V ✓</p>
                    `
                }
            ]
        };

        // ============ STATE VARIABLES ============
        this.tfScore = 0;
        this.mcScore = 0;
        this.shortScore = 0;
        this.totalAnswered = 0;
        this.totalCorrect = 0;
        
        this.answeredTF = new Set();
        this.answeredMC = new Set();
        this.answeredDefinitions = new Set();
        this.answeredWave = false;
        this.answeredSHM = new Set();
        
        this.totalQuestions = this.tfQuestions.length + this.mcQuestions.length + 
                              this.definitionQuestions.length + 1 + 4; // +1 wave, +4 SHM parts

        // Initialize
        this.init();
    }

    init() {
        this.renderTFQuestions();
        this.renderMCQuestions();
        this.renderDefinitionQuestions();
        this.renderWaveQuestion();
        this.renderSHMProblem();
        this.renderCircuitProblem();
        this.updateStats();
        this.setupEventListeners();
        this.renderMathJax();
    }

    renderMathJax() {
        if (window.MathJax) {
            MathJax.typesetPromise?.();
        }
    }

    // ============ RENDER TRUE/FALSE ============
    renderTFQuestions() {
        const container = document.getElementById('tf-questions-2016');
        if (!container) return;
        
        container.innerHTML = this.tfQuestions.map(q => `
            <div class="question-card" id="tf-2016-${q.id}">
                <div class="question-text">${q.id}. ${q.text}</div>
                <div class="tf-buttons">
                    <button class="tf-btn" onclick="exam2016.checkTFAnswer(${q.id}, true)">TRUE</button>
                    <button class="tf-btn" onclick="exam2016.checkTFAnswer(${q.id}, false)">FALSE</button>
                </div>
                <div class="explanation-box" id="tf-2016-explanation-${q.id}">
                    <div class="explanation-title"><i class="fas fa-lightbulb"></i> Explanation</div>
                    ${q.explanation}
                </div>
            </div>
        `).join('');
    }

    // ============ RENDER MULTIPLE CHOICE ============
    // Preserving original numbering: 1,2,19,20
    renderMCQuestions() {
        const container = document.getElementById('mc-questions-2016');
        if (!container) return;
        
        // Add missing questions notice
        const notice = document.createElement('div');
        notice.className = 'missing-questions-notice';
        notice.innerHTML = `
            <i class="fas fa-info-circle"></i> 
            <strong>Note:</strong> Questions 3-18 are not available in the original 2016 E.C exam paper. 
            Numbering continues with questions 19 and 20 as per the original document.
        `;
        container.appendChild(notice);
        
        this.mcQuestions.sort((a, b) => a.number - b.number).forEach(q => {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.id = `mc-2016-${q.id}`;
            
            card.innerHTML = `
                <div class="question-text">${q.number}. ${q.text}</div>
                <div class="mc-options">
                    ${q.options.map((opt, i) => {
                        const letter = String.fromCharCode(65 + i);
                        return `<button class="option-btn" onclick="exam2016.checkMCAnswer(${q.id}, '${letter}')">${opt}</button>`;
                    }).join('')}
                </div>
                <div class="explanation-box" id="mc-2016-explanation-${q.id}">
                    <div class="explanation-title"><i class="fas fa-lightbulb"></i> Explanation</div>
                    ${q.explanation}
                </div>
            `;
            
            container.appendChild(card);
        });
    }

    // ============ RENDER DEFINITION QUESTIONS ============
    renderDefinitionQuestions() {
        const container = document.getElementById('short-questions-2016');
        if (!container) return;
        
        let html = '<h5 class="mb-3 mt-2">Definition Questions</h5>';
        
        html += this.definitionQuestions.map(q => `
            <div class="completion-card" id="def-2016-${q.id}">
                <div class="completion-question">${q.number}. ${q.text}</div>
                <div class="completion-input-group">
                    <input type="text" class="completion-input" id="def-input-${q.id}" 
                           placeholder="Type your answer here...">
                    <button class="btn-check-answer" onclick="exam2016.checkDefinitionAnswer(${q.id})">
                        <i class="fas fa-check"></i> Check Answer
                    </button>
                </div>
                <div id="def-feedback-${q.id}" class="completion-feedback"></div>
                <div class="explanation-box" id="def-explanation-${q.id}">
                    <div class="explanation-title"><i class="fas fa-lightbulb"></i> Explanation</div>
                    ${q.explanation}
                </div>
            </div>
        `).join('');
        
        container.innerHTML = html;
    }

    // ============ RENDER WAVE QUESTION - USING ASSET ============
    renderWaveQuestion() {
        const container = document.getElementById('short-questions-2016');
        
        const waveCard = document.createElement('div');
        waveCard.className = 'question-card';
        waveCard.id = 'wave-question-2016';
        waveCard.style.marginTop = '20px';
        waveCard.style.borderLeft = '8px solid #9b59b6';
        
        waveCard.innerHTML = `
            <div class="question-text"><strong>${this.waveQuestion.number}.</strong> ${this.waveQuestion.text}</div>
            <div class="wave-figure-container">
                <img src="${this.waveQuestion.imagePath}" alt="Wave Diagram" class="wave-figure-image">
                <div class="wave-caption">Figure: Transverse wave with 2 cycles in 3m, amplitude 0.5m</div>
            </div>
            <div class="completion-input-group">
                <input type="text" class="completion-input" id="wave-input-2016" 
                       placeholder="Enter wavelength (include units)...">
                <button class="btn-check-answer" onclick="exam2016.checkWaveAnswer()">
                    <i class="fas fa-check"></i> Check Answer
                </button>
            </div>
            <div id="wave-feedback-2016" class="completion-feedback"></div>
            <div class="explanation-box" id="wave-explanation-2016">
                <div class="explanation-title"><i class="fas fa-lightbulb"></i> Explanation</div>
                <p>${this.waveQuestion.explanation}</p>
            </div>
        `;
        
        container.appendChild(waveCard);
    }

    // ============ RENDER SHM PROBLEM ============
    renderSHMProblem() {
        const container = document.getElementById('short-questions-2016');
        
        const shmCard = document.createElement('div');
        shmCard.className = 'shm-card';
        shmCard.id = 'shm-2016';
        
        let paramsHTML = '';
        this.shmProblem.parts.forEach((part, index) => {
            paramsHTML += `
                <div class="shm-param-item">
                    <div class="shm-param-label">${part.label}) ${part.text}</div>
                    <div class="shm-param-value" id="shm-2016-value-${index}">—</div>
                    <button class="btn-show-solution mt-2" onclick="exam2016.revealSHMAnswer(${index})">
                        <i class="fas fa-calculator"></i> Show Answer
                    </button>
                    <div class="explanation-box mt-2" id="shm-2016-explanation-${index}">
                        <p>${part.explanation}</p>
                        <strong>Answer: ${part.answer}</strong>
                    </div>
                </div>
            `;
        });
        
        shmCard.innerHTML = `
            <div class="question-text"><strong>${this.shmProblem.number}.</strong> Simple Harmonic Motion</div>
            <div class="shm-equation">
                \\( x(t) = 5.10 \\sin(1.2\\pi t - \\frac{\\pi}{4}) \\)
            </div>
            <p>where x is in meters (m), t is in seconds (s), and angles are in radians. [0.5 points each]</p>
            <div class="shm-params">
                ${paramsHTML}
            </div>
        `;
        
        container.appendChild(shmCard);
    }

    // ============ RENDER CIRCUIT PROBLEM - USING ASSET ============
    renderCircuitProblem() {
        const container = document.getElementById('workout-container-2016');
        if (!container) return;
        
        container.innerHTML = `
            <div class="workout-card">
                <h4>
                    <span class="badge bg-primary me-2">1.</span>
                    ${this.circuitProblem.title}
                </h4>
                
                <div class="problem-text">
                    ${this.circuitProblem.problemText}
                </div>
                
                <div class="circuit-figure-container">
                    <img src="${this.circuitProblem.imagePath}" alt="Circuit Diagram" class="circuit-figure-image">
                    <div class="circuit-caption">Figure: Resistor combination circuit with V = 12V, R₁ = R₂ = R₃ = R₄ = 10Ω</div>
                </div>
                
                ${this.circuitProblem.parts.map(part => `
                    <div class="problem-part">
                        <p><strong>${part.label})</strong> ${part.text}</p>
                        <button class="btn-show-solution" onclick="exam2016.toggleCircuitSolution('${part.label}')">
                            <i class="fas fa-calculator"></i> Show Solution
                        </button>
                        <div class="solution-box" id="circuit-solution-${part.label}">
                            <div class="solution-title">
                                <i class="fas fa-check-circle"></i> Solution
                            </div>
                            ${part.solution}
                            <div class="mt-3 p-2 bg-light rounded">
                                <strong>Answer:</strong> ${part.answer}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // ============ CHECK TRUE/FALSE ============
    checkTFAnswer(id, userAnswer) {
        const question = this.tfQuestions.find(q => q.id === id);
        const card = document.getElementById(`tf-2016-${id}`);
        if (!card) return;
        
        const buttons = card.querySelectorAll('.tf-btn');
        const explanation = document.getElementById(`tf-2016-explanation-${id}`);
        
        buttons.forEach(btn => {
            btn.classList.remove('correct-answer', 'incorrect-answer');
        });
        
        const isCorrect = (userAnswer === question.answer);
        
        if (userAnswer) {
            buttons[0].classList.add(isCorrect ? 'correct-answer' : 'incorrect-answer');
        } else {
            buttons[1].classList.add(isCorrect ? 'correct-answer' : 'incorrect-answer');
        }
        
        if (question.answer) {
            buttons[0].classList.add('correct-answer');
        } else {
            buttons[1].classList.add('correct-answer');
        }
        
        if (!this.answeredTF.has(id)) {
            this.totalAnswered++;
            if (isCorrect) {
                this.tfScore++;
                this.totalCorrect++;
            }
            this.answeredTF.add(id);
            this.updateStats();
        }
        
        if (explanation) {
            explanation.classList.add('show');
        }
    }

    // ============ CHECK MULTIPLE CHOICE ============
    checkMCAnswer(id, userAnswer) {
        const question = this.mcQuestions.find(q => q.id === id);
        const card = document.getElementById(`mc-2016-${id}`);
        if (!card) return;
        
        const buttons = card.querySelectorAll('.option-btn');
        const explanation = document.getElementById(`mc-2016-explanation-${id}`);
        
        buttons.forEach(btn => {
            btn.classList.remove('selected', 'correct', 'incorrect');
        });
        
        const selectedIndex = userAnswer.charCodeAt(0) - 65;
        if (buttons[selectedIndex]) {
            buttons[selectedIndex].classList.add('selected');
        }
        
        const isCorrect = (userAnswer === question.answer);
        
        if (isCorrect) {
            buttons[selectedIndex].classList.add('correct');
        } else {
            buttons[selectedIndex].classList.add('incorrect');
            const correctIndex = question.answer.charCodeAt(0) - 65;
            if (buttons[correctIndex]) {
                buttons[correctIndex].classList.add('correct');
            }
        }
        
        if (!this.answeredMC.has(id)) {
            this.totalAnswered++;
            if (isCorrect) {
                this.mcScore++;
                this.totalCorrect++;
            }
            this.answeredMC.add(id);
            this.updateStats();
        }
        
        if (explanation) {
            explanation.classList.add('show');
        }
    }

    // ============ CHECK DEFINITION ANSWER ============
    checkDefinitionAnswer(id) {
        const question = this.definitionQuestions.find(q => q.id === id);
        const input = document.getElementById(`def-input-${id}`);
        const feedback = document.getElementById(`def-feedback-${id}`);
        const explanation = document.getElementById(`def-explanation-${id}`);
        
        if (!input || !feedback) return;
        
        const userAnswer = input.value.trim().toLowerCase();
        const isCorrect = question.acceptable.some(acc => 
            acc.toLowerCase() === userAnswer
        );
        
        if (isCorrect) {
            feedback.innerHTML = '<span style="color: #2ecc71;"><i class="fas fa-check-circle"></i> Correct!</span>';
            input.style.borderColor = '#2ecc71';
            input.style.backgroundColor = 'rgba(46, 204, 113, 0.05)';
        } else {
            feedback.innerHTML = `<span style="color: #e74c3c;"><i class="fas fa-times-circle"></i> Incorrect. Correct answer: ${question.answer}</span>`;
            input.style.borderColor = '#e74c3c';
            input.style.backgroundColor = 'rgba(231, 76, 60, 0.05)';
        }
        
        if (!this.answeredDefinitions.has(id)) {
            this.totalAnswered++;
            if (isCorrect) {
                this.shortScore++;
                this.totalCorrect++;
            }
            this.answeredDefinitions.add(id);
            this.updateStats();
        }
        
        if (explanation) {
            explanation.classList.add('show');
        }
    }

    // ============ CHECK WAVE ANSWER ============
    checkWaveAnswer() {
        const input = document.getElementById('wave-input-2016');
        const feedback = document.getElementById('wave-feedback-2016');
        const explanation = document.getElementById('wave-explanation-2016');
        
        if (!input || !feedback) return;
        
        const userAnswer = input.value.trim().toLowerCase();
        const isCorrect = this.waveQuestion.acceptable.some(acc => 
            acc.toLowerCase() === userAnswer
        );
        
        if (isCorrect) {
            feedback.innerHTML = '<span style="color: #2ecc71;"><i class="fas fa-check-circle"></i> Correct! λ = 1.5m</span>';
            input.style.borderColor = '#2ecc71';
        } else {
            feedback.innerHTML = '<span style="color: #e74c3c;"><i class="fas fa-times-circle"></i> Incorrect. Wavelength = 1.5 m (3m ÷ 2 cycles)</span>';
            input.style.borderColor = '#e74c3c';
        }
        
        if (!this.answeredWave) {
            this.totalAnswered++;
            if (isCorrect) {
                this.shortScore++;
                this.totalCorrect++;
            }
            this.answeredWave = true;
            this.updateStats();
        }
        
        if (explanation) {
            explanation.classList.add('show');
        }
    }

    // ============ REVEAL SHM ANSWER ============
    revealSHMAnswer(index) {
        const part = this.shmProblem.parts[index];
        const valueDiv = document.getElementById(`shm-2016-value-${index}`);
        const explanation = document.getElementById(`shm-2016-explanation-${index}`);
        
        if (valueDiv) {
            valueDiv.textContent = part.value;
            valueDiv.style.color = '#2ecc71';
            valueDiv.style.fontWeight = '700';
        }
        
        if (explanation) {
            explanation.classList.toggle('show');
        }
        
        if (!this.answeredSHM.has(index)) {
            this.totalAnswered++;
            this.answeredSHM.add(index);
            this.updateStats();
        }
        
        this.renderMathJax();
    }

    // ============ TOGGLE CIRCUIT SOLUTION ============
    toggleCircuitSolution(label) {
        const solution = document.getElementById(`circuit-solution-${label}`);
        if (solution) {
            if (solution.style.display === 'none' || solution.style.display === '') {
                solution.style.display = 'block';
                this.renderMathJax();
            } else {
                solution.style.display = 'none';
            }
        }
    }

    // ============ UPDATE STATISTICS ============
    updateStats() {
        document.getElementById('tf-score-2016').textContent = this.tfScore;
        document.getElementById('mc-score-2016').textContent = this.mcScore;
        document.getElementById('short-score-2016').textContent = this.shortScore;
        
        const totalPossible = this.tfQuestions.length + this.mcQuestions.length + 
                             this.definitionQuestions.length + 1 + 4;
        const totalCorrectAll = this.tfScore + this.mcScore + this.shortScore;
        const percentage = totalPossible > 0 ? Math.round((totalCorrectAll / totalPossible) * 100) : 0;
        
        document.getElementById('total-score-2016').textContent = `${percentage}%`;
        
        const progressBar = document.getElementById('progress-bar');
        const answeredCount = document.getElementById('answered-count');
        const correctCount = document.getElementById('correct-count');
        const totalCount = document.getElementById('total-count');
        
        if (progressBar) {
            const progressPercent = (this.totalAnswered / this.totalQuestions) * 100;
            progressBar.style.width = `${progressPercent}%`;
        }
        
        if (answeredCount) answeredCount.textContent = this.totalAnswered;
        if (totalCount) totalCount.textContent = this.totalQuestions;
        if (correctCount) correctCount.textContent = this.totalCorrect;
    }

    // ============ SETUP EVENT LISTENERS ============
    setupEventListeners() {
        // Any additional event listeners can go here
    }
}

// ============ INITIALIZE EXAM ============
document.addEventListener('DOMContentLoaded', () => {
    window.exam2016 = new PhysicsExam2016();
});

// ============ EXPORT FUNCTIONS ============
window.checkTFAnswer = (id, answer) => window.exam2016?.checkTFAnswer(id, answer);
window.checkMCAnswer = (id, answer) => window.exam2016?.checkMCAnswer(id, answer);
window.checkDefinitionAnswer = (id) => window.exam2016?.checkDefinitionAnswer(id);
window.checkWaveAnswer = () => window.exam2016?.checkWaveAnswer();
window.revealSHMAnswer = (index) => window.exam2016?.revealSHMAnswer(index);
window.toggleCircuitSolution = (label) => window.exam2016?.toggleCircuitSolution(label);