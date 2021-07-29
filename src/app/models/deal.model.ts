import {Location} from './location.model';

export interface Deal {
  id: number;
  shortDescription: string;
  description?: string;
  vendorId: string;
  vendorName: string;
  categoryName: string;
  categoryId: number;
  fullDescription?: string;
  status?: string;
  country?: string;
  city?: string;
  dateBegin: string;
  dateEnd: string;
  locations: Location;
  countryName: string;
  cityName: string;
  tags: any[];
  gettingDate?: string;
}
