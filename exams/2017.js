/**
 * 2017 PHYSICS EXAM - COMPLETE FIXED VERSION
 * Arba Minch University | General Physics (Phys 1011)
 * Mobile-Optimized | Clean Problem Format | Full Explanations
 */

class PhysicsExam2017 {
    constructor() {
        // ============ EXAM DATA ============
        
        // Part I: True/False Questions (6)
        this.tfQuestions = [
            {
                id: 1,
                text: "According to Pascal's Principle, in a fluid sealed inside a container, there is a highest pressure at the bottom of the container.",
                answer: false,
                explanation: "<strong>FALSE.</strong> Pascal's Principle states that pressure applied to an enclosed fluid is transmitted <em>undiminished</em> to every portion of the fluid and the walls of the container. Pressure is the same throughout, not highest at the bottom."
            },
            {
                id: 2,
                text: "Heat is the non-spontaneous flow of energy into or out of a system caused by a difference in temperature between the system and its surroundings.",
                answer: false,
                explanation: "<strong>FALSE.</strong> Heat is the <em>spontaneous</em> flow of energy due to temperature difference. It always flows from higher temperature to lower temperature spontaneously."
            },
            {
                id: 3,
                text: "Radiation is the transfer of heat by the movement of the heated particles themselves.",
                answer: false,
                explanation: "<strong>FALSE.</strong> Radiation is transfer of heat via <em>electromagnetic waves</em>, requiring no medium. Movement of heated particles describes <strong>convection</strong> (fluids) or <strong>conduction</strong> (particle collisions)."
            },
            {
                id: 4,
                text: "Wave cannot be electromagnetic wave and transverse at the same time.",
                answer: false,
                explanation: "<strong>FALSE.</strong> Electromagnetic waves (light, radio, X-rays) are <em>transverse</em> waves. They consist of oscillating electric and magnetic fields perpendicular to direction of propagation."
            },
            {
                id: 5,
                text: "In simple harmonic oscillations, the frequency and period are independent of the amplitude.",
                answer: true,
                explanation: "<strong>TRUE.</strong> For ideal SHM, frequency f = 1/T depends only on system properties (mass, spring constant k, pendulum length L) and NOT on amplitude. This is the definition of isochronous oscillations."
            },
            {
                id: 6,
                text: "Elastic materials are materials that regain their original shape and size when the deforming force is removed.",
                answer: true,
                explanation: "<strong>TRUE.</strong> This is the definition of elasticity. Materials that don't regain original shape are plastic. For small deformations within elastic limit, Hooke's law applies."
            }
        ];

        // Part II: Multiple Choice Questions (34)
        this.mcQuestions = [
            {
                id: 1,
                text: "Temperature is a measure of:",
                options: [
                    "A. The total energy of a system",
                    "B. The average kinetic energy of the particles in a system",
                    "C. The potential energy of a system",
                    "D. The heat content of a system"
                ],
                answer: "B",
                explanation: "<strong>B is correct.</strong> Temperature is proportional to the <em>average translational kinetic energy</em> of particles. Total energy includes potential energy. Heat content depends on mass and specific heat."
            },
            {
                id: 2,
                text: "If the length of a simple pendulum is doubled, what happens to its time period?",
                options: [
                    "A. Remains the same",
                    "B. Doubles",
                    "C. Increases by \\(\\sqrt{2}\\) times",
                    "D. Decreases by \\(\\sqrt{2}\\) times"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> For a simple pendulum: \\(T = 2\\pi \\sqrt{\\frac{L}{g}}\\). If L → 2L, then \\(T' = 2\\pi \\sqrt{\\frac{2L}{g}} = \\sqrt{2} \\cdot 2\\pi \\sqrt{\\frac{L}{g}} = \\sqrt{2} T\\). Period increases by √2."
            },
            {
                id: 3,
                text: "Which of the following thermodynamic processes occurs at constant volume?",
                options: [
                    "A. Isothermal",
                    "B. Isobaric",
                    "C. Isochoric",
                    "D. Adiabatic"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> Isochoric = constant volume. Isothermal = constant T. Isobaric = constant P. Adiabatic = no heat exchange (Q=0)."
            },
            {
                id: 4,
                text: "Which one of the following statements is correct?",
                options: [
                    "A. Temperature is defined as the flow of energy from one object to another.",
                    "B. The zeroth law of thermodynamics is a generalization of the law of conservation of energy.",
                    "C. Heat is defined as the flow of energy from one object to another.",
                    "D. All the three laws of thermodynamics may not require temperature dependency."
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> Heat is energy transfer due to temperature difference. A is wrong (temperature ≠ flow). B is wrong (Zeroth law defines thermal equilibrium). D is wrong (all laws involve temperature)."
            },
            {
                id: 5,
                text: "Which one of the following is NOT the characteristic of simple harmonic motion?",
                options: [
                    "A. The amplitude A is constant",
                    "B. The frequency and period are independent of the amplitude",
                    "C. The fluctuating quantity can be expressed in terms of sinusoidal function of a single frequency.",
                    "D. The amplitude can be decrease with time"
                ],
                answer: "D",
                explanation: "<strong>D is correct (NOT a characteristic).</strong> In ideal SHM, amplitude is constant. Amplitude decreasing with time is <strong>damped</strong> harmonic motion, NOT ideal SHM. A, B, C are all true for SHM."
            },
            {
                id: 6,
                text: "A tank contains water up to a height of 5 meters. What is the pressure at the bottom of the tank? (Assume g = 10m/s² and density of water ρ = 1000kg/m³)",
                options: [
                    "A. 50 KPa",
                    "B. 0.5 KPa",
                    "C. 500 KPa",
                    "D. 0.05 KPa"
                ],
                answer: "A",
                explanation: "<strong>A is correct.</strong> Hydrostatic pressure: P = ρgh = (1000 kg/m³)(10 m/s²)(5 m) = 50,000 Pa = 50 kPa."
            },
            {
                id: 7,
                text: "The heat required to change a substance from the solid to the liquid state is called ______.",
                options: [
                    "A. Heat of fusion",
                    "B. Heat of Vaporization",
                    "C. Latent heat",
                    "D. Specific heat"
                ],
                answer: "A",
                explanation: "<strong>A is correct.</strong> Heat of fusion = solid ↔ liquid. Heat of vaporization = liquid ↔ gas. Latent heat is the general term (includes both). Specific heat is temperature change per degree."
            },
            {
                id: 8,
                text: "Which of the following is NOT a mode of heat transfer?",
                options: [
                    "A. Conduction",
                    "B. Convection",
                    "C. Radiation",
                    "D. Diffusion"
                ],
                answer: "D",
                explanation: "<strong>D is correct.</strong> The three modes of heat transfer are conduction, convection, and radiation. Diffusion is mass transfer (particles moving from high to low concentration), not heat transfer."
            },
            {
                id: 9,
                text: "A small block is attached to an ideal spring and is moving in SHM on a horizontal, frictionless surface. The amplitude of the motion is 0.20m and the period is π s. What is acceleration of the block when x = 0.10m?",
                options: [
                    "A. -0.4 m/s²",
                    "B. -0.02 m/s²",
                    "C. 4.0 m/s²",
                    "D. 0.2π m/s²"
                ],
                answer: "A",
                explanation: "<strong>A is correct.</strong> For SHM: a = -ω²x. T = π s → ω = 2π/T = 2π/π = 2 rad/s. So ω² = 4. At x = 0.10 m, a = -(4)(0.10) = -0.4 m/s²."
            },
            {
                id: 10,
                text: "Which one of the following is NOT transverse wave?",
                options: [
                    "A. Water wave",
                    "B. TV wave",
                    "C. Sound wave",
                    "D. Radio wave"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> Sound waves are longitudinal (compression/rarefaction). Water waves are surface waves (combination, but often considered transverse). TV and radio waves are electromagnetic (transverse)."
            },
            {
                id: 11,
                text: "Which of the following are NOT characteristics of ideal fluid flow?",
                options: [
                    "A. The internal friction between adjacent layers of the fluid is negligible.",
                    "B. The velocity at each point of the fluid varies with time.",
                    "C. Density of the fluid is constant",
                    "D. The fluid is non-viscous"
                ],
                answer: "B",
                explanation: "<strong>B is correct (NOT a characteristic).</strong> Ideal fluid flow is often considered <em>steady</em> (velocity at a point constant with time). If velocity varies with time → unsteady flow. A, C, D are characteristics of ideal flow."
            },
            {
                id: 12,
                text: "How much heat is required to melt 0.7 kilograms of ice at 0 degrees Celsius? (Latent heat of fusion of ice is 334 kJ/kg)",
                options: [
                    "A. 233.8 kJ",
                    "B. 334 kJ",
                    "C. 500 kJ",
                    "D. 668 kJ"
                ],
                answer: "A",
                explanation: "<strong>A is correct.</strong> Q = mL = (0.7 kg)(334 kJ/kg) = 233.8 kJ. No temperature change occurs during phase change."
            },
            {
                id: 13,
                text: "Which of the following statements is an example of linear oscillation?",
                options: [
                    "A. Oscillation of mass spring system.",
                    "B. Oscillation of body dropped in a tunnel along earth diameter.",
                    "C. Oscillation of strings of musical instruments.",
                    "D. All of the above"
                ],
                answer: "D",
                explanation: "<strong>D is correct.</strong> All are examples of linear oscillations where restoring force ∝ displacement (Hooke's law)."
            },
            {
                id: 14,
                text: "The first law thermodynamic for an adiabatic process takes the form",
                options: [
                    "A. ΔU = 0",
                    "B. ΔU = Q",
                    "C. ΔU = W",
                    "D. ΔU = Q - P(V_f - V_i)"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> First law: ΔU = Q - W. For adiabatic, Q = 0, so ΔU = -W. If W is work done ON system, ΔU = W."
            },
            {
                id: 15,
                text: "Which one of the following is NOT true",
                options: [
                    "A. All points at same level in a fluid have same pressure.",
                    "B. Fluid pressure increases with increase in the depth of the fluid.",
                    "C. Fluid pressure does depend on the shape of the container.",
                    "D. Fluid pressure depends on its density."
                ],
                answer: "C",
                explanation: "<strong>C is correct (NOT true).</strong> Fluid pressure at a given depth is independent of container shape (hydrostatic paradox). Depends only on density, gravity, and depth."
            },
            {
                id: 16,
                text: "A load of 1 kg is suspended from a wire of length 1.1m and of an area of cross-section 1mm². (Take Young's modulus of the material is 1.1 × 10¹¹ N/m² and g = 10 m/s²). What will be the increase in its length?",
                options: [
                    "A. 1 mm.",
                    "B. 0.1 mm.",
                    "C. 2 mm.",
                    "D. 0.001 mm."
                ],
                answer: "B",
                explanation: "<strong>B is correct.</strong> Y = (F/A) / (ΔL/L). F = mg = 10 N. A = 1 mm² = 1×10⁻⁶ m². L = 1.1 m. ΔL = (F·L)/(A·Y) = (10×1.1)/(1×10⁻⁶ × 1.1×10¹¹) = 11/(1.1×10⁵) = 1×10⁻⁴ m = 0.1 mm."
            },
            {
                id: 17,
                text: "Two identical containers are filled with different liquids: one with water and the other with oil (which is less dense than water). Which container experiences greater pressure at the bottom?",
                options: [
                    "A. The container with water",
                    "B. The container with oil",
                    "C. Both containers experience the same pressure",
                    "D. It depends on the volume of the liquids"
                ],
                answer: "A",
                explanation: "<strong>A is correct.</strong> Pressure at bottom: P = ρgh. Same height h, same g, but ρ_water > ρ_oil, so P_water > P_oil."
            },
            {
                id: 18,
                text: "A container is filled with water to a depth of 4 meters. Which of the following factors does NOT affect the pressure at the bottom of the container?",
                options: [
                    "A. The density of the water",
                    "B. The acceleration due to gravity",
                    "C. The surface area of the water",
                    "D. The depth of the water"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> Hydrostatic pressure P = ρgh depends on density (ρ), gravity (g), and depth (h). Surface area does NOT affect pressure at bottom."
            },
            {
                id: 19,
                text: "If the room temperature is 298K, So what is the value of the room temperature in a degree Fahrenheit?",
                options: [
                    "A. 32 °F",
                    "B. 100 °F",
                    "C. 77 °F",
                    "D. 212 °F"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> K to °C: °C = K - 273 = 298 - 273 = 25°C. °F = (9/5)°C + 32 = (9/5)×25 + 32 = 45 + 32 = 77°F."
            },
            {
                id: 20,
                text: "Which of the following waves are both mechanical and transverse?",
                options: [
                    "A. Radio wave",
                    "B. Water wave",
                    "C. Sound wave",
                    "D. X-rays"
                ],
                answer: "B",
                explanation: "<strong>B is correct.</strong> Water waves are mechanical (require medium) and transverse (surface waves have transverse component). Radio waves and X-rays are EM (not mechanical). Sound waves are mechanical but longitudinal."
            },
            {
                id: 21,
                text: "Metal A has a coefficient of linear expansion (α_A) that is three times greater than the coefficient of linear expansion of metal B (α_B). How does their coefficient of areal expansion (β_A and β_B) of these two metals be related?",
                options: [
                    "A. β_A = β_B",
                    "B. β_A = 3β_B",
                    "C. β_A = 1.5β_B",
                    "D. β_A = 2β_B"
                ],
                answer: "B",
                explanation: "<strong>B is correct.</strong> For isotropic materials, β = 2α. So β_A = 2α_A = 2(3α_B) = 6α_B. β_B = 2α_B. Therefore β_A = 3β_B."
            },
            {
                id: 22,
                text: "The amount of heat energy required to produce a phase change of a 1kg of substance at a constant temperature is,",
                options: [
                    "A. Heat capacity",
                    "B. Specific heat capacity",
                    "C. Latent heat of fusion",
                    "D. Latent heat"
                ],
                answer: "D",
                explanation: "<strong>D is correct.</strong> Latent heat (L) is heat per unit mass for phase change at constant T."
            },
            {
                id: 23,
                text: "Which of the following factors does NOT affect the period of a spring-mass system?",
                options: [
                    "A. Mass of the object",
                    "B. Spring constant",
                    "C. Amplitude of oscillation",
                    "D. Acceleration due to gravity"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> For spring-mass: T = 2π√(m/k). Independent of amplitude (for ideal SHM) and gravity (horizontal spring)."
            },
            {
                id: 24,
                text: "Specific heat capacity is:",
                options: [
                    "A. The amount of heat required to raise the temperature of a unit mass of a substance by one degree Celsius.",
                    "B. The amount of heat required to change the state of a unit mass of a substance.",
                    "C. The amount of heat required to raise the temperature of a substance by one degree Celsius.",
                    "D. The amount of heat required to raise the temperature of a unit volume of a substance by one degree Celsius."
                ],
                answer: "A",
                explanation: "<strong>A is correct.</strong> Specific heat capacity = heat per unit mass per degree. B is latent heat. C is heat capacity. D is volumetric heat capacity."
            },
            {
                id: 25,
                text: "The wavelength of a wave is defined as:",
                options: [
                    "A. The distance between two consecutive crests",
                    "B. The time for one complete oscillation",
                    "C. The maximum displacement from equilibrium",
                    "D. The number of cycles per second"
                ],
                answer: "A",
                explanation: "<strong>A is correct.</strong> Wavelength (λ) is spatial period - distance between successive identical points (crest-crest, trough-trough)."
            },
            {
                id: 26,
                text: "Which of the following is an example of forced oscillation?",
                options: [
                    "A. A child swinging freely on a swing",
                    "B. A mass on a spring vibrating naturally",
                    "C. A building vibrating during an earthquake",
                    "D. A pendulum in a clock"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> Forced oscillation occurs when an external periodic force drives the system. Building during earthquake = forced vibration."
            },
            {
                id: 27,
                text: "According to the second law of thermodynamics, heat cannot spontaneously flow from:",
                options: [
                    "A. A hot body to a cold body",
                    "B. A cold body to a hot body",
                    "C. A body at high pressure to low pressure",
                    "D. A body at low pressure to high pressure"
                ],
                answer: "B",
                explanation: "<strong>B is correct.</strong> Second law: Heat cannot spontaneously flow from colder to hotter body without external work."
            },
            {
                id: 28,
                text: "What is the SI unit of Young's modulus?",
                options: [
                    "A. N/m",
                    "B. N/m²",
                    "C. N·m",
                    "D. N·m²"
                ],
                answer: "B",
                explanation: "<strong>B is correct.</strong> Young's modulus = stress/strain. Stress = Force/Area (N/m² or Pa). Strain is dimensionless."
            },
            {
                id: 29,
                text: "A wave has frequency 50 Hz and wavelength 2 m. What is its speed?",
                options: [
                    "A. 25 m/s",
                    "B. 48 m/s",
                    "C. 52 m/s",
                    "D. 100 m/s"
                ],
                answer: "D",
                explanation: "<strong>D is correct.</strong> Wave speed v = fλ = 50 Hz × 2 m = 100 m/s."
            },
            {
                id: 30,
                text: "Which of the following is NOT a property of an ideal gas?",
                options: [
                    "A. Molecules occupy negligible volume",
                    "B. No intermolecular forces",
                    "C. Collisions are perfectly elastic",
                    "D. Molecules have significant potential energy"
                ],
                answer: "D",
                explanation: "<strong>D is correct (NOT a property).</strong> Ideal gas molecules have negligible potential energy (only kinetic energy from motion)."
            },
            {
                id: 31,
                text: "The efficiency of a Carnot engine depends on:",
                options: [
                    "A. The working substance",
                    "B. The temperatures of the reservoirs",
                    "C. The design of the engine",
                    "D. The pressure of the working substance"
                ],
                answer: "B",
                explanation: "<strong>B is correct.</strong> Carnot efficiency η = 1 - T_c/T_h depends ONLY on absolute temperatures of hot and cold reservoirs."
            },
            {
                id: 32,
                text: "An incompressible fluid flows through a pipe of varying cross-section. Where is the fluid velocity highest?",
                options: [
                    "A. Where the pipe is widest",
                    "B. Where the pipe is narrowest",
                    "C. Velocity is constant throughout",
                    "D. At the entrance of the pipe"
                ],
                answer: "B",
                explanation: "<strong>B is correct.</strong> Equation of continuity: A₁v₁ = A₂v₂. For incompressible fluid, velocity is inversely proportional to cross-sectional area."
            },
            {
                id: 33,
                text: "Which of the following best describes resonance?",
                options: [
                    "A. When a system vibrates at its natural frequency",
                    "B. When a driving frequency matches the natural frequency, causing large amplitude",
                    "C. When two waves superpose",
                    "D. When energy is lost from an oscillating system"
                ],
                answer: "B",
                explanation: "<strong>B is correct.</strong> Resonance occurs when driving frequency equals system's natural frequency → maximum energy transfer → large amplitude oscillations."
            },
            {
                id: 34,
                text: "The absolute zero temperature is:",
                options: [
                    "A. 0°C",
                    "B. -273°F",
                    "C. 0 K",
                    "D. -273 K"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> Absolute zero = 0 K = -273.15°C = -459.67°F. At this temperature, molecular motion theoretically ceases."
            }
        ];

        // Part III: Completion Questions (3)
        this.completionQuestions = [
            {
                id: 1,
                text: "__________ is the maximum displacement of the oscillator from the equilibrium position.",
                answer: "Amplitude",
                acceptable: ["amplitude", "Amplitude"],
                explanation: "Amplitude (A) is the maximum displacement from equilibrium. Measured in meters in SI."
            },
            {
                id: 2,
                text: "__________ is a type of oscillatory system in which a body changes its position by itself.",
                answer: "Free oscillation",
                acceptable: ["free oscillation", "Free oscillation", "free oscillations"],
                explanation: "Free oscillation occurs when a system oscillates at its natural frequency without external driving force after initial displacement."
            },
            {
                id: 3,
                text: "__________ is the pressure due to the weight of the atmosphere exerted on the surface of the Earth.",
                answer: "Atmospheric pressure",
                acceptable: ["atmospheric pressure", "Atmospheric pressure", "air pressure"],
                explanation: "Atmospheric pressure at sea level is approximately 101.3 kPa or 1 atm. Caused by weight of air column above."
            }
        ];

        // ============ PART IV: PROBLEMS - FIXED FORMAT ============
        this.problems = [
            {
                id: 1,
                title: "Thermal Expansion of Steel Rod",
                problemText: "A steel rod with a linear thermal expansion coefficient of \\( 11 \\times 10^{-6} \\, ^\\circ C^{-1} \\) has a length of exactly 10 cm at \\( 20 \\, ^\\circ C \\).",
                parts: [
                    {
                        label: "a",
                        text: "How much longer is it at \\( 40 \\, ^\\circ C \\)? [1 point]",
                        answer: "0.0022 cm",
                        solution: `
                            <p><strong>Given:</strong></p>
                            <ul>
                                <li>α = 11 × 10⁻⁶ °C⁻¹</li>
                                <li>L₀ = 10 cm</li>
                                <li>T₁ = 20°C, T₂ = 40°C</li>
                                <li>ΔT = 40 - 20 = 20°C</li>
                            </ul>
                            <p><strong>Formula:</strong> ΔL = α L₀ ΔT</p>
                            <p>ΔL = (11 × 10⁻⁶)(10 cm)(20°C)</p>
                            <p>ΔL = (11 × 10⁻⁶)(200) = 2200 × 10⁻⁶ = <strong>0.0022 cm</strong></p>
                            <p class="mt-2"><strong>Answer:</strong> The rod is 0.0022 cm longer at 40°C.</p>
                        `
                    },
                    {
                        label: "b",
                        text: "What is the total length of the rod after expansion? [1 point]",
                        answer: "10.0022 cm",
                        solution: `
                            <p><strong>Given:</strong></p>
                            <ul>
                                <li>L₀ = 10 cm</li>
                                <li>ΔL = 0.0022 cm (from part a)</li>
                            </ul>
                            <p><strong>Formula:</strong> L = L₀ + ΔL</p>
                            <p>L = 10 cm + 0.0022 cm = <strong>10.0022 cm</strong></p>
                            <p class="mt-2"><strong>Answer:</strong> The total length at 40°C is 10.0022 cm.</p>
                        `
                    }
                ]
            },
            {
                id: 2,
                title: "Spring-Mass Oscillator",
                problemText: "A 2.0 kg glider attached to a spring with a force constant of 30.0 N/m oscillates on a horizontal, frictionless air track. At t = 0 the glider is released from rest at x = -5.0 cm. (That is, the spring is compressed by 5.0 cm.)",
                parts: [
                    {
                        label: "a",
                        text: "The period of its motion [1 point]",
                        answer: "1.62 s",
                        solution: `
                            <p><strong>Given:</strong></p>
                            <ul>
                                <li>m = 2.0 kg</li>
                                <li>k = 30.0 N/m</li>
                                <li>A = 5.0 cm = 0.05 m</li>
                            </ul>
                            <p><strong>Formula:</strong> T = 2π √(m/k)</p>
                            <p>T = 2π √(2.0 kg / 30.0 N/m)</p>
                            <p>T = 2π √(0.06667) = 2π × 0.2582</p>
                            <p>T = <strong>1.62 s</strong></p>
                        `
                    },
                    {
                        label: "b",
                        text: "The maximum value of its speed [1 point]",
                        answer: "0.194 m/s",
                        solution: `
                            <p><strong>Given:</strong></p>
                            <ul>
                                <li>ω = 2π/T = 2π/1.622 = 3.87 rad/s</li>
                                <li>A = 0.05 m</li>
                            </ul>
                            <p><strong>Formula:</strong> v_max = ωA</p>
                            <p>v_max = (3.87 rad/s)(0.05 m) = <strong>0.194 m/s</strong></p>
                            <p>Alternative: v_max = A√(k/m) = 0.05 × √(30/2) = 0.05 × 3.873 = 0.194 m/s</p>
                        `
                    },
                    {
                        label: "c",
                        text: "The maximum value of its acceleration [1 point]",
                        answer: "0.75 m/s²",
                        solution: `
                            <p><strong>Given:</strong></p>
                            <ul>
                                <li>ω² = k/m = 30/2 = 15 s⁻²</li>
                                <li>A = 0.05 m</li>
                            </ul>
                            <p><strong>Formula:</strong> a_max = ω²A</p>
                            <p>a_max = (15 rad²/s²)(0.05 m) = <strong>0.75 m/s²</strong></p>
                        `
                    }
                ]
            }
        ];

        // ============ STATE VARIABLES ============
        this.tfScore = 0;
        this.mcScore = 0;
        this.completionScore = 0;
        this.totalAnswered = 0;
        this.totalCorrect = 0;
        
        this.answeredTF = new Set();
        this.answeredMC = new Set();
        this.answeredCompletion = new Set();
        
        this.totalQuestions = this.tfQuestions.length + this.mcQuestions.length + this.completionQuestions.length;

        // ============ INITIALIZE ============
        this.init();
    }

    init() {
        this.renderTFQuestions();
        this.renderMCQuestions();
        this.renderCompletionQuestions();
        this.renderProblems();
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
        const container = document.getElementById('tf-questions');
        if (!container) return;
        
        container.innerHTML = this.tfQuestions.map(q => `
            <div class="question-card" id="tf-${q.id}">
                <div class="question-text">${q.id}. ${q.text}</div>
                <div class="tf-buttons">
                    <button class="tf-btn" onclick="exam2017.checkTFAnswer(${q.id}, true)">TRUE</button>
                    <button class="tf-btn" onclick="exam2017.checkTFAnswer(${q.id}, false)">FALSE</button>
                </div>
                <div class="explanation-box" id="tf-explanation-${q.id}">
                    <div class="explanation-title"><i class="fas fa-lightbulb"></i> Explanation</div>
                    ${q.explanation}
                </div>
            </div>
        `).join('');
    }

    // ============ RENDER MULTIPLE CHOICE ============
    renderMCQuestions() {
        const container = document.getElementById('mc-questions');
        if (!container) return;
        
        container.innerHTML = this.mcQuestions.map(q => `
            <div class="question-card" id="mc-${q.id}">
                <div class="question-text">${q.id}. ${q.text}</div>
                <div class="mc-options">
                    ${q.options.map((opt, i) => {
                        const letter = String.fromCharCode(65 + i);
                        return `<button class="option-btn" onclick="exam2017.checkMCAnswer(${q.id}, '${letter}')">${opt}</button>`;
                    }).join('')}
                </div>
                <div class="explanation-box" id="mc-explanation-${q.id}">
                    <div class="explanation-title"><i class="fas fa-lightbulb"></i> Explanation</div>
                    ${q.explanation}
                </div>
            </div>
        `).join('');
    }

    // ============ RENDER COMPLETION - WITH BUTTON ============
    renderCompletionQuestions() {
        const container = document.getElementById('completion-questions');
        if (!container) return;
        
        container.innerHTML = this.completionQuestions.map(q => `
            <div class="completion-card" id="completion-${q.id}">
                <div class="completion-question">${q.id}. ${q.text}</div>
                <div class="completion-input-group">
                    <input type="text" class="completion-input" id="completion-input-${q.id}" 
                           placeholder="Type your answer here...">
                    <button class="btn-check-answer" onclick="exam2017.checkCompletionAnswer(${q.id})">
                        <i class="fas fa-check"></i> Check Answer
                    </button>
                </div>
                <div id="completion-feedback-${q.id}" class="completion-feedback"></div>
                <div class="explanation-box" id="completion-explanation-${q.id}">
                    <div class="explanation-title"><i class="fas fa-lightbulb"></i> Explanation</div>
                    ${q.explanation}
                </div>
            </div>
        `).join('');
    }

    // ============ RENDER PROBLEMS - FIXED FORMAT ============
    renderProblems() {
        const container = document.getElementById('problems-container');
        if (!container) return;
        
        container.innerHTML = this.problems.map(problem => `
            <div class="workout-card">
                <h4>
                    <span class="badge bg-primary me-2">${problem.id}.</span>
                    ${problem.title}
                </h4>
                
                <div class="problem-text">
                    ${problem.problemText}
                </div>
                
                ${problem.parts.map(part => `
                    <div class="problem-part">
                        <p><strong>${part.label})</strong> ${part.text}</p>
                        <button class="btn-show-solution" onclick="exam2017.toggleSolution('${problem.id}${part.label}')">
                            <i class="fas fa-calculator"></i> Show Solution
                        </button>
                        <div class="solution-box" id="solution-${problem.id}${part.label}">
                            <div class="solution-title">
                                <i class="fas fa-check-circle"></i> Solution
                            </div>
                            ${part.solution}
                        </div>
                    </div>
                `).join('')}
            </div>
        `).join('');
        
        // Render MathJax after adding content
        setTimeout(() => this.renderMathJax(), 100);
    }

    // ============ CHECK TRUE/FALSE ANSWER ============
    checkTFAnswer(id, userAnswer) {
        const question = this.tfQuestions.find(q => q.id === id);
        const card = document.getElementById(`tf-${id}`);
        if (!card) return;
        
        const buttons = card.querySelectorAll('.tf-btn');
        const explanation = document.getElementById(`tf-explanation-${id}`);
        
        buttons.forEach(btn => {
            btn.classList.remove('correct-answer', 'incorrect-answer', 'selected-true', 'selected-false');
        });
        
        const isCorrect = (userAnswer === question.answer);
        
        if (userAnswer) {
            buttons[0].classList.add(isCorrect ? 'correct-answer' : 'incorrect-answer');
        } else {
            buttons[1].classList.add(isCorrect ? 'correct-answer' : 'incorrect-answer');
        }
        
        // Mark correct answer
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

    // ============ CHECK MULTIPLE CHOICE ANSWER ============
    checkMCAnswer(id, userAnswer) {
        const question = this.mcQuestions.find(q => q.id === id);
        const card = document.getElementById(`mc-${id}`);
        if (!card) return;
        
        const buttons = card.querySelectorAll('.option-btn');
        const explanation = document.getElementById(`mc-explanation-${id}`);
        
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

    // ============ CHECK COMPLETION ANSWER ============
    checkCompletionAnswer(id) {
        const question = this.completionQuestions.find(q => q.id === id);
        const input = document.getElementById(`completion-input-${id}`);
        const feedback = document.getElementById(`completion-feedback-${id}`);
        const explanation = document.getElementById(`completion-explanation-${id}`);
        
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
        
        if (!this.answeredCompletion.has(id)) {
            this.totalAnswered++;
            if (isCorrect) {
                this.completionScore++;
                this.totalCorrect++;
            }
            this.answeredCompletion.add(id);
            this.updateStats();
        }
        
        if (explanation) {
            explanation.classList.add('show');
        }
    }

    // ============ TOGGLE SOLUTION VISIBILITY ============
    toggleSolution(id) {
        const solution = document.getElementById(`solution-${id}`);
        if (solution) {
            if (solution.style.display === 'none' || solution.style.display === '') {
                solution.style.display = 'block';
                // Render MathJax in solution
                setTimeout(() => this.renderMathJax(), 50);
            } else {
                solution.style.display = 'none';
            }
        }
    }

    // ============ UPDATE STATISTICS ============
    updateStats() {
        // Update scores
        document.getElementById('tf-score').textContent = this.tfScore;
        document.getElementById('mc-score').textContent = this.mcScore;
        document.getElementById('completion-score').textContent = this.completionScore;
        
        const totalPossible = this.tfQuestions.length + this.mcQuestions.length + this.completionQuestions.length;
        const totalCorrectAll = this.tfScore + this.mcScore + this.completionScore;
        const percentage = totalPossible > 0 ? Math.round((totalCorrectAll / totalPossible) * 100) : 0;
        
        document.getElementById('total-score').textContent = `${percentage}%`;
        
        // Update progress bar
        const progressBar = document.getElementById('progress-bar');
        const answeredCount = document.getElementById('answered-count');
        const correctCount = document.getElementById('correct-count');
        
        if (progressBar) {
            const progressPercent = (this.totalAnswered / this.totalQuestions) * 100;
            progressBar.style.width = `${progressPercent}%`;
            progressBar.setAttribute('aria-valuenow', progressPercent);
        }
        
        if (answeredCount) answeredCount.textContent = this.totalAnswered;
        if (correctCount) correctCount.textContent = this.totalCorrect;
    }

    // ============ SETUP EVENT LISTENERS ============
    setupEventListeners() {
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Escape key to reset any active states
            if (e.key === 'Escape') {
                // Optional: clear any active states
            }
        });
    }
}

// ============ INITIALIZE EXAM ============
document.addEventListener('DOMContentLoaded', () => {
    window.exam2017 = new PhysicsExam2017();
});

// ============ EXPORT FUNCTIONS FOR GLOBAL ACCESS ============
window.checkTFAnswer = (id, answer) => window.exam2017?.checkTFAnswer(id, answer);
window.checkMCAnswer = (id, answer) => window.exam2017?.checkMCAnswer(id, answer);
window.checkCompletionAnswer = (id) => window.exam2017?.checkCompletionAnswer(id);
window.toggleSolution = (id) => window.exam2017?.toggleSolution(id);