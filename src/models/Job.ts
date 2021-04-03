import { Company } from './Company';

export interface Job {
  Link: string;
  Title: string;
  JobType: string;
  Location: string;
  PublishedDate: Date;
  IsRemote: boolean;
  ViewCount: number;
  Likes: number;
  Description: string;
  HowToApply: string;
  CompanyLogoUrl?: string;
  CompanyName?: string;
  Company?: Company;
}
