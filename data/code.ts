

export const code= [
  {
   id:"5",
  title: 'Game Vault',
  image: '/game-vault.png',
  shortDescription: 'Game Vault is an e-commerce platform designed for gamers and enthusiasts to discover and purchase games easily.',
  description: 'Game Vault is a dedicated online marketplace for gamers and gaming enthusiasts to discover, browse, and purchase a wide selection of digital and physical games. With a user-friendly interface, secure checkout, and real-time inventory, Game Vault makes it easy to find the latest releases and classic titles. The platform is optimized for performance and accessibility, ensuring a smooth shopping experience for every gamer.',

  problemStatement: 'Gamers and enthusiasts need a reliable, user-friendly platform to discover, purchase, and review games online. Existing solutions often lack community features, real-time inventory, or a seamless buying experience.',

  challenges: [
    {
      problem: 'Game Discovery',
      solution: 'Implemented advanced search, filters, and personalized recommendations',
      impact: 'Helped users quickly find games they love'
    },
    {
      problem: 'Seamless Purchase Experience',
      solution: 'Built a secure, intuitive checkout and payment system',
      impact: 'Reduced cart abandonment and increased sales conversion'
    },
    {
      problem: 'Community Engagement',
      solution: 'Added user reviews, ratings, and wishlists',
      impact: 'Boosted user trust and platform engagement'
    }
  ],
  
  solution: 'Developed a modern e-commerce platform for games with advanced discovery, secure checkout, real-time inventory, and community features, delivering a top-tier experience for gamers and enthusiasts.',
  
  techStack: [
    { name: 'React', reason: 'Dynamic UI for product browsing and checkout', icon: 'react' },
    { name: 'Node.js', reason: 'Scalable backend for handling orders and user data', icon: 'node' },
    { name: 'Express', reason: 'RESTful API for product, user, and order management', icon: 'express' },
    { name: 'MongoDB', reason: 'Flexible database for products, users, and reviews', icon: 'mongodb' },
    { name: 'Stripe', reason: 'Secure and reliable payment processing', icon: 'stripe' },
    { name: 'Cypress', reason: 'E2E testing for robust and reliable workflows', icon: 'cypress' }
  ],
  
  features: [
    {
      title: 'Game Discovery',
      description: 'Advanced search, filters, and recommendations for finding games',
      implementation: 'Personalized suggestions and category-based browsing'
    },
    {
      title: 'Secure Checkout',
      description: 'Fast and safe payment process for digital and physical games',
      implementation: 'Stripe integration and order management system'
    },
    {
      title: 'User Reviews & Ratings',
      description: 'Community-driven feedback on games',
      implementation: 'Review and rating system for each product'
    },
    {
      title: 'Wishlists',
      description: 'Save favorite games for later',
      implementation: 'User accounts with wishlist functionality'
    },
    {
      title: 'Real-time Inventory',
      description: 'Always up-to-date stock information',
      implementation: 'Backend updates and UI sync for product availability'
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first experience for shopping on any device',
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
  
  demo: 'https://echo-one.vercel.app/',
  repo: 'https://github.com/pierrelstan/game-vault',
  caseStudyUrl: '/case-study/game-vault',
  completed: true,
  isMobile: false,
  isOpenSource: false,
  category: 'web'
},
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
      { name: 'Expo React-Native', reason: 'Cross-platform development with native performance', icon: 'react' },
      { name: 'Redux Toolkit', reason: 'Predictable state management for complex data flows', icon: 'redux' },
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
   id:"78",
  title: 'Resto',
  image: '/yayaresto.png',
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
    { name: 'Next.js', reason: 'Dynamic UI with interactive dashboards and live maps', icon: 'react' },
    { name: 'Styled-Component', reason: 'CSS-in-JS for modular and dynamic styling', icon: 'styled-components' }
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
