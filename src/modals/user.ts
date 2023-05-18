import { Password } from "@/utils/Password";
import mongoose from "mongoose";

export const USER_TABLE = "User";
export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  mobile: string;
  photo: string;
  role: string;
  active: string;
  verify?: string;
  token?: string;
}

export interface IUserDoc extends mongoose.Document<IUser>, IUser {}

const schema = new mongoose.Schema(
  {
    firstname: { type: String, require: [true, "First name is required"] },
    lastname: {
      type: String,
      require: [true, "Last name is required"],
    },
    email: { type: String, require: [true, "Email is required"], unique: true },
    password: { type: String, require: [true, "Password is required"] },
    mobile: { type: String, require: [true, "Mobile is required"] },
    photo: { type: String, default: "" },
    role: { type: String, default: "user", enum: ["user", "admin"] },
    active: { type: String, default: true },
    verify: { type: String, default: false },
    token: { type: String },
  },
  {
    timestamps: true,

    toJSON: {
      transform(doc, ret, options) {
        doc.id = ret._id;
        ret.id = ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);
schema.pre("save", function done(next) {
  if (this.isModified("password")) {
    const password = Password.hash(this.get("password"));
    if (password) {
      this.set("password", password);
    }
  }
  let role = this.get("role");
  this.set("verify", role === "admin");
  next();
});

export const User =
  mongoose.models[USER_TABLE] || mongoose.model(USER_TABLE, schema);
