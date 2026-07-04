import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    if (file.fieldname === "profileImage") {
      cb(null, "uploads/profile-images");
    } else {
      cb(null, "uploads/resumes");
    }
  },

  filename(req, file, cb) {
    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9);

    cb(
      null,
      uniqueName +
        path.extname(file.originalname)
    );
  },
});

export const upload=multer({

storage,

limits:{

fileSize:5*1024*1024,

},

});