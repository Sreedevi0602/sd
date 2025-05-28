import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a dedicated Full-Stack Developer with six months of hands-on experience in building dynamic and responsive web applications. I specialize in front-end technologies such as React and JavaScript, and have a strong command of back-end development using Django and Python, as well as relational databases including MySQL and SQLite. I am confident in my ability to quickly learn and adapt to entirely new technology stacks within a reasonable timeframe. My goal is to leverage my knowledge and work ethic to develop innovative, scalable solutions that enhance user experience and support business growth.`;



export const EXPERIENCES = [
  {
    year: "October 2024 - April 2025",
    role: "Full-Stack Intern (Django, Python & React)",
    company: "Rogersoft Technologies",
    description: 
      `Developed interactive, responsive frontend interfaces using React, Bootstrap 5, and Material-UI (MUI), enhancing user engagement, improving user experience, and ensuring UI consistency across the applications.
      Contributed to the development and optimization of scalable backend systems with Python and Django, ensuring high performance and maintainability.
      Integrated and managed SQLite and MySQL databases, focusing on schema design, query optimization, and performance tuning to efficiently handle large-scale data.
      Collaborated effectively using GitHub for version control by resolving conflicts, maintaining code consistency, and supporting smooth integration within an Agile environment.`,
    technologies: [ "React", "Django", "Python", "MySQL", "SQLite", "Bootstrap", "JavaScript", "MUI", "GitHub", "Agile" ],
  },
  {
    year: "July 2023 - September 2024",
    role: "Junior Project Associate",
    company: "Aurbiz & Beyond",
    description: 
      `Collaborated with the development team on Shopify-based e-commerce projects, assisting with store setup, theme customization, admin dashboard enhancements, and app integrations.
      Supported end-to-end web development projects, including planning, content structuring, and front-end optimization using HTML, CSS, JavaScript, and Bootstrap.
      Collaborated with cross-functional teams on project planning, development, and execution; coordinated with clients; and gained hands-on experience in delivering tech-driven business solutions in a startup-focused consulting environment.`,
    technologies: ["Shopify", "HTML", "CSS", "JavaScript", "Bootstrap", "GitHub" ],
  },
  
];

export const PROJECTS = [
  {
    title: "Online Book Store (Full-Stack App)",
    image: project1,
    description: 
    `Built a full-stack online bookstore using Django, leveraging Django templates for the frontend and SQLite as the database.
    Implemented key features including book browsing, search functionality, and filtering by category and author.
    Developed cart and order management system enabling users to purchase books seamlessly.
    Integrated secure user authentication and session management for both customers and admin users.
    Designed and developed an admin dashboard to manage books, categories, orders, and user accounts with full CRUD functionality.`,
    
  
    technologies: ["Django", "Python", "SQLite", "HTML", "CSS", "JavaScript", "Bootstrap" ],
  },
  {
    title: "Business Consulting Firm Profile Site",
    image: project2,
    description:
      `Developed a responsive profile website for a business consulting firm using React and Material-UI.
       Designed and implemented the full User Interface, including landing page components and a video carousel in the hero section.
       Created reusable components like a sticky navbar, responsive price cards for service packages, and a contact form.
       Integrated a testimonial section to boost credibility and user engagement.
       Utilized React Router DOM for multi-page navigation with dynamic routes and clean linking.`,
    technologies: ["React", "MUI", "React Router DOM"],
  },
  {
    title: "B2B Shopify Clothing Store",
    image: project3,
    description:
      ` Customized a Shopify store for a clothing brand, focusing on B2B sales with retailer-based pricing logic, using Shopify CLI for efficient theme development and deployment.
        Implemented set-based pricing in the admin dashboard, with price variation based on quantity (3 to 10 units).
        Integrated Tally for accounting and WhatsApp API for direct customer communication and order tracking.
        Customized login and signup workflows, requiring admin approval for price visibility; unverified users cannot view prices.
        Enhanced Shopify admin panel using Liquid and Shopify Admin for customer, order, and access control management.`,
    technologies: ["Liquid (Shopify)", "Shopify CLI", "Shopify Admin", "Bootstrap"],
  },
  {
    title: "Quote Generator App (Full-Stack CRUD Application)",
    image: project1,
    description:
      ` Developed a full-stack quote management application with Django (REST API) and React, enabling the admin to list and manage quotes and users to submit and view quotes.
        Implemented full CRUD functionality with Django REST Framework, leveraging class-based views for API endpoints, and utilized React’s state management to handle dynamic data updates on the frontend.
        Created and integrated REST APIs using Django REST Framework, making API calls via Axios to handle quote submission, retrieval, and updates between the frontend and backend.
        Designed and styled a responsive user interface using Bootstrap, implementing dynamic components like interactive quote submission forms and Bootstrap cards to display quotes in a user-friendly manner.`,
    technologies: ["React", "Axios", "Django (Python)", "SQLite", "REST API", "Bootstrap"],
  },
  {
    title: "Contact Diary (Personal Contact Manager)",
    image: project2,
    description:
      ` Developed a Django-based personal contact management system featuring secure user registration, login, and session-based authentication.
        Implemented full CRUD operations for contacts, including the ability to add, edit, delete, and search user-specific contact entries.
        Integrated a functionality for users to upload and manage contact-related photos, including preview and delete options.
        Created an admin dashboard for the superuser to view and manage all registered users.
        Leveraged Django’s authentication framework and SQLite for secure data storage and user-specific data access.`,
    technologies: ["Django (Python)", "SQLite", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Project Management Dashboard",
    image: project4,
    description:
      ` Developed a fully responsive project management dashboard using React and Material-UI, ensuring a modern interface and consistent user experience across devices.
        Integrated external APIs using Axios to enable secure user registration and login functionality.
        Leveraged Redux for effective global state management, handling users, tasks, authentication state, and app-wide data flow.
        Fetched and rendered user, post, and comment data from the JSONPlaceholder API to simulate real-world client-server communication.
        Configured multi-page routing with React Router DOM, allowing dynamic and intuitive navigation between the dashboard, task list, user profiles, and comments section.`,
    technologies: ["React", "Redux", "Axios", "MUI", "React-Router-DOM"],
  },
];


export const CONTACT = {
  address: "Kerala, India",
  phoneNo: "+91 75920 36585          +91 81488 04155",
  email: "vssreedevi2001@gmail.com",
};
