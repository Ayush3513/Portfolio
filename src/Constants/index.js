export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'EducateHub - Full-Stack LMS',
      desc: 'EducateHub is a production-ready learning management system with a Next.js frontend and Node.js backend, fully deployed on AWS. It features course creation, video management, and integrated Stripe payments, demonstrating advanced full-stack development skills.',
      subdesc:
        'Built with Next.js, Redux Toolkit, Express.js,Docker and AWS services (Lambda,ECR, API Gateway, DynamoDB, S3, CloudFront), showcasing proficiency in modern web development and cloud architecture.',
      href: 'https://learning-management-peach.vercel.app/',
      texture: '/textures/project/project1.mp4',
      logo: 'https://learning-management-peach.vercel.app/logo.svg',
      logoStyle: {
        backgroundColor: '',
        border: '0.2px solid #',
        boxShadow: '0px 0px 60px 0px #6C6DF8',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/next.png',
        },
        {
          id: 2,
          name: 'Node.js',
          path: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png',
        },
        {
          id: 3,
          name: 'AWS',
          path: '/assets/aws.png',
        },
        {
          id: 4,
          name: 'Redux Toolkit',
          path: 'https://img.icons8.com/ios_filled/512/FFFFFF/redux.png',
        },
        {
          id: 5,
          name: 'Stripe',
          path: '/assets/stripe.svg',
        },
        {
          id: 6,
          name: 'Docker',
          path: '/assets/docker.png',
        },
        {
          id: 7,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 8,
          name: 'TypeScript',
          path: '/assets/ts.png',
        },
        {
          id: 9,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'TaskMaster - Full-Stack Project Management System',
      desc: 'TaskMaster is a comprehensive, AWS-deployed project management application built with a Next.js frontend and Node.js backend. It features drag-and-drop task management, multiple project views, and Cognito authentication, demonstrating proficiency in modern web development and enterprise-level cloud architecture',
      subdesc:
        'Developed using Next.js, Redux Toolkit, Express.js, Prisma, and PostgreSQL, with AWS services (EC2, RDS, Amplify, S3, Cognito) for scalable cloud deployment.',
      href: 'https://main.de4scjhlmpck3.amplifyapp.com/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '',
        border: '0.2px solid #',
        boxShadow: '0px 0px 60px 0px #6AC0F4',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/next.png',
        },
        {
          id: 2,
          name: 'Node.js',
          path: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png',
        },
        {
          id: 3,
          name: 'Postgresql',
          path: '/assets/postgre.png',
        },{
          id: 4,
          name: 'Node.js',
          path: 'https://pbs.twimg.com/profile_images/1773419566955188224/CA54xhtv_400x400.jpg',
        },
        {
          id: 5,
          name: 'AWS',
          path: '/assets/aws.png',
        },
        {
          id: 6,
          name: 'Redux Toolkit',
          path: 'https://img.icons8.com/ios_filled/512/FFFFFF/redux.png',
        },
        {
          id: 7,
          name: 'TypeScript',
          path: '/assets/ts.png',
        },
        {
          id: 8,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        
        
      ],
    },
    {
      title: 'CineStream - Full-Stack Movie Application',
      desc: 'CineStream is a dynamic movie application that allows users to explore a vast collection of films and TV shows. Built with a modern tech stack, detailed movie information, and seamless streaming experiences.',
      subdesc: 'Developed using React, Redux Toolkit. The application leverages RESTful APIs for data fetching and integrates third-party services for enhanced functionality, showcasing expertise in Frontend development',
      href: 'https://react-movie-app-gilt-nu.vercel.app/',
      texture: '/textures/project/cinestream.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '',
        border: '0.2px solid #',
        boxShadow: '0px 0px 60px 0px #1585C0',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React',
          path: '/assets/react.svg',
        },
        {
          id: 5,
          name: 'Redux Toolkit',
          path: 'https://img.icons8.com/ios_filled/512/FFFFFF/redux.png',
        },
        {
          id: 7,
          name: 'TailwindCSS',
          path: '/assets/tailwindcss.png',
        },
        {
          id: 8,
          name: 'TypeScript',
          path: 'https://academyclass.com/wp-content/uploads/2021/10/Javascript.png',
        },

      ],
    },
    {
      title: 'Creative Portfolio Website',
      desc: 'The creative portfolio which showacases my creative front-end abilities.',
      subdesc:
        'Built with HTML5,CSS3 and JavaScript ensures a smooth scrolling experience, tailored to meet the needs of modern consumers.',
      href: 'https://ayush-portfolio-peach.vercel.app/',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/android-icon-192.png',
      logoStyle: {
        backgroundColor: '',
        border: '0.2px solid #',
        boxShadow: '0px 0px 60px 0px #ffffff',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'https://imgs.search.brave.com/_ktgl1niL3VcoFd2nqsizZKBRL4rfwGPKYajhJf9tPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzAwL0hUTUw1X2xv/Z29fYmxhY2suc3Zn',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'https://imgs.search.brave.com/0Cft3FGbTJKQfhIYloea1ee7FuqSnoXeftGekUNaXKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZmxhdC1icmFu/ZC1sb2dvLTIvNTEy/L2NzczMtNTEyLnBu/Zw',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/pngwing.com.png',
        },
       
      ],
    },
    {
      title: 'Refoku Work Page Clone',
      desc: "I have cloned the Refoku's work website which showacases my creative front-end abilities",
      subdesc: 'Developed using React, Framer Motion. This application reflects my animation capabilities.',
      href: 'https://refokus-clone-psi.vercel.app/',
      texture: '/textures/project/cinestream.mp4',
      logo: 'https://masterbundles.com/wp-content/uploads/2022/10/294-790-1024x1024.jpg',
      logoStyle: {
        backgroundColor: '',
        border: '0.2px solid #',
        boxShadow: '0px 0px 60px 0px #ffffff',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React',
          path: '/assets/react.svg',
        },
        {
          id: 7,
          name: 'TailwindCSS',
          path: '/assets/tailwindcss.png',
        },
        {
          id: 8,
          name: 'TypeScript',
          path: '/assets/framer.png',
        },
        {
          id: 8,
          name: 'TypeScript',
          path: 'https://academyclass.com/wp-content/uploads/2021/10/Javascript.png',
        },
      ],
    },
    {
      title: 'BMW - Hackathon Project',
      desc: "Recreated the BMW website for the second round of a national frontend hackathon Implemented creative animations to deliver an engaging and interactive user experience",
      subdesc:
        'Built with HTML5,CSS3 and JavaScript ensures a smooth scrolling experience, tailored to meet the needs of modern consumers.',
      href: 'https://one-man-army-reimagine-round2.vercel.app/',
      texture: '/textures/project/project5.mp4',
      logo: 'https://imgs.search.brave.com/AVSiEWBwxhYJoXAHzdGHMhbB_tyMD_tKQjAvrW7k-gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MjA2NmIxYmQ3Yjkx/YjAwMDQxMjI2MDAu/cG5n',
      logoStyle: {
        backgroundColor: '',
        border: '0.2px solid #',
        boxShadow: '0px 0px 60px 0px #0065B2',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'https://imgs.search.brave.com/_ktgl1niL3VcoFd2nqsizZKBRL4rfwGPKYajhJf9tPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzAwL0hUTUw1X2xv/Z29fYmxhY2suc3Zn',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'https://imgs.search.brave.com/0Cft3FGbTJKQfhIYloea1ee7FuqSnoXeftGekUNaXKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZmxhdC1icmFu/ZC1sb2dvLTIvNTEy/L2NzczMtNTEyLnBu/Zw',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/pngwing.com.png',
        },
      ],
    },
    {
      title: 'Magma Clone Website',
      desc: "I have cloned the magma's website which showacases my creative front-end abilities.",
      subdesc:
        'Built with HTML5,CSS3 and JavaScript, tailored to meet the needs of modern consumers.',
      href: 'https://magma-ashy.vercel.app/',
      texture: '/textures/project/project4.mp4',
      logo: 'https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-1.jpeg',
      logoStyle: {
        backgroundColor: '',
        border: '0.2px solid ',
        boxShadow: '0px 0px 60px 0px #1933C6',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'https://imgs.search.brave.com/_ktgl1niL3VcoFd2nqsizZKBRL4rfwGPKYajhJf9tPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzAwL0hUTUw1X2xv/Z29fYmxhY2suc3Zn',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'https://imgs.search.brave.com/0Cft3FGbTJKQfhIYloea1ee7FuqSnoXeftGekUNaXKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZmxhdC1icmFu/ZC1sb2dvLTIvNTEy/L2NzczMtNTEyLnBu/Zw',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/pngwing.com.png',
        },
       
      ],
    },
    {
      title: "Rejoice Clone Website",
      desc: "Cloned the Rejoice website for improving my frontend skills and Implemented creative animations to deliver an engaging and interactive user experience",
      subdesc:
        'Built with HTML5,CSS3 and JavaScript ensures a smooth scrolling experience, tailored to meet the needs of modern consumers.',
      href: 'https://minimalistic-landing-page-zcw9.vercel.app/',
      texture: '/textures/project/project5.mp4',
      logo:"https://static.vecteezy.com/system/resources/thumbnails/017/398/794/small/orange-circle-free-png.png",
      logoStyle: {
        backgroundColor: '',
        border: '0.2px solid #',
        boxShadow: '0px 0px 60px 0px #FF490D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'https://imgs.search.brave.com/_ktgl1niL3VcoFd2nqsizZKBRL4rfwGPKYajhJf9tPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzAwL0hUTUw1X2xv/Z29fYmxhY2suc3Zn',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'https://imgs.search.brave.com/0Cft3FGbTJKQfhIYloea1ee7FuqSnoXeftGekUNaXKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZmxhdC1icmFu/ZC1sb2dvLTIvNTEy/L2NzczMtNTEyLnBu/Zw',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/pngwing.com.png',
        },
      ],
    },
    {
      title: "LAZREV Clone Website",
      desc: "Cloned the lazrev website for improving my frontend skills and Implemented creative animations to deliver an engaging and interactive user experience",
      subdesc:
        'Built with HTML5,CSS3 and JavaScript ensures a smooth scrolling experience, tailored to meet the needs of modern consumers.',
      href: 'https://lazrev.vercel.app/',
      texture: '/textures/project/project5.mp4',
      logo: "data:image/png;base64,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",
      logoStyle: {
        backgroundColor: '',
        border: '0.2px solid #',
        boxShadow: '0px 0px 60px 0px #00995E',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'https://imgs.search.brave.com/_ktgl1niL3VcoFd2nqsizZKBRL4rfwGPKYajhJf9tPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzAwL0hUTUw1X2xv/Z29fYmxhY2suc3Zn',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'https://imgs.search.brave.com/0Cft3FGbTJKQfhIYloea1ee7FuqSnoXeftGekUNaXKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZmxhdC1icmFu/ZC1sb2dvLTIvNTEy/L2NzczMtNTEyLnBu/Zw',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/pngwing.com.png',
        },
      ],
    },
    {
      title: "Obeys Agency Clone Website",
      desc: "Cloned the Obeys Agency website for improving my frontend skills and Implemented creative animations to deliver an engaging and interactive user experience",
      subdesc:
        'Built with HTML5,CSS3 and JavaScript ensures a smooth scrolling experience, tailored to meet the needs of modern consumers.',
      href: 'https://obys-agency-seven.vercel.app/',
      texture: '/textures/project/project5.mp4',
      logo:"https://i.pinimg.com/originals/d0/0a/2b/d00a2bd94b096951dcd35df5c1169671.jpg", 
      logoStyle: {
        backgroundColor: '',
        border: '0.2px solid #',
        boxShadow: '0px 0px 60px 0px #ffffff',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'https://imgs.search.brave.com/_ktgl1niL3VcoFd2nqsizZKBRL4rfwGPKYajhJf9tPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzAwL0hUTUw1X2xv/Z29fYmxhY2suc3Zn',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'https://imgs.search.brave.com/0Cft3FGbTJKQfhIYloea1ee7FuqSnoXeftGekUNaXKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZmxhdC1icmFu/ZC1sb2dvLTIvNTEy/L2NzczMtNTEyLnBu/Zw',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/pngwing.com.png',
        },
      ],
    },
    {
      title: "SunDown Clone Website",
      desc: "Cloned the SunDown website for improving my frontend skills and Implemented creative animations to deliver an engaging and interactive user experience",
      subdesc:
        'Built with HTML5,CSS3 and JavaScript ensures a smooth scrolling experience, tailored to meet the needs of modern consumers.',
      href: 'https://minimalistic-landing-page-zcw9.vercel.app/',
      texture: '/textures/project/project5.mp4',
      logo:"https://static.vecteezy.com/system/resources/thumbnails/017/398/794/small/orange-circle-free-png.png",
      logoStyle: {
        backgroundColor: '',
        border: '0.2px solid #',
        boxShadow: '0px 0px 60px 0px #FF490D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'https://imgs.search.brave.com/_ktgl1niL3VcoFd2nqsizZKBRL4rfwGPKYajhJf9tPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzAwL0hUTUw1X2xv/Z29fYmxhY2suc3Zn',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'https://imgs.search.brave.com/0Cft3FGbTJKQfhIYloea1ee7FuqSnoXeftGekUNaXKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZmxhdC1icmFu/ZC1sb2dvLTIvNTEy/L2NzczMtNTEyLnBu/Zw',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/pngwing.com.png',
        },
      ],
    },
    {
      title: 'Monster Drink - Hackathon Project',
      desc: "Recreated the Monster Drink website for the First round of a national frontend hackathon Implemented creative animations to deliver an engaging and interactive user experience",
      subdesc:
        'Built with HTML5,CSS3 and JavaScript ensures a smooth scrolling experience, tailored to meet the needs of modern consumers.',
      href: 'https://one-man-army-reimagine-round1.vercel.app/',
      texture: '/textures/project/project5.mp4',
      logo:"/assets/pngegg.png",
      logoStyle: {
        backgroundColor: '',
        border: '0.2px solid #',
        boxShadow: '0px 0px 60px 0px #9CCA3C',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'https://imgs.search.brave.com/_ktgl1niL3VcoFd2nqsizZKBRL4rfwGPKYajhJf9tPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzAwL0hUTUw1X2xv/Z29fYmxhY2suc3Zn',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'https://imgs.search.brave.com/0Cft3FGbTJKQfhIYloea1ee7FuqSnoXeftGekUNaXKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZmxhdC1icmFu/ZC1sb2dvLTIvNTEy/L2NzczMtNTEyLnBu/Zw',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/pngwing.com.png',
        },
      ],
    },
    {
      title: 'Adobe Firefly - Hackathon Project',
      desc: "Recreated the Adobe Firefly website for the Fourth round of a national frontend hackathon, Implemented creative animations to deliver an engaging and interactive user experience",
      subdesc:
        'Built with HTML5,CSS3 and JavaScript ensures a smooth scrolling experience, tailored to meet the needs of modern consumers.',
      href: 'https://one-man-army-round4.vercel.app/',
      texture: '/textures/project/project5.mp4',
      logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Adobe_Firefly_Logo.svg/2101px-Adobe_Firefly_Logo.svg.png",
      logoStyle: {
        backgroundColor: '',
        border: '0.2px solid #',
        boxShadow: '0px 0px 60px 0px #EC0800',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'https://imgs.search.brave.com/_ktgl1niL3VcoFd2nqsizZKBRL4rfwGPKYajhJf9tPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzAwL0hUTUw1X2xv/Z29fYmxhY2suc3Zn',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'https://imgs.search.brave.com/0Cft3FGbTJKQfhIYloea1ee7FuqSnoXeftGekUNaXKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZmxhdC1icmFu/ZC1sb2dvLTIvNTEy/L2NzczMtNTEyLnBu/Zw',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/pngwing.com.png',
        },
      ],
    },
    {
      title: "Significo Clone Website",
      desc: "Cloned the Significo website for improving my frontend skills and Implemented creative animations to deliver an engaging and interactive user experience",
      subdesc:
        'Built with HTML5,CSS3 and JavaScript ensures a smooth scrolling experience, tailored to meet the needs of modern consumers.',
      href: 'https://obys-agency-seven.vercel.app/',
      texture: '/textures/project/project5.mp4',
      logo:"https://imgs.search.brave.com/cClCljsyB9CxI4o9i_OsJfFDeAYbI__Q9XwbbNCLi7o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC84Ny84Ny9s/ZXR0ZXItcy1sb2dv/LW1vZGVybi1tb25v/Z3JhbS1jb252ZXJn/aW5nLWxpbmVzLXZl/Y3Rvci0yMDQ5ODc4/Ny5qcGc",
      logoStyle: {
        backgroundColor: '',
        border: '0.2px solid #',
        boxShadow: '0px 0px 60px 0px #ffffff',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'https://imgs.search.brave.com/_ktgl1niL3VcoFd2nqsizZKBRL4rfwGPKYajhJf9tPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzAwL0hUTUw1X2xv/Z29fYmxhY2suc3Zn',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'https://imgs.search.brave.com/0Cft3FGbTJKQfhIYloea1ee7FuqSnoXeftGekUNaXKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZmxhdC1icmFu/ZC1sb2dvLTIvNTEy/L2NzczMtNTEyLnBu/Zw',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/pngwing.com.png',
        },
      ],
    },
    {
      title: "Two Good Clone Website",
      desc: "Cloned the Two Good website for improving my frontend skills and Implemented creative animations to deliver an engaging and interactive user experience",
      subdesc:
        'Built with HTML5,CSS3 and JavaScript ensures a smooth scrolling experience, tailored to meet the needs of modern consumers.',
      href: 'https://two-good-tan.vercel.app/',
      texture: '/textures/project/project5.mp4',
      logo:"https://www.citypng.com/public/uploads/small/116643259889uojqdwi8ipcxyrw7a4jhooyrflub0xw4ytgsyksx1zxgy5h5grzzhssuapvy3o1gyitgn5wghfwry0id4feldq7nkwtwtxdrc2c.png", 
      logoStyle: {
        backgroundColor: '',
        border: '0.2px solid #',
        boxShadow: '0px 0px 60px 0px #ffffff',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'https://imgs.search.brave.com/_ktgl1niL3VcoFd2nqsizZKBRL4rfwGPKYajhJf9tPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzAwL0hUTUw1X2xv/Z29fYmxhY2suc3Zn',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'https://imgs.search.brave.com/0Cft3FGbTJKQfhIYloea1ee7FuqSnoXeftGekUNaXKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZmxhdC1icmFu/ZC1sb2dvLTIvNTEy/L2NzczMtNTEyLnBu/Zw',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/pngwing.com.png',
        },
      ],
    },
    {
      title: "Creative Minimal Website",
      desc: "Created minimal website for improving my frontend skills and Implemented creative animations to deliver an engaging and interactive user experience",
      subdesc:
        'Built with HTML5,CSS3 and JavaScript ensures a smooth scrolling experience, tailored to meet the needs of modern consumers.',
      href: 'https://minimalistic-landing-page-beta.vercel.app/',
      texture: '/textures/project/project5.mp4',
      logo:"/assets/project-logo5.png",
      logoStyle: {
        backgroundColor: '',
        border: '0.2px solid #',
        boxShadow: '0px 0px 60px 0px #2868D8',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'https://imgs.search.brave.com/_ktgl1niL3VcoFd2nqsizZKBRL4rfwGPKYajhJf9tPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzAwL0hUTUw1X2xv/Z29fYmxhY2suc3Zn',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'https://imgs.search.brave.com/0Cft3FGbTJKQfhIYloea1ee7FuqSnoXeftGekUNaXKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZmxhdC1icmFu/ZC1sb2dvLTIvNTEy/L2NzczMtNTEyLnBu/Zw',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/pngwing.com.png',
        },
      ],
    },
    {
      title: "Creative Reyban Website",
      desc: "Created creative Reyban website for improving my frontend skills and Implemented creative animations to deliver an engaging and interactive user experience",
      subdesc:
        'Built with HTML5,CSS3 and JavaScript, tailored to meet the needs of modern consumers.',
      href: 'https://modern-landingpage-ten.vercel.app/',
      texture: '/textures/project/project5.mp4',
      logo:"https://i.pinimg.com/736x/80/90/b5/8090b5efef09cab31b65393b3862118e.jpg",
      logoStyle: {
        backgroundColor: '',
        border: '0.2px solid #',
        boxShadow: '0px 0px 60px 0px #ffffff',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'https://imgs.search.brave.com/_ktgl1niL3VcoFd2nqsizZKBRL4rfwGPKYajhJf9tPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzAwL0hUTUw1X2xv/Z29fYmxhY2suc3Zn',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'https://imgs.search.brave.com/0Cft3FGbTJKQfhIYloea1ee7FuqSnoXeftGekUNaXKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZmxhdC1icmFu/ZC1sb2dvLTIvNTEy/L2NzczMtNTEyLnBu/Zw',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/pngwing.com.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.07 : isMobile ? 0.065 : isTablet ? 0.09 : 0.1 ,
      deskPosition: isSmall ?[0.9,-4,-13] : isMobile ? [0.9,-4,-13] : isTablet ? [0.9,-5,-13] :  [0.9,-9.1,-13],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [15.2, -8, -10],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] :[20, 7, -10],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 9, -10],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-14, -10, -10],
    };
  };



  export const workExperiences = [
    {
      id: 1,
      name: 'Full-Stack Development',
      pos: 'Next.js & MERN Developer',
      duration: '',
      title: "Build high-performance web applications using Next.js and MERN stack with robust APIs and dynamic UI.",
      icon: 'https://imgs.search.brave.com/mOCx1bfRkfRFUb4ME2vOJDWNJZ6K0lkAuRM8eXTi4NQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E3L1JlYWN0LWlj/b24uc3Zn',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Cloud Deployment & DevOps',
      pos: 'AWS & Docker',
      duration: '',
      title: "Deploy scalable applications on AWS,cloudflare and manage containerized workflows using Docker and CI/CD pipelines.",
      icon: '/assets/aws.png',
      animation: 'salute',
    },
    {
      id: 3,
      name: 'Database Management',
      pos: 'PostgreSQL & Prisma ',
      duration: '',
      title: "Design efficient databases with PostgreSQL and Prisma for modern web applications.",
      icon: '/assets/postgre.png',
      animation: 'clapping',
    },
  ];
  