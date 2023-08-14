import emoji from 'react-easy-emoji';
import {
	EducationType,
	ExperienceType,
	FeedbackType,
	ProjectType,
	SkillsSectionType,
	SkillBarsType,
	SEODataType,
	SocialLinksType,
	GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
	name: 'Harish Kumar',
	title: "Hi all, I'm Harish Kumar",
	description:
		'Experienced Frontend/React Developer with a specialization in Drupal theming. Skilled in creating engaging user interfaces and dynamic experiences using React.js/Next.js, while also adept at seamlessly integrating designs into Drupal websites. Adept at bridging the gap between design and functionality, delivering visually appealing and highly functional web solutions.',
	resumeLink: '/cv/Harish_Kumar_CV.pdf',
};

export const openSource = {
	githubUserName: 'harishkumar-srijan',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
	url: '/',
	linkedin: 'https://www.linkedin.com/in/hk1689/',
	github: 'https://github.com/harish1689',
	twitter: 'https://twitter.com/kushwa89',
};

export const skillsSection: SkillsSectionType = {
	title: 'What I do',
	subTitle:
		'Working across diverse platforms such as Drupal, React, and Next.js. Expertise includes crafting seamless user experiences, building dynamic Single-Page Applications (SPAs), and implementing responsive designs. With a solid grasp of both content management systems and cutting-edge frontend technologies, this developer brings creativity and functionality together to deliver exceptional web solutions.',
	data: [
		{
			title: 'Frontend Engineer | Drupal and React ',
			lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
			skills: [
				emoji(
					'⚡ Developing responsive Single-Page Applications (SPAs) using React.js and Next.js.'
				),
				emoji(
					'⚡ Working on Drupal websites as a Drupal themer or on Shopify platforms.'
				),
				emoji(
					'⚡ Good understanding of Project life-cycle, with strong in logical and problem-solving skills and excellent in communication skills.'
				),
				emoji(
					'⚡ Efficiently taken care of quality & timely deliverables to meet customer expectations.'
				),
				emoji(
					'⚡ Inclination to work with different technologies and willingness to explore new territories.'
				),
				emoji(
					'⚡ Strong team player and high achiever with demonstrated experience in quickly coming up to speed, meeting project deadlines and exceeding expectations'
				),
			],
			softwareSkills: [
				{
					skillName: 'HTML-5',
					iconifyTag: 'vscode-icons:file-type-html',
				},
				{
					skillName: 'CSS-3',
					iconifyTag: 'vscode-icons:file-type-css',
				},
				{
					skillName: 'Sass',
					iconifyTag: 'logos:node-sass',
				},
				{
					skillName: 'Bootstrap',
					iconifyTag: 'logos:bootstrap',
				},
				{
					skillName: 'JavaScript',
					iconifyTag: 'logos:javascript',
				},
				{
					skillName: 'Reactjs',
					iconifyTag: 'vscode-icons:file-type-reactjs',
				},
				{
					skillName: 'Nextjs',
					iconifyTag: 'vscode-icons:file-type-light-next',
				},
				{
					skillName: 'Redux',
					iconifyTag: 'logos:redux',
				},
				{
					skillName: 'Express js',
					iconifyTag: 'skill-icons:expressjs-dark',
				},
				{
					skillName: 'Node Js',
					iconifyTag: 'devicon:nodejs',
				},
				{
					skillName: 'Drupal',
					iconifyTag: 'devicon:drupal-wordmark',
				},
				{
					skillName: 'Shopify',
					iconifyTag: 'logos:shopify',
				},
				{
					skillName: 'Jquery',
					iconifyTag: 'skill-icons:jquery',
				},
				{
					skillName: 'Storybook',
					iconifyTag: 'devicon:storybook',
				},
				{
					skillName: 'Pattern lab',
					iconifyTag: 'mdi:lock-pattern',
				},
				{
					skillName: 'NPM',
					iconifyTag: 'logos:npm-icon',
				},
				{
					skillName: 'Gulp',
					iconifyTag: 'logos:gulp',
				},
				{
					skillName: 'Yarn',
					iconifyTag: 'logos:yarn',
				},
				{
					skillName: 'Google-analytics',
					iconifyTag: 'logos:google-analytics',
				},
				{
					skillName: 'Google Lighthouse',
					iconifyTag: 'logos:lighthouse',
				},
				{
					skillName: 'JSON',
					iconifyTag: 'vscode-icons:file-type-light-jsonld',
				},
				{
					skillName: 'Tailwind css',
					iconifyTag: 'devicon:tailwindcss',
				},
				{
					skillName: 'Material  UI',
					iconifyTag: 'logos:material-ui',
				},
				{
					skillName: 'Chakra UI',
					iconifyTag: 'simple-icons:chakraui',
				},
			],
		},
	],
};

