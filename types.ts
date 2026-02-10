
export interface NavItem {
  label: string;
  path: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

export interface VolunteerFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  field: string;
}
