export interface BusinessPhoto {
  id: number;
  fileName: string;
  filePath: string;
  mimeType: string;
  isPrimary: boolean;
}

export interface BusinessCategory {
  name: string;
}

export interface BusinessData {
  businessName: string;
  description: string;
  averageRating: number;
  category: BusinessCategory;
  address: string;
  photos: BusinessPhoto[]; 
}

