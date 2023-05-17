import mongoose, { Document, Schema } from "mongoose";

export const SKILL_TABLE = "skill";
export interface ISkill {
  title: string;
  slug: string;
  active: boolean;
}

export interface ISkillDoc extends Document<ISkill>, ISkill {}
const schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        doc.id = ret._id;
        ret.id = ret._id;
        delete ret.__v;
      },
    },
  }
);

export const Skill = mongoose.model<ISkillDoc>(SKILL_TABLE, schema);
