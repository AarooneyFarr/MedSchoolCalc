interface CourseCard {
    required: boolean;
    notes: string;
    labRequired?: boolean;
    alternateOptions?: string[];
    apAccepted?: boolean;
  }
  
  interface SchoolRequirements {
    genBio1: CourseCard;
    genBio2: CourseCard;
    genChem1: CourseCard;
    genChem2: CourseCard;
    orgChem1: CourseCard;
    orgChem2: CourseCard;
    biochem: CourseCard;
    physics1: CourseCard;
    physics2: CourseCard;
    genetics: CourseCard;
    cellBio: CourseCard;
    physiology: CourseCard;
    englishComp: CourseCard;
    englishLit: CourseCard;
    calc1: CourseCard;
    calc2: CourseCard;
    statistics: CourseCard;
    psychology: CourseCard;
    sociology: CourseCard;
  }
  
  interface MedSchool {
    name: string;
    requirements: SchoolRequirements;
    generalNotes: string;
  }
  
  const medSchoolData: MedSchool[] = [
    {
      name: "Harvard Medical School",
      requirements: {
        genBio1: {
          required: true,
          notes: "First semester of a two-part introductory biology sequence. Must include cellular and molecular biology topics.",
          labRequired: true,
          apAccepted: false
        },
        genBio2: {
          required: true,
          notes: "Second semester biology covering organismal biology and genetics. Lab work must include basic molecular biology techniques.",
          labRequired: true,
          apAccepted: false
        },
        genChem1: {
          required: true,
          notes: "First semester general chemistry covering atomic structure, bonding, and basic reactions.",
          labRequired: true,
          apAccepted: true,
          alternateOptions: ["Advanced placement with score of 5"]
        },
        genChem2: {
          required: true,
          notes: "Second semester general chemistry covering equilibrium, thermodynamics, and acid-base chemistry.",
          labRequired: true,
          apAccepted: true
        },
        orgChem1: {
          required: true,
          notes: "First semester organic chemistry. Must cover fundamental reactions and mechanisms.",
          labRequired: true,
          apAccepted: false
        },
        orgChem2: {
          required: true,
          notes: "Second semester organic chemistry with emphasis on synthesis and spectroscopy.",
          labRequired: true,
          apAccepted: false
        },
        biochem: {
          required: true,
          notes: "One semester biochemistry covering metabolism and molecular biology. Lab recommended but not required.",
          labRequired: false,
          alternateOptions: ["Advanced biochemistry series"]
        },
        physics1: {
          required: true,
          notes: "First semester physics covering mechanics and thermodynamics. Calculus-based preferred.",
          labRequired: true,
          apAccepted: true
        },
        physics2: {
          required: true,
          notes: "Second semester physics covering electricity, magnetism, and optics.",
          labRequired: true,
          apAccepted: true
        },
        genetics: {
          required: true,
          notes: "Advanced course covering classical and molecular genetics.",
          labRequired: false,
          alternateOptions: ["Molecular genetics", "Human genetics"]
        },
        cellBio: {
          required: true,
          notes: "Advanced course in cell biology with molecular emphasis.",
          labRequired: false
        },
        physiology: {
          required: false,
          notes: "Recommended but not required. Human physiology preferred.",
          labRequired: false
        },
        englishComp: {
          required: true,
          notes: "Must include substantial writing component and critical analysis.",
          apAccepted: true
        },
        englishLit: {
          required: true,
          notes: "Any literature course with significant writing component.",
          alternateOptions: ["Comparative literature", "World literature"]
        },
        calc1: {
          required: true,
          notes: "Single variable calculus covering derivatives and integrals.",
          apAccepted: true
        },
        calc2: {
          required: false,
          notes: "Recommended for students interested in research.",
          apAccepted: true
        },
        statistics: {
          required: true,
          notes: "Must cover probability and statistical inference. Biostatistics preferred.",
          alternateOptions: ["Biostatistics", "Statistical methods in research"]
        },
        psychology: {
          required: true,
          notes: "Introduction to psychology or behavioral science.",
          alternateOptions: ["Behavioral science", "Neuroscience"]
        },
        sociology: {
          required: true,
          notes: "Any course covering social determinants of health recommended.",
          alternateOptions: ["Medical sociology", "Public health"]
        }
      },
      generalNotes: "Strong emphasis on research experience and upper-level science coursework. AP credits accepted for some introductory courses but upper-level coursework in same department recommended."
    },{
        name: "Stanford University School of Medicine",
        requirements: {
          genBio1: {
            required: true,
            notes: "Introductory course in cellular and molecular biology. Laboratory experience required.",
            labRequired: true,
            apAccepted: false
          },
          genBio2: {
            required: true,
            notes: "Covers organismal biology and genetics. Must include a laboratory component.",
            labRequired: true,
            apAccepted: false
          },
          genChem1: {
            required: true,
            notes: "First semester of general chemistry. Includes fundamental principles and laboratory work.",
            labRequired: true,
            apAccepted: true
          },
          genChem2: {
            required: true,
            notes: "Continuation of general chemistry. Focus on thermodynamics and kinetics.",
            labRequired: true,
            apAccepted: true
          },
          orgChem1: {
            required: true,
            notes: "Organic chemistry with a focus on reactions and mechanisms.",
            labRequired: true,
            apAccepted: false
          },
          orgChem2: {
            required: true,
            notes: "Continuation of organic chemistry with synthesis and advanced topics.",
            labRequired: true,
            apAccepted: false
          },
          biochem: {
            required: true,
            notes: "Biochemistry course covering metabolism and molecular biology. Lab optional.",
            labRequired: false
          },
          physics1: {
            required: true,
            notes: "Physics covering mechanics and heat. Lab required.",
            labRequired: true,
            apAccepted: true
          },
          physics2: {
            required: true,
            notes: "Physics with electricity and magnetism focus.",
            labRequired: true,
            apAccepted: true
          },
          genetics: {
            required: true,
            notes: "Course focused on classical and molecular genetics.",
            labRequired: false,
            alternateOptions: ["Human genetics"]
          },
          cellBio: {
            required: true,
            notes: "Cell biology emphasizing molecular functions.",
            labRequired: false
          },
          physiology: {
            required: false,
            notes: "Recommended but not required. Human or animal physiology acceptable.",
            labRequired: false
          },
          englishComp: {
            required: true,
            notes: "Expository writing and composition course.",
            apAccepted: true
          },
          englishLit: {
            required: true,
            notes: "Any literature course that emphasizes analysis and writing.",
            alternateOptions: ["Comparative literature"]
          },
          calc1: {
            required: true,
            notes: "Single-variable calculus with focus on limits, derivatives, and integrals.",
            apAccepted: true
          },
          calc2: {
            required: false,
            notes: "Recommended for research-oriented applicants.",
            apAccepted: true
          },
          statistics: {
            required: true,
            notes: "Basic statistics course, biostatistics preferred.",
            alternateOptions: ["Research methods"]
          },
          psychology: {
            required: true,
            notes: "Course covering fundamental psychological principles.",
            alternateOptions: ["Neuroscience"]
          },
          sociology: {
            required: true,
            notes: "Course on social factors influencing health.",
            alternateOptions: ["Public health", "Medical sociology"]
          }
        },
        generalNotes: "Highly competitive program. Research experience and leadership roles in community health initiatives are valued."
      },
      {
        name: "University of Chicago Pritzker School of Medicine",
        requirements: {
          genBio1: {
            required: true,
            notes: "First semester of introductory biology. Must include lab work.",
            labRequired: true,
            apAccepted: false
          },
          genBio2: {
            required: true,
            notes: "Second semester introductory biology with focus on evolution and genetics.",
            labRequired: true,
            apAccepted: false
          },
          genChem1: {
            required: true,
            notes: "Fundamentals of chemistry including atomic structure and bonding.",
            labRequired: true,
            apAccepted: true
          },
          genChem2: {
            required: true,
            notes: "Thermodynamics, kinetics, and acid-base chemistry.",
            labRequired: true,
            apAccepted: true
          },
          orgChem1: {
            required: true,
            notes: "Organic chemistry with a focus on reaction mechanisms.",
            labRequired: true,
            apAccepted: false
          },
          orgChem2: {
            required: true,
            notes: "Continuation of organic chemistry. Includes spectroscopy and synthesis.",
            labRequired: true,
            apAccepted: false
          },
          biochem: {
            required: true,
            notes: "Comprehensive biochemistry course. Molecular biology topics included.",
            labRequired: false,
            alternateOptions: ["Advanced biochemistry"]
          },
          physics1: {
            required: true,
            notes: "Physics covering classical mechanics and thermodynamics.",
            labRequired: true,
            apAccepted: true
          },
          physics2: {
            required: true,
            notes: "Electricity, magnetism, and optics. Lab required.",
            labRequired: true,
            apAccepted: true
          },
          genetics: {
            required: true,
            notes: "Course in molecular and classical genetics.",
            labRequired: false
          },
          cellBio: {
            required: true,
            notes: "In-depth study of cellular processes and molecular functions.",
            labRequired: false
          },
          physiology: {
            required: false,
            notes: "Recommended for applicants interested in clinical medicine.",
            labRequired: false
          },
          englishComp: {
            required: true,
            notes: "Writing-intensive course required.",
            apAccepted: true
          },
          englishLit: {
            required: false,
            notes: "Recommended but not required for well-rounded applicants.",
            alternateOptions: ["World literature"]
          },
          calc1: {
            required: true,
            notes: "Calculus with applications in science.",
            apAccepted: true
          },
          calc2: {
            required: false,
            notes: "Optional but encouraged for quantitative-focused applicants.",
            apAccepted: true
          },
          statistics: {
            required: true,
            notes: "Course in statistics with applications in health sciences.",
            alternateOptions: ["Biostatistics"]
          },
          psychology: {
            required: true,
            notes: "Psychology or behavioral science with focus on cognitive development.",
            alternateOptions: ["Neuroscience"]
          },
          sociology: {
            required: true,
            notes: "Sociology course addressing health disparities.",
            alternateOptions: ["Medical sociology"]
          }
        },
        generalNotes: "Strong emphasis on social justice and serving underserved communities. Research experience is advantageous."
      }
    ];

export default medSchoolData;