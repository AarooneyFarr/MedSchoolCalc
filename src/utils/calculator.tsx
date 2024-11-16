// import React, {useState, useMemo} from "react";




// const calculateRequiredCourses = (schools: MedSchool[]): CourseRequirement[] => {
//     const requirements: CourseRequirement[] = Object.entries(courseDisplayNames)
//       .filter(([key]) => key !== 'notes')
//       .map(([key, name]) => ({
//         name,
//         courseKey: key,
//         required: false,
//         schoolsRequiring: [],
//         notes: [],
//         category: Object.entries(courseCategories).find(([_, courses]) => 
//           courses.includes(key)
//         )?.[0] || "other"
//       }));
  
//     schools.forEach(school => {
//       const reqs = school.requirements;
//       Object.entries(reqs).forEach(([key, value]) => {
//         if (key === 'notes') return;
//         const requirement = requirements.find(r => r.courseKey === key);
//         if (requirement && value) {
//           requirement.schoolsRequiring.push(school.name);
//           if (reqs.notes) {
//             requirement.notes.push(`${school.name}: ${reqs.notes}`);
//           }
//         }
//       });
//     });
  
//     requirements.forEach(req => {
//       req.required = req.schoolsRequiring.length > 0;
//     });
  
//     return requirements;
//   };