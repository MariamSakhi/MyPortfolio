import {
  Settings,
  CropRotate,
  ViewInAr,
  PieChart,
  Code,
  BarChart,
  CloudOutlined,
  FavoriteBorder,
  Public,
  PersonOutlined,
  AddLocationAltOutlined,
  PhoneIphone,
  EmailOutlined,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
} from "@mui/icons-material";

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Competences",
  },
  {
    url: "/portfolio",
   text:"Formations"
  },
  {
    url: "/testimonials",
  },
  {
    url: "/blog",
    text: "Projects",
  },
  {
    url: "/contact",
  },
];
export const home = [
  {
    text: "HELLO I'M",
    name: "Mariam Sakhi",
    post: "Engenieer Student",
    design: "DEVELOPER",
  },
];
export const about = [
  {
    desc: "Mariam Sakhi",
    desc1:
      "Je suis une étudiante en génie informatique et réseaux passionné par la technologie et ses applications pratiques. J'ai toujours été fasciné par les ordinateurs et les réseaux, et je suis heureux d'étudier cette discipline à l'université. J'adore relever des défis complexes et trouver des solutions innovantes pour résoudre les problèmes techniques, j'aime passer du temps à explorer de nouvelles technologies et à apprendre de nouvelles compétences, Je suis convaincu que mon parcours universitaire et mon expérience personnelle me permettront de devenir un ingénieur en informatique et réseaux compétent et capable de résoudre des problèmes techniques complexes. Mon objectif ultime est de contribuer à créer des technologies innovantes et de faire une différence positive dans le monde.",
  },
];
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Frameworks",
    desc: "React , SpringBoot, Django",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Technologies",
    desc: "Python, Java,  JavaScript,c++",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Conception et Modelisation",
    desc: " UML, Merise",
  },
];
export const project = [
   { id: 1,
    title: "Technologies",
    desc : "Python, Java,  JavaScript,c++",
   }
];
export const portfolio = [];
export const testimonials = [
  {
    id: 1,
    image: "./images/testimonials/team-1.png",
    name: "Mariam Sakhi",
    post: "Ingenieur en Informatique",
  },
];
export const blog = [
  {
    id: 1,
    title: "Projet 1: Gestion des Stagiaires",
    desc: "Application de gestion de stagiaires avec php et mysql",
    cover: "./images/blog/b2.png",
  },
  {
    id: 2,
    title: "Projet 2: Pokedex",
    desc: "Application mobile avec java,api",
    cover: "./images/blog/b3.png",
  },
  {
    id: 3,
    title: "Projet 3: Gestion d'un cabinet dentaire",
    desc: "Application de gestion des rdvs d'un cabinet dentaire avec c# (csharp) ",
    cover: "./images/blog/b1.png",
  },
];
export const contact = [];
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
];
