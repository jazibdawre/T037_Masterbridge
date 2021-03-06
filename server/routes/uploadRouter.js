// import dependancies
const express = require('express');
const { truncateSync } = require('fs');
const multer = require('multer');

const authenticate = require('../middleware/auth');
const Courses = require('../models/courses');
const uploadRouter = express.Router();

// multer middleware -- (Subject to reloactaion)

// Dealing with video storage on server side
const storage = multer.diskStorage({
  // specifying path of file where video will be saved
  destination: (req, file, cb) => {
    cb(null, '../uploads/');
  },
  // making sure file uploaded is a .mp4 file
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.mp4') {
      return cb(res.status(400).end('Only .Mp4 Allowed'), false);
    }
    cb(null, true);
  },
  filename: (req, file, cb) => {
    // replacing blank spaces in teh file name
    cb(null, file.originalname.replace(/ /g, '_'));
  },
});

// handling constraints
const upload = multer({
  storage: storage,
  // file size limit to 200mb temporarily
  limits: {
    fileSize: 1024 * 1024 * 200, // 200 MB
  },
}).single('file');

// port which receives the video
uploadRouter.post(
  '/uploadFile',
  // only admin/proffessor can make videos
  authenticate.verifyAdmin,
  (req, res, next) => {
    upload(req, res, (err) => {
      if (err) {
        return res.json({ success: false, err });
      }
      return res.json({
        succes: true,
        filePath: res.req.file.path,
        fileName: res.req.file.fileName,
      });
    });
  }
);

// Add Files details to mongoose collection
/*
uploadRouter.post('/video', authenticate.verifyAdmin, (req, res) => {
  Courses.findByIdAndUpdate(
    req.body.courseID,
    { video: req.body.video },
    { new: true }
  )
    .then(() => res.json({ success: true, msg: 'Course Updated Successfully' }))
    .catch((err) => res.json({ success: false, error: err }));
});
*/

// details of a particular file
uploadRouter.get('/video/:id', authenticate.verifyUser, (req, res) => {
  Courses.findOne(req.params.courseID)
    .populate('video')
    .exec()
    .then((foundCourse) => {
      foundCourse
        .findOne(req.params.id)
        .then((foundVideo) => {
          if (foundCourse.week.id(req.params.weekId).video.id(req.params.id)) {
            return res.json({
              success: true,
              video: foundCourse.week
                .id(req.params.weekId)
                .video.id(req.params.id),
            });
          }
          return res.json({ success: false, msg: 'Video Not Found' });
        })
        .catch((error) => res.json({ success: false, msg: 'Video Not Found' }));
    })
    .catch((err) => {
      res.json({ success: false, error: err });
    });
});

module.exports = uploadRouter;
