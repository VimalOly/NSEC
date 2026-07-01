const questionBank = {

  // ================= CHEMICAL BONDING =================
  "chemical bonding": [

    { id: 1, type: "mcq", level: "easy",
      q: "Hybridization of CH4?",
      options: ["sp", "sp2", "sp3", "dsp2"],
      answer: "sp3" },

    { id: 2, type: "mcq", level: "medium",
      q: "Which molecule is polar?",
      options: ["CO2", "BF3", "NH3", "CH4"],
      answer: "NH3" },

    { id: 3, type: "mcq", level: "medium",
      q: "Bond order of O2?",
      options: ["1", "2", "2.5", "3"],
      answer: "2" },

    { id: 4, type: "num", level: "hard",
      q: "Number of sigma bonds in benzene?",
      answer: "12" },

    { id: 5, type: "mcq", level: "hard",
      q: "Geometry of SF6?",
      options: ["Octahedral", "Tetrahedral", "Trigonal bipyramidal", "Square planar"],
      answer: "Octahedral" }

  ],

  // ================= PERIODIC PROPERTIES =================
  "periodic properties": [

    { id: 101, type: "mcq", level: "easy",
      q: "Atomic radius increases down group?",
      options: ["True", "False"],
      answer: "True" },

    { id: 102, type: "mcq", level: "medium",
      q: "Highest ionization energy?",
      options: ["Na", "Cl", "Ar", "Mg"],
      answer: "Ar" },

    { id: 103, type: "mcq", level: "medium",
      q: "Electron affinity highest for?",
      options: ["F", "Cl", "Br", "I"],
      answer: "Cl" },

    { id: 104, type: "num", level: "easy",
      q: "Atomic number of Neon?",
      answer: "10" },

    { id: 105, type: "mcq", level: "hard",
      q: "Which has highest electronegativity?",
      options: ["O", "F", "Cl", "N"],
      answer: "F" }

  ],

  // ================= THERMODYNAMICS =================
  "thermodynamics": [

    { id: 201, type: "mcq", level: "easy",
      q: "Unit of entropy?",
      options: ["J", "J/K", "KJ", "J/mol"],
      answer: "J/K" },

    { id: 202, type: "num", level: "medium",
      q: "Value of R (J/mol·K)?",
      answer: "8.314" },

    { id: 203, type: "mcq", level: "medium",
      q: "ΔG = 0 means?",
      options: ["Equilibrium", "Spontaneous", "Non-spontaneous", "Impossible"],
      answer: "Equilibrium" },

    { id: 204, type: "mcq", level: "hard",
      q: "Endothermic reaction has ΔH?",
      options: ["Positive", "Negative", "Zero", "Infinite"],
      answer: "Positive" }

  ],

  // ================= EQUILIBRIUM =================
  "equilibrium": [

    { id: 301, type: "mcq", level: "easy",
      q: "Le Chatelier principle applies to?",
      options: ["Dynamic equilibrium", "Static equilibrium"],
      answer: "Dynamic equilibrium" },

    { id: 302, type: "num", level: "medium",
      q: "pH of strong acid (0.01M)?",
      answer: "2" },

    { id: 303, type: "mcq", level: "medium",
      q: "Increasing pressure shifts equilibrium to?",
      options: ["Less moles", "More moles"],
      answer: "Less moles" }

  ],

  // ================= REDOX =================
  "redox": [

    { id: 401, type: "mcq", level: "easy",
      q: "Oxidation is loss of?",
      options: ["Electrons", "Protons"],
      answer: "Electrons" },

    { id: 402, type: "mcq", level: "medium",
      q: "Reducing agent does?",
      options: ["Gains electrons", "Loses electrons"],
      answer: "Loses electrons" }

  ],

  // ================= ATOMIC STRUCTURE =================
  "atomic structure": [

    { id: 501, type: "mcq", level: "easy",
      q: "Maximum electrons in p orbital?",
      options: ["2", "6", "10", "14"],
      answer: "6" },

    { id: 502, type: "mcq", level: "medium",
      q: "Quantum number for shape?",
      options: ["n", "l", "m", "s"],
      answer: "l" }

  ],

  // ================= STATES OF MATTER =================
  "states of matter": [

    { id: 601, type: "mcq", level: "easy",
      q: "Ideal gas equation?",
      options: ["PV=nRT", "PV=RT", "P=nRT", "V=nRT"],
      answer: "PV=nRT" },

    { id: 602, type: "num", level: "medium",
      q: "Value of R (L·atm/mol·K)?",
      answer: "0.0821" }

  ],

  // ================= ORGANIC =================
  "organic chemistry": [

    { id: 701, type: "mcq", level: "easy",
      q: "General formula of alkane?",
      options: ["CnH2n", "CnH2n+2", "CnH2n-2", "CnHn"],
      answer: "CnH2n+2" },

    { id: 702, type: "mcq", level: "medium",
      q: "Functional group of alcohol?",
      options: ["-OH", "-COOH", "-CHO", "-NH2"],
      answer: "-OH" }

  ],

  // ================= COORDINATION =================
  "coordination compounds": [

    { id: 801, type: "mcq", level: "medium",
      q: "Ligand donates?",
      options: ["Electrons", "Protons"],
      answer: "Electrons" },

    { id: 802, type: "mcq", level: "hard",
      q: "Coordination number of [Fe(CN)6]4-?",
      options: ["4", "6", "2", "8"],
      answer: "6" }

  ],

  // ================= ELECTROCHEMISTRY =================
  "electrochemistry": [

    { id: 901, type: "mcq", level: "easy",
      q: "Unit of potential?",
      options: ["Volt", "Ampere"],
      answer: "Volt" },

    { id: 902, type: "num", level: "medium",
      q: "Faraday constant?",
      answer: "96500" }

  ]

};
