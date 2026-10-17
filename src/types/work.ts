export interface WorkRole {
  title: string;
  date: string;
  description: string[];
}

export interface WorkExperience {
  company: string;
  date: string;
  roles: WorkRole[];
}
