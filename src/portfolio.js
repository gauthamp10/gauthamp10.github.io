/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gautham Prakash",
  title: "Hi, I'm Gautham",
  subTitle: emoji(
    "Cloud & DevOps Engineer ☁️ with 5+ years of experience across UAE, India and United States. Expert in designing secure, resilient, and cost-optimized cloud architectures on AWS & Azure, implementing CI/CD pipelines, containerization, and cloud governance."
  ),
  resumeLink: "https://gauthamp10.github.io/gautham-resume-dec-2025.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gauthamp10",
  linkedin: "https://www.linkedin.com/in/gauthamp10/",
  gmail: "gauthamp10@gmail.com",
  kaggle: "https://www.kaggle.com/gauthamp10",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CLOUD & DEVOPS ENGINEER PASSIONATE ABOUT AUTOMATION AND INFRASTRUCTURE",
  skills: [
    emoji(
      "⚡ Design and implement secure, resilient cloud architectures on AWS and Azure"
    ),
    emoji(
      "⚡ Build CI/CD pipelines, containerization, and infrastructure as code solutions"
    ),
    emoji(
      "⚡ Kubernetes orchestration, cost optimization, and DevSecOps best practices"
    ),
    emoji(
      "⚡ Mentor teams and drive FinOps initiatives for enterprise cloud transformations"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "terminal",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "network",
      fontAwesomeClassname: "fas fa-network-wired"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Marian College, Kerala, India",
      logo: require("./assets/images/marianLogo.png"),
      subHeader: "Master of Computer Applications",
      duration: "August 2018 - March 2020",
      desc: "Scored 85.32%",
      descBullets: []
    },
    {
      schoolName: "St. Berchmans College Autonomous, Kerala, India",
      logo: require("./assets/images/sbcLogo.png"),
      subHeader: "Bachelor of Computer Applications",
      duration: "July 2015 - March 2018",
      desc: "Scored 89.30%",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud Infrastructure (AWS/Azure)", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DevOps & CI/CD",
      progressPercentage: "85%"
    },
    {
      Stack: "Containerization (Docker/Kubernetes)",
      progressPercentage: "85%"
    },
    {
      Stack: "Infrastructure as Code (Terraform/Ansible)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer",
      company: "Albatha Holding LLC",
      companylogo: require("./assets/images/albathaLogo.webp"),
      date: "August 2024 – Present",
      desc: "Dubai, UAE - Leading infrastructure modernization, CI/CD pipelines, and DevOps enablement across Albatha Group. Migrated critical audit data to SharePoint, consolidated 10+ websites, designed GPU-based microservices for AI & IoT, and delivered DevSecOps workshops."
    },
    {
      role: "Cloud Engineer",
      company: "Cognizant Technology Solutions",
      companylogo: require("./assets/images/cognizantLogo.webp"),
      date: "October 2022 – July 2024",
      desc: "Cochin, India - Designed resilient AWS HA/DR architectures and mentored engineering teams. Achieved ~30% AWS cost reduction via Lambda automation and Karpenter autoscaling. Modularized Terraform code and managed Kubernetes clusters."
    },
    {
      role: "Cloud / DevOps Engineer",
      company: "eXlygenze Senseworks",
      companylogo: require("./assets/images/exlygenzeLogo.webp"),
      date: "November 2021 – September 2022",
      desc: "Mumbai, India - Managed AWS cloud environments with performance tuning and cost optimization. Conducted load testing with Locust, containerized applications via Ansible, and implemented POCs for Vault, Prometheus, and Loki."
    },
    {
      role: "Freelance Developer",
      company: "UBC | HKU | CUHK Business Schools",
      companylogo: require("./assets/images/ubcLogo.png"),
      date: "May 2019 – June 2021",
      desc: "Developed large-scale web data scraping solutions for academic research. Built automated pipelines for Yelp, BBB, Google Play, Huawei AppGallery, and Tencent Mobile Store using Python, Scrapy, Selenium, MongoDB, and Node.js."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects & Datasets",
  subtitle: "LARGE-SCALE DATASETS AND OPEN SOURCE PROJECTS I'VE CREATED",
  projects: [
    {
      image: require("./assets/images/gplayLogo.png"),
      projectName: "Google Play Store Apps Dataset",
      projectDesc:
        "Largest public Google Play Store dataset on Kaggle (~2.3M apps), enabling large-scale app market and ML analysis through structured, high-quality open data.",
      footerLink: [
        {
          name: "View on Kaggle",
          url: "https://www.kaggle.com/datasets/gauthamp10/google-playstore-apps"
        }
      ]
    },
    {
      image: require("./assets/images/appstoreLogo.png"),
      projectName: "Apple AppStore Apps Dataset",
      projectDesc:
        "Large public Apple App Store dataset (~1.2M apps) on Kaggle, enabling extensive analysis of app market trends and developer ecosystems.",
      footerLink: [
        {
          name: "View on Kaggle",
          url: "https://www.kaggle.com/datasets/gauthamp10/apple-appstore-apps"
        }
      ]
    },
    {
      image: require("./assets/images/androidPermLogo.png"),
      projectName: "Android Permission Dataset",
      projectDesc:
        "Large-scale Android App Permissions dataset covering ~2.2 million Google Play Store apps for security and privacy research.",
      footerLink: [
        {
          name: "View on Kaggle",
          url: "https://www.kaggle.com/datasets/gauthamp10/app-permissions-android"
        }
      ]
    },
    {
      image: require("./assets/images/dockerLogo.png"),
      projectName: "Dockerfile Boilerplates",
      projectDesc:
        "Docker boilerplates/templates for most common programming languages. Like a 'Hello World!' but for Docker images. 233+ stars on GitHub.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/gauthamp10/dockerfile-boilerplates"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle:
    "AWS Certified Professional with multiple Associate-level certifications",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect - Associate",
      subtitle: "Credential ID: M4X0FGGLE1EE153R",
      image: require("./assets/images/awsSaaLogo.png"),
      imageAlt: "AWS Solutions Architect Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.linkedin.com/in/gauthamp10/details/certifications/"
        }
      ]
    },
    {
      title: "AWS Certified SysOps Administrator - Associate",
      subtitle: "Credential ID: 311BPL3CSF14QTGS",
      image: require("./assets/images/awsSysOpsLogo.png"),
      imageAlt: "AWS SysOps Administrator Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.linkedin.com/in/gauthamp10/details/certifications/"
        }
      ]
    },
    {
      title: "AWS Certified Developer - Associate",
      subtitle: "Credential ID: T1PSZ99KTNFE10G7",
      image: require("./assets/images/awsDevLogo.png"),
      imageAlt: "AWS Developer Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.linkedin.com/in/gauthamp10/details/certifications/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+971 56 976 6501",
  email_address: "gauthamp10@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
