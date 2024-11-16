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
  }
];

export default medSchoolData;