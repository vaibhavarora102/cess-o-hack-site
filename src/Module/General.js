// Importing all sponsors logos from Assets
import taskade from "./Assets/sponsorsLogos/taskade.png";
import Replit from "./Assets/sponsorsLogos/replit.png";
import interviewC from "./Assets/sponsorsLogos/interview-cake.jpg";
import echoAR from "./Assets/sponsorsLogos/echoAR.png";
import cfc from "./Assets/sponsorsLogos/cfc.png";
import pass from "./Assets/sponsorsLogos/1pass.png";
import glimpse from "./Assets/sponsorsLogos/glimpse.png";
import qoom from "./Assets/sponsorsLogos/qoom.svg";
import sublime from "./Assets/sponsorsLogos/sublime.png";
import egg from "./Assets/sponsorsLogos/egg.png";
import ll from "./Assets/sponsorsLogos/ll.png";
import ACF from "./Assets/sponsorsLogos/ACF.png";

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets
import me from "./Assets/teami/me.png";
import moon from "./Assets/teami/moon.png";
import Ryah from "./Assets/teami/Ryah.jpg";
import lyin from "./Assets/teami/lyin.jpg";
import zoha from "./Assets/teami/zoha.png";

/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import cess from "./Assets/cess.png";

const TOP_SECTION = {
  subTitle: "Hackathon 3.0",
  TITLE: "Join CESS-O-HACK",
  Typed_effect: ["24 hours of creation", "Win awesome prizes"],
  SHORT_DESCRIPTION:
    "Join us on 2nd October 2021 with over 500+ students from across the nation for 24 hours of creation, innovation, & fun.",
  IMG_SRC: cess,
  DISCORD_LINK: "",
  JUDGES_FORM_LINK:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNVRQMUg4VllMRURDN1lON0haNFVCQUgySC4u",
  HACKERS_REGISTRATION_FORM_LINK:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNTgyREk0VzdEMU9RVFlPMVNWVEJQUkNYMi4u"
};

const SOCIALS = {
  instagram: "https://www.instagram.com/limbohacks/",
  linkedin: "https://www.linkedin.com/company/limbo-hacks/",
  twitter: "https://twitter.com/HacksLimbo",
  email: "mailto:hello@limbohacks.tech",
  mail: "hello@limbohacks.tech"
};

const MIDDLE_SECTION = {
  TITLE: "What is CESS-O-HACK?",
  LONG_DESCRIPTION:
    "CESS-O-Hack  is 24 hour long running hackathon will be held on October 2nd & 3rd , We calls for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part to win awesome prizes and collaborate with other developers . Throughout the weekend hackers at Limbo Hacks will have unique opportunities to learn from each other trying hands in new technologies We are determined to have an all-inclusive and diverse group of students attending.",
  LOGO_EFFECT: false,
  LOGO: ""
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u"
  },
  JOIN_TEAM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u"
  },
  Privacy_policy: {
    required: true,
    src: ""
  },
  Terms_of_use: {
    required: true,
    src: ""
  }
};

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: "overall First",
      content: "Coming Soon!!"
    },
    {
      icon: <i class=" second fas fa-4x fa-medal"></i>,
      type: "overall Second",
      content: "Coming soon!!"
    },
    {
      icon: <i class=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Third Second",
      content: "Coming soon!!"
    }
  ],
  [
    //Array 3
    {
      icon: <i class="fas fa-user-friends seventh fa-3x "></i>,
      type: "More prizes",
      content: "Coming soon!!"
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: "Rehan",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: me
    },
    {
      Name: "Moon",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: moon
    },
    {
      Name: "Ryah Garcia",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: "Lyanola",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: lyin
    },
    {
      Name: "Zoheb",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: zoha
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: "What is a hackathon?",
        content:
          "A hackathon is a 24 hour event where tech enthusiast collaborate on creating a functioning software and hardware application based on there innovative idea by the end of the event."
      },
      {
        label: "What will be the mode of hackathon?",
        content:
          "CESS-O-HACK will be an offline mode Hackathon, You need to visit campus permises of Guru Nanak Dev University, Amritsar"
      },
      {
        label: "Who can attend?",
        content:
          "CESS-O-HACK is open to all undergraduate students from all universities and institutes. You need to visit Guru Nanak Dev University, Amritsar campus during hackathon period to build project "
      },
      {
        label: "I am a first time hacker, what should I do?",
        content:
          "No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. Mentors would be available to guide you during hackathon period"
      },
      {
        label: "How team formation works?",
        content:
          "You can form team with 4 members in it at maximum, and atleat 2 members in team. "
      }
    ],
    [
      {
        label: "How to register myself in the hackathon?",
        content:
          "All you need is to fill our form above. Further you will be notified on your registered mail and contact number(if required)"
      },
      {
        label: "I have more questions?",
        content:
          "Reach us directly at (cess.gndu@gmail.com or aroravaibhav102@gmail.com) and contact at 9888152758. we would happy to help you."
      },

      {
        label: "Will there be swag?",
        content: "Yes! it would based your project and judging criteria."
      },

      {
        label: "What is the last date for registration?",
        content: "You can register till 1st of Oct,2021 before 5 p.m"
      },
      {
        label: "Registration fee for hackathon?",
        content: "Registration fees for each team is Rs: 400"
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  frequentlyAskedQuestions
};
