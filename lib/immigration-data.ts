const IMG = "/assets/immigration/images";

export const socialLinks = [
  { platform: "Facebook", href: "https://www.facebook.com/chaseglobalimmigration", icon: "fab fa-facebook-f" },
  { platform: "Instagram", href: "https://www.instagram.com/chaseglobalimmigration", icon: "fab fa-instagram" },
  { platform: "LinkedIn", href: "https://www.linkedin.com/company/chase-global-immigration", icon: "fab fa-linkedin-in" },
  { platform: "YouTube", href: "https://www.youtube.com/@chaseglobalimmigration", icon: "fab fa-youtube" },
];

export const navMenuItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/immigration/about",
    children: [
      { label: "Meet Us", href: "/immigration/about/meet-us" },
      { label: "Licensed by ICCRC", href: "/immigration/about/licensed-iccrc" },
      { label: "Licensed by Saskatchewan", href: "/immigration/about/licensed-saskatchewan" },
    ],
  },
  {
    label: "Services",
    href: "/immigration/services",
    children: [
      { label: "Express Entry", href: "/immigration/services/express-entry" },
      { label: "Provincial Nominee Programs", href: "/immigration/services/pnp" },
      { label: "Family Sponsorship", href: "/immigration/services/family-sponsorship" },
      { label: "Visitor Visa", href: "/immigration/services/visitor-visa" },
      { label: "Study Permits", href: "/immigration/services/study-permits" },
      { label: "Work Visa", href: "/immigration/services/work-visa" },
    ],
  },
  {
    label: "Testimonials",
    href: "/immigration/testimonials",
    children: [
      { label: "Submit Testimonial", href: "/immigration/testimonials/submit" },
      { label: "All Testimonials", href: "/immigration/testimonials/all" },
    ],
  },
  { label: "Contact", href: "/immigration/contact" },
];

export const crossNavLink = { label: "Education", href: "/education" };

export const heroSlides = [
  {
    bgImage: `${IMG}/hero/canada-flags.jpeg`,
    subtitle: "Pathway to your Canadian Dreams",
    titleStart: "Makes Canadian Immigration ",
    highlight: "Simple",
    titleEnd: "",
    description:
      "Multicultural Canada is one of the world's best destinations for migrants. Its cosmopolitan cities, a stable economy, and high quality of life make it a top choice.",
    cta: { label: "Get Your Free Assessment", href: "/immigration/contact" },
  },
  {
    bgImage: `${IMG}/hero/autumn-forest.jpg`,
    subtitle: "Newly Launched One-Time Program",
    titleStart: "Your Path to ",
    highlight: "Permanent Residency",
    titleEnd: "",
    description:
      "We provide comprehensive Canadian immigration services with a focus on transparency and professionalism.",
    cta: { label: "Book Your Appointment", href: "/immigration/contact" },
  },
];

export const services = [
  {
    number: "01",
    title: "Business Investment Migration",
    description: "Invest in Canada through various business immigration programs designed for entrepreneurs and investors.",
    image: `${IMG}/services/business-investment-migration.jpg`,
    icon: "fas fa-briefcase",
  },
  {
    number: "02",
    title: "Professional Skilled Migration",
    description: "Migrate to Canada through skilled worker programs recognizing your professional qualifications.",
    image: `${IMG}/services/professional-skilled.jpg`,
    icon: "fas fa-user-tie",
  },
  {
    number: "03",
    title: "Visa Consulting",
    description: "Expert consulting services for all types of Canadian visa applications and immigration pathways.",
    image: `${IMG}/services/visa-consulting.jpg`,
    icon: "fas fa-passport",
  },
  {
    number: "04",
    title: "Legal Services",
    description: "Comprehensive legal assistance for immigration-related matters and documentation.",
    image: `${IMG}/services/legal-services.jpg`,
    icon: "fas fa-gavel",
  },
  {
    number: "05",
    title: "Express Entry",
    description: "Fast-track your Canadian permanent residency through the Express Entry system.",
    image: `${IMG}/services/express-entry.jpg`,
    icon: "fas fa-bolt",
  },
  {
    number: "06",
    title: "Family Sponsorship",
    description: "Reunite with your family in Canada through sponsorship programs for spouses, parents, and dependents.",
    image: `${IMG}/services/family-sponsorship.jpeg`,
    icon: "fas fa-users",
  },
  {
    number: "07",
    title: "Provincial Nominee Program",
    description: "Get nominated by a Canadian province to fast-track your permanent residency application.",
    image: `${IMG}/services/provincial-nominee.jpg`,
    icon: "fas fa-map-marked-alt",
  },
  {
    number: "08",
    title: "Visitor Visa",
    description: "Apply for visitor visas to explore Canada for tourism, family visits, or business purposes.",
    image: `${IMG}/services/visitor-visa.jpg`,
    icon: "fas fa-plane-departure",
  },
  {
    number: "09",
    title: "Study Permits",
    description: "Pursue world-class education in Canada with proper study permits and post-graduation pathways.",
    image: `${IMG}/services/study-permits.jpeg`,
    icon: "fas fa-graduation-cap",
  },
  {
    number: "10",
    title: "Work Visa Permits",
    description: "Obtain work permits to build your career in Canada with various employment pathways.",
    image: `${IMG}/services/work-visa.jpg`,
    icon: "fas fa-id-card",
  },
];

