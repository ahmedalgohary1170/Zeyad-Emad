// userData.js - مركز لجميع البيانات الشخصية في الموقع
import HeroImage from './assets/image.jpeg'
import CV from './assets/zeyad-emad-cv.pdf'

const userData = {
  // البيانات الأساسية
  name: "Zeyad Emad Rady",
  title: "Junior Entrepreneur",
  bio: "Zeyad Emad Rady is a student at the Faculty of Agriculture, Mansoura University, Egypt, specializing in the Soil Science . He is a young entrepreneur, involved in business development, with a passion for sales. He enjoys exploring sales strategies and understanding customer behavior to improve business growth.",
  location: "Mansoura, Egypt",
  
  // الصور والملفات
  profileImage: HeroImage,
  cvFile: CV,
  
  // بيانات التعليم
  education: {
    degree: "Bachelor of Agriculture – Soil and Water Sciences",
    institution: "Mansoura University",
    period: "Sept 2022 – Jul 2026",
  },
  
  // المهارات
  skills: [
    { label: "Photoshop", width: "w-9/12" },
    { label: "Illustrator", width: "w-9/12" },
    { label: "InDesign", width: "w-10/12" },
    { label: "Sales & Negotiation", width: "w-full" },
    { label: "Leadership", width: "w-10/12" },
    { label: "Time Management", width: "w-11/12" },
    { label: "Teamwork", width: "w-full" },
  ],
  
  // الإحصائيات
  stats: [
    { value: "5+", label: "Years Sales Experience" },
    { value: "4+", label: "Entrepreneurial Projects" },
  ],
  
  // روابط التواصل
  contact: {
    whatsapp: "https://wa.me/qr/G73DIKZTBETAJ1",
    phone: "201091974316",
    phoneLink: "https://wa.me/+201091974316",
    email: "eng.zeyyademad@gmail.com",
  },

  // روابط السوشيال ميديا
  social: {
    facebook: "",
    behance: "",
    linkedin: "",
    twitter: "",
  },

  // الخبرات المهنية
  experience: [
    {
      id: 1,
      title: "Operations Director",
      company: "Vivem",
      period: "Jun 2025 - Present",
      description: "Leading daily operations and team coordination. Enhancing internal efficiency and workflows.",
    },
    {
      id: 2,
      title: "Sales Associate",
      company: "Azzrak (Saudi Market)",
      period: "Dec 2024 - Present",
      description: "Customer negotiation and closing deals. Fast-paced, goal-oriented sales environment.",
    },
    {
      id: 3,
      title: "Recruiter",
      company: "Black Hands",
      period: "Apr 2024 - Oct 2024",
      description: "Talent sourcing and candidate engagement. Task management and communication skills.",
    },
    {
      id: 4,
      title: "Sales Associate",
      company: "General Experience",
      period: "Jan 2019 - Dec 2023",
      description: "5 years of customer service and inventory management. Target-driven performance and store optimization.",
    },
  ],

  // المشاريع
  projects: [
    {
      id: 1,
      title: "Bio Lacto",
      category: "Entrepreneurship",
      year: "2024", 
      description: "Founded Bio Lacto, an innovative project focusing on sustainable agricultural solutions using beneficial microorganisms. Developed product formulations and conducted market research.",
      image: "", // يمكنك إضافة مسار صورة للمشروع إذا كانت متوفرة
    },
    {
      id: 2,
      title: "Agricultural Research Initiative",
      category: "Academic",
      year: "2023",
      description: "Led a university research team investigating soil fertility enhancement techniques. Presented findings at regional agricultural symposium.",
      image: "",
    },
    {
      id: 3,
      title: "Social Impact Campaign",
      category: "Community",
      year: "2023", 
      description: "Organized awareness campaign about sustainable farming practices in rural communities. Reached over 500 local farmers and conducted educational workshops.",
      image: "",
    },
  ],
  
  // الإنجازات
  achievements: [
    {
      id: 1,
      title: "Young Entrepreneur Award",
      issuer: "Regional Business Council",
      year: "2024",
      description: "Recognized for innovative approach to agricultural business development.",
    },
    {
      id: 2,
      title: "Academic Excellence Scholarship",
      issuer: "Mansoura University",
      year: "2023",
      description: "Awarded to top 5% of students in the Department of Soil and Water Sciences.",
    },
    {
      id: 3,
      title: "Leadership Development Certificate",
      issuer: "National Youth Leadership Program",
      year: "2022",
      description: "Completed intensive leadership training program with distinction.",
    },
  ],
  
  // المشاريع والخدمات
  services: [
    {
      id: 1,
      title: "Bio Lacto – SPARK",
      description: "Award-winning project recognized for innovation, practicality, and social impact. Won 'Best Applied Project' in May 2025.",
    },
    {
      id: 2,
      title: "Hult Prize",
      description: "Ranked 4th out of 103 teams in local finals in February 2025. Developed business model and entrepreneurial skills.",
    },
    {
      id: 3,
      title: "Sole Project",
      description: "Conducted market research, created Business Model Canvas and Pitch Deck in December 2024.",
    },
    {
      id: 4,
      title: "Student Scientific Forum",
      description: "Developed a nanoparticle-based eco-friendly solution for water purification in October 2024.",
    },
    {
      id: 5,
      title: "Agricultural Research",
      description: "Experience in crop management and agricultural analysis from Agricultural Research Center – Mansoura.",
    },
    {
      id: 6,
      title: "Leadership & Training",
      description: "Completed multiple leadership programs including Forward Program (McKinsey & Company) and Aspire Leaders Program (Harvard Faculty).",
    },
  ],

  // معلومات الموقع
  website: {
    copyright: `© ${new Date().getFullYear()} Zeyad Emad Rady. All rights reserved.`,
    privacyLink: "#",
    termsLink: "#",
  }
};

export default userData;
