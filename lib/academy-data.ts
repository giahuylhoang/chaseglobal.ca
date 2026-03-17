export const socialLinks = [
  { platform: "facebook", href: "https://www.facebook.com/share/1B92DHATJa/?mibextid=wwXIfr", icon: "fab fa-facebook-f" },
  { platform: "instagram", href: "https://www.instagram.com/chaseglobalacademy?igsh=eDF3MW9kdzFxbmFj", icon: "fab fa-instagram" },
  { platform: "linkedin", href: "https://www.linkedin.com/company/chase-global-academy/", icon: "fab fa-linkedin-in" },
  { platform: "tiktok", href: "https://www.tiktok.com/@chaseglobalacademy", icon: "fab fa-tiktok" },
  { platform: "youtube", href: "https://www.youtube.com/channel/UCjhv6tVE1NfRHBHU6qT6jkw", icon: "fab fa-youtube" },
];

export const navMenuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/education/about" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Study Abroad", href: "/education/services/study-abroad" },
      { label: "Foreign Scholarships", href: "/education/services/scholarships" },
      { label: "Career Guidance", href: "/education/services/career-guidance" },
      { label: "Internship", href: "/education/services/internship" },
      { label: "Language Exam Preparation", href: "/education/services/language-exam" },
      { label: "Skilled Trade Program", href: "/education/services/skilled-trade" },
      { label: "Exam Booking", href: "/education/services/exam-booking" },
    ],
  },
  {
    label: "Study Destination",
    href: "#",
    children: [
      { label: "USA", href: "/education/destinations/usa" },
      { label: "Canada", href: "/education/destinations/canada" },
      { label: "Australia", href: "/education/destinations/australia" },
      { label: "Germany", href: "/education/destinations/germany" },
      { label: "France", href: "/education/destinations/france" },
      { label: "Spain", href: "/education/destinations/spain" },
      { label: "Netherlands", href: "/education/destinations/netherlands" },
      { label: "Other", href: "/education/destinations/other" },
      { label: "Distance Learning", href: "/education/destinations/distance-learning" },
    ],
  },
  { label: "Benefits", href: "/education/benefits" },
  { label: "Contact", href: "/education/contact" },
];

export const crossNavLink = { label: "Immigration", href: "/immigration" };

export const heroSlides = [
  {
    subtitle: "WELCOME TO CHASE GLOBAL ACADEMY",
    titleStart: "Unlock Global Opportunities – ",
    highlight: "Study Abroad",
    titleEnd: " & Shape Future",
    description: "Canada | US | NZ | Aus | UK | Ireland | Singapore | UAE | India | France | Poland | China | Russia | Germany",
    cta: { label: "Get Started", href: "/education/about" },
    bgImage: "/assets/academy/images/hero/bg-slide-home-1.jpg",
    decorImages: [
      "/assets/academy/images/hero/slide-img-h2-3.png",
      "/assets/academy/images/hero/canada.png",
    ],
  },
  {
    subtitle: "WELCOME TO CHASE GLOBAL ACADEMY",
    titleStart: "Foreign Scholarships & ",
    highlight: "Career Guidance",
    titleEnd: "",
    description: "Get expert support on foreign scholarships and career guidance to achieve your global education and professional goals.",
    cta: { label: "Get Started", href: "/education/about" },
    bgImage: "/assets/academy/images/hero/bg-slide-home-1.jpg",
    decorImages: [
      "/assets/academy/images/hero/slide-img-h2-2.png",
      "/assets/academy/images/hero/flag-h1-2.png",
    ],
  },
];

export const countries = [
  { name: "USA", flag: "/assets/academy/images/countries/usa-hq.png", href: "/education/destinations/usa" },
  { name: "Canada", flag: "/assets/academy/images/countries/canada-hq.png", href: "/education/destinations/canada" },
  { name: "Australia", flag: "/assets/academy/images/countries/australia.webp", href: "/education/destinations/australia" },
  { name: "Germany", flag: "/assets/academy/images/countries/germany.jpg", href: "/education/destinations/germany" },
  { name: "France", flag: "/assets/academy/images/countries/france-flag.svg", href: "/education/destinations/france" },
  { name: "Spain", flag: "/assets/academy/images/countries/spain.png", href: "/education/destinations/spain" },
  { name: "Netherlands", flag: "/assets/academy/images/countries/netherlands.webp", href: "/education/destinations/netherlands" },
];

