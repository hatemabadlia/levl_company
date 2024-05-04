import {
  dawini,jobit,tripguide,audiovisuial,
  devlopmmentservice,graphicdesign,marckting
  ,otherservice,socialmediaservice,spincycle
} from "../assets/index"
const navLinks = [
  {
  id: "about",
  title: "About",
  },
  {
  id: "work",
  title: "Work",
  },
  {
  id: "contact",
  title: "Contact",
  },
];
const services = [
  {
    title: "developpement service ",
    icon: devlopmmentservice,
  },
  {
    title: " audio visuel service  ",
    icon: audiovisuial,
  },
  {
    title: "graphic design service ",
    icon: graphicdesign,
  },
  {
    title: "markting  service ",
    icon: marckting,
  },
  {
    title: "social media  service ",
    icon: socialmediaservice,
  },
  {
    title: "other service ",
    icon: otherservice,
  },
];
// deatils about service
const social_media_service = [
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
];
const developpement_service = [
  {
    title: "web developpement",
    icon: "",
    disctption: "",
  },
  {
    title: "andior developpement",
    icon: "",
    disctption: "",
  },
  {
    title: "ios developpement",
    icon: "",
    disctption: "",
  },
  {
    title: "desktop developpement",
    icon: "",
    disctption: "",
  },
  {
    title: "UI / Ux design",
    icon: "",
    disctption: "",
  },
];
const markting_service = [
  {
    title: "tv Publisitair",
    icon: "",
    disctption: "",
  },
  ,
  {
    title: "motion Ads ",
    icon: "",
    disctption: "",
  },
  {
    title: "scripte and ad copie",
    icon: "",
  },
  {
    title: "sales representative",
    icon: "",
  },
];
const graphic_design = [
  {
    title: "Logo",
    icon: "",
  },
  {
    title: "Flayer,Poster",
    icon: "",
  },
  {
    title: "blander ",
    icon: "",
  },
  {
    title: "Advertising banner",
    icon: "",
  },
  {
    title: "Design packaging",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
];
const audio_visuel = [
  {
    icon: "",
    title: "Professional Shooting",
    disctption: "",
  },
  {
    title: "video Montage",
    icon: "",
    disctption: "",
  },
  {
    title: "B-roll & Voice Off",
    icon: "",
    disctption: "",
  },
  {
    title: "video SlidesShow",
    icon: "",
    disctption: "",
  },
  {
    title: "Graphic mation",
    icon: "",
    disctption: "",
  },
  {
    title: "Logo animation ",
    icon: "",
    disctption: "",
  },
  {
    title: "Blender Video ",
    icon: "",
    disctption: "",
  },
];
/*const team = [
    {   photo : hatem,
        name : "hatem abadlia",
        role: "full stuck developper"
    },
    {   photo : saif,
        name : "saif abadlia",
        role: "Proffilniol Photoghraphe"
    },
    {   photo : mahdi,
        name : "farhi mahdi",
        role: "markting "
    },

]*/
const projects = [
  {
  name: "Dawini",
  description:
      "is a medical application that allows user to book appointments with doctors && Nurs and get medical advice from them and get  ",
  tags: [
      {
      name: "react",
      color: "blue-text-gradient",
      },
      {
      name: "mongodb",
      color: "green-text-gradient",
      },
      {
      name: "tailwind",
      color: "pink-text-gradient",
      },
  ],
  image: dawini,
  source_code_link: "https://dawini-dab27.firebaseapp.com",
  },
  {
  name: "algrian travel",
  description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  tags: [
      {
      name: "react",
      color: "blue-text-gradient",
      },
      {
      name: "restapi",
      color: "green-text-gradient",
      },
      {
      name: "scss",
      color: "pink-text-gradient",
      },
  ],
  image: jobit,
  source_code_link: "https://github.com/",
  },
  {
  name: "DVIBES",
  description:
      "The first Algerian musical learning platform,Check out Leatest music news and events,Learn or emprove your musical skils,Meet the best musical coach",
  tags: [
      {
      name: "nextjs",
      color: "blue-text-gradient",
      },
      {
      name: "supabase",
      color: "green-text-gradient",
      },
      {
      name: "css",
      color: "pink-text-gradient",
      },
  ],
  image: tripguide,
  source_code_link: "http://dvibes.pythonanywhere.com/user/cours",
  },
  {
    name: "spin Cycle",
    description:
        "Spin Cycle It is a studio for stationary cycling and cardio exercises to help people burn fat and get in shape",
    tags: [
        {
        name: "photoshop",
        color: "blue-text-gradient",
        },
        {
        name: "illustrator",
        color: "green-text-gradient",
        },
    ],
    image: spincycle,
    source_code_link: "https://www.behance.net/gallery/103360651/Spin-Cycle",
    }
];
const other_service = [{}];
export { services,projects,navLinks };
