type ClassName =
  | 'General Biology 1'
  | 'General Biology 2'
  | 'Genetics'
  | 'Cell Biology'
  | 'Physiology'
  | 'General Chemistry 1'
  | 'General Chemistry 2'
  | 'Organic Chem 1'
  | 'Organic Chem 2'
  | 'Biochemistry'
  | 'Physics 1'
  | 'Physics 2'
  | 'English Comp'
  | 'English Lit'
  | 'Calculus 1'
  | 'Calculus 2'
  | 'Statistics'
  | 'Psychology'
  | 'Sociology'

interface Class {
  name: ClassName
  category?: string
  required: 'yes' | 'no' | 'recommended'
  notes?: string
  labRequired?: boolean
  apAccepted?: boolean
  alternateOptions?: string[]
}

export interface MedSchool {
  name: string
  generalNotes: string
  requiredClasses: Class[]
}

export const classCategories: { [key: string]: string[] } = {
  Biology: [
    'General Biology 1',
    'General Biology 2',
    'Genetics',
    'Cell Biology',
    'Physiology',
  ],
  Chemistry: [
    'General Chemistry 1',
    'General Chemistry 2',
    'Organic Chem 1',
    'Organic Chem 2',
    'Biochemistry',
  ],
  Physics: ['Physics 1', 'Physics 2'],
  Humanities: ['English Comp', 'English Lit', 'Psychology', 'Sociology'],
  Math: ['Calculus 1', 'Calculus 2', 'Statistics'],
}

