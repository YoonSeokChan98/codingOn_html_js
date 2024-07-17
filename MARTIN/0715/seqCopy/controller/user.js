const { where } = require('sequelize');
const { User } = require('../models');

// 회원가입
const signup = async (req, res)=>{
    console.log('signup-req', req.body);
    const{userid, name, pw} = req.body;
    const result = await User.create({ userid, name, pw});
    console.log('signup',result);
    res.json({result: true})
};

// 로그인
const login = async (req, res)=>{
    console.log('login-req', req.body);
    const {userid, pw} = req.body;
    const result = await User.findOne({where: {userid, pw}});
    console.log('login',result);
    if (result.length > 0) {
        res.json({ result: true, message: '로그인 성공', id: result[0].id });
    } else {
        res.json({ result: false, message: '로그인 실패', id: null });
    }
}

// 회원정보
const info = async (req, res)=>{
    const result = await User.findOne({ where: {id: req.parms.id}})
    console.log('info', result);
    if (result.length > 0) {
        res.json({ result: true, info: result[0], message: '조회완료' });
    } else {
        res.json({ result: false, info: null, message: '존재하는 회원없음' });
    }
}

// 회원정보 수정
const patch = async(req, res)=>{
    const {id, name, pw} = req.body
    const result = await User.update({ name, pw },{where:{id}});
    console.log('patch', result);
    res.json({result:true})
}

// 회원정보 삭제
const deleteInfo = async (req, res)=>{
    const result = await User.destroy({where:{id: req.body.id}});
    console.log('destroy',result);
    if (result) {
        res.json({result: true});
    } else {
        res.json({result: false});
    }
}

// 회원정보 전체 조회
const infoAll = async(req, res)=>{
    const result = await User.findAll({
        attributes:['id', 'userid', 'name']
    });
    console.log('infoAll', result);
    res.json({ result:true, data:result });
}

module.exports = {signup, login, info, patch, deleteInfo, infoAll}