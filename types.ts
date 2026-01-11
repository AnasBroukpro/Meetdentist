import { LucideIcon } from "lucide-react";

export interface Doctor {
  name: string;
  role: string;
  image: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  image: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}