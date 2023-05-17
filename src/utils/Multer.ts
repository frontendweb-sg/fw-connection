import multer from "multer";
import path from "path";
import mkdirp from "mkdirp";
import fs from "fs";
import { NextApiRequest } from "next";

const filterFile = (req: any, file: any, cb: Function) => {
  if (!file.originalname.match(/\.(jpe?g|png|gif|jfif|pmp|webp)$/g)) {
    return cb(
      new Error("Please upload file in these formats (jpe?g|png|giff|jfif|pmp)")
    );
  }

  return cb(null, true);
};
export function Upload(dir: string) {
  const storage = multer.diskStorage({
    destination(req, file, cb) {
      const pathDir = path.join(process.cwd(), `uploads/${dir}`);
      if (!fs.existsSync(pathDir)) {
        fs.mkdirSync(pathDir);
      }
      cb(null, path.join(pathDir));
    },
    filename(req, file, cb) {
      cb(
        null,
        Date.now().toString() +
          "-" +
          file.originalname.replace(/\s+/, "-").toLowerCase()
      );
    },
  });

  const upload = multer({
    storage: storage,
    fileFilter: filterFile,
  });
  return upload;
}