const medSchoolData: MedSchool[] = [
  {
    name: 'Harvard',
    generalNotes:
      'Strong emphasis on research experience and upper-level science coursework. AP credits accepted for some introductory courses but upper-level coursework in same department recommended.',
    requiredClasses: [
      {
        name: 'General Biology 1',
        required: 'yes',
        notes:
          'First semester of a two-part introductory biology sequence. Must include cellular and molecular biology topics.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'General Biology 2',
        required: 'yes',
        notes:
          'Second semester biology covering organismal biology and genetics.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'Genetics',
        required: 'recommended',
        notes: 'Advanced course covering classical and molecular genetics.',
        labRequired: false,
        alternateOptions: ['Molecular genetics', 'Human genetics'],
      },
      {
        name: 'Cell Biology',
        required: 'recommended',
        notes: 'Advanced course in cell biology with molecular emphasis.',
        labRequired: false,
      },
      {
        name: 'Physiology',
        required: 'recommended',
        notes: 'Recommended but not required. Human physiology preferred.',
        labRequired: false,
      },
      {
        name: 'General Chemistry 1',
        required: 'yes',
        notes:
          'First semester general chemistry covering atomic structure, bonding, and basic reactions.',
        labRequired: true,
        apAccepted: true,
      },
      {
        name: 'General Chemistry 2',
        required: 'yes',
        notes:
          'Second semester general chemistry covering equilibrium, thermodynamics, and acid-base chemistry.',
        labRequired: true,
        apAccepted: true,
      },
      {
        name: 'Organic Chem 1',
        required: 'yes',
        notes:
          'First semester organic chemistry covering fundamental reactions and mechanisms.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'Organic Chem 2',
        required: 'yes',
        notes:
          'Second semester organic chemistry with emphasis on synthesis and spectroscopy.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'Biochemistry',
        required: 'yes',
        notes:
          'One semester biochemistry covering metabolism and molecular biology.',
        labRequired: false,
        alternateOptions: ['Advanced biochemistry series'],
      },
      {
        name: 'Physics 1',
        required: 'yes',
        notes:
          'First semester physics covering mechanics and thermodynamics. Calculus-based preferred.',
        labRequired: true,
        apAccepted: true,
      },
      {
        name: 'Physics 2',
        required: 'yes',
        notes:
          'Second semester physics covering electricity, magnetism, and optics.',
        labRequired: true,
        apAccepted: true,
      },
      {
        name: 'English Comp',
        required: 'yes',
        notes:
          'Must include substantial writing component and critical analysis.',
        apAccepted: true,
      },
      {
        name: 'English Lit',
        required: 'no',
        notes: 'Any literature course with significant writing component.',
        alternateOptions: ['Comparative literature', 'World literature'],
      },
      {
        name: 'Calculus 1',
        required: 'yes',
        notes: 'Single variable calculus covering derivatives and integrals.',
        apAccepted: true,
      },
      {
        name: 'Calculus 2',
        required: 'recommended',
        notes: 'Recommended for students interested in research.',
        apAccepted: true,
      },
      {
        name: 'Statistics',
        required: 'recommended',
        notes:
          'Must cover probability and statistical inference. Biostatistics preferred.',
        alternateOptions: ['Biostatistics', 'Statistical methods in research'],
      },
      {
        name: 'Psychology',
        required: 'recommended',
        notes: 'Introduction to psychology or behavioral science.',
        alternateOptions: ['Behavioral science', 'Neuroscience'],
      },
      {
        name: 'Sociology',
        required: 'recommended',
        notes: 'Any course covering social determinants of health recommended.',
        alternateOptions: ['Medical sociology', 'Public health'],
      },
    ],
  },
  {
    name: 'Stanford',
    generalNotes:
      'No strict requirements, but strong emphasis on research experience and diversity of academic pursuits.',
    requiredClasses: [
      {
        name: 'General Biology 1',
        required: 'recommended',
        notes:
          'First semester biology with emphasis on molecular and cellular processes.',
        labRequired: true,
        apAccepted: true,
      },
      {
        name: 'General Biology 2',
        required: 'recommended',
        notes: 'Second semester biology with emphasis on organismal biology.',
        labRequired: true,
        apAccepted: true,
      },
      {
        name: 'Genetics',
        required: 'recommended',
        notes:
          'Recommended for students interested in advanced biology coursework.',
        labRequired: false,
      },
      {
        name: 'Cell Biology',
        required: 'recommended',
        notes:
          'Recommended course with emphasis on molecular biology and cellular processes.',
        labRequired: false,
      },
      {
        name: 'Physiology',
        required: 'recommended',
        notes: 'Recommended for students interested in human biology.',
        labRequired: false,
      },
      {
        name: 'General Chemistry 1',
        required: 'recommended',
        notes: 'Basic principles of chemistry with lab work.',
        labRequired: true,
        apAccepted: true,
      },
      {
        name: 'General Chemistry 2',
        required: 'recommended',
        notes:
          'Advanced principles of chemistry including equilibrium and thermodynamics.',
        labRequired: true,
        apAccepted: true,
      },
      {
        name: 'Organic Chem 1',
        required: 'recommended',
        notes: 'Fundamental organic chemistry principles and reactions.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'Organic Chem 2',
        required: 'recommended',
        notes:
          'Recommended but not required. Can be substituted with biochemistry.',
        labRequired: false,
        alternateOptions: ['Biochemistry'],
      },
      {
        name: 'Biochemistry',
        required: 'recommended',
        notes:
          'One semester of biochemistry required. Lab component recommended.',
        labRequired: false,
      },
      {
        name: 'Physics 1',
        required: 'recommended',
        notes: 'Basic physics principles. Can be algebra or calculus-based.',
        labRequired: true,
        apAccepted: true,
      },
      {
        name: 'Physics 2',
        required: 'recommended',
        notes: 'Recommended but not required.',
        labRequired: false,
        apAccepted: true,
      },
      {
        name: 'Statistics',
        required: 'recommended',
        notes:
          'Any statistics course that covers basic probability and inference.',
        apAccepted: true,
        alternateOptions: ['Biostatistics', 'Data Science'],
      },
      {
        name: 'English Comp',
        required: 'no',
        notes: 'Not required.',
      },
      {
        name: 'English Lit',
        required: 'recommended',
        notes: 'Recommended for developing strong communication skills.',
      },
      {
        name: 'Calculus 1',
        required: 'no',
        notes: 'Not required.',
      },
      {
        name: 'Calculus 2',
        required: 'recommended',
        notes: 'Recommended for students interested in quantitative sciences.',
      },
      {
        name: 'Psychology',
        required: 'recommended',
        notes: 'Introduction to psychology or behavioral science.',
        alternateOptions: ['Behavioral science', 'Neuroscience'],
      },
      {
        name: 'Sociology',
        required: 'recommended',
        notes: 'Any course covering social determinants of health recommended.',
        alternateOptions: ['Medical sociology', 'Public health'],
      },
    ],
  },
  {
    name: 'Johns Hopkins',
    generalNotes:
      'Highly research-focused with an emphasis on interdisciplinary studies. Encourages coursework in humanities and social sciences.',
    requiredClasses: [
      {
        name: 'General Biology 1',
        required: 'yes',
        notes:
          'Introductory biology emphasizing molecular and cellular processes.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'General Biology 2',
        required: 'yes',
        notes:
          'Continuation of General Biology 1, covering organismal biology and systems.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'Genetics',
        required: 'recommended',
        notes:
          'Recommended for students interested in advanced biological sciences.',
        labRequired: false,
      },
      {
        name: 'Cell Biology',
        required: 'no',
        notes:
          'Not required but may be beneficial for deeper understanding of biology.',
        labRequired: false,
      },
      {
        name: 'Physiology',
        required: 'no',
        notes:
          'Not required but recommended for students focusing on human systems.',
        labRequired: false,
      },
      {
        name: 'General Chemistry 1',
        required: 'yes',
        notes:
          'General chemistry with a focus on molecular interactions and reactivity.',
        labRequired: true,
        apAccepted: true,
      },
      {
        name: 'General Chemistry 2',
        required: 'yes',
        notes: 'Second semester of general chemistry covering advanced topics.',
        labRequired: true,
        apAccepted: true,
      },
      {
        name: 'Organic Chem 1',
        required: 'yes',
        notes:
          'Fundamental organic chemistry with emphasis on reactions and mechanisms.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'Organic Chem 2',
        required: 'no',
        notes:
          'Not required but may provide strong foundational knowledge for biochemistry.',
        labRequired: false,
      },
      {
        name: 'Biochemistry',
        required: 'yes',
        notes:
          'Advanced biochemistry focusing on molecular biology and metabolism.',
        labRequired: false,
      },
      {
        name: 'Physics 1',
        required: 'yes',
        notes: 'Basic physics principles with laboratory work.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'Physics 2',
        required: 'yes',
        notes:
          'Continuation of Physics 1, covering electricity, magnetism, and optics.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'English Comp',
        required: 'no',
        notes: 'Not required.',
      },
      {
        name: 'English Lit',
        required: 'yes',
        notes:
          'Recommended to develop strong analytical and communication skills.',
      },
      {
        name: 'Calculus 1',
        required: 'no',
        notes:
          'Not required but may be helpful for students interested in quantitative sciences.',
      },
      {
        name: 'Calculus 2',
        required: 'recommended',
        notes:
          'Recommended for students interested in quantitative sciences or research.',
      },
      {
        name: 'Statistics',
        required: 'yes',
        notes: 'Biostatistics strongly recommended.',
        alternateOptions: ['Data Analysis', 'Probability and Inference'],
      },
      {
        name: 'Psychology',
        required: 'yes',
        notes:
          'Introduction to psychology with emphasis on behavioral science.',
        alternateOptions: ['Neuroscience'],
      },
      {
        name: 'Sociology',
        required: 'yes',
        notes:
          'Any course focusing on social determinants of health or healthcare systems.',
        alternateOptions: ['Public Health'],
      },
    ],
  },
  {
    name: 'Yale',
    generalNotes:
      'Strong focus on research and interdisciplinary studies. Laboratory courses emphasized for most science prerequisites.',
    requiredClasses: [
      {
        name: 'General Biology 1',
        required: 'yes',
        notes: 'Introductory biology with a lab component required.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'General Biology 2',
        required: 'yes',
        notes:
          'Continuation of introductory biology with emphasis on organismal biology. Lab component required.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'Genetics',
        required: 'no',
        notes: 'Not required.',
      },
      {
        name: 'Cell Biology',
        required: 'no',
        notes: 'Not required.',
      },
      {
        name: 'Physiology',
        required: 'no',
        notes: 'Not required.',
      },
      {
        name: 'General Chemistry 1',
        required: 'yes',
        notes: 'General chemistry with a lab component required.',
        labRequired: true,
        apAccepted: true,
      },
      {
        name: 'General Chemistry 2',
        required: 'yes',
        notes:
          'Second semester of general chemistry with a lab component required.',
        labRequired: true,
        apAccepted: true,
      },
      {
        name: 'Organic Chem 1',
        required: 'yes',
        notes: 'Fundamental organic chemistry with a lab component required.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'Organic Chem 2',
        required: 'no',
        notes:
          'Not required but may strengthen foundational knowledge in chemistry.',
        labRequired: false,
      },
      {
        name: 'Biochemistry',
        required: 'yes',
        notes:
          'One semester of biochemistry recommended. Lab component is encouraged.',
        labRequired: true,
        alternateOptions: ['Advanced Biochemistryistry'],
      },
      {
        name: 'Physics 1',
        required: 'yes',
        notes: 'Introductory physics with a lab component required.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'Physics 2',
        required: 'yes',
        notes:
          'Continuation of introductory physics with a lab component required.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'English Comp',
        required: 'yes',
        notes:
          'Required for developing strong writing and communication skills.',
      },
      {
        name: 'English Lit',
        required: 'no',
        notes:
          'Not required but may be beneficial for developing analytical skills.',
      },
      {
        name: 'Calculus 1',
        required: 'yes',
        notes: 'Single variable calculus covering derivatives and integrals.',
        apAccepted: true,
      },
      {
        name: 'Calculus 2',
        required: 'no',
        notes:
          'Not required but recommended for students interested in quantitative sciences.',
      },
      {
        name: 'Statistics',
        required: 'recommended',
        notes:
          'Recommended for students interested in research and data analysis.',
        alternateOptions: ['Biostatistics', 'Data Analysis'],
      },
      {
        name: 'Psychology',
        required: 'no',
        notes: 'Not required.',
      },
      {
        name: 'Sociology',
        required: 'no',
        notes: 'Not required.',
      },
    ],
  },
  {
    name: 'UPenn',
    generalNotes:
      'Emphasizes foundational science coursework with a strong focus on research and clinical preparation.',
    requiredClasses: [
      {
        name: 'General Biology 1',
        required: 'yes',
        notes:
          'Introductory biology with emphasis on molecular and cellular biology.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'General Biology 2',
        required: 'yes',
        notes:
          'Continuation of introductory biology, focusing on organismal biology and systems.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'Genetics',
        required: 'no',
        notes:
          'Not required but may provide additional depth in biological sciences.',
      },
      {
        name: 'Cell Biology',
        required: 'no',
        notes: 'Not required.',
      },
      {
        name: 'Physiology',
        required: 'no',
        notes:
          'Not required but may be beneficial for students interested in human systems.',
      },
      {
        name: 'General Chemistry 1',
        required: 'yes',
        notes:
          'Introductory general chemistry focusing on atomic structure, bonding, and basic reactions.',
        labRequired: true,
        apAccepted: true,
      },
      {
        name: 'General Chemistry 2',
        required: 'yes',
        notes:
          'Second semester of general chemistry covering equilibrium, thermodynamics, and acid-base reactions.',
        labRequired: true,
        apAccepted: true,
      },
      {
        name: 'Organic Chem 1',
        required: 'yes',
        notes:
          'Fundamental organic chemistry covering reactions and mechanisms.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'Organic Chem 2',
        required: 'no',
        notes: 'Not required but may strengthen foundation for biochemistry.',
        labRequired: false,
      },
      {
        name: 'Biochemistry',
        required: 'yes',
        notes:
          'One semester of biochemistry focusing on molecular biology and metabolism.',
        labRequired: false,
      },
      {
        name: 'Physics 1',
        required: 'yes',
        notes:
          'Introductory physics covering mechanics and thermodynamics. Lab component required.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'Physics 2',
        required: 'yes',
        notes:
          'Continuation of introductory physics focusing on electricity, magnetism, and optics.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'English Comp',
        required: 'yes',
        notes:
          'Required for developing critical writing and analytical skills.',
      },
      {
        name: 'English Lit',
        required: 'no',
        notes:
          'Not required but may be beneficial for strengthening communication skills.',
      },
      {
        name: 'Calculus 1',
        required: 'yes',
        notes: 'Single-variable calculus covering derivatives and integrals.',
        apAccepted: true,
      },
      {
        name: 'Calculus 2',
        required: 'no',
        notes:
          'Not required but recommended for students interested in research or quantitative sciences.',
      },
      {
        name: 'Statistics',
        required: 'recommended',
        notes:
          'Recommended for students interested in data analysis and research.',
        alternateOptions: ['Biostatistics', 'Data Analysis'],
      },
      {
        name: 'Psychology',
        required: 'no',
        notes: 'Not required.',
      },
      {
        name: 'Sociology',
        required: 'no',
        notes: 'Not required.',
      },
    ],
  },
  {
    name: 'Vanderbilt',
    generalNotes:
      'Focus on rigorous foundational science coursework with opportunities for interdisciplinary studies. Research experience highly valued.',
    requiredClasses: [
      {
        name: 'General Biology 1',
        required: 'yes',
        notes: 'Introductory biology covering molecular and cellular biology.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'General Biology 2',
        required: 'yes',
        notes:
          'Continuation of introductory biology, focusing on organismal biology and systems.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'Genetics',
        required: 'no',
        notes:
          'Not required but may provide additional depth in biological sciences.',
      },
      {
        name: 'Cell Biology',
        required: 'no',
        notes: 'Not required.',
      },
      {
        name: 'Physiology',
        required: 'no',
        notes:
          'Not required but may be beneficial for students interested in human systems.',
      },
      {
        name: 'General Chemistry 1',
        required: 'yes',
        notes:
          'General chemistry focusing on atomic structure, bonding, and basic reactions.',
        labRequired: true,
        apAccepted: true,
      },
      {
        name: 'General Chemistry 2',
        required: 'yes',
        notes:
          'Second semester of general chemistry covering equilibrium, thermodynamics, and acid-base reactions.',
        labRequired: true,
        apAccepted: true,
      },
      {
        name: 'Organic Chem 1',
        required: 'yes',
        notes:
          'Fundamental organic chemistry covering reactions and mechanisms.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'Organic Chem 2',
        required: 'no',
        notes: 'Not required but may strengthen foundation for biochemistry.',
        labRequired: false,
      },
      {
        name: 'Biochemistry',
        required: 'yes',
        notes:
          'One semester of biochemistry focusing on molecular biology and metabolism.',
        labRequired: false,
      },
      {
        name: 'Physics 1',
        required: 'yes',
        notes:
          'Introductory physics covering mechanics and thermodynamics. Lab component required.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'Physics 2',
        required: 'yes',
        notes:
          'Continuation of introductory physics focusing on electricity, magnetism, and optics.',
        labRequired: true,
        apAccepted: false,
      },
      {
        name: 'English Comp',
        required: 'yes',
        notes:
          'Required for developing critical writing and analytical skills.',
      },
      {
        name: 'English Lit',
        required: 'no',
        notes:
          'Not required but may be beneficial for strengthening communication skills.',
      },
      {
        name: 'Calculus 1',
        required: 'yes',
        notes: 'Single-variable calculus covering derivatives and integrals.',
        apAccepted: true,
      },
      {
        name: 'Calculus 2',
        required: 'no',
        notes:
          'Not required but recommended for students interested in research or quantitative sciences.',
      },
      {
        name: 'Statistics',
        required: 'recommended',
        notes:
          'Recommended for students interested in data analysis and research.',
        alternateOptions: ['Biostatistics', 'Data Analysis'],
      },
      {
        name: 'Psychology',
        required: 'no',
        notes: 'Not required.',
      },
      {
        name: 'Sociology',
        required: 'no',
        notes: 'Not required.',
      },
    ],
  },
  {
    name: 'U-Washington',
    generalNotes: '',
    requiredClasses: [
      {
        name: 'General Biology 1',
        required: 'yes',
        labRequired: true,
      },
      {
        name: 'General Biology 2',
        required: 'yes',
        labRequired: true,
      },
      {
        name: 'Genetics',
        required: 'recommended',
        labRequired: false,
      },
      {
        name: 'Cell Biology',
        required: 'recommended',
        labRequired: false,
      },
      {
        name: 'Physiology',
        required: 'yes',
        labRequired: false,
      },
      {
        name: 'General Chemistry 1',
        required: 'yes',
        labRequired: true,
      },
      {
        name: 'General Chemistry 2',
        required: 'yes',
        labRequired: true,
      },
      {
        name: 'Organic Chem 1',
        required: 'yes',
        labRequired: true,
      },
      {
        name: 'Organic Chem 2',
        required: 'no',
        labRequired: false,
      },
      {
        name: 'Biochemistry',
        required: 'yes',
        labRequired: false,
      },
      {
        name: 'Physics 1',
        required: 'yes',
        labRequired: true,
      },
      {
        name: 'Physics 2',
        required: 'yes',
        labRequired: true,
      },
      {
        name: 'English Comp',
        required: 'yes',
        labRequired: false,
      },
      {
        name: 'English Lit',
        required: 'no',
        labRequired: false,
      },
      {
        name: 'Calculus 1',
        required: 'yes',
        labRequired: false,
      },
      {
        name: 'Calculus 2',
        required: 'no',
        labRequired: false,
      },
      {
        name: 'Statistics',
        required: 'recommended',
        labRequired: false,
      },
      {
        name: 'Psychology',
        required: 'no',
        labRequired: false,
      },
      {
        name: 'Sociology',
        required: 'no',
        labRequired: false,
      },
    ],
  },
  {
    name: 'UCLA',
    generalNotes: '',
    requiredClasses: [
      {
        name: 'General Biology 1',
        required: 'recommended',
        labRequired: false,
      },
      {
        name: 'General Biology 2',
        required: 'recommended',
        labRequired: false,
      },
      {
        name: 'Genetics',
        required: 'recommended',
        labRequired: false,
      },
      {
        name: 'Cell Biology',
        required: 'recommended',
        labRequired: false,
      },
      {
        name: 'Physiology',
        required: 'recommended',
        labRequired: false,
      },
      {
        name: 'General Chemistry 1',
        required: 'recommended',
        labRequired: false,
      },
      {
        name: 'General Chemistry 2',
        required: 'recommended',
        labRequired: false,
      },
      {
        name: 'Organic Chem 1',
        required: 'recommended',
        labRequired: false,
      },
      {
        name: 'Organic Chem 2',
        required: 'recommended',
        labRequired: false,
      },
      {
        name: 'Biochemistry',
        required: 'recommended',
        labRequired: false,
      },
      {
        name: 'Physics 1',
        required: 'recommended',
        labRequired: false,
      },
      {
        name: 'Physics 2',
        required: 'recommended',
        labRequired: false,
      },
      {
        name: 'English Comp',
        required: 'recommended',
        labRequired: false,
      },
      {
        name: 'English Lit',
        required: 'no',
        labRequired: false,
      },
      {
        name: 'Calculus 1',
        required: 'recommended',
        labRequired: false,
      },
      {
        name: 'Calculus 2',
        required: 'no',
        labRequired: false,
      },
      {
        name: 'Statistics',
        required: 'recommended',
        labRequired: false,
      },
      {
        name: 'Psychology',
        required: 'no',
        labRequired: false,
      },
      {
        name: 'Sociology',
        required: 'no',
        labRequired: false,
      },
    ],
  },
]

export default medSchoolData
