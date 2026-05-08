export interface Puppy {
  id: string;
  name: string;
  color: string;
  breed: string;
  gender: 'Male' | 'Female';
  born: string;
  status: 'Available' | 'Reserved';
  image: string;
  price?: string;
  description?: string;
}

export interface Application {
  id: string;
  name: string;
  phone: string;
  email: string;
  breed: string;
  homeType: string;
  lifestyle: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  submittedAt: string;
}
