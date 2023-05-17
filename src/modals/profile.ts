import mongoose, { Schema, models, model } from "mongoose";

export const PROFILE_TABLE = "Profile";
export interface IAward {
  title: string;
  rating: number;
  image?: string;
}

export interface ILanguage {
  code: string;
  name: string;
  options: string[];
}

export interface IEmployment {
  company: string;
  designation: string;
  skills: string[];
  location: string;
  salary: string;
  from: Date;
  award?: IAward[];
  to?: Date;
  description?: string;
  current?: boolean;
}

export interface IEducation {
  college: string; // kic
  course: string; // BCA
  subject: string[];
  from: Date;
  to?: Date;
  board?: string;
  medium?: string;
  totalMarks?: string;
  current?: boolean;
  description?: string;
}

export interface ISkill {
  language: string;
  proficiency: string;
  rating: number;
}

const schema = new Schema({});

export const Profile = models[PROFILE_TABLE] || model(PROFILE_TABLE, schema);
