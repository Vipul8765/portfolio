/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Vipul Shukla",
  title: "Hi all, I'm Vipul",
  subTitle: emoji(
    "A passionate Full Stack developer 🚀 having an experience of designing and building Web  applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1bTE3al_IZ0U_1s9c4NH5zAG7ZerB3mOjdHHm9HT1KPM/edit",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Vipul8765",
  linkedin: "https://www.linkedin.com/in/vipulshu/",
  gmail: "https://www.shuklavipul8765@gmail.com",
 // gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/imVShuklaa",
  codechef: "https://codechef.com/vipul8765",
  geeksforgeeks: "https://geeksforgeeks.com/shuklavipul8765",
  instagram: 'https://www.instagram.com/imvshuklaa/',
  twitter: 'https://twitter.com/imVShuklAA',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER  WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web application"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fab fa-cpp"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "DSA",
      fontAwesomeClassname: "fas fa-dsa"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SPRIC BANSI SIDDHARTHNAGAR",
      logo: require("./assets/images/download.png"),
      subHeader: "School life",
      duration: "September 2009 - April 2018",
      desc: "A science Student.",
      
    },
    {
      schoolName: "MOTION",
      logo: require("./assets/images/res.png"),
      subHeader: "Dropper life",
      duration: "September 2018 - April 2019",
      desc: "Stress life.",
      
    },
    {
      schoolName: "BBNITM,LUCKNOW",
      logo: require("./assets/images/1.jpg"),
      subHeader: "College life",
      duration: "September 2019 - April 2023",
      desc:
        "Bachelor of Technology in Computer Science ,Took courses about Software Engineering, Web Developer, Operating Systems, ...",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "C", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "C++", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Datastructure and Algorthim", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Database",
      progressPercentage: "59%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Clever Programmer",
      companylogo: require("./assets/images/cpLogo.png"),
      date: "September 2020 – Present",
      desc:
        "Changing lives of developers one line of code at a time.",
      descBullets: [
        "Custom building applications",
        "Coaching",
        "Streaming live on YouTube",
        "Creating tutorials"
      ]
    },
    {
      role: "Product Owner (PSD2)",
      company: "Erste Bank",
      companylogo: require("./assets/images/ersteLogo.jpg"),
      date: "July 2019 – September 2020",
      desc:
        "I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements."
    },
    {
      role: "Junior Information Security & Systems Representative",
      company: "Vodafone",
      companylogo: require("./assets/images/vodafoneLogo.png"),
      date: "November 2018 – July 2019",
      desc:
        "I've conducted internal audit making sure the organization is compliant with the GDPR."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Vipul8765", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/tech.png"),
      projectName: "Customer Billing System",
     
      footerLink: [
        {
          name: "Customer Billing System",
          url: "#"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Global Warming Forecast",
    
      footerLink: [
        {
          name: "globalwarming forecast",
          url: "https://vnaypd.github.io/game/"
        }
      ]
    }
  ],
  display: TextTrackCueList // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Codingninjas",
      subtitle:
        "completed c++ and dsa using c++",
      image: require("./assets/images/hac.png"),
      footerLink: [
        {
          name: "C",
          url:
            "https://www.sololearn.com/Certificate/1089-17587616/pdf/"
        },
        {
          name: "cpp/c++",
          url:
            "https://certificate.codingninjas.com/view/c8a16f049d94db68"
        },
        {
          name: "dsa",
          url:
            "https://certificate.codingninjas.com/dsa"
        }
      ]
    },
    {
      title: "Hackerrank",
      subtitle:
        "python and problem solving skill",
      image: require("./assets/images/cera.png"),
      footerLink: [
        {
          name:  "Python and Problem solving",
          url:
            "https://www.hackerrank.com/certificates/bc261352c37d"
        }
      ]
    },

    {
      title: "Udemy",
      subtitle: "Complete javascripts with htmls,css3 from zero to expert-2021",
      image: require("./assets/images/umy.png"),
      footerLink: [
        {name: "Certification", url: "https://www.udemy.com/certificate/UC-24242850-603b-4efd-a5ba-b1bce8cb9170/"},
       
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

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+919554540875",
  email_address: "shuklavipul8765@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "imVhuklAA", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
