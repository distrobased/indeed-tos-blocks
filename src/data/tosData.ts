import { 
  Scale, 
  UserCheck, 
  Briefcase, 
  Users, 
  Building2, 
  Shield, 
  Copyright, 
  Lock, 
  AlertTriangle, 
  XCircle, 
  Gavel, 
  Mail 
} from "lucide-react";

export const tosData = [
  {
    title: "Introduction & Acceptance",
    description: "Basic agreement and platform ownership",
    icon: Scale,
    content: [
      "By using this site, you agree to these Terms of Service.",
      "These terms identify the platform owner and their legal entity.",
      "Terms may be updated at any time with reasonable notice to users.",
      "Continued use after changes constitutes acceptance of new terms."
    ]
  },
  {
    title: "Service Description",
    description: "What the platform does and limitations",
    icon: Briefcase,
    content: [
      "Platform facilitates connections between job seekers and employers.",
      "Provides job listings, resume hosting, and employer recruitment tools.",
      "Platform is not the employer and does not guarantee hiring outcomes.",
      "Service availability may vary by geographic location."
    ]
  },
  {
    title: "User Accounts",
    description: "Account creation and security requirements",
    icon: UserCheck,
    content: [
      "Users must be 16+ years old or legal working age in their jurisdiction.",
      "One account per person - duplicate accounts are prohibited.",
      "Users must keep login credentials secure and confidential.",
      "Account holders are responsible for all activities under their account."
    ]
  },
  {
    title: "Job Seekers",
    description: "Rules for candidates using the platform",
    icon: Users,
    content: [
      "Guidelines for uploading resumes and professional profiles.",
      "Rules for applying to jobs and using automated job alerts.",
      "Disclaimer that applications may not always reach intended employers.",
      "Requirements for accurate and truthful profile information."
    ]
  },
  {
    title: "Employers",
    description: "Guidelines for companies posting jobs",
    icon: Building2,
    content: [
      "Job postings must be accurate and comply with employment laws.",
      "No spam, misleading information, or discriminatory content.",
      "Payment terms and conditions for premium employer services.",
      "Requirements for legitimate business operations and job opportunities."
    ]
  },
  {
    title: "Prohibited Conduct",
    description: "What users cannot do on the platform",
    icon: Shield,
    content: [
      "No fake job postings or misleading employer information.",
      "Prohibition of harassment, spam, or abusive behavior.",
      "No unauthorized data scraping or automated access attempts.",
      "Respect for other users' privacy and intellectual property rights."
    ]
  },
  {
    title: "Intellectual Property",
    description: "Platform ownership and user content rights",
    icon: Copyright,
    content: [
      "Platform owns brand, user interface, and proprietary content.",
      "Users retain rights to their original content (resumes, profiles).",
      "Limited license granted to users for platform access.",
      "Protection of trademarks, copyrights, and trade secrets."
    ]
  },
  {
    title: "Privacy",
    description: "Data handling and privacy protections",
    icon: Lock,
    content: [
      "Reference to comprehensive Privacy Policy document.",
      "Explanation of data sharing for job application purposes.",
      "User rights regarding personal data and privacy controls.",
      "Compliance with applicable data protection regulations."
    ]
  },
  {
    title: "Liability Disclaimer",
    description: "Platform limitations and user responsibilities",
    icon: AlertTriangle,
    content: [
      "Service provided 'as-is' without warranties or guarantees.",
      "Platform not responsible for employment outcomes or decisions.",
      "Users assume risks associated with job searching and hiring.",
      "Limitation of damages and liability in case of platform issues."
    ]
  },
  {
    title: "Termination",
    description: "Account closure and suspension policies",
    icon: XCircle,
    content: [
      "Platform may close accounts for terms of service violations.",
      "Users may voluntarily close their accounts at any time.",
      "Data retention and deletion policies after account closure.",
      "Appeal process for account suspensions or terminations."
    ]
  },
  {
    title: "Governing Law & Disputes",
    description: "Legal jurisdiction and conflict resolution",
    icon: Gavel,
    content: [
      "Identification of applicable governing law and jurisdiction.",
      "Dispute resolution procedures and arbitration requirements.",
      "Class action waiver and individual dispute resolution.",
      "Venue for legal proceedings and enforcement actions."
    ]
  },
  {
    title: "Contact Information",
    description: "How to reach platform for legal matters",
    icon: Mail,
    content: [
      "Designated email address for legal and compliance inquiries.",
      "Physical mailing address for formal legal notices.",
      "Response timeframes for different types of legal requests.",
      "Escalation procedures for urgent legal matters."
    ]
  }
];