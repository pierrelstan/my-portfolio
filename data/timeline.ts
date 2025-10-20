import build from "next/dist/build";
import { code } from "./code";

export const timeline = [
  {
    id: 'exp-00232323234r43r4r34',
    position: 'Frontend Developer',
    subtitle: 'Solpam',
    company: 'Solpam app',
    type: 'Part-time',
    isLeadership:true,
    location: 'Remote',
    projectImage:"/solpamLogoProject.png",
    logo: '/solpam.png',
    leadership:"Contributed to decision-making regarding app features and user experience.",
    designer : "",
    developer:`
   - Transform UI/UX into functional code.
   - Ensured maintainable, testable code using TypeScript and React Native Testing Library.`,
    description:"Solpam is a financial app that simplifies the management of rotating savings groups (ROSCAs). It helps users track their contributions, manage payout turns, and stay organized, making collective saving more transparent and accessible.",
    techStack: ["Expo ReactNative", 'TypeScript', "React-Native testing-library", "Redux-toolkit","Prisma", "Git", "GitHub"],
    projectOutcome:"Project currently in development (ongoing)"
  },
  {
    id: 'exp-0054565464',
    position: 'Frontend Developer',
    subtitle: 'TreeTracker wallet app',
    company: 'TreeTracker wallet app',
    type: 'Part-time',
    isLeadership:true,
    location: 'Remote',
     projectImage:"/treetrackerwalletLogoProject.png",
    logo: '/greenstandLogo.png',
    leadership:"Led a  small team of developers to build a user-friendly web and  mobile app",
    designer : "",
    developer:`
  - Participate in decision-making for app features and user experience.
  - Ensure maintainable and testable code using Cypress.
  - Mentor junior developers.
  - Conduct code reviews.
    `,
    description:"TreeTracker Wallet is a user-friendly web and  mobile app built to simplify token transfers within the TreeTracker ecosystem.",
    techStack: ['Next.js',"ReactNative", 'Material UI', 'TypeScript', "Cypress", "Jotai", "React Native", "Git", "GitHub", "NestJS", "Appium","Docker"],
    projectOutcome:"Project currently in development (ongoing)"
  },
   {
    id: 'exp-3232ewew',
    subtitle: 'Treetracker Web Map',
    position: 'Frontend Developer',
    company: 'Treetracker Web Map',
    type: 'Part-time',
    isLeadership:false,
    location: 'Remote',
     projectImage:"/greenstandLogoProject.png",
     logo: '/greenstandLogo.png',
    designer : "",
    leadership:"",
    developer:"- Transform UI/UX into functional code.",
    description: "Treetracker Web Map displays location and details of all trees that have been tracked in Greenstand. Users can filter trees by species, age, and health status. The map is built using React, Mapbox GL JS, and integrates with the TreeTracker API to fetch real-time data.",
  techStack: ['Next.js', 'Material UI', 'TypeScript', "Git", "GitHub"],
    projectOutcome:"Project currently in development (ongoing)"
  },
  {
    id: 'exp-3232',
    subtitle: 'Treetracker Query API,This API exposes a RESTful interface to query the treetracker data, capture, planter and organization and others.',
    position: 'Backend Developer',
    company: 'Treetracker Query API',
    type: 'Part-time',
    isLeadership:false,
    location: 'Remote',
     projectImage:"/greenstandLogoProject.png",
     logo: '/greenstandLogo.png',
    designer : "",
    leadership:"",
    developer:"- Contributed to the development of RESTful API endpoints.",
    description: 'Treetracker Query API,This API exposes a RESTful interface to query the treetracker data, capture, planter and organization and others',
  techStack: ['TypeScript', "Git", "GitHub", "PostgreSQL"],
    projectOutcome:"Project currently in development (ongoing)"
  },
  //   {
  //   id: 'exp-2',
  //   subtitle: 'Haidev, a community app for Haitian developers',
  //   position: 'React Developer',
  //   company: 'Haidev, a community app for Haitian developers',
  //   type: 'Part-time',
  //   location: 'Remote',
  //    logo: '/noImage.jpg',
  //   designer : "",
  //   leadership:"",
  //   developer:"I contributed to the development of the front-end",
  //   description: 'Haidev is a community for developers for Haiti where to share and learn from each other.',
  // techStack: ['Next.js', 'Chakra UI', 'TypeScript', "Mdx", "Tailwind CSS", "Git", "GitHub", "Vercel"],
  //   projectOutcome:"On Hold"
  // },
    {
    id: 'exp-3',
    subtitle: 'Kay Rapid ',
    position: '',
    company: 'Kay Rapid',
    type: '',
    isLeadership:true,
    location: 'Haiti',
    projectImage:"/kayrapidLogoProject.png",
     logo: '/kayrapid.png',
     leadership:"Contributed to decision-making regarding app features and user experience.",
    designer : "",
    developer:"- Contributed to the development of the front-end and the UI/UX design",
    description: 'Kay Rapid is a housing app for Haiti. This project was my first "serious" React/React Native project. Where we were trying solving real housing problems through technology. Because Haiti has his own stucture to lend or rent apartments, we were trying to create a platform to connect landlords and tenants.',
    techStack: ["React Native", "Apollo Client", "React Navigation", "GraphQL Yoga", "Node JS", "Express", "Prisma"],
    projectOutcome:"The project had to stop because of lack of funding."
  },
];