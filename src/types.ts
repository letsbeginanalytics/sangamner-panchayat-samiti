export interface Notice {
  id: number;
  title: string;
  date: string;
  category: string;
}

export interface Scheme {
  id: number;
  name: string;
  date: string;
  type: 'state' | 'central';
}

export interface DirectoryEntry {
  department: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
}