export const educationInfo: EducationType[] = [
	{
		schoolName: 'Open School of Learning - Delhi University. ',
		subHeader: 'Bachelor’s Degree in Bachelor of Arts  , 2012',
		duration: '2007 - April 2012',
		desc: '',
		descBullets: [
			'12th 2006, Central Board of Secondary Education',
			'10th 2004, Central Board of Secondary Education',
		],
	},
	{
		schoolName: 'Diploma - Oxford Software Institute Delhi ',
		subHeader:
			'1 Year Diploma in Website and Application development - (From Oxford Software Institute Delhi).',
		duration: '2007 - April 2008',
		desc: '',
	},
];

export const experience: ExperienceType[] = [
	{
		role: 'SSE at Srijan Technologies | Drupal Themer',
		company: 'Srijan Technologies',
		companyLogo: '/img/campany.jpeg',
		date: 'Mar 2021 - Present · 2 yrs 6 mos',
		desc: 'Working as a professional Senior Frontend Developer with over total 8+ years of experience in web applications and site development and knowledge of front-end technologies like HTML5, CSS3, Sass, J query, Java script, Gulp JS, AJAX, JSON, and Bootstrap. RWD, Material UI, Chakra UI, GIT Hub, NPM, composer, Google Analytics, hot-jar, web Accessibility (WCAG 2), Google Lighthouse, TTFB by Speed Vitals. He has 3.5-year experience in Drupal theming (CMS) and Shopify 6 months understands projects very well and has practical knowledge of project management and is skilled in executing all facets of the project life-cycle including scope definition, and requirements gathering.',
	},
	{
		role: 'SSE | Frontend Developer | Vue js',
		company: 'IPE Global Limited - Contract',
		companyLogo: '/img/campany.jpeg',
		date: ' Aug 2018 - Nov 2019 · 1 yr 4 mos',
		desc: 'Working as a Sr. UI Developer for the client W.H.O for the RNTCP with technical support. Responsible for Front end development with latest technology for client development.',
	},
	{
		role: 'Senior Web Developer',
		company: ']init[ - Services for the eSociety',
		companyLogo: '/img/campany.jpeg',
		date: ' Jan 2016 - Jul 2018 · 2 yrs 7 mos',
		desc: 'Working as a Sr. UI Developer for the client W.H.O for the RNTCP with technical support. Responsible for Front end development with latest technology for client development.',
	},
	{
		role: 'Senior Frontend/UI Developer',
		company: ' Mind Shaper Technologies Pvt. Ltd.',
		companyLogo: '/img/campany.jpeg',
		date: 'Apr 2015 - Jan 2016 · 10 mos',
		desc: 'Working as a Sr. UI Developer for the client W.H.O for the RNTCP with technical support. Responsible for Front end development with latest technology for client development.',
	},
	{
		role: 'Frontend Developer ',
		company: ' The Luxury Holidays Pvt. Ltd',
		companyLogo: '/img/campany.jpeg',
		date: ' Jun 2012 - Apr 2015 · 2 yrs 11 mos',
		desc: 'Working as a Sr. UI Developer for the client W.H.O for the RNTCP with technical support. Responsible for Front end development with latest technology for client development.',
	},
];

