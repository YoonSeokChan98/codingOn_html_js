const { Post } = require('../models');
const { Op } = require('sequelize');

// 전체글 조회
const all = async(req, res)=>{
    const result = await Post.findAll({ //findAll은 배열을 변환함
        attributes: ['id', 'title', 'content', 'createdAt'],
        // where: {id: { [Op.gte]: 3 } }, // Op.lte(이하), Op.gte(이상), Op.gt(초과), Op.lt(미만)
        // where: {id: { [Op.in]: [3, 4] } }, // Op.in(배열요소중 하나), Op.notIn(배열요소와 모두다름)
        // where: {[Op.or]: [ {id: 1}, {title: '반갑습니다'} ]}, // Op.or(또는)
        oder:[['id', 'desc']],
        // limit: 2, // 보여지는 데이터값이 2개만 보이게
        // offset: 1, // 보여지는 데이터 값의 앞 1개를 날리고 그 다음 부터 보이게 하기 / 예) offset: 1 은 2부터 보임
    });
    console.log('all', result);
    res.json({ result:true, data:result });
};

// 글 하나 생성
const write = async(req, res)=>{
    // req.body.title, req.body.content
    const {title, content} = req.body;
    // mysql: insert into post (title, content) values (title, content)
    const result = await Post.create({ title, content });
    console.log('write', result);
    res.json({ result:true, data: result.id }); // write.ejs 31줄 / document.location.href = `/post/${data}`
};

// 글 하나 조회
const one = async (req, res)=>{
    console.log(req.params.id);
    const result = await Post.findOne({ where: { id: req.params.id } });
    console.log('one', result);
    res.json({result: true, data: result});
};

// 글 하나 수정
const updateFunc = async (req, res)=>{
    // req.body.id, req.body.title, req.body.content
    const {id, title, content} = req.body;
    // update ({수정할 값},{어떤 것을})
    const result = await post.update({ title, content },{ where: { id } });
    console.log('update', result);
    res.json({result: true});
};

const deleteFunc = async (req, res)=>{
    const result = await Post.destroy({where: { id: req.body.id }});
    console.log('delete', result);
    if (result) {
        res.json({result: true});
    } else {
        res.json({result: false});
    }
};

module.exports = { all, write, one, updateFunc, deleteFunc }