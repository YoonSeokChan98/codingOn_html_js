const express = require('express');
const axios = require('axios');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const app = express();
const PORT = 8000;

app.use(express.json());
// 재미나이 설정
const genAI = new GoogleGenerativeAI("AIzaSyBL4ZxVox2cs6zW4YWOocMiC5OU-F-vcuo")
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });


app.post("/chat", async (req, res) => {
    const { prompt } = req.body;
    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text()
        console.log(text);
        res.json({ result: text });
    } catch (error) {
        res.render(500).json({ response: '오류' });
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})