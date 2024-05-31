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
  username: "Daan De Bonte",
  title: "Hallo, ik ben Daan De Bonte",
  subTitle: "Een gepassioneerde systeem- en netwerkbeheerder met ervaring in het configureren van systemen en netwerken, cybersecurity en een basis aan development.",
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/daandebonte",
  linkedin: "https://www.linkedin.com/in/daan-de-bonte-671a73295",
  gmail: "daandebonte@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Wat ik doe",
  subTitle: "SYSTEEM- EN NETWERKBEHEERDER MET VEELZIJDIGE INTERESSE",
  skills: [
    emoji(
      "⚡ Opzetten en configureren van virtuele omgevingen"
    ),
    emoji("⚡ Opzetten van fysieke en digitale netwerken"),
    emoji(
      "⚡Onderhouden van een brede waaier aan systemen"
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
     {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    }





  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "HOGENT",
      logo: require("./assets/images/logo-1.jpg"),
      subHeader: "Bachelor Toegepaste Informatica",
      duration: "September 2021 - September 2024",
          },
    {
      schoolName: "Stella Matutina College",
      logo: require("./assets/images/smc.png"),
      subHeader: "Economie Wetenschappen",
      duration: "September 2016 - Juli 2021",
          }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Network administration ", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "System engineering",
      progressPercentage: "80%"
    },
    {
      Stack: "Database Management",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Systeem- en netwerkbeheerder",
      company: "SmartEye",
      companylogo: require("./assets/images/smarteye.png"),
      date: "Februari 2024 – Mei 2024",
         }  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projecten",
  subtitle: "Projecten waarin ik in mijn carrière aan heb meegewerkt.",
  projects: [
    {
      image: require("./assets/images/zatre.jpeg"),
      projectName: "Software Engineering Project",
      projectDesc: "Het spel Zatre geprogrammeerd, voor 2 tot 4 spelers ",
          },
    {
      image: require("./assets/images/cisco.png"),
      projectName: "System Engineering Project",
      projectDesc: "Netwerkinfrastructuur geautomatiseerd opgezet waaronder een webserver, domeincontroller, mailserver ... ",
          }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certificaties 🏆 "),
  subtitle:
    "De certificaten die ik in mijn carrière heb behaald!",

  achievementsCards: [
    {
      title: "MTCNA",
      subtitle:
        "Mikrotik Certified Network Associate",
      image: require("./assets/images/MikroTik-logo.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Cert number: 2403NA2619",
          
        }      ]
    },
    {
      title: "MTCRE",
      subtitle:
        "Mikrotik Certified Routing Engineer.",
      image: require("./assets/images/MikroTik-logo.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Cert number: 2404RE9499",
                 }
      ]
    }  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
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
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contacteer mij ☎️"),
  subtitle:
    "Suggesties om een project te starten of een gesprek te voeren? Mijn inbox staat open!"
  };

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
