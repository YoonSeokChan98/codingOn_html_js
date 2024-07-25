const { User, Book, Rental } = require('../models');

// 도서 등록
exports.bookRegister = async (req, res) => {
    try {
        const { title, author, date } = req.body;
        const result = await Book.create({ title, author, date });
        console.log('도서 등록: ', result);
        res.json({ result: true, response: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' })
    }
}

// 도서 전체 조회
exports.bookAll = async (req, res) => {
    try {
        // const { id } = req.body;
        const result = await Book.findAll({
            attributes: ['id', 'title', 'author', 'date']
        });
        console.log('전체도서 조회', result);
        res.json({ result: true, response: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' })
    }
}

// 도서 하나 조회
exports.bookOne = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByPk(id, {
            attributes: ['id', 'title', 'author', 'date']
        });
        console.log('도서 하나 조회', result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' })
    }
}

// 도서 대여
exports.bookRental = async (req, res) => {
    try {
        const {  } = req.body;
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' })
    }
}