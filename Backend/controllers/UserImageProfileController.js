const UserImage = require("../models/userImages");
const multer = require('multer');
const fs = require('fs');
const path = require('path');


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});


let upload = multer({ storage: storage });

module.exports.getProfile = async (req, res) => {
	try {
		imgModel.find({}, (err, items) => {
			if (err) {
				console.log(err);
				res.status(500).send('An error occurred', err);
			}
			else {
				console.log({ items: items });
			}
		});
	} catch (error) {
		console.log("this is en " + error);
	}
};
module.exports.postProfile = (upload.single('image'), async (req, res, next) => {
  
    const obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    UserImage.create(obj, (err, item) => {
        if (err) {
            return res.json({ msg: "no image is created", status: false });
        }
        else {
            // item.save();
            res.redirect('/');
        }
    });
});