export const aboutSection = {
  subtitle: "ABOUT US",
  name: "Nisha Rathore",
  title: "Regulated Canadian Immigration Consultant",
  description:
    "We understand the importance of honesty and hence we are very transparent in our working process. The user-friendly manner in which we deal with our clients is the reason why they feel comfortable in sharing their dream with us.",
  longDescription:
    "Multicultural Canada is one of the world's best destinations for migrants. Its cosmopolitan cities, a stable economy, and high quality of life make it a top choice for immigrants from around the world. Chase Global Immigration helps individuals and families navigate the complex Canadian immigration process with expert guidance and personalized solutions.",
  registrationLabel: "Registration No.",
  image: "/assets/immigration_images/Nisha.jpg",
  qualifications: [
    "Licensed by ICCRC",
    "Licensed by Saskatchewan",
    "Expert in Express Entry",
    "Provincial Nominee Specialist",
  ],
};

export const whyChooseUs = {
  subtitle: "WHY CHOOSE US",
  title: "Why Choose Us",
  description:
    "We understand the importance of honesty and hence we are very transparent in our working process. The user-friendly manner in which we deal with our clients is the reason why they feel comfortable in sharing their dream with us.",
  image: "/assets/immigration_images/VikasNisha.jpg",
  ctaLabel: "Know More About Us",
  ctaHref: "/immigration/about",
  reasons: [
    "Licensed Immigration Company",
    "Business Authenticity",
    "Team Certification",
    "Advance Tools For Free Assessment",
    "Get Personal, Professional And Affordable Consultation",
    "All Services Under One Roof",
    "Strong Social Media Presence",
    "Global Presence",
  ],
  stats: [
    { value: 1500, suffix: "+", label: "Successful Cases" },
    { value: 98, suffix: "%", label: "Success Rate" },
    { value: 10, suffix: "+", label: "Years Experience" },
    { value: 50, suffix: "+", label: "Countries Served" },
  ],
};

export const testimonialsMeta = {
  rating: "Excellent",
  score: 5,
  totalReviews: 147,
};

export const testimonials = [
  {
    name: "Gurpreet Singh",
    date: "17. March, 2025.",
    rating: 5,
    avatarColor: "#e53935",
    text: "I recently received my Open Work Permit under the temporary public policy. I am so glad that I chose Chase Global Immigration. They were very professional and guided me through the entire process seamlessly.",
  },
  {
    name: "Moheer Khan",
    date: "1. March, 2025.",
    rating: 5,
    avatarColor: "#1e88e5",
    text: "I am so happy and glad that I opted for Chase to process my family's visit visa. Both Priya and Sana are helpful and all the time available to answer any queries. Highly recommended!",
  },
  {
    name: "Anika Moudgil",
    date: "24. February, 2025.",
    rating: 5,
    avatarColor: "#8e24aa",
    text: "My experience with chase global was wonderful, I applied for my parent's visa in december through them, and even less than 2 months later, the visa got approved. The team was very professional.",
  },
  {
    name: "Augusta Ebinedia",
    date: "20. February, 2025.",
    rating: 5,
    avatarColor: "#43a047",
    text: "I am very happy I chose Chase Global Immigration to help with my open work permit. They are very professional. Priya and Sana were always available and helpful throughout the process.",
  },
  {
    name: "David Thompson",
    date: "5. January, 2025.",
    rating: 5,
    avatarColor: "#f4511e",
    text: "Thanks to the team's attention to detail and commitment, my in-laws' visas were approved in no time. I am incredibly grateful for the support and assistance provided by the Chase Immigration team.",
  },
];

export const footerData = {
  aboutTitle: "Chase Global Immigration",
  aboutText:
    "We provide comprehensive Canadian immigration services with a focus on transparency and professionalism. Our licensed consultants guide you through every step.",
  usefulLinks: [
    { label: "About Us", href: "/immigration/about" },
    { label: "Our Services", href: "/immigration/services" },
    { label: "Testimonials", href: "/immigration/testimonials" },
    { label: "Contact Us", href: "/immigration/contact" },
    { label: "Privacy Policy", href: "/immigration/privacy" },
    { label: "Terms of Service", href: "/immigration/terms" },
  ],
  serviceLinks: [
    { label: "Express Entry", href: "/immigration/services/express-entry" },
    { label: "Family Sponsorship", href: "/immigration/services/family-sponsorship" },
    { label: "Provincial Nominee", href: "/immigration/services/pnp" },
    { label: "Visitor Visa", href: "/immigration/services/visitor-visa" },
    { label: "Study Permits", href: "/immigration/services/study-permits" },
    { label: "Work Visa", href: "/immigration/services/work-visa" },
  ],
  contacts: {
    email: "info@chaseglobalimmigration.ca",
    phone: "+1 403-996-3366",
    address: "Calgary, Alberta, Canada",
  },
  copyright: "Chase Global Immigration. All Rights Reserved.",
};
