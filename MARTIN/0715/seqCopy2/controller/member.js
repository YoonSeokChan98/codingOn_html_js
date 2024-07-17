const { where } = require('sequelize');
const { Member } = require('../models')

// 회원가입
const signup = async (req, res) => {
    const { userid, pw, username } = req.body;
    // 존재여부 확인
    const find = await Member.findOne({ where: { userid } })
    console.log('find는 뭐가 나오나?',find);
    if (find) {
        res.json({ result: false, message: '이미 존재하는 회원' }) // 프론트에게 보내는 메시지
    } else {
        const result = await Member.create({ userid, pw, username })
        res.json({ result: true, message: '회원가입 완료' })
    }
}


// 로그인
const login = async (req, res) => {
    const { userid, pw } = req.body;
    // 존재여부 확인
    const find = await Member.findOne({ where: { userid } });
    console.log('find', find); // 
    if (find) {
        if (find.pw === pw) {
            const response = { // '프론트에 pw는 보내지 않기 위해서' userid와 username만 보내기 위해 data 안에 userid와 username을 넣어서 보내줌
                id: find.id,
                userid: find.userid,
                username: find.username
            }
            res.json({ result: true, code: 1000, response, message: '로그인 성공' }); // pw가 동일한 경우
        } else {
            res.json({ result: false, code: 1001, response: null, message: '비밀번호가 틀렸습니다' }); // pw가 다른경우
        }
    } else {
        res.json({ result: false, code: 1002, response: null, message: '회원이 아닙니다.' }); // userid가 없는 경우
    }
}


// 회원 한명 조회
const info = async (req, res) => {
    // req.params.id
    const { id } = req.params; // 인덱스 값 / 오토인크리먼트로 올라가는 것은 인덱스 값이다
    const { id: pkId, userid, username, pw } = await Member.findByPk(id); //.findByPk() = primaryKey를 찾는 용도, 조금더 성능이 좋다고 함... / findOne과 비슷함
    const response = {
        userid,
        username,
        id: pkId,
        pw,
    }
    // const res = {
    //     userid: find.userid,
    //     username: find.username,
    //     id: find.id
    // }
    res.json({ result: true, response })
}

const updateFunc = async (req, res) => {
    const { id, username, pw } = req.body
    const result = await Member.update({ username, pw }, { where: { id } }) //.update({변경 할 것},{where:{어디서 변경할지}})
    res.json({ result: true })
}

const deleteFunc = async (req, res) => {
    const { id } = req.body
    await Member.destroy({ where: { id } })
    res.json({ result: true })
}

module.exports = { signup, login, info, updateFunc, deleteFunc }