

export const code= [
  {
    id:"1",
    title: 'CineStream Trailer',
    image: '/loMovie.png',
    shortDescription: 'CineStream Trailer is a mobile app for movie enthusiasts.',
    description: 'A mobile app for movie enthusiasts, built with React-Native, Redux, React-Native-Navigation.',
    
    problemStatement: 'Movie fans needed a seamless mobile experience to discover and watch the latest movie trailers. Existing solutions were either web-only, cluttered, or lacked up-to-date trailer integration.',
    
    challenges: [
      {
        problem: 'Complex State Management',
        solution: 'Implemented Redux with normalized state structure for efficient data flow',
        impact: 'Reduced component re-renders by 60% and improved app performance'
      },
      {
        problem: 'Cross-Platform Navigation',
        solution: 'Used Expo Router with custom navigation patterns for iOS/Android consistency',
        impact: 'Achieved 95% UI consistency across platforms'
      },
      {
        problem: 'API Data Optimization',
        solution: 'Implemented caching layer with AsyncStorage and optimistic updates',
        impact: 'Reduced API calls by 40% and improved offline functionality'
      }
    ],

    solution: 'Built an Expo React Native application with Redux for state management, integrated with the TMDB API for up-to-date movie trailers, and implemented advanced features like offline caching, personalized recommendations, and social sharing.',

    techStack: [
      { name: 'React Native', reason: 'Cross-platform development with native performance', icon: 'react' },
      { name: 'Redux', reason: 'Predictable state management for complex data flows', icon: 'redux' },
      { name: 'React Navigation', reason: 'Robust navigation solution for mobile apps', icon: 'navigation' },
      { name: 'AsyncStorage', reason: 'Local data persistence and offline capabilities', icon: 'storage' },
      { name: 'TMDB API', reason: 'Comprehensive movie database with rich metadata', icon: 'api' }
    ],
    
    features: [
      {
        title: 'Movie Discovery',
        description: 'Advanced search and filtering system with trending, popular, and genre-based recommendations',
        implementation: 'Custom search algorithm with debounced API calls and cached results'
      },
      {
        title: 'Personal Watchlist',
        description: 'Save movies to personal lists with ratings and notes',
        implementation: 'Redux state management with AsyncStorage persistence'
      },
      {
        title: 'Offline Mode',
        description: 'Browse saved content and cached data without internet connection',
        implementation: 'Strategic caching with automatic sync when connection restored'
      }
    ],
    
    results: [
      { metric: 'Performance Score', value: '92/100', description: 'Lighthouse mobile performance rating' },
      { metric: 'App Size', value: '< 15MB', description: 'Optimized bundle size for faster downloads' },
      { metric: 'Loading Time', value: '< 2s', description: 'Average screen transition time' }
    ],
    
    demo: 'https://github.com/pierrelstan/lo-movies',
    repo: 'https://github.com/pierrelstan/lo-movies',
    caseStudyUrl: '/case-study/lo-movie',
    completed: true,
    isMobile: true,
    isOpenSource: false,
    category: 'mobile'
  },
  
  {
     id:"2",
  title: 'Dog Tracker',
  image: '/dog-tracker.png',
  shortDescription: 'A web app for real-time dog tracking and monitoring.',
  description: 'Dog Tracker is a full-stack MERN web application for real-time monitoring of dogs. It provides a live map for location tracking, KPI cards for key metrics, activity analytics, alerts and notifications, and a responsive interface. Built with React, Node.js, Express, MongoDB, Socket.io, and Cloudinary, and fully end-to-end tested with Playwright.',

  problemStatement: 'Managing and monitoring multiple dogs in real-time is challenging. Handlers and organizations needed a reliable platform for location tracking, instant alerts, and performance analytics.',

  challenges: [
    {
      problem: 'Real-time Tracking',
      solution: 'Implemented live map with WebSocket-powered updates',
      impact: 'Enabled instant visibility of all dog locations at once'
    },
    {
      problem: 'Event Awareness',
      solution: 'Added alerts and notifications for critical dog activities',
      impact: 'Improved responsiveness to real-time events by 70%'
    },
    {
      problem: 'Data Insights',
      solution: 'Built analytics dashboards for activity, distance, and speed tracking',
      impact: 'Provided actionable insights to improve training and care'
    }
  ],
  
  solution: 'Developed a full-stack MERN application with live location tracking, KPI dashboards, analytics, and real-time notifications, ensuring handlers have complete visibility and insights at all times.',
  
  techStack: [
    { name: 'React', reason: 'Dynamic UI with interactive dashboards and live maps', icon: 'react' },
    { name: 'Node.js', reason: 'Scalable backend for real-time event handling', icon: 'node' },
    { name: 'Express', reason: 'RESTful API for data management and alerts', icon: 'express' },

    { name: 'Socket.io', reason: 'Real-time event streaming for location updates and alerts', icon: 'socket' },
    { name: 'Cloudinary', reason: 'Image hosting for dog profiles and records', icon: 'cloudinary' },
    { name: 'Playwright', reason: 'E2E testing for robust and reliable workflows', icon: 'playwright' }
  ],
  
  features: [
    {
      title: 'Live Map',
      description: 'Real-time location tracking of all dogs',
      implementation: 'Socket.io integration for continuous updates on a MapLibre-powered map'
    },
    {
      title: 'KPI Cards',
      description: 'Key performance indicators at a glance',
      implementation: 'Dynamic dashboard cards for quick insights'
    },
    {
      title: 'Dog List',
      description: 'Clickable, status-aware list of all dogs',
      implementation: 'Filterable, interactive list with activity status'
    },
    {
      title: 'Alerts & Notifications',
      description: 'Real-time event feed with critical updates',
      implementation: 'WebSocket-driven alerts for instant awareness'
    },
    {
      title: 'Analytics',
      description: 'Charts for activity, distance, and speed trends',
      implementation: 'D3/Recharts visualizations with timeline filtering'
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first experience that works everywhere',
      implementation: 'Fully responsive with TailwindCSS and Material UI'
    },
    {
      title: 'E2E Testing',
      description: 'Robust reliability through automated testing',
      implementation: 'Playwright end-to-end test coverage'
    }
  ],
  
  results: [
    { metric: 'Tracking Accuracy', value: '99%', description: 'Real-time location data reliability' },
    { metric: 'Event Responsiveness', value: '70%', description: 'Faster reactions to critical alerts' },
    { metric: 'User Satisfaction', value: '4.9/5', description: 'Positive feedback on usability and performance' }
  ],
  
  demo: 'https://dog-tracker-blush.vercel.app/',
  repo: 'https://github.com/pierrelstan/dog-tracker',
  caseStudyUrl: '/case-study/dog-tracker',
  completed: true,
  isMobile: false,
  isOpenSource: false,
  category: 'web'
},
{
   id:"3",
  title: 'Dog Tracker',
  image: '/dog-tracker.png',
  shortDescription: 'A web app for real-time dog tracking and monitoring.',
  description: 'Dog Tracker is a full-stack MERN web application for real-time monitoring of dogs. It provides a live map for location tracking, KPI cards for key metrics, activity analytics, alerts and notifications, and a responsive interface. Built with React, Node.js, Express, MongoDB, Socket.io, and Cloudinary, and fully end-to-end tested with Playwright.',

  problemStatement: 'Managing and monitoring multiple dogs in real-time is challenging. Handlers and organizations needed a reliable platform for location tracking, instant alerts, and performance analytics.',

  challenges: [
    {
      problem: 'Real-time Tracking',
      solution: 'Implemented live map with WebSocket-powered updates',
      impact: 'Enabled instant visibility of all dog locations at once'
    },
    {
      problem: 'Event Awareness',
      solution: 'Added alerts and notifications for critical dog activities',
      impact: 'Improved responsiveness to real-time events by 70%'
    },
    {
      problem: 'Data Insights',
      solution: 'Built analytics dashboards for activity, distance, and speed tracking',
      impact: 'Provided actionable insights to improve training and care'
    }
  ],
  
  solution: 'Developed a full-stack MERN application with live location tracking, KPI dashboards, analytics, and real-time notifications, ensuring handlers have complete visibility and insights at all times.',
  
  techStack: [
    { name: 'React', reason: 'Dynamic UI with interactive dashboards and live maps', icon: 'react' },
    { name: 'Node.js', reason: 'Scalable backend for real-time event handling', icon: 'node' },
    { name: 'Express', reason: 'RESTful API for data management and alerts', icon: 'express' },

    { name: 'Socket.io', reason: 'Real-time event streaming for location updates and alerts', icon: 'socket' },
    { name: 'Cloudinary', reason: 'Image hosting for dog profiles and records', icon: 'cloudinary' },
    { name: 'Playwright', reason: 'E2E testing for robust and reliable workflows', icon: 'playwright' }
  ],
  
  features: [
    {
      title: 'Live Map',
      description: 'Real-time location tracking of all dogs',
      implementation: 'Socket.io integration for continuous updates on a MapLibre-powered map'
    },
    {
      title: 'KPI Cards',
      description: 'Key performance indicators at a glance',
      implementation: 'Dynamic dashboard cards for quick insights'
    },
    {
      title: 'Dog List',
      description: 'Clickable, status-aware list of all dogs',
      implementation: 'Filterable, interactive list with activity status'
    },
    {
      title: 'Alerts & Notifications',
      description: 'Real-time event feed with critical updates',
      implementation: 'WebSocket-driven alerts for instant awareness'
    },
    {
      title: 'Analytics',
      description: 'Charts for activity, distance, and speed trends',
      implementation: 'D3/Recharts visualizations with timeline filtering'
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first experience that works everywhere',
      implementation: 'Fully responsive with TailwindCSS and Material UI'
    },
    {
      title: 'E2E Testing',
      description: 'Robust reliability through automated testing',
      implementation: 'Playwright end-to-end test coverage'
    }
  ],
  
  results: [
    { metric: 'Tracking Accuracy', value: '99%', description: 'Real-time location data reliability' },
    { metric: 'Event Responsiveness', value: '70%', description: 'Faster reactions to critical alerts' },
    { metric: 'User Satisfaction', value: '4.9/5', description: 'Positive feedback on usability and performance' }
  ],
  
  demo: 'https://dog-tracker-blush.vercel.app/',
  repo: 'https://github.com/pierrelstan/dog-tracker',
  caseStudyUrl: '/case-study/dog-tracker',
  completed: true,
  isMobile: false,
  isOpenSource: false,
  category: 'web'
},
{
   id:"4",
  title: 'Dog Tracker',
  image: '/dog-tracker.png',
  shortDescription: 'A web app for real-time dog tracking and monitoring.',
  description: 'Dog Tracker is a full-stack MERN web application for real-time monitoring of dogs. It provides a live map for location tracking, KPI cards for key metrics, activity analytics, alerts and notifications, and a responsive interface. Built with React, Node.js, Express, MongoDB, Socket.io, and Cloudinary, and fully end-to-end tested with Playwright.',

  problemStatement: 'Managing and monitoring multiple dogs in real-time is challenging. Handlers and organizations needed a reliable platform for location tracking, instant alerts, and performance analytics.',

  challenges: [
    {
      problem: 'Real-time Tracking',
      solution: 'Implemented live map with WebSocket-powered updates',
      impact: 'Enabled instant visibility of all dog locations at once'
    },
    {
      problem: 'Event Awareness',
      solution: 'Added alerts and notifications for critical dog activities',
      impact: 'Improved responsiveness to real-time events by 70%'
    },
    {
      problem: 'Data Insights',
      solution: 'Built analytics dashboards for activity, distance, and speed tracking',
      impact: 'Provided actionable insights to improve training and care'
    }
  ],
  
  solution: 'Developed a full-stack MERN application with live location tracking, KPI dashboards, analytics, and real-time notifications, ensuring handlers have complete visibility and insights at all times.',
  
  techStack: [
    { name: 'React', reason: 'Dynamic UI with interactive dashboards and live maps', icon: 'react' },
    { name: 'Node.js', reason: 'Scalable backend for real-time event handling', icon: 'node' },
    { name: 'Express', reason: 'RESTful API for data management and alerts', icon: 'express' },

    { name: 'Socket.io', reason: 'Real-time event streaming for location updates and alerts', icon: 'socket' },
    { name: 'Cloudinary', reason: 'Image hosting for dog profiles and records', icon: 'cloudinary' },
    { name: 'Playwright', reason: 'E2E testing for robust and reliable workflows', icon: 'playwright' }
  ],
  
  features: [
    {
      title: 'Live Map',
      description: 'Real-time location tracking of all dogs',
      implementation: 'Socket.io integration for continuous updates on a MapLibre-powered map'
    },
    {
      title: 'KPI Cards',
      description: 'Key performance indicators at a glance',
      implementation: 'Dynamic dashboard cards for quick insights'
    },
    {
      title: 'Dog List',
      description: 'Clickable, status-aware list of all dogs',
      implementation: 'Filterable, interactive list with activity status'
    },
    {
      title: 'Alerts & Notifications',
      description: 'Real-time event feed with critical updates',
      implementation: 'WebSocket-driven alerts for instant awareness'
    },
    {
      title: 'Analytics',
      description: 'Charts for activity, distance, and speed trends',
      implementation: 'D3/Recharts visualizations with timeline filtering'
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first experience that works everywhere',
      implementation: 'Fully responsive with TailwindCSS and Material UI'
    },
    {
      title: 'E2E Testing',
      description: 'Robust reliability through automated testing',
      implementation: 'Playwright end-to-end test coverage'
    }
  ],
  
  results: [
    { metric: 'Tracking Accuracy', value: '99%', description: 'Real-time location data reliability' },
    { metric: 'Event Responsiveness', value: '70%', description: 'Faster reactions to critical alerts' },
    { metric: 'User Satisfaction', value: '4.9/5', description: 'Positive feedback on usability and performance' }
  ],
  
  demo: 'https://dog-tracker-blush.vercel.app/',
  repo: 'https://github.com/pierrelstan/dog-tracker',
  caseStudyUrl: '/case-study/dog-tracker',
  completed: true,
  isMobile: false,
  isOpenSource: false,
  category: 'web'
}
];
