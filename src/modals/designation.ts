import mongoose, { Document, Schema } from "mongoose";

export const DESIGNATION_TABLE = "designation";
export interface IDesignation {
  title: string;
  slug: string;
  active: boolean;
}

export interface IDesignationDoc extends Document<IDesignation>, IDesignation {}

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

export const Designation = mongoose.model<IDesignationDoc>(
  DESIGNATION_TABLE,
  schema
);
