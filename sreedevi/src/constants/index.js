import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a dedicated full stack developer with six months of hands-on experience building dynamic and responsive web applications. I specialize in front-end technologies like React and JavaScript and have a strong command of back-end frameworks such as Django and Python, along with databases like MySQL and SQLite. I am confident in my ability to quickly learn and adapt to entirely new technology stacks within a reasonable timeframe. My goal is to leverage my knowledge and work ethic to develop innovative, scalable solutions that enhance user experience and support business growth.`;



export const EXPERIENCES = [
  {
    year: "October 2024 - April 2025",
    role: "Python React Full-Stack Intern",
    company: "Rogersoft Technologies",
    description: 
      `Contributed to the design and optimization of scalable backend systems using Python and Django.
      Integrated and managed MySQL databases, including schema design and performance-tuned queries.
      Built interactive and dynamic frontend interfaces with React and Bootstrap 5.
      Utilized Git for version control, ensuring efficient collaboration and conflict resolution.`,
    technologies: ["Django", "React.js", "Python", "MySQL", "SQLite", "Bootstrap", "JavaScript", "Git", "GitHub"],
  },
  {
    year: "July 2023 - September 2024",
    role: "Junior Project Associate",
    company: "Aurbiz & Beyond",
    description: 
      `Collaborated with the development team on Shopify-based e-commerce projects, assisting in store setup, theme customization, and app integrations.
      Supported the end-to-end execution of web development projects, including planning, content structuring, and front-end optimization.
      Worked closely with cross-functional teams to assist in project planning, development, and execution across various initiatives.
      Contributed to project documentation, client communication, and coordination of B2B events and e-commerce shoots, gaining hands-on experience with branding workflows and technology-driven business solutions in a startup-focused consulting environment.`,
    technologies: ["Shopify", "HTML", "CSS", "JavaScript", "Bootstrap", "Git", "GitHub" ],
  },
  
];

export const PROJECTS = [
  {
    title: "Online Book Store (Full-Stack App)",
    image: project1,
    description: 
    `Developed a fullstack e-commerce-style online bookstore using Django (backend) and React with MUI (frontend).
    Implemented book search, filtering by category,author, subject and cart-based purchasing via REST APIs.
    Built secure customer login, registration, cart, and checkout pages using React-Router-DOM and Axios.
    Designed an admin dashboard with CRUD functionality for managing books, categories, orders, and users.
    Enabled order management: view, accept, or reject customer orders with real-time status updates.
    Integrated secure authentication and session handling for both customers and admins.`,
    
  
    technologies: ["React.js", "Axios", "React-Router-DOM", "MUI", "Django", "REST API", "SQLite" ],
  },
  {
    title: "Business Consulting Firm Profile Site",
    image: project2,
    description:
      `Built a responsive profile website for a business consulting firm using React and Material UI.
       Designed and implemented the full UI layout, including hero section with image carousel, landing sections, and feature highlights.
       Developed reusable components such as sticky navbar, responsive price cards for service packages, and a contact form.
       Integrated a testimonial section to enhance credibility and user engagement.
       Used React Router DOM to implement multi-page navigation with dynamic routes and clean linking.`,
    technologies: ["React.js", "MUI", "React-Router-DOM"],
  },
  {
    title: "B2B Shopify Clothing Store",
    image: project3,
    description:
      ` Customized a Shopify store for a clothing brand, tailored exclusively for B2B sales with retailer-based product pricing logic.
        Implemented set-based pricing in the admin dashboard — pricing varies by quantity per set (e.g., 3 to 10 units).
        Displayed only price per unit on the product page; total price is shown only after adding items to cart.
        Integrated Tally for accounting and WhatsApp API for direct customer communication and order tracking.
        Customized customer login/signup workflows to include admin approval for price visibility; unverified users cannot view prices.
        Enhanced Shopify admin panel using Liquid and Shopify Admin API to manage customers, orders, and access control.`,
    technologies: ["Shopify", "Liquid", "Shopify Admin API", "WhatsApp API", "Bootstrap"],
  },
  {
    title: "Quote Generator App (Full-Stack CRUD Application)",
    image: project1,
    description:
      ` Developed a fullstack quote management application allowing users to submit, view, and list quotes, using Django backend and React frontend.
        Implemented full CRUD functionality using Django REST Framework and React state management.
        Created REST APIs with class-based views and connected them to frontend using Axios.
        Designed and styled interactive frontend forms and quote cards using Bootstrap.
        Built responsive quote rendering logic using component lifecycle methods and form handling in React.
        Enabled secure quote submission from the client side and rendered dynamic Bootstrap card components based on user inputs.`,
    technologies: ["React.js", "Axios", "Django", "SQLite", "REST API", "Bootstrap"],
  },
  {
    title: "Contact Diary (Personal Contact Manager)",
    image: project2,
    description:
      ` Developed a Django-based personal contact manager allowing users to register, log in, and manage contact information securely.
        Implemented full CRUD functionality for contacts, including add, edit, delete, and search operations.
        Added user-specific photo galleries with the ability to upload and delete images.
        Created an admin dashboard for the superuser to manage all registered users and their data.
        Implemented session-based authentication for secure user login and personalized data handling.`,
    technologies: ["Django", "SQLite", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Project Management Dashboard",
    image: project4,
    description:
      ` Developed a dynamic and responsive project management web application using React.
        Implemented secure user authentication and registration by integrating external APIs with Axios.
        Utilized Redux for centralized state management of tasks, users, and application state.
        Integrated API data (users, posts, comments, gallery, tasks) from JSONPlaceholder to demonstrate client-server communication.
        Built multi-page routing with React_Router-DOM for seamless navigation between dashboard, tasks, posts, comments, gallery and user profiles.
        Designed a modern, responsive UI using Material-UI components for a professional look and feel.`,
    technologies: ["React.js", "Redux", "Axios", "MUI", "React-Router-DOM"],
  },
];


export const CONTACT = {
  address: "Kerala, India",
  phoneNo: "+91 75920 36585          +91 81488 04155",
  email: "vssreedevi2001@gmail.com",
};
