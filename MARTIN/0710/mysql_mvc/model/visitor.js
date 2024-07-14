require('dotenv').config()
const mysql = require('mysql2/promise'); // 비동기 처리를 위해 promise를 붙임

// mysql연결
const getConn = async()=>{
    return await mysql.createConnection({
        host: process.env.HOST,
        user: process.env.MYUSER,
        password: process.env.PASS,
        database: process.env.DATA
    });
};

// 쿼리문
const allVisitor = async ()=>{
    const conn = await getConn(); // mysql 접속
    const query = 'SELECT * FROM visitor';
    const [row] = await conn.query(query); // 배열구조분해할당
    console.log('model',row);
    await conn.end();
    return row;
};

const getVisitor = async(id)=>{
    const conn = await getConn();
    // 방법1 - 문자열 보간법
    /**
     * 단점
     * 1. sql 인젝션 공격에 취약
     * 2. 문자열에 특수문자가 포함될 경우 오류가 발생될 수도 있음
     * 보안하는 방법 prepared statement
     * => SELECT * FROM visitor WHERE id = ?
     */
    // const query = `SELECT * FROM visitor WHERE id = ${id}`;
    // const [row] = await conn.query(query);

    // prepared statement
    const query = `SELECT * FROM visitor WHERE id = ?`;
    const [row] = await conn.query(query, [id]);

    console.log('model', row);
    await conn.end() // 데이터베이스 연결 종료하는 이유: 자원을 효율적으로 관리, 보안강화 및 성능 최적화, 잠재적 버그를 방지
    return row;
};

const postVisitor = async(name, comment)=>{
    const conn = await getConn();
    // INSERT INTO visitor (name, comment) VALUES (값1, 값2);
    const query = 'INSERT INTO visitor (name, comment) VALUES (?, ?)';
    const [result] = await conn.query(query, [ name, comment ]);
    // console.log('model', result);
    await conn.end();
    return result;
};

const patchVisitor = async (id, name, comment)=>{
    const conn = await getConn();
    const query = 'UPDATE visitor SET name=?, comment=? WHERE id=?';
    const [result] = await conn.query(query,[name, comment, id]);
    console.log('result', result);
    await conn.end();
    return result;
};

const deleteVisitor = async (id)=>{
    const conn = await getConn();
    const query = 'DELETE FROM visitor WHERE id=?'
    const[result] = await conn.query(query, [id]);
    console.log('result', result);
    await conn.end();
    return result;
};

module.exports = { allVisitor, getVisitor, postVisitor, patchVisitor, deleteVisitor };