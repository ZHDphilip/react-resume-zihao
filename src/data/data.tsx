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
  EducationTimelineItem,
  TechTimelineItem,
  LeadershipTimelineItem,
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
  experiences from major tech companies like Amazon. I am familiar with languages including but not limited to python, C++, Java, and Typescript. In my spare time you can always
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
 * Resume section: Education
 */
export const education: EducationTimelineItem[] = [
  {
    date: 'Expected Jun 2023',
    location: 'University of California, Los Angeles',
    gpa: '3.94/4.0',
    relatedCourses: 'Graduate Level ML, Computer Vision, Natural Language Processing, Network, OS, Statistics, Programming',
    title: 'Bachelor in Computer Science',
    honor: 'Departmental Honor, Guaranteed UCLA MS.CS Admission',
  },
];


/**
 * Resume section: internship experience
 */
export const workExperience: TechTimelineItem[] = [
  {
    date: 'Jun 2022 - Sept 2022',
    location: 'Amazon',
    language: 'AWS/Java/Typescript',
    title: 'Software Development Engineer Intern',
    content: (
      <ul>
        <li>Individually Designing, implementing, and deploying a <span className="font-bold">1000s+ TPS</span> service for CRUD event history recording and inspecting for Amazon FLEX service. </li>
        <li>Took ownership in the design process by comparing all available technologies and making well reasoned design choices, including using 
          <span className="font-bold">DynamoDB, DynamoDB Stream, AWS Lambda, AWS Restful API Gateway, and Dagger</span>. </li>
        <li>Finished implementation with quality ahead of schedule, and pushed to stretch goals and saved them in a remote directory 
        for future development.</li>
        <li>Provided well designed unit testcases for each module of the design, reached <span className="font-bold">95%+ testing line coverage</span>.</li>
        <li>Owned all the review and QA sessions on my project, responded to all questions with evidence, and lead the
          talks with teammates to improve my design. <span className="font-bold">Presented project in front of a group of 50+ engineers.</span></li>
      </ul>
    ),
  },
  {
    date: 'Jun 2021 - Sept 2021',
    location: 'Agile Robotics',
    language: 'C++/OpenCV',
    title: 'Computer Vision Engineer Intern',
    content: (
      <ul>
        <li>Self studying robot hand-eye calibration, camera matrices, and 3D pose estimation through triangulation.</li>
        <li>Individually implementing a hand-eye calibration system <span className="font-bold">capable of calibrating hand-in-eye single-cam/stereo systems. </span>
          Reached <span className="font-bold">error less than 0.05mm.</span></li>
        <li>System used in an iPhone 13 motherboard assembly robot that was <span className="font-bold">bought by FoxConn</span>, 
          one the largest Apple product assemlying companies in the world, for <span className="font-bold">RMB 250,000 per set x 20 sets.</span></li>
      </ul>
    ),
  },
];


/**
 * Resume section: research experience
 */
export const research: TechTimelineItem[] = [
  {
    date: 'Oct 2022 - Present',
    location: 'Prof Cho-jui Hsieh, UCLA',
    language: 'Python',
    title: 'Dataset Condensation Robustness',
    content: (
      <p>
        TODO
      </p>
    )
  },
  {
    date: 'Mar 2022 - Jul 2022',
    location: 'Prof. Cho-jui Hsieh, UCLA',
    language: 'Python',
    title: 'Shampoo Attack on Vision Transformer',
    content: (
      <p>
        TODO
      </p>
    )
  },
  {
    date: 'Apr 2022 - Sept 2022',
    location: 'Prof. Bolei Zhou, UCLA',
    language: 'Python',
    title: 'Improving UNICORN to Leverage Multi-view Information',
    content: (
      <p>
        TODO
      </p>
    )
  },
  {
    date: 'Mar 2022 - Jun 2022',
    location: 'Prof. Yizhou Sun, UCLA CS249',
    language: 'Python',
    title: 'Strict Black Box Node Injection Attack on Graph Neural Network',
    content: (
      <p>
        TODO
      </p>
    )
  },
  {
    date: 'Apr 2021 - Mar 2022',
    location: 'Dr. Yayun DU, UCLA',
    language: 'Python',
    title: 'Navigating Robot Under Canopy Using Visual Feedback',
    content: (
      <p>
        TODO
      </p>
    )
  }
]


/**
 * Resume section: Leadership Positions
 */
export const leadership: LeadershipTimelineItem[] = [
  {
    date: 'Dec 2021 - Apr 2022',
    location: 'UCLA CFAN Chinese Theater Group',
    title: 'Stage Manager',
    teamSize: '8 sub groups 70+ ppl total',
    content: (
      <p>
        TODO
      </p>
    )
  }
]


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
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
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
