const { User, Book, Rental } = require('../models');

exports.main = (req, res)=>{
    res.render('index')
}

exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const find = await User.findOne({ where: { email } });
        // console.log(find);
        if (find) {
            res.json({ result: false, message: '이미존재하는회원' });
        } else {
            const result = await User.create({ name, email, password });
            // console.log('signup', result);
            res.json({ result: true, message: '회원가입완료' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' })
    }
};

// 로그인
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const find = await User.findOne({ where: { email } });
        // console.log("login-email",find);
        if (find) {
            if (find.password === password) {
                const response = {
                    id: find.id,
                    email: find.email,
                    name: find.name
                }
                // {id: 1, email: asdf@asdf.asdf}
                // console.log('response', response);

                // password가 동일한 경우
                res.json({ result: true, code: 1000, response, message: '로그인 성공' });
            } else {
                // email 없는 경우
                res.json({ result: false, code: 2002, response: null, message: '비밀번호 틀렸습니다.' });
            }
        } else {
            // console.log(error);
            res.json({ result: false, code: 2001, response: null, message: '회원이 아닙니다.' });
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
        // console.log('user-id', id);
        const result = await User.findByPk(id, {
            attributes: ['email']

            // @@@@@@ 여기에 대여한 책 목록도 넣어야 하는가? @@@@@@

        });
        // console.log('find',result);
        res.json({ result: true, response: result })
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' })
    }
}

// 수정
exports.update = async (req, res) => {
    try {
        const { id, name, password } = req.body
        const find = await User.findByPk(id)
        if (find) {
            await user.update({ password, name }, { where: { id } });

            // @@@@@ 대여 목록 수정도 여기서 넣어야 하는가? @@@@@

            res.json({ result: true });
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
        const { id } = req.body;
        await user.destroy({ where: { id } });
        res.json({ result: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' })
    }
}