export const countrySharedContent = {
  titleTemplate: "Study & Career Development in {country}",
  description: "Explore study and career development opportunities across a wide range of international destinations",
  features: ["Study Abroad", "Internships", "Scholarships", "Research Opportunities"],
};

export const partnerLogos = [
  { src: "/assets/academy/images/partners/ielts-1.webp", alt: "IELTS Partner 1" },
  { src: "/assets/academy/images/partners/ielts-2.webp", alt: "IELTS Partner 2" },
  { src: "/assets/academy/images/partners/ielts-3.webp", alt: "IELTS Partner 3" },
];

export const certifications = [
  { src: "/assets/academy/images/certifications/cert-1.jpg", alt: "Certification 1" },
  { src: "/assets/academy/images/certifications/cert-2.jpg", alt: "Certification 2" },
  { src: "/assets/academy/images/certifications/cert-3.jpg", alt: "Certification 3" },
  { src: "/assets/academy/images/certifications/cert-4.jpg", alt: "Certification 4" },
  { src: "/assets/academy/images/certifications/cert-5.jpg", alt: "Certification 5" },
  { src: "/assets/academy/images/certifications/cert-6.jpg", alt: "Certification 6" },
  { src: "/assets/academy/images/certifications/cert1.png", alt: "Certificate 1" },
  { src: "/assets/academy/images/certifications/cert2.png", alt: "Certificate 2" },
  { src: "/assets/academy/images/certifications/trademark.png", alt: "Chase Global Group TradeMark Certificate" },
];

export const industryRecognitions = [
  { src: "/assets/academy/images/recognition/recognition-8.jpg", alt: "Industry Recognition" },
  { src: "/assets/academy/images/recognition/recognition-7.jpg", alt: "Industry Recognition" },
  { src: "/assets/academy/images/recognition/recognition-images.png", alt: "Industry Recognition" },
  { src: "/assets/academy/images/recognition/recognition-logo.png", alt: "Industry Recognition" },
  { src: "/assets/academy/images/recognition/rcic-logo.jpeg", alt: "RCIC Logo" },
  { src: "/assets/academy/images/recognition/download-16.jpg", alt: "Industry Recognition" },
  { src: "/assets/academy/images/recognition/cfib-member.jpg", alt: "CFIB Member" },
  { src: "/assets/academy/images/recognition/recognition-images-1.png", alt: "Industry Recognition" },
];

export const institutionPartners = [
  { src: "/assets/academy/images/institutions/UNFC.png", alt: "UNFC" },
  { src: "/assets/academy/images/institutions/campaign_image.jpg", alt: "Campaign" },
  { src: "/assets/academy/images/institutions/TSOM.png", alt: "TSOM" },
  { src: "/assets/academy/images/institutions/TIC.png", alt: "TIC" },
  { src: "/assets/academy/images/institutions/IBS.png", alt: "IBS" },
  { src: "/assets/academy/images/institutions/CCTB.png", alt: "CCTB" },
  { src: "/assets/academy/images/institutions/BSBI.png", alt: "Berlin School of Business and Innovation" },
  { src: "/assets/academy/images/institutions/download-2.png", alt: "Partner Institution" },
  { src: "/assets/academy/images/institutions/ggsindia.png", alt: "GGS India" },
  { src: "/assets/academy/images/institutions/download-removebg.png", alt: "Partner Institution" },
];

export const features = [
  {
    icon: "flaticon-passport",
    title: "Experience",
    description: "We bring proven expertise in navigating the complete study abroad process, from selecting the right country and program to securing admissions and visas.",
  },
  {
    icon: "flaticon-certificate",
    title: "Certificate",
    description: "We hold recognized certifications in international education and immigration advisory services, demonstrating our commitment to maintaining industry standards.",
  },
  {
    icon: "flaticon-career",
    title: "Kick-Start Your Global Career",
    description: "From selecting the right course to securing internships and placements, we help you take the first confident step toward a successful international career.",
  },
];

