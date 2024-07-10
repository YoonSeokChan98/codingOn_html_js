const visitorModel = require('../model/visitor');

// 전체 방명록 조회
const allVisitor = async (req, res) => {
    const data = await visitorModel.allVisitor(); // row를 data로 받음 / 왜?
    console.log('cont', data); //  row의 첫번째 배열이 data안에 담아짐
    res.json( {result: data} );
};

module.exports = { allVisitor };