const { response } = require('express')
const { Post, Comment } = require('../models')

// 게시판 글 생성
exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body
        const result = await Post.create({ title, content })
        console.log('글 생성', result);
        res.json({ result: true, response: result })
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' })
    }
}

// 댓글 생성
exports.createComment = async (req, res) => {
    try {
        const { comment, postId } = req.body
        const result = await Comment.create({ postId, comment })
        console.log('댓글 생성', result);
        res.json({ result: true, response: result })
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' })
    }
}

// 전체 조회
exports.all = async (req, res) => {
    try {
        const result = await Post.findAll({
            attributes: ['title', 'id'],
        })
        console.log('전체 조회', result);
        res.json({ result: true, response: result })
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' })
    }
}

// 하나 조회
exports.getPost = async (req, res) => {
    try {
        const { id } = req.params
        const result = await Post.findByPk(id, {
            attributes: ['title', 'content'],
            include: [{ model: Comment }],
        })
        console.log('하나 조회', result);
        res.json({ result: true, response: result })
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' })
    }
}

// 수정 / 게시판 수정, comment수정 만들기


// 삭제 / comment