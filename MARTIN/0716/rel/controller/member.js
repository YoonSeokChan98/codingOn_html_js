const { response } = require('express');
const { Member, Profile } = require('../models');
const { where } = require('sequelize');
const member = require('../models/member');

//회원가입
exports.signup = async (req, res) => {
    try {
        const { userId, password, username, age, email } = req.body;
        //존재여부확인
        const find = await Member.findOne({ where: { userId } });
        console.log('find', find);
        if (find) {
            res.json({ result: false, message: '이미존재하는회원' });
        } else {
            const result = await Member.create({ userId, password });
            console.log('signup', result);
            await Profile.create({ username, age, email, memberId: result.id })
            console.log({ result: true });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' })
    }
};


// 로그인
exports.login = async (req, res) => {
    try {
        const { userId, password } = req.body;
        const find = await Member.findOne({ where: { userId } });
        if (find) {
            if (find.password === password) {
                const response = { // '프론트에 pw는 보내지 않기 위해서' userId와 username만 보내기 위해 data 안에 userid와 username을 넣어서 보내줌
                    id: find.id,
                    userId: find.userId
                }
                res.json({ result: true, code: 1000, response, message: '로그인 성공' }); // pw가 동일한 경우
            } else {
                res.json({ result: false, code: 1001, response: null, message: '비밀번호가 틀렸습니다' }); // pw가 다른경우
            }
        } else {
            res.json({ result: false, code: 1002, response: null, message: '회원이 아닙니다.' }); // userid가 없는 경우
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' })
    }
}

// 회원 조회
exports.find = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Member.findByPk(id, {
            attributes: ['userId'],
            // include: 쿼리를 실행 할 때 관련된 모델의 데이터도 함께 조회할 수 있도록하는 옵션
            include: [{ model: Profile, attributes: ['username', 'age', 'email'] }],
        });
        console.log('find', result);
        res.json({ result: true, response: result })
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' })
    }
};

// 수정
exports.update = async (req, res) => {
    try {
        const { password, username, age, email, id } = req.body
        const find = await Member.findByPk(id)
        if (find) {
            await Member.update({ password }, { where: { id } })
            await Profile.update({ username, age, email }, { where: { memberId: id } })
            res.json({ result: true })
        } else {
            res.json({ result: false, message: '회원이 없습니다.' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' })
    }
}

// 삭제
exports.deleteFunc = async (req, res) => {
    try {
        const { id } = req.body
        await Profile.destroy({ where: { memberId: id } })
        await Member.destroy({ where: { id } })
        res.json({ result: true })
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' })
    }
}