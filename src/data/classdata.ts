type ClassName = 
  | "Gen Bio 1" 
  | "Gen Bio 2" 
  | "Genetics" 
  | "Cell Bio" 
  | "Physiology" 
  | "Gen Chem 1" 
  | "Gen Chem 2" 
  | "Organic Chem 1" 
  | "Organic Chem 2" 
  | "Biochem" 
  | "Physics 1" 
  | "Physics 2" 
  | "English Comp" 
  | "English Lit" 
  | "Calc 1" 
  | "Calc 2" 
  | "Statistics" 
  | "Psychology" 
  | "Sociology";



interface Class {
  name: ClassName;
  category?: string;
  required: boolean;
  notes: string;
  labRequired?: boolean;
  apAccepted?: boolean;
  alternateOptions?: string[];
}

interface MedSchool {
  name: string;
  generalNotes: string;
  requiredClasses: Class[];
}


const medSchoolData: MedSchool[] = [
  {
    name: "Harvard Medical School",
    generalNotes: "Strong emphasis on research experience and upper-level science coursework. AP credits accepted for some introductory courses but upper-level coursework in same department recommended.",
    requiredClasses: [
      {
        name: "Gen Bio 1",
        required: true,
        notes: "First semester of a two-part introductory biology sequence. Must include cellular and molecular biology topics.",
        labRequired: true,
        apAccepted: false
      },
      {
        name: "Gen Bio 2",
        required: true,
        notes: "Second semester biology covering organismal biology and genetics.",
        labRequired: true,
        apAccepted: false
      },
      {
        name: "Gen Chem 1",
        required: true,
        notes: "First semester general chemistry covering atomic structure, bonding, and basic reactions.",
        labRequired: true,
        apAccepted: true
      },
      {
        name: "Gen Chem 2",
        required: true,
        notes: "Second semester general chemistry covering equilibrium, thermodynamics, and acid-base chemistry.",
        labRequired: true,
        apAccepted: true
      },
      {
        name: "Organic Chem 1",
        required: true,
        notes: "First semester organic chemistry covering fundamental reactions and mechanisms.",
        labRequired: true,
        apAccepted: false
      },
      {
        name: "Organic Chem 2",
        required: true,
        notes: "Second semester organic chemistry with emphasis on synthesis and spectroscopy.",
        labRequired: true,
        apAccepted: false
      },
      {
        name: "Biochem",
        required: true,
        notes: "One semester biochemistry covering metabolism and molecular biology.",
        labRequired: false,
        alternateOptions: ["Advanced biochemistry series"]
      },
      {
        name: "Physics 1",
        required: true,
        notes: "First semester physics covering mechanics and thermodynamics. Calculus-based preferred.",
        labRequired: true,
        apAccepted: true
      },
      {
        name: "Physics 2",
        required: true,
        notes: "Second semester physics covering electricity, magnetism, and optics.",
        labRequired: true,
        apAccepted: true
      },
      {
        name: "Genetics",
        required: true,
        notes: "Advanced course covering classical and molecular genetics.",
        labRequired: false,
        alternateOptions: ["Molecular genetics", "Human genetics"]
      },
      {
        name: "Cell Bio",
        required: true,
        notes: "Advanced course in cell biology with molecular emphasis.",
        labRequired: false
      },
      {
        name: "Physiology",
        required: false,
        notes: "Recommended but not required. Human physiology preferred.",
        labRequired: false
      },
      {
        name: "English Comp",
        required: true,
        notes: "Must include substantial writing component and critical analysis.",
        apAccepted: true
      },
      {
        name: "English Lit",
        required: true,
        notes: "Any literature course with significant writing component.",
        alternateOptions: ["Comparative literature", "World literature"]
      },
      {
        name: "Calc 1",
        required: true,
        notes: "Single variable calculus covering derivatives and integrals.",
        apAccepted: true
      },
      {
        name: "Calc 2",
        required: false,
        notes: "Recommended for students interested in research.",
        apAccepted: true
      },
      {
        name: "Statistics",
        required: true,
        notes: "Must cover probability and statistical inference. Biostatistics preferred.",
        alternateOptions: ["Biostatistics", "Statistical methods in research"]
      },
      {
        name: "Psychology",
        required: true,
        notes: "Introduction to psychology or behavioral science.",
        alternateOptions: ["Behavioral science", "Neuroscience"]
      },
      {
        name: "Sociology",
        required: true,
        notes: "Any course covering social determinants of health recommended.",
        alternateOptions: ["Medical sociology", "Public health"]
      }
    ]
  },
  {
    name: "Stanford University School of Medicine",
    generalNotes: "No strict requirements, but strong emphasis on research experience and diversity of academic pursuits.",
    requiredClasses: [
      {
        name: "Gen Bio 1",
        required: true,
        notes: "First semester biology with emphasis on molecular and cellular processes.",
        labRequired: true,
        apAccepted: true
      },
      {
        name: "Gen Bio 2",
        required: true,
        notes: "Second semester biology with emphasis on organismal biology.",
        labRequired: true,
        apAccepted: true
      },
      {
        name: "Gen Chem 1",
        required: true,
        notes: "Basic principles of chemistry with lab work.",
        labRequired: true,
        apAccepted: true
      },
      {
        name: "Gen Chem 2",
        required: true,
        notes: "Advanced principles of chemistry including equilibrium and thermodynamics.",
        labRequired: true,
        apAccepted: true
      },
      {
        name: "Organic Chem 1",
        required: true,
        notes: "Fundamental organic chemistry principles and reactions.",
        labRequired: true,
        apAccepted: false
      },
      {
        name: "Organic Chem 2",
        required: false,
        notes: "Recommended but not required. Can be substituted with biochemistry.",
        labRequired: false,
        alternateOptions: ["Biochem"]
      },
      {
        name: "Biochem",
        required: true,
        notes: "One semester of biochemistry required. Lab component recommended.",
        labRequired: false
      },
      {
        name: "Physics 1",
        required: true,
        notes: "Basic physics principles. Can be algebra or calculus-based.",
        labRequired: true,
        apAccepted: true
      },
      {
        name: "Physics 2",
        required: false,
        notes: "Recommended but not required.",
        labRequired: false,
        apAccepted: true
      },
      {
        name: "Statistics",
        required: true,
        notes: "Any statistics course that covers basic probability and inference.",
        apAccepted: true,
        alternateOptions: ["Biostatistics", "Data Science"]
      }
    ]
  },
  {
    name: "Johns Hopkins School of Medicine",
    generalNotes: "Highly research-focused with an emphasis on interdisciplinary studies. Encourages coursework in humanities and social sciences.",
    requiredClasses: [
      {
        name: "Gen Bio 1",
        required: true,
        notes: "Introductory biology emphasizing molecular and cellular processes.",
        labRequired: true,
        apAccepted: false
      },
      {
        name: "Gen Bio 2",
        required: true,
        notes: "Continuation of Gen Bio 1, covering organismal biology and systems.",
        labRequired: true,
        apAccepted: false
      },
      {
        name: "Gen Chem 1",
        required: true,
        notes: "General chemistry with a focus on molecular interactions and reactivity.",
        labRequired: true,
        apAccepted: true
      },
      {
        name: "Biochem",
        required: true,
        notes: "Advanced biochemistry focusing on molecular biology and metabolism.",
        labRequired: false
      },
      {
        name: "Physics 1",
        required: true,
        notes: "Basic physics principles with laboratory work.",
        labRequired: true,
        apAccepted: false
      },
      {
        name: "Statistics",
        required: true,
        notes: "Biostatistics strongly recommended.",
        alternateOptions: ["Data Analysis", "Probability and Inference"]
      },
      {
        name: "Psychology",
        required: true,
        notes: "Introduction to psychology with emphasis on behavioral science.",
        alternateOptions: ["Neuroscience"]
      },
      {
        name: "Sociology",
        required: true,
        notes: "Any course focusing on social determinants of health or healthcare systems.",
        alternateOptions: ["Public Health"]
      }
    ]
  },
  {
    name: "University of Pennsylvania Perelman School of Medicine",
    generalNotes: "Focus on interdisciplinary training and integration of humanities and science. AP credits accepted for some prerequisites if supplemented with advanced coursework.",
    requiredClasses: [
      {
        name: "Gen Bio 1",
        required: true,
        notes: "Foundational biology with focus on cellular and molecular topics.",
        labRequired: true,
        apAccepted: true
      },
      {
        name: "Gen Bio 2",
        required: true,
        notes: "Advanced biology covering systems and organismal biology.",
        labRequired: true,
        apAccepted: true
      },
      {
        name: "Organic Chem 1",
        required: true,
        notes: "First semester organic chemistry emphasizing mechanisms and reactivity.",
        labRequired: true,
        apAccepted: false
      },
      {
        name: "Biochem",
        required: true,
        notes: "One semester of biochemistry is mandatory. Molecular emphasis preferred.",
        labRequired: false
      },
      {
        name: "Statistics",
        required: true,
        notes: "Coursework in biostatistics or applied statistics recommended.",
        alternateOptions: ["Data Science"]
      },
      {
        name: "English Comp",
        required: true,
        notes: "Critical writing course with a focus on research papers.",
        apAccepted: true
      },
      {
        name: "English Lit",
        required: false,
        notes: "Recommended for broader academic development.",
        alternateOptions: ["Comparative Literature"]
      }
    ]
  },

  {
    name: "Columbia University College of Physicians and Surgeons",
    generalNotes: "Focus on a well-rounded academic background, research experience, and community service. AP credits accepted with advanced coursework in the subject area.",
    requiredClasses: [
      {
        name: "Gen Bio 1",
        required: true,
        notes: "Must include molecular and cellular biology. Lab component required.",
        labRequired: true,
        apAccepted: false
      },
      {
        name: "Gen Bio 2",
        required: true,
        notes: "Organismal biology and genetics. Lab component required.",
        labRequired: true,
        apAccepted: false
      },
      {
        name: "Organic Chem 1",
        required: true,
        notes: "Fundamental reactions and synthesis in organic chemistry.",
        labRequired: true,
        apAccepted: false
      },
      {
        name: "Physics 1",
        required: true,
        notes: "Introduction to mechanics. Lab required.",
        labRequired: true,
        apAccepted: true
      },
      {
        name: "Statistics",
        required: true,
        notes: "Biostatistics preferred.",
        alternateOptions: ["Data Science"]
      }
    ]
  },
  {
    name: "Duke University School of Medicine",
    generalNotes: "Emphasis on research experience and academic excellence. Encourages interdisciplinary coursework in humanities and social sciences.",
    requiredClasses: [
      {
        name: "Gen Chem 1",
        required: true,
        notes: "Basic principles of chemistry. Lab required.",
        labRequired: true,
        apAccepted: true
      },
      {
        name: "Gen Chem 2",
        required: true,
        notes: "Continuation of Gen Chem 1, including equilibrium and thermodynamics.",
        labRequired: true,
        apAccepted: true
      },
      {
        name: "Biochem",
        required: true,
        notes: "Metabolic pathways and molecular biology.",
        labRequired: false
      },
      {
        name: "Psychology",
        required: true,
        notes: "Introduction to psychology or behavioral science.",
        alternateOptions: ["Neuroscience"]
      },
      {
        name: "Sociology",
        required: true,
        notes: "Social determinants of health or healthcare systems.",
        alternateOptions: ["Public Health"]
      }
    ]
  },
  {
    name: "Stanford University School of Medicine",
    generalNotes: "Strong emphasis on research and innovation. Flexible prerequisites with no strict requirements.",
    requiredClasses: [
      {
        name: "Gen Bio 1",
        required: true,
        notes: "Introductory biology with molecular emphasis.",
        labRequired: true,
        apAccepted: true
      },
      {
        name: "Statistics",
        required: true,
        notes: "Basic probability and inference. Biostatistics recommended.",
        alternateOptions: ["Data Science"]
      },
      {
        name: "Organic Chem 1",
        required: true,
        notes: "Organic chemistry with emphasis on reactions and synthesis.",
        labRequired: true,
        apAccepted: false
      },
      {
        name: "Biochem",
        required: true,
        notes: "One semester of biochemistry required. Lab optional.",
        labRequired: false
      }
    ]
  },
  {
    name: "Yale University School of Medicine",
    generalNotes: "Encourages students to pursue a broad undergraduate education. AP credits accepted but upper-level coursework required.",
    requiredClasses: [
      {
        name: "Gen Bio 1",
        required: true,
        notes: "Introductory biology with cellular and molecular focus.",
        labRequired: true,
        apAccepted: true
      },
      {
        name: "Gen Chem 1",
        required: true,
        notes: "General chemistry including atomic structure and reactions.",
        labRequired: true,
        apAccepted: true
      },
      {
        name: "English Comp",
        required: true,
        notes: "Writing-intensive course with critical analysis.",
        apAccepted: true
      },
      {
        name: "Calc 1",
        required: true,
        notes: "Single variable calculus.",
        apAccepted: true
      },
      {
        name: "Statistics",
        required: true,
        notes: "Statistical methods or biostatistics preferred.",
        alternateOptions: ["Probability", "Data Analysis"]
      }
    ]
  },
  {
    name: "Vanderbilt University School of Medicine",
    generalNotes: "Focus on rigorous academic coursework and research. Encourages humanities and social science integration.",
    requiredClasses: [
      {
        name: "Gen Bio 1",
        required: true,
        notes: "Focus on cellular processes and molecular biology.",
        labRequired: true,
        apAccepted: false
      },
      {
        name: "Organic Chem 1",
        required: true,
        notes: "Emphasis on organic reactions and synthesis.",
        labRequired: true,
        apAccepted: false
      },
      {
        name: "Biochem",
        required: true,
        notes: "Foundational biochemistry covering metabolism and molecular biology.",
        labRequired: false
      },
      {
        name: "Statistics",
        required: true,
        notes: "Probability and inference. Biostatistics preferred.",
        alternateOptions: ["Data Science"]
      },
      {
        name: "English Lit",
        required: true,
        notes: "Any course with significant writing component.",
        alternateOptions: ["Comparative Literature"]
      }
    ]
  },
  {
    name: "University of Washington School of Medicine",
    generalNotes: "Emphasis on community engagement and primary care. Strong preference for courses in human health and public service.",
    requiredClasses: [
      {
        name: "Gen Bio 1",
        required: true,
        notes: "Introductory biology with lab. Molecular focus required.",
        labRequired: true,
        apAccepted: false
      },
      {
        name: "Physics 1",
        required: true,
        notes: "Basic physics principles with lab.",
        labRequired: true,
        apAccepted: true
      },
      {
        name: "Statistics",
        required: true,
        notes: "Focus on statistical methods in research or biostatistics.",
        alternateOptions: ["Probability and Statistics"]
      },
      {
        name: "Psychology",
        required: true,
        notes: "Introduction to psychology with emphasis on behavioral science.",
        alternateOptions: ["Neuroscience"]
      },
      {
        name: "Sociology",
        required: true,
        notes: "Social determinants of health preferred.",
        alternateOptions: ["Public Health"]
      }
    ]
  },
  {
    name: "David Geffen School of Medicine",
    generalNotes: "Strong focus on community health and research experience. Flexible prerequisites with an emphasis on advanced coursework.",
    requiredClasses: [
      {
        name: "Gen Bio 1",
        required: true,
        notes: "Foundational biology including cellular and molecular processes.",
        labRequired: true,
        apAccepted: false
      },
      {
        name: "Organic Chem 1",
        required: true,
        notes: "Emphasis on organic synthesis and reaction mechanisms.",
        labRequired: true,
        apAccepted: false
      },
      {
        name: "Biochem",
        required: true,
        notes: "Covers molecular biology and metabolic pathways.",
        labRequired: false
      },
      {
        name: "English Comp",
        required: true,
        notes: "Focus on critical writing and analysis.",
        apAccepted: true
      },
      {
        name: "Statistics",
        required: true,
        notes: "Basic statistical methods. Biostatistics preferred.",
        alternateOptions: ["Data Science"]
      }
    ]
  }
];

export default medSchoolData;