export const services = [
  { title: "French Language Preparation", icon: "flaticon-passport", href: "/education/services/language-exam" },
  { title: "Skilled Trade Program", icon: "flaticon-certificate", href: "/education/services/skilled-trade" },
  { title: "Duolingo Preparation", icon: "flaticon-passport", href: "/education/services/language-exam" },
  { title: "TOEFL Test", icon: "flaticon-passport", href: "/education/services/language-exam" },
  { title: "PTE Preparation", icon: "flaticon-passport", href: "/education/services/language-exam" },
  { title: "CELPIP Preparation", icon: "flaticon-passport", href: "/education/services/language-exam" },
  { title: "Foreign Scholarships", icon: "flaticon-certificate", href: "/education/services/scholarships" },
  { title: "Exam Booking", icon: "flaticon-passport", href: "/education/services/exam-booking" },
  { title: "Study Abroad", icon: "flaticon-passport", href: "/education/services/study-abroad" },
  { title: "IELTS Preparation", icon: "flaticon-passport", href: "/education/services/language-exam" },
];

export const aboutSection = {
  image: "/assets/academy/images/about/girl-and-world.jpg",
  subtitle: "ABOUT CHASE GLOBAL ACADEMY",
  title: "Your Gateway to Global Education Success",
  description:
    "Chase Global Academy is your trusted partner in turning international education dreams into reality. We offer comprehensive, end-to-end support for students aspiring to study abroad, guiding them through every step of the process. Our expert team provides personalized counseling to help students choose the right country, university, and academic program aligned with their goals and interests. We also offer assistance with language proficiency exams such as IELTS, TOEFL, and others, ensuring our students are well-prepared for admission requirements.",
  iconBoxes: [
    { icon: "flaticon-passport", text: "Checking all Visa Eligibilities" },
    { icon: "flaticon-certificate", text: "Approved Exam Facilitation" },
  ],
  listItems: [
    "Fastest Visa form processing with expert immigration agents",
    "Affiliation with Educational Institutions from over the world",
  ],
  counter: { value: 127865, label: "Served Client", duration: 2000 },
  phone: "+1 403-996-3366",
};

export const whyChooseUs = {
  subtitle: "Why Choose Us",
  title: "Why Choose Chase Global Academy?",
  items: [
    {
      title: "Creating Great opportunities",
      description: "We help Making your dream into Reality",
      rating: 4.6,
    },
    { title: "Study Abroad Guidance & Admissions", description: "" },
    { title: "Language Exam Preparation & Immigration Support", description: "" },
    { title: "Global Partnerships & Career Support", description: "" },
    { title: "Expert Support Panel", description: "" },
  ],
};

export const statsCounters = [
  { value: 23, suffix: "k", label: "Happy Students" },
  { value: 10, suffix: "+", label: "Global Offices" },
  { value: 15, suffix: "k+", label: "IELTS Success" },
  { value: 347, suffix: "", label: "Students Studying Abroad" },
];

export const pieCharts = [
  { label: "Quickest Response", percent: 75, color: "#E13833", trackColor: "rgba(255,255,255,0.15)" },
  { label: "Customer Satisfaction", percent: 95, color: "#E13833", trackColor: "rgba(255,255,255,0.15)" },
];

export const bookingSection = {
  title: "Book An Appointment",
  orCallTitle: "Or just Give us a call",
  phone: "+1 403-996-3366",
  supportText: "The Support Centre is available 24/7",
  description: "Book a free consultation with our expert counselors and get personalized guidance for test prep and studying abroad. Let's turn your global dreams into reality.",
  countries: ["Canada", "USA", "Australia", "Germany", "France", "Spain", "Netherlands"],
  serviceOptions: [
    "Study Abroad",
    "Foreign Scholarships",
    "Career Guidance",
    "Internship",
    "Language Exam Preparation",
    "Skilled Trade Program",
    "Exam Booking",
  ],
};

