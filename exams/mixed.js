/**
 * MIXED YEAR PHYSICS EXAM - COMPLETE VERSION
 * Arba Minch University | General Physics (Phys 1011)
 * No Dates | Full Definitions | All Questions
 */

class MixedPhysicsExam {
    constructor() {
        // ============ PART I: TRUE/FALSE (10 Questions) ============
        this.tfQuestions = [
            {
                id: 1,
                text: "Archimedes principle can be stated as any body completely or partially submerged in a fluid is buoyed up by a force equal to the weight of the fluid displaced by the body.",
                answer: true,
                explanation: "<strong>TRUE.</strong> This is the correct statement of Archimedes' principle. The buoyant force equals the weight of the fluid displaced. F_b = ρ_fluid × V_submerged × g."
            },
            {
                id: 2,
                text: "The region of space surrounding any electric charge contains magnetic field.",
                answer: false,
                explanation: "<strong>FALSE.</strong> A region surrounding an electric charge contains an <em>electric</em> field. Magnetic fields are produced by moving charges (currents) or changing electric fields, not by stationary charges."
            },
            {
                id: 3,
                text: "An oscillation is a disturbance in a physical system that is repetitive in time.",
                answer: true,
                explanation: "<strong>TRUE.</strong> Oscillation is defined as repetitive, periodic motion about an equilibrium position. Each complete cycle takes one period T."
            },
            {
                id: 4,
                text: "Two objects are in thermal equilibrium with each other if they exchange energy when they are in thermal contact.",
                answer: false,
                explanation: "<strong>FALSE.</strong> Two objects are in thermal equilibrium when they are in thermal contact and <em>do not exchange</em> net energy. They have the same temperature (Zeroth Law)."
            },
            {
                id: 5,
                text: "The electric field lines point outward from the positive sources charge.",
                answer: true,
                explanation: "<strong>TRUE.</strong> By convention, electric field lines originate on positive charges and terminate on negative charges. They point radially outward from positive charges, inward toward negative charges."
            },
            {
                id: 6,
                text: "In simple harmonic motion, the maximum speed occurs at the equilibrium point.",
                answer: true,
                explanation: "<strong>TRUE.</strong> v_max = ωA occurs at equilibrium (x=0) where all energy is kinetic. At extreme points, velocity is zero and energy is all potential."
            },
            {
                id: 7,
                text: "The period of a spring-mass system depends on the amplitude of oscillation.",
                answer: false,
                explanation: "<strong>FALSE.</strong> T = 2π√(m/k) is independent of amplitude for ideal SHM. This is the property of isochronous oscillations - period is constant regardless of amplitude."
            },
            {
                id: 8,
                text: "Heat is the transfer of energy due to temperature difference.",
                answer: true,
                explanation: "<strong>TRUE.</strong> Heat is defined as energy transfer between systems due solely to a temperature difference. It flows spontaneously from hot to cold."
            },
            {
                id: 9,
                text: "All electromagnetic waves are transverse waves.",
                answer: true,
                explanation: "<strong>TRUE.</strong> EM waves consist of oscillating electric and magnetic fields perpendicular to each other and to the direction of propagation, making them transverse."
            },
            {
                id: 10,
                text: "The resistance of a conductor depends only on its material, not on its dimensions.",
                answer: false,
                explanation: "<strong>FALSE.</strong> Resistance R = ρL/A depends on resistivity (material), length, and cross-sectional area. Both material and dimensions affect resistance."
            }
        ];

        // ============ PART II: MATCHING - FULL DEFINITIONS ============
        this.matchingQuestions = {
            columnA: [
                { id: 1, text: "A thermodynamic process which occurs at constant pressure." },
                { id: 2, text: "It is a process which involves no change in the temperature of the system." },
                { id: 3, text: "The system does not exchange heat with its surrounding (Q = 0)." },
                { id: 4, text: "A process that takes place at constant volume." },
                { id: 5, text: "A process that originates and terminates at the same state (ΔU = 0)." }
            ],
            columnB: [
                { id: 'A', text: "Isobaric process" },
                { id: 'B', text: "Isothermal process" },
                { id: 'C', text: "Cyclic process" },
                { id: 'D', text: "Adiabatic process" },
                { id: 'E', text: "Isochoric process" }
            ],
            answers: {
                1: 'A', // Isobaric → Constant pressure
                2: 'B', // Isothermal → Constant temperature
                3: 'D', // Adiabatic → No heat exchange (Q=0)
                4: 'E', // Isochoric → Constant volume
                5: 'C'  // Cyclic → Returns to initial state, ΔU=0
            },
            explanations: {
                1: "<strong>Isobaric process:</strong> A thermodynamic process that occurs at constant pressure. The work done is W = PΔV, and the heat exchanged is Q = ΔU + PΔV.",
                2: "<strong>Isothermal process:</strong> A process that occurs at constant temperature. For an ideal gas, ΔU = 0, so by first law, Q = W. The process is slow enough to maintain thermal equilibrium.",
                3: "<strong>Adiabatic process:</strong> A process in which the system does not exchange heat with its surroundings (Q = 0). The system is thermally isolated. From first law, ΔU = -W.",
                4: "<strong>Isochoric process:</strong> A process that takes place at constant volume. Since ΔV = 0, no work is done (W = 0). From first law, ΔU = Q.",
                5: "<strong>Cyclic process:</strong> A process that originates and terminates at the same thermodynamic state. Since the system returns to its initial state, ΔU = 0, and therefore Q = W."
            }
        };

        // ============ PART III: MULTIPLE CHOICE (27 Questions) ============
        this.mcQuestions = [
            // ---- Mechanics & Oscillations (4 questions) ----
            {
                id: 1,
                topic: "Mechanics & Oscillations",
                text: "When an object is oscillating in simple harmonic motion (SHM) in the vertical direction, its maximum speed occurs when the object:",
                options: [
                    "A. is at its highest point.",
                    "B. is at its lowest point.",
                    "C. is at the equilibrium point."
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> In SHM, speed is maximum at the equilibrium position. At extreme points (highest/lowest), velocity is zero. v_max = ωA occurs at x = 0."
            },
            {
                id: 2,
                topic: "Mechanics & Oscillations",
                text: "For a simple harmonic oscillator, which of the following pairs of vector quantities can't both point in the same direction?",
                options: [
                    "A. Position and acceleration",
                    "B. Velocity and acceleration",
                    "C. Position and velocity",
                    "D. None"
                ],
                answer: "A",
                explanation: "<strong>A is correct.</strong> In SHM, acceleration is always opposite to displacement (a = -ω²x). Therefore position and acceleration always point in opposite directions, never the same."
            },
            {
                id: 3,
                topic: "Mechanics & Oscillations",
                text: "A simple pendulum of length l and mass (bob) m is suspended vertically. The magnitude of the restoring force acting on the pendulum is:",
                options: [
                    "A. mg tan θ",
                    "B. mg cos θ",
                    "C. mg sin θ"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> The restoring force is the component of weight tangent to the arc: F = -mg sin θ. For small angles, sin θ ≈ θ, giving F ≈ -mgθ, which is proportional to displacement."
            },
            {
                id: 4,
                topic: "Mechanics & Oscillations",
                text: "For simple harmonic motion (SHM) to occur:",
                options: [
                    "A. There must be a stable equilibrium position.",
                    "B. There must be no dissipation of energy.",
                    "C. The acceleration is proportional to the displacement and opposite in direction.",
                    "D. All of the above"
                ],
                answer: "D",
                explanation: "<strong>D is correct.</strong> All three conditions are necessary for ideal SHM: (1) stable equilibrium provides restoring force, (2) no energy loss gives constant amplitude, (3) a ∝ -x is the defining equation of SHM."
            },
            
            // ---- Thermodynamics (7 questions) ----
            {
                id: 5,
                topic: "Thermodynamics",
                text: "What is the name of the statement: 'When two systems are in thermal equilibrium with a third system, then they are in thermal equilibrium with each other'?",
                options: [
                    "A. First law of thermodynamics",
                    "B. Zeroth law of thermodynamics",
                    "C. Second law of thermodynamics",
                    "D. Third law of thermodynamics"
                ],
                answer: "B",
                explanation: "<strong>B is correct.</strong> The Zeroth Law establishes temperature as a fundamental property and allows the use of thermometers. It is called 'zeroth' because it was formulated after the first and second laws but logically precedes them."
            },
            {
                id: 6,
                topic: "Thermodynamics",
                text: "Thermal energy can change form and location, but cannot be created or destroyed is:",
                options: [
                    "A. The 2nd Law of Thermodynamics",
                    "B. The 1st Law of Thermodynamics",
                    "C. The 3rd Law of Thermodynamics",
                    "D. The Zeroth Law of Thermodynamics"
                ],
                answer: "B",
                explanation: "<strong>B is correct.</strong> The First Law of Thermodynamics is a statement of conservation of energy: ΔU = Q - W. Energy can be transferred (heat, work) but not created or destroyed."
            },
            {
                id: 7,
                topic: "Thermodynamics",
                text: "If ΔU and ΔW represent the increase in internal energy and work done by the system respectively, which is true for an adiabatic process?",
                options: [
                    "A. ΔU = 0",
                    "B. ΔU = Q",
                    "C. ΔU = ΔW",
                    "D. ΔU = -ΔW"
                ],
                answer: "D",
                explanation: "<strong>D is correct.</strong> For an adiabatic process, Q = 0. From First Law: ΔU = Q - W = 0 - W = -W. Since W is work done BY the system, ΔU = -ΔW."
            },
            {
                id: 8,
                topic: "Thermodynamics",
                text: "The transfer of heat by the movement of the heated particles themselves is referred to as:",
                options: [
                    "A. Conduction",
                    "B. Radiation",
                    "C. Convection",
                    "D. Diffusion"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> Convection is heat transfer through the bulk movement of fluid particles. Conduction is particle collisions without bulk motion. Radiation is via EM waves."
            },
            {
                id: 9,
                topic: "Thermodynamics",
                text: "The thermodynamic work done by the system on the surrounding is considered as:",
                options: [
                    "A. positive",
                    "B. negative",
                    "C. zero",
                    "D. undefined"
                ],
                answer: "A",
                explanation: "<strong>A is correct.</strong> By convention, work done BY the system is positive (energy leaving the system). Work done ON the system is negative (energy entering the system)."
            },
            {
                id: 10,
                topic: "Thermodynamics",
                text: "Which of the following is different from others?",
                options: [
                    "A. conduction",
                    "B. convection",
                    "C. vaporization",
                    "D. radiation"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> Conduction, convection, and radiation are the three modes of heat transfer. Vaporization is a phase change process (liquid → gas), not a mode of heat transfer."
            },
            {
                id: 11,
                topic: "Thermodynamics",
                text: "The amount of heat required to change the phase of a unit mass of a substance at constant temperature is called:",
                options: [
                    "A. Specific heat capacity",
                    "B. Latent heat",
                    "C. Heat capacity",
                    "D. Thermal conductivity"
                ],
                answer: "B",
                explanation: "<strong>B is correct.</strong> Latent heat (L) is the energy per unit mass required for a phase change at constant temperature. Q = mL. Specific heat is for temperature changes: Q = mcΔT."
            },
            
            // ---- Electricity & Magnetism (8 questions) ----
            {
                id: 12,
                topic: "Electricity & Magnetism",
                text: "What determines the direction of force between two charges?",
                options: [
                    "A. The magnitude of the charge",
                    "B. The sign of the charge",
                    "C. The distance between them",
                    "D. The medium between them"
                ],
                answer: "B",
                explanation: "<strong>B is correct.</strong> Like charges repel (same sign), opposite charges attract (different sign). The sign determines direction; magnitude determines strength."
            },
            {
                id: 13,
                topic: "Electricity & Magnetism",
                text: "Kirchhoff's loop rule is based on the law of conservation of:",
                options: [
                    "A. Charge",
                    "B. Energy",
                    "C. Momentum",
                    "D. Mass"
                ],
                answer: "B",
                explanation: "<strong>B is correct.</strong> Kirchhoff's loop rule states that the sum of potential differences around any closed loop is zero. This follows from conservation of energy - the work done by the electric field is path-independent."
            },
            {
                id: 14,
                topic: "Electricity & Magnetism",
                text: "Kirchhoff's junction (current) rule is an example of:",
                options: [
                    "A. Conservation of energy",
                    "B. Conservation of momentum",
                    "C. Conservation of charge",
                    "D. Conservation of mass"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> The junction rule states that the sum of currents entering a junction equals the sum leaving. This is a statement of conservation of electric charge - charge cannot accumulate at a junction."
            },
            {
                id: 15,
                topic: "Electricity & Magnetism",
                text: "Ohm's Law states that the potential difference across a device is equal to:",
                options: [
                    "A. the current divided by the resistance.",
                    "B. the resistance divided by the current.",
                    "C. the current flowing through the device times the resistance of the device.",
                    "D. the power times the current."
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> Ohm's Law: V = IR. Potential difference (voltage) equals current multiplied by resistance. This is a linear relationship valid for ohmic materials."
            },
            {
                id: 16,
                topic: "Electricity & Magnetism",
                text: "The amount of charge flowing through a cross-sectional area of a wire per unit of time is called:",
                options: [
                    "A. Voltage",
                    "B. Resistance",
                    "C. Current",
                    "D. Power"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> Electric current I = ΔQ/Δt, measured in amperes (C/s). It is the rate of flow of charge through a cross-section."
            },
            {
                id: 17,
                topic: "Electricity & Magnetism",
                text: "In the formula \\(\\mathbf{F} = q\\mathbf{v} \\times \\mathbf{B}\\):",
                options: [
                    "A. \\(\\mathbf{F}\\) must be perpendicular to \\(\\mathbf{B}\\) but not necessary to \\(\\mathbf{v}\\)",
                    "B. \\(\\mathbf{F}\\) must be perpendicular to \\(\\mathbf{v}\\) but not necessary to \\(\\mathbf{B}\\)",
                    "C. \\(\\mathbf{F}\\) must be perpendicular to both \\(\\mathbf{v}\\) and \\(\\mathbf{B}\\)",
                    "D. \\(\\mathbf{F}\\) is parallel to \\(\\mathbf{v}\\)"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> The cross product \\(\\mathbf{v} \\times \\mathbf{B}\\) produces a vector perpendicular to both \\(\\mathbf{v}\\) and \\(\\mathbf{B}\\). Therefore the magnetic force is always perpendicular to both velocity and magnetic field."
            },
            {
                id: 18,
                topic: "Electricity & Magnetism",
                text: "Induced emf is directly proportional to:",
                options: [
                    "A. Magnetic field strength",
                    "B. Area of the loop",
                    "C. Rate of change of flux",
                    "D. Resistance of the loop"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> Faraday's Law: \\(\\mathcal{E} = -d\\Phi_B/dt\\). The induced emf is proportional to the rate of change of magnetic flux, not the flux itself."
            },
            {
                id: 19,
                topic: "Electricity & Magnetism",
                text: "The SI unit of electric field is:",
                options: [
                    "A. N/C",
                    "B. J/C",
                    "C. V/m",
                    "D. Both A and C"
                ],
                answer: "D",
                explanation: "<strong>D is correct.</strong> Electric field can be expressed as N/C (force per charge) or V/m (potential difference per meter). Both are equivalent units."
            },
            
            // ---- Waves & Properties of Matter (8 questions) ----
            {
                id: 20,
                topic: "Waves & Properties of Matter",
                text: "Which of the following is an example for longitudinal wave?",
                options: [
                    "A. sound wave",
                    "B. light wave",
                    "C. water wave",
                    "D. radio wave"
                ],
                answer: "A",
                explanation: "<strong>A is correct.</strong> Sound waves are longitudinal - particles oscillate parallel to wave propagation. Light, radio are electromagnetic (transverse). Water waves are surface waves (combination)."
            },
            {
                id: 21,
                topic: "Waves & Properties of Matter",
                text: "When a transverse wave is moving through a medium, what is the action of the particles of the medium?",
                options: [
                    "A. They vibrate in a direction parallel to the direction in which the wave is moving.",
                    "B. They move forward with the wave.",
                    "C. They vibrate in a direction perpendicular to the direction in which the wave is moving.",
                    "D. They remain stationary."
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> In transverse waves, particle displacement is perpendicular to wave velocity. Examples: waves on strings, EM waves. The wave transfers energy, not matter."
            },
            {
                id: 22,
                topic: "Waves & Properties of Matter",
                text: "An observer detects an apparent change in the frequency of sound waves produced by an airplane passing overhead. This illustrates:",
                options: [
                    "A. the Doppler effect",
                    "B. resonance",
                    "C. interference",
                    "D. diffraction"
                ],
                answer: "A",
                explanation: "<strong>A is correct.</strong> The Doppler effect is the change in observed frequency due to relative motion between source and observer. Frequency increases as source approaches, decreases as it recedes."
            },
            {
                id: 23,
                topic: "Waves & Properties of Matter",
                text: "A type of elastic module that is the measure of the resistance to motion of the planes within a solid parallel to each other is:",
                options: [
                    "A. Young's Modulus",
                    "B. Shear Modulus",
                    "C. Bulk Modulus",
                    "D. Poisson's Ratio"
                ],
                answer: "B",
                explanation: "<strong>B is correct.</strong> Shear modulus (modulus of rigidity) measures resistance to shear deformation - parallel planes sliding past each other. Young's modulus is for tensile/compressive stress, bulk modulus for volume compression."
            },
            {
                id: 24,
                topic: "Waves & Properties of Matter",
                text: "The speed of sound in air depends on:",
                options: [
                    "A. Frequency",
                    "B. Wavelength",
                    "C. Temperature",
                    "D. Amplitude"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> Speed of sound in air v = √(γRT/M), proportional to √T. It increases with temperature. Independent of frequency and amplitude (for small amplitudes)."
            },
            {
                id: 25,
                topic: "Waves & Properties of Matter",
                text: "The phenomenon of bending of waves around obstacles is called:",
                options: [
                    "A. Reflection",
                    "B. Refraction",
                    "C. Diffraction",
                    "D. Interference"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> Diffraction is the bending of waves around obstacles or through openings. Reflection is bouncing, refraction is bending due to speed change, interference is superposition of waves."
            },
            {
                id: 26,
                topic: "Waves & Properties of Matter",
                text: "The relation between frequency f, wavelength λ, and wave speed v is:",
                options: [
                    "A. v = f/λ",
                    "B. v = λ/f",
                    "C. v = fλ",
                    "D. f = vλ"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> The fundamental wave equation: v = fλ. Speed = frequency × wavelength. All waves obey this relation."
            },
            {
                id: 27,
                topic: "Waves & Properties of Matter",
                text: "Young's modulus is a measure of:",
                options: [
                    "A. Resistance to shear",
                    "B. Resistance to volume change",
                    "C. Resistance to stretching/compression",
                    "D. Resistance to flow"
                ],
                answer: "C",
                explanation: "<strong>C is correct.</strong> Young's modulus Y = stress/strain = (F/A)/(ΔL/L). It measures resistance to tensile or compressive deformation along an axis."
            }
        ];

        // ============ PART IV: FILL IN THE BLANKS (5 Questions) ============
        this.fillQuestions = [
            {
                id: 1,
                text: "The time between adjacent passing crests of a wave is __________.",
                answer: "period",
                acceptable: ["period", "Period", "time period", "Time period"],
                explanation: "Period (T) is the time for one complete cycle. T = 1/f, measured in seconds."
            },
            {
                id: 2,
                text: "The reciprocal of conductivity of a material is __________.",
                answer: "resistivity",
                acceptable: ["resistivity", "Resistivity", "electrical resistivity"],
                explanation: "Resistivity ρ = 1/σ, where σ is conductivity. Resistivity is a material property, measured in Ω·m."
            },
            {
                id: 3,
                text: "Electromagnetic waves are produced by __________ charged particles and can propagate through both material medium and vacuum.",
                answer: "accelerated",
                acceptable: ["accelerated", "Accelerated", "accelerating", "Accelerating"],
                explanation: "Accelerated charges produce electromagnetic radiation. Constant velocity produces constant fields, not waves."
            },
            {
                id: 4,
                text: "During fair weather, the electric field due to the net charge on Earth points downward. Is Earth charged positively or negatively? __________.",
                answer: "negatively",
                acceptable: ["negatively", "Negative", "negative"],
                explanation: "Earth is negatively charged. Electric field lines point toward negative charges, so downward field means Earth's surface is negative."
            },
            {
                id: 5,
                text: "Elasticity depends on the __________ being deformed and on the nature of the deformation.",
                answer: "material",
                acceptable: ["material", "Material", "substance", "Substance"],
                explanation: "Elastic properties (Young's modulus, shear modulus, bulk modulus) are material properties. Different materials have different elastic responses."
            }
        ];

        // ============ PART V: PROBLEMS (5 Problems) ============
        this.problems = [
            // Problem 1: Differences between wave and oscillation
            {
                id: 1,
                title: "Wave vs Oscillation",
                problemText: "What is the difference between wave and oscillation?",
                type: "conceptual",
                answer: "See solution for complete comparison",
                solution: `
                    <div class="solution-content">
                        <h6>Oscillation:</h6>
                        <ul>
                            <li>Oscillation is the repetitive variation of a quantity about an equilibrium position.</li>
                            <li>It is localized - occurs in one place.</li>
                            <li>Example: mass on a spring, pendulum, vibrating string.</li>
                            <li>Described by parameters: amplitude, period, frequency, phase.</li>
                        </ul>
                        <h6 class="mt-3">Wave:</h6>
                        <ul>
                            <li>Wave is a disturbance that propagates through space and time.</li>
                            <li>It transfers energy from one point to another without transporting matter.</li>
                            <li>Example: sound waves, light waves, water waves.</li>
                            <li>Described by: wavelength, frequency, speed, amplitude.</li>
                        </ul>
                        <h6 class="mt-3">Key Difference:</h6>
                        <p>Oscillation is <strong>localized motion</strong> about equilibrium. Wave is <strong>propagating disturbance</strong> that travels through space. Oscillations can create waves when coupled to adjacent particles.</p>
                    </div>
                `
            },
            // Problem 2: Alternative energy sources
            {
                id: 2,
                title: "Alternative Energy Sources",
                problemText: "Write down at least three alternative sources of energy.",
                type: "conceptual",
                answer: "Solar, Wind, Hydroelectric, Geothermal, Biomass, Tidal",
                solution: `
                    <div class="solution-content">
                        <h6>Alternative Energy Sources:</h6>
                        <ol>
                            <li><strong>Solar Energy:</strong> Energy from sunlight, captured via photovoltaic cells or solar thermal systems.</li>
                            <li><strong>Wind Energy:</strong> Kinetic energy of wind converted to electricity using wind turbines.</li>
                            <li><strong>Hydroelectric Energy:</strong> Energy from flowing water, typically using dams and turbines.</li>
                            <li><strong>Geothermal Energy:</strong> Heat from Earth's interior, used for electricity generation or direct heating.</li>
                            <li><strong>Biomass Energy:</strong> Energy from organic materials (wood, crops, waste).</li>
                            <li><strong>Tidal/Wave Energy:</strong> Energy from ocean tides and waves.</li>
                        </ol>
                        <p class="mt-2">These are renewable and environmentally cleaner alternatives to fossil fuels.</p>
                    </div>
                `
            },
            // Problem 3: Faraday's and Lenz's laws
            {
                id: 3,
                title: "Electromagnetic Induction",
                problemText: "State Faraday's and Lenz's laws of electromagnetic induction.",
                type: "conceptual",
                answer: "See solution for complete statement",
                solution: `
                    <div class="solution-content">
                        <h6>Faraday's Law:</h6>
                        <p>The magnitude of the induced electromotive force (emf) in a circuit is equal to the rate of change of magnetic flux through the circuit.</p>
                        <p>\\[ \\mathcal{E} = -\\frac{d\\Phi_B}{dt} \\]</p>
                        <p>For a coil of N turns: \\[ \\mathcal{E} = -N\\frac{d\\Phi_B}{dt} \\]</p>
                        
                        <h6 class="mt-3">Lenz's Law:</h6>
                        <p>The direction of the induced emf is such that it opposes the change in magnetic flux that produces it.</p>
                        <p>This is the reason for the negative sign in Faraday's law. It is a consequence of conservation of energy.</p>
                        <p class="mt-2"><strong>Example:</strong> If a magnet moves toward a loop, the induced current creates a magnetic field that repels the magnet (opposes the motion).</p>
                    </div>
                `
            },
            // Problem 4: Spring-mass system
            {
                id: 4,
                title: "Spring-Mass Oscillator",
                problemText: "A body of unknown mass is attached to an ideal spring (k = 120 N/m) and vibrates at 6.00 Hz.",
                parts: [
                    {
                        label: "a",
                        text: "Find the period of oscillation.",
                        answer: "0.167 s",
                        solution: `
                            <p><strong>Formula:</strong> T = 1/f</p>
                            <p>T = 1 / 6.00 Hz = <strong>0.167 s</strong></p>
                        `
                    },
                    {
                        label: "b",
                        text: "Find the angular frequency (ω).",
                        answer: "37.7 rad/s",
                        solution: `
                            <p><strong>Formula:</strong> ω = 2πf</p>
                            <p>ω = 2π × 6.00 Hz = 12π = <strong>37.7 rad/s</strong></p>
                        `
                    },
                    {
                        label: "c",
                        text: "Find the mass attached to the spring.",
                        answer: "0.0844 kg",
                        solution: `
                            <p><strong>Formula:</strong> ω = √(k/m) → m = k/ω²</p>
                            <p>m = 120 N/m / (37.7 rad/s)²</p>
                            <p>m = 120 / 1421.29 = <strong>0.0844 kg</strong> (84.4 g)</p>
                        `
                    }
                ]
            },
            // Problem 5: Calorimetry - Lead and Iron
            {
                id: 5,
                title: "Calorimetry - Lead and Iron",
                problemText: "90 g of molten lead at 327.3°C is poured into a 300 g iron casting initially at 20.0°C. What is the final temperature?",
                data: {
                    m_lead: 0.090,
                    T_lead: 327.3,
                    m_iron: 0.300,
                    T_iron: 20.0,
                    c_lead: 128,
                    c_iron: 448,
                    L_f_lead: 24500
                },
                answer: "32.5°C",
                solution: `
                    <div class="calorimetry-card">
                        <h6>Given Data:</h6>
                        <ul>
                            <li>m_lead = 90 g = 0.090 kg, T_lead = 327.3°C (melting point)</li>
                            <li>m_iron = 300 g = 0.300 kg, T_iron = 20.0°C</li>
                            <li>c_lead = 128 J/kg°C, c_iron = 448 J/kg°C</li>
                            <li>L_f_lead = 24,500 J/kg (latent heat of fusion)</li>
                        </ul>
                        
                        <p><strong>Step 1: Heat released by lead as it solidifies</strong></p>
                        <p>Q₁ = m_lead × L_f = 0.090 kg × 24,500 J/kg = 2,205 J</p>
                        
                        <p><strong>Step 2: Heat released by solid lead cooling from 327.3°C to T_f</strong></p>
                        <p>Q₂ = m_lead × c_lead × (327.3 - T_f) = 0.090 × 128 × (327.3 - T_f) = 11.52 × (327.3 - T_f)</p>
                        
                        <p><strong>Step 3: Heat absorbed by iron warming from 20.0°C to T_f</strong></p>
                        <p>Q₃ = m_iron × c_iron × (T_f - 20.0) = 0.300 × 448 × (T_f - 20.0) = 134.4 × (T_f - 20.0)</p>
                        
                        <p><strong>Step 4: Heat balance (no heat loss)</strong></p>
                        <p>Q₁ + Q₂ = Q₃</p>
                        <p>2,205 + 11.52(327.3 - T_f) = 134.4(T_f - 20.0)</p>
                        <p>2,205 + 3,770.5 - 11.52T_f = 134.4T_f - 2,688</p>
                        <p>5,975.5 - 11.52T_f = 134.4T_f - 2,688</p>
                        <p>5,975.5 + 2,688 = 134.4T_f + 11.52T_f</p>
                        <p>8,663.5 = 145.92T_f</p>
                        <p>T_f = 8,663.5 / 145.92 = <strong>32.5°C</strong></p>
                    </div>
                `
            }
        ];

        // ============ STATE VARIABLES ============
        this.tfScore = 0;
        this.mcScore = 0;
        this.matchScore = 0;
        this.fillScore = 0;
        this.problemScore = 0;
        this.totalAnswered = 0;
        this.totalCorrect = 0;
        
        this.answeredTF = new Set();
        this.answeredMC = new Set();
        this.answeredMatch = new Set();
        this.answeredFill = new Set();
        this.answeredProblems = new Set();
        
        this.matchSelections = {};
        
        this.totalQuestions = this.tfQuestions.length + this.mcQuestions.length + 
                              Object.keys(this.matchingQuestions.answers).length + 
                              this.fillQuestions.length + this.problems.length;

        // Initialize
        this.init();
    }

    init() {
        this.renderTFQuestions();
        this.renderMatching();
        this.renderMCQuestions();
        this.renderFillQuestions();
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
        const container = document.getElementById('tf-questions-mixed');
        if (!container) return;
        
        this.tfQuestions.forEach((q, index) => {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.id = `tf-mixed-${q.id}`;
            
            card.innerHTML = `
                <div class="question-text">${index + 1}. ${q.text}</div>
                <div class="tf-buttons">
                    <button class="tf-btn" onclick="mixedExam.checkTFAnswer(${q.id}, true)">TRUE</button>
                    <button class="tf-btn" onclick="mixedExam.checkTFAnswer(${q.id}, false)">FALSE</button>
                </div>
                <div class="explanation-box" id="tf-mixed-explanation-${q.id}">
                    <div class="explanation-title"><i class="fas fa-lightbulb"></i> Explanation</div>
                    ${q.explanation}
                </div>
            `;
            
            container.appendChild(card);
        });
    }

    // ============ RENDER MATCHING - FULL DEFINITIONS ============
    renderMatching() {
        const container = document.getElementById('matching-container-mixed');
        if (!container) return;
        
        let columnAHTML = '<h5>Column A (Process Description)</h5>';
        this.matchingQuestions.columnA.forEach(item => {
            columnAHTML += `
                <div class="matching-item" id="match-item-${item.id}">
                    <div class="matching-number">${item.id}</div>
                    <div class="matching-text">${item.text}</div>
                    <select class="form-select matching-dropdown" id="match-select-${item.id}" onchange="mixedExam.checkMatchingAnswer(${item.id})">
                        <option value="">-- Select matching term --</option>
                        ${this.matchingQuestions.columnB.map(opt => 
                            `<option value="${opt.id}">${opt.id}. ${opt.text}</option>`
                        ).join('')}
                    </select>
                </div>
            `;
        });
        
        let columnBHTML = '<h5>Column B (Thermodynamic Process)</h5>';
        this.matchingQuestions.columnB.forEach(item => {
            columnBHTML += `
                <div class="matching-item">
                    <div class="matching-number">${item.id}</div>
                    <div class="matching-text">${item.text}</div>
                </div>
            `;
        });
        
        container.innerHTML = `
            <div class="matching-container">
                <div class="matching-grid">
                    <div class="matching-column">${columnAHTML}</div>
                    <div class="matching-column">${columnBHTML}</div>
                </div>
                <div class="mt-4 d-flex gap-2 flex-wrap">
                    <button class="btn-show-solution" onclick="mixedExam.checkAllMatching()" style="background: #6c5b7b;">
                        <i class="fas fa-check"></i> Check All Answers
                    </button>
                    <button class="btn-show-solution" onclick="mixedExam.resetMatching()" style="background: #95a5a6;">
                        <i class="fas fa-redo"></i> Reset
                    </button>
                </div>
                <div id="match-feedback-mixed" class="mt-4"></div>
                <div id="match-explanations-mixed" class="mt-4 p-3 bg-light rounded" style="display: none;"></div>
            </div>
        `;
    }

    // ============ RENDER MULTIPLE CHOICE ============
    renderMCQuestions() {
        const container = document.getElementById('mc-questions-mixed');
        if (!container) return;
        
        // Group by topic
        const topics = {
            "Mechanics & Oscillations": [],
            "Thermodynamics": [],
            "Electricity & Magnetism": [],
            "Waves & Properties of Matter": []
        };
        
        this.mcQuestions.forEach(q => {
            if (topics[q.topic]) {
                topics[q.topic].push(q);
            }
        });
        
        let html = '';
        
        // Render each topic section
        for (const [topic, questions] of Object.entries(topics)) {
            if (questions.length > 0) {
                html += `<h5 class="mt-4 mb-3" style="color: #6c5b7b; border-bottom: 2px solid #6c5b7b; padding-bottom: 0.5rem;">${topic}</h5>`;
                
                questions.sort((a, b) => a.id - b.id).forEach(q => {
                    const optionsHTML = q.options.map((opt, i) => {
                        const letter = String.fromCharCode(65 + i);
                        return `<button class="option-btn" onclick="mixedExam.checkMCAnswer(${q.id}, '${letter}')">${opt}</button>`;
                    }).join('');
                    
                    html += `
                        <div class="question-card" id="mc-mixed-${q.id}">
                            <div class="question-text">${q.id}. ${q.text}</div>
                            <div class="mc-options">
                                ${optionsHTML}
                            </div>
                            <div class="explanation-box" id="mc-mixed-explanation-${q.id}">
                                <div class="explanation-title"><i class="fas fa-lightbulb"></i> Explanation</div>
                                ${q.explanation}
                            </div>
                        </div>
                    `;
                });
            }
        }
        
        container.innerHTML = html;
    }

    // ============ RENDER FILL IN THE BLANKS ============
    renderFillQuestions() {
        const container = document.getElementById('fill-questions-mixed');
        if (!container) return;
        
        this.fillQuestions.forEach((q, index) => {
            const card = document.createElement('div');
            card.className = 'fill-card';
            card.id = `fill-mixed-${q.id}`;
            
            card.innerHTML = `
                <div class="fill-question">${index + 1}. ${q.text}</div>
                <div class="fill-input-group">
                    <input type="text" class="fill-input" id="fill-input-${q.id}" 
                           placeholder="Type your answer here...">
                    <button class="btn-check-answer" onclick="mixedExam.checkFillAnswer(${q.id})">
                        <i class="fas fa-check"></i> Check Answer
                    </button>
                </div>
                <div id="fill-feedback-${q.id}" class="completion-feedback"></div>
                <div class="explanation-box" id="fill-explanation-${q.id}">
                    <div class="explanation-title"><i class="fas fa-lightbulb"></i> Explanation</div>
                    ${q.explanation}
                </div>
            `;
            
            container.appendChild(card);
        });
    }

    // ============ RENDER PROBLEMS ============
    renderProblems() {
        const container = document.getElementById('problems-container-mixed');
        if (!container) return;
        
        this.problems.forEach(problem => {
            const card = document.createElement('div');
            card.className = 'problem-card';
            
            let partsHTML = '';
            
            if (problem.parts) {
                // Multi-part problem
                partsHTML = problem.parts.map(part => `
                    <div class="problem-part">
                        <p><strong>${part.label})</strong> ${part.text}</p>
                        <button class="btn-show-solution" onclick="mixedExam.toggleProblemSolution('${problem.id}', '${part.label}')">
                            <i class="fas fa-calculator"></i> Show Solution
                        </button>
                        <div class="solution-box" id="problem-solution-${problem.id}-${part.label}">
                            <div class="solution-title">
                                <i class="fas fa-check-circle"></i> Solution
                            </div>
                            ${part.solution}
                            <div class="mt-3 p-2 bg-light rounded">
                                <strong>Answer:</strong> ${part.answer}
                            </div>
                        </div>
                    </div>
                `).join('');
            } else {
                // Conceptual problem
                partsHTML = `
                    <div class="problem-part">
                        <button class="btn-show-solution" onclick="mixedExam.toggleProblemSolution('${problem.id}', 'full')">
                            <i class="fas fa-calculator"></i> Show Solution
                        </button>
                        <div class="solution-box" id="problem-solution-${problem.id}-full">
                            <div class="solution-title">
                                <i class="fas fa-check-circle"></i> Solution
                            </div>
                            ${problem.solution}
                            <div class="mt-3 p-2 bg-light rounded">
                                <strong>Answer:</strong> ${problem.answer}
                            </div>
                        </div>
                    </div>
                `;
            }
            
            card.innerHTML = `
                <div class="problem-header">
                    <h4><span class="badge bg-primary me-2">${problem.id}.</span> ${problem.title}</h4>
                </div>
                
                <div class="problem-text">
                    ${problem.problemText}
                </div>
                
                ${partsHTML}
            `;
            
            container.appendChild(card);
        });
    }

    // ============ CHECK TRUE/FALSE ============
    checkTFAnswer(id, userAnswer) {
        const question = this.tfQuestions.find(q => q.id === id);
        const card = document.getElementById(`tf-mixed-${id}`);
        if (!card) return;
        
        const buttons = card.querySelectorAll('.tf-btn');
        const explanation = document.getElementById(`tf-mixed-explanation-${id}`);
        
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
        const card = document.getElementById(`mc-mixed-${id}`);
        if (!card) return;
        
        const buttons = card.querySelectorAll('.option-btn');
        const explanation = document.getElementById(`mc-mixed-explanation-${id}`);
        
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

    // ============ CHECK MATCHING ANSWER ============
    checkMatchingAnswer(id) {
        const select = document.getElementById(`match-select-${id}`);
        const selectedValue = select.value;
        const item = document.getElementById(`match-item-${id}`);
        
        this.matchSelections[id] = selectedValue;
        
        item.style.backgroundColor = '';
        item.style.borderColor = '';
        
        if (selectedValue) {
            if (selectedValue === this.matchingQuestions.answers[id]) {
                item.style.backgroundColor = 'rgba(46, 204, 113, 0.1)';
                item.style.borderColor = '#2ecc71';
            } else {
                item.style.backgroundColor = 'rgba(231, 76, 60, 0.1)';
                item.style.borderColor = '#e74c3c';
            }
        }
    }

    // ============ CHECK ALL MATCHING ============
    checkAllMatching() {
        let correctCount = 0;
        const feedback = document.getElementById('match-feedback-mixed');
        const explanationsDiv = document.getElementById('match-explanations-mixed');
        
        Object.keys(this.matchingQuestions.answers).forEach(id => {
            const select = document.getElementById(`match-select-${id}`);
            const item = document.getElementById(`match-item-${id}`);
            
            if (select.value === this.matchingQuestions.answers[id]) {
                correctCount++;
                item.style.backgroundColor = 'rgba(46, 204, 113, 0.15)';
                item.style.borderColor = '#2ecc71';
            } else if (select.value) {
                item.style.backgroundColor = 'rgba(231, 76, 60, 0.1)';
                item.style.borderColor = '#e74c3c';
            } else {
                item.style.backgroundColor = 'rgba(243, 156, 18, 0.1)';
                item.style.borderColor = '#f39c12';
            }
        });
        
        if (!this.answeredMatch.has('all')) {
            this.matchScore = correctCount;
            this.answeredMatch.add('all');
            this.totalCorrect += correctCount;
            this.totalAnswered += 5;
            this.updateStats();
        }
        
        const percentage = Math.round((correctCount / 5) * 100);
        feedback.innerHTML = `
            <div class="alert alert-info">
                <h6 class="mb-2"><i class="fas fa-check-circle"></i> Matching Results</h6>
                <p class="mb-1">You got <strong>${correctCount}</strong> out of 5 correct (${percentage}%)</p>
                <button class="btn btn-sm btn-outline-primary mt-2" onclick="mixedExam.showMatchingExplanations()">
                    <i class="fas fa-info-circle"></i> Show Detailed Explanations
                </button>
            </div>
        `;
    }

    // ============ SHOW MATCHING EXPLANATIONS ============
    showMatchingExplanations() {
        const explanationsDiv = document.getElementById('match-explanations-mixed');
        let html = '<h6 class="mb-3"><i class="fas fa-book-open"></i> Detailed Explanations:</h6>';
        
        Object.keys(this.matchingQuestions.answers).forEach(id => {
            html += `
                <div class="mb-3 p-3 border-start border-4 border-warning bg-light">
                    <strong>${id}. ${this.matchingQuestions.columnA.find(item => item.id == id).text}</strong>
                    <p class="mb-0 mt-2">${this.matchingQuestions.explanations[id]}</p>
                </div>
            `;
        });
        
        explanationsDiv.innerHTML = html;
        explanationsDiv.style.display = 'block';
    }

    // ============ RESET MATCHING ============
    resetMatching() {
        Object.keys(this.matchingQuestions.answers).forEach(id => {
            const select = document.getElementById(`match-select-${id}`);
            const item = document.getElementById(`match-item-${id}`);
            if (select) {
                select.value = '';
                item.style.backgroundColor = '';
                item.style.borderColor = '';
            }
        });
        
        this.matchSelections = {};
        this.matchScore = 0;
        this.answeredMatch.delete('all');
        document.getElementById('match-feedback-mixed').innerHTML = '';
        document.getElementById('match-explanations-mixed').style.display = 'none';
        this.updateStats();
    }

    // ============ CHECK FILL ANSWER ============
    checkFillAnswer(id) {
        const question = this.fillQuestions.find(q => q.id === id);
        const input = document.getElementById(`fill-input-${id}`);
        const feedback = document.getElementById(`fill-feedback-${id}`);
        const explanation = document.getElementById(`fill-explanation-${id}`);
        
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
        
        if (!this.answeredFill.has(id)) {
            this.totalAnswered++;
            if (isCorrect) {
                this.fillScore++;
                this.totalCorrect++;
            }
            this.answeredFill.add(id);
            this.updateStats();
        }
        
        if (explanation) {
            explanation.classList.add('show');
        }
    }

    // ============ TOGGLE PROBLEM SOLUTION ============
    toggleProblemSolution(problemId, partLabel) {
        const solution = document.getElementById(`problem-solution-${problemId}-${partLabel}`);
        if (solution) {
            if (solution.style.display === 'none' || solution.style.display === '') {
                solution.style.display = 'block';
                this.renderMathJax();
                
                // Track as answered
                const answerId = `${problemId}-${partLabel}`;
                if (!this.answeredProblems.has(answerId)) {
                    this.totalAnswered++;
                    this.answeredProblems.add(answerId);
                    this.updateStats();
                }
            } else {
                solution.style.display = 'none';
            }
        }
    }

    // ============ UPDATE STATISTICS ============
    updateStats() {
        document.getElementById('tf-score-mixed').textContent = this.tfScore;
        document.getElementById('mc-score-mixed').textContent = this.mcScore;
        document.getElementById('match-score-mixed').textContent = this.matchScore;
        document.getElementById('problem-score-mixed').textContent = this.problemScore;
        
        const totalPossible = this.tfQuestions.length + this.mcQuestions.length + 5 + 
                              this.fillQuestions.length + this.problems.length;
        const totalCorrectAll = this.tfScore + this.mcScore + this.matchScore + 
                                this.fillScore + this.problemScore;
        const percentage = totalPossible > 0 ? Math.round((totalCorrectAll / totalPossible) * 100) : 0;
        
        document.getElementById('total-score-mixed').textContent = `${percentage}%`;
        
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
        // Reset all button
        const resetBtn = document.getElementById('reset-all-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (confirm('Reset all answers and scores?')) {
                    location.reload();
                }
            });
        }
    }
}

// ============ INITIALIZE EXAM ============
document.addEventListener('DOMContentLoaded', () => {
    window.mixedExam = new MixedPhysicsExam();
});

// ============ EXPORT FUNCTIONS ============
window.checkTFAnswer = (id, answer) => window.mixedExam?.checkTFAnswer(id, answer);
window.checkMCAnswer = (id, answer) => window.mixedExam?.checkMCAnswer(id, answer);
window.checkMatchingAnswer = (id) => window.mixedExam?.checkMatchingAnswer(id);
window.checkAllMatching = () => window.mixedExam?.checkAllMatching();
window.showMatchingExplanations = () => window.mixedExam?.showMatchingExplanations();
window.resetMatching = () => window.mixedExam?.resetMatching();
window.checkFillAnswer = (id) => window.mixedExam?.checkFillAnswer(id);
window.toggleProblemSolution = (problemId, partLabel) => window.mixedExam?.toggleProblemSolution(problemId, partLabel);