export const projects: ProjectType[] = [
	{
		name: 'Ring Concierge',
		desc: 'Ring Concierge is an e-commerce platform for leading luxury jeweler, it’s developed on the Shopify technology..',
		link: 'https://ringconcierge.com/',
		thumb: '/img/p_1.jpeg',
		skills:
			'Shopify, Custom component,  j query, HTML5, CSS3, SASS, Custom Grid system, GIT, JIRA',
	},
	{
		name: 'Domu',
		desc: 'Domu is a leading provider of rented apartments in Chicago, proudly holding the title of the largest apartment ..',
		link: 'https://www.domu.com/',
		thumb: '/img/p_1.jpeg',
		skills:
			'Drupal 10, Pattern Lab,  Twig data binding, Custom component,  Drupal Behavior, HTML5, CSS3, SASS, GIT, JIRA',
	},
	{
		name: 'UNDP - United Nations Development Programme',
		desc: 'The UNDP Design system represents the unified user interfaces for UNDP projects. By unifying design elements into ..',
		link: 'https://www.undp.org/',
		thumb: '/img/p_1.jpeg',
		skills:
			'Story book, React, j query, HTML5, Accessibility, CSS3, SASS, BEM coding standards, Custom Grid system, GIT, JIRA',
	},
	{
		name: 'RNTCP - Nikshay',
		desc: 'Nikshay is a Web-based patient notification, tracking, surveillance and monitoring ICT platform of RNTCP, with ..',
		link: 'https://nikshay.in/',
		thumb: '/img/p_1.jpeg',
		skills:
			'JavaScript, j query, VUE JS, ES6, Ajax, HTML5, CSS3, SASS, Bootstrap, GIT, JIRA, Illustrator',
	},
	{
		name: 'Police North Rhine-Westphalia',
		desc: 'Poliezi project is developed in Drupal 8, for mentioning the records about the police department of the ..',
		link: 'http://www.polizei.nrw/',
		thumb: '/img/p_1.jpeg',
		skills:
			'Drupal 8, HTML, CSS/CSS3, SASS, J Query, Media Queries and resolved bugs issued by various developers and testers.',
	},
	{
		name: 'NCI - klimaschutz',
		desc: 'Nikshay is a Web-based patient notification, tracking, surveillance and monitoring ICT platform of RNTCP, with ..',
		link: 'http://www.klimaschutz.de/',
		thumb: '/img/p_1.jpeg',
		skills:
			'Drupal 8, HTML, CSS/CSS3, SASS, J Query, Media Queries and resolved bugs issued by various developers and testers.',
	},
	{
		name: 'European Stability Mechanism (ESM)',
		desc: 'The European Stability Mechanism provides financial assistance to euro area countries experiencing or threatened ... ',
		link: 'https://www.esm.europa.eu/',
		thumb: '/img/p_1.jpeg',
		skills:
			'Drupal 8, HTML, CSS/CSS3, SASS, J Query, Media Queries and resolved bugs issued by various developers and testers.',
	},
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
	title: 'Harish Kumar',
	description:
		'Experienced Frontend/React Developer with a specialization in Drupal theming. Skilled in creating engaging user interfaces and dynamic experiences using React.js/Next.js, while also adept at seamlessly integrating designs into Drupal websites. Adept at bridging the gap between design and functionality, delivering visually appealing and highly functional web solutions.',
	author: 'Harish Kumar',
	image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
	url: 'https://developer-portfolio-1hanzla100.vercel.app',
	keywords: [
		'Harish Kumar',
		'Harish Kumar Git',
		'Portfolio',
		'Harish Kumar Portfolio',
		'Harish Kumar Frontend Developer',
		'Harish Kumar React Js',
		'Harish Kumar Drupal',
		'Harish Kumar Next Js',
	],
};
