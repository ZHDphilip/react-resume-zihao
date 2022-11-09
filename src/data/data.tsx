import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/catalina.jpg';
import vitAttackImage from '../images/portfolio/vit_shampoo_attack.png';
import nodeInjectImage from '../images/portfolio/NodeInject.png';
import jwcImage from '../images/portfolio/jwc.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Zihao Dong Resume',
  description: "Zihao Dong's Resume and description",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Zihao Dong`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am <strong className="text-stone-100">Computer Science Major Undergraduate</strong> student at <strong className="text-stone-100">UCLA</strong>, with an interest in Machine Learning, Computer Vision, and Software Development.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am also an IM soccer player, and leading actor in CFAN Chinese Theater Group.
      </p>
    </>
  ),
  actions: [
    {
      href: '../assets/Zihao_DONG_Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am an undergraduate CS student at UCLA, and my research interests are Machine Learning and Computer Vision. I am also a software engineer with internship
  experiences from major tech companies like Amazon. I am familiar with languages including but not limited to python, C++, Java, and React. In my spare time you can always
  find me on the soccer fields or around the stage preparing for shows!`,
  aboutItems: [
    {label: 'Location', text: 'Los Angeles, CA', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Soccer, Acting, Photography', Icon: SparklesIcon},
    {label: 'Study', text: 'University of California, Los Angeles', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Amazon, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programing Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'C++',
        level: 9,
      },
      {
        name: 'Java',
        level: 7,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Chinese',
        level: 10,
      },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      {
        name: 'Communication',
        level: 8,
      },
      {
        name: 'Leadership',
        level: 8,
      }
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'ViT Shampoo Attack',
    description: 'Attacking Vision Transformer using an attack scheme derived from Shampoo Optimizer.',
    url: 'https://github.com/ZHDphilip/ViT_Shampoo_Attack',
    image: vitAttackImage,
  },
  {
    title: 'GNN Black Box Node Injection Attack',
    description: 'A strict black box attack on GNN by manipulating graph matrix.',
    url: 'https://github.com/ZHDphilip/CCS21_GNNattack_Node_injection',
    image: nodeInjectImage,
  },
  {
    title: 'Bring JWC Online',
    description: `A nextjs based webapp that is capable of recording usage status of gym equipments (if webapp deployed).
    It also contains some user interaction functionalities including ranking system`,
    url: 'https://github.com/ZHDphilip/Bring-JWC-Online',
    image: jwcImage,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Expected June 2023',
    location: 'University of California, Los Angeles',
    title: 'Bachelor in Computer Science',
    content: <p>Departmental Honor student with 3.94/4.0 GPA. Related course work including programing, Computer Vision, Machine Learning. Took 3 Graduate Level ML courses and received A's</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2022 - Sept 2022',
    location: 'Amazon',
    title: 'Software Development Engineer Intern',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'June 2021 - Sept 2021',
    location: 'Agile Robotics',
    title: 'Computer Vision Engineer Intern',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Ways to contact me.',
  items: [
    {
      type: ContactType.Email,
      text: 'philipdong0418@gmail.com',
      href: 'mailto:philipdong0418@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Los Angeles CA, USA',
      href: 'https://www.google.com/maps/place/UCLA/@34.068921,-118.447756,17z',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Zihao Dong',
      href: 'https://www.linkedin.com/in/zihao-dong-321712212/',
    },
    {
      type: ContactType.Github,
      text: 'ZHDPhilip',
      href: 'https://github.com/ZHDPhilip',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ZHDPhilip'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/zihao-dong-321712212/'},
];
