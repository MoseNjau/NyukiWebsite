export interface Feature {
  title: string;
  description: string;
  icon?: string; // Optional icon for the feature
}

export interface TeamMember {
  name: string;
  position: string;
  image: string; // URL or path to the team member's image
}

export interface Testimonial {
  author: string;
  content: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}