export const faqItems = [
  {
    question: "Q1. What is the duration of the IELTS preparation course?",
    answer: "Our IELTS courses typically range from 4 to 8 weeks, depending on your skill level and chosen batch.",
  },
  {
    question: "Q2. Is CELPIP easier than IELTS for Canadian immigration?",
    answer: "CELPIP is considered easier by some due to its computer-based format and Canadian accents, but it depends on individual preferences.",
  },
  {
    question: "Q3. Do you offer mock tests for PTE?",
    answer: "Yes, we provide full-length AI-based mock tests to simulate real exam conditions and improve your performance.",
  },
  {
    question: "Q4. Which countries do you support for study abroad?",
    answer: "We assist students in applying to top universities in Canada, the UK, Australia, New Zealand, and more.",
  },
];

export const footerData = {
  logo: "/assets/academy/logos/academy-logo.png",
  email: "info@chaseglobalacademy.com",
  aboutTitle: "About Chasse Global Academy",
  aboutText: "Chase Global Academy is your trusted partner in turning international education dreams into reality. We offer comprehensive, end-to-end support for students aspiring to study abroad, guiding them through every step of the process.",
  usefulLinks: [
    { label: "Home", href: "/education" },
    { label: "About Us", href: "/education/about" },
    { label: "Services", href: "/education/services" },
    { label: "Benefits", href: "/education/benefits" },
    { label: "Contact Us", href: "/education/contact" },
    { label: "Refund Policy", href: "/education/refund-policy" },
  ],
  opportunities: [
    "Foreign Scholarships",
    "Exam Booking",
    "Study Abroad",
    "Language Exam Preparation",
    "Career Guidance",
    "Internship",
  ],
  locations: [
    {
      country: "Canada",
      flag: "/assets/academy/images/countries/canada.png",
      address: "Cityscape Landing, Unit 2248-4310 104 Ave NE, Calgary Alberta T3N-1W2",
    },
    {
      country: "USA",
      flag: "/assets/academy/images/countries/usa.png",
      address: "501 Silverside Road, Suite 105 Wilmington, Delaware",
    },
    {
      country: "India",
      flag: "/assets/academy/images/countries/india-flag.png",
      address: "Sector 117 SCO 424 2nd Floor, TDI City, South Ex.2, Sahibzada Ajit Singh Nagar, Chandigarh, Punjab 140301",
    },
    {
      country: "UAE",
      flag: "/assets/academy/images/countries/uae-flag.png",
      address: "Upcoming office",
    },
    {
      country: "New Zealand",
      flag: "/assets/academy/images/countries/nz-flag.png",
      address: "Upcoming office",
    },
  ],
  contacts: {
    email: "info@chaseglobalacademy.com",
    phones: [
      { country: "Canada", flag: "/assets/academy/images/countries/canada.png", number: "+1 403-996-3366" },
      { country: "USA", flag: "/assets/academy/images/countries/usa.png", number: "+1 403-996-3366" },
      { country: "New Zealand", flag: "/assets/academy/images/countries/nz-flag.png", number: "+64 212165367" },
      { country: "India", flag: "/assets/academy/images/countries/india-flag.png", numbers: [
        { number: "+91 9888345753", label: "(Pref.)" },
        { number: "+91 9888605753", label: "(Alt.)" },
      ]},
    ],
  },
  certLogos: [
    { src: "/assets/academy/images/recognition/recognition-8.jpg", alt: "AIRC Certified" },
    { src: "/assets/academy/images/recognition/rcic-logo.jpeg", alt: "RCIC - Regulated Canadian Immigration Consultant" },
  ],
  disclaimer: "All information on this website is generic in nature and should not be considered legal advice. We are not responsible for your application decisions.",
  immigrationLink: { label: "www.chaseglobalimmigration.com", href: "https://www.chaseglobalimmigration.com" },
  copyright: "Chase Global Academy",
};
