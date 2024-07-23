const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { Post, Image } = require('../models'); // 모델에서 db 가져오기
// const { response } = require('express');

//aws설정
aws.config.update({
    accessKeyId: process.env.ACCESSKEY,
    secretAccessKey: process.env.SECRETKEY,
    region: 'ap-northeast-2',
});
//aws s3인스터스 생성
const s3 = new aws.S3();

//multer설정
const upload = multer({
    storage: multerS3({
        s3, //s3: s3
        bucket: process.env.BUCKET,
        acl: 'public-read', //파일접근권한(public-read로 해야 업로드된 파일이 공개)
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname }); // cb(null,{})의 null부분은 에러처리부분임 / 에러발생시 뭔가를 안할려고  null값을 넣음
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname);
        },
    }),
});

const arrayFiles = upload.array('files');
// 모듈
const uploadFunc = async (req, res) => {
    arrayFiles(req, res, async (err) => {
        console.log('uploadFunc-title, content', req.body);
        console.log('uploadFunc-images', req.files);
        if (err) {
            return res.status(500).json({ result: false });
        }

        try {
            const { title, content } = req.body;
            const post = await Post.create({ title, content }); // 새로운 레코드 생성

            // const images = req.files.map((value) => ({
            //     url: value.location,
            //     postId: post.id,
            // }));
            const images = [];
            req.files.forEach((value) => {
                images.push({ // push는 배열에 새로운 객체를 넣어주는거임
                    url: value.location,
                    postId: post.id,
                });
            });

            await Image.bulkCreate(images); // bulkCreate 메서드는 여러 개의 레코드를 동시에 데이터베이스에 삽입하는 데 사용

            res.json({ result: true, response: images }); //json은 키: 값으로 객체로 전송됨
        } catch (error) {
            res.status(500).json({ result: false });
        }
    });
};

const main = (req, res) => {
    res.render('index');
};

module.exports = { uploadFunc, main };
