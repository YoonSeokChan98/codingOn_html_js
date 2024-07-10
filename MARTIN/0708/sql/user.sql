-- 주석하는 법
-- SELECT * FROM kdt13.user;
-- SELECT * FROM user WHERE age < 25 AND age >= 23;
-- SELECT * FROM user WHERE username = '이몽룡';
-- select * from user where age >= 23 order by username desc; 

-- '%강남%' address에 '강남'이 들어가는 문자열을 검색 / '서울%' = 서울로 시작하는 값을 찾음, '%강남구' = '~~강남구'로 끝나는 값을 찾음
-- SELECT * FROM user WHERE address LIKE '%강남구%';
-- '~~향'으로 끝나는 값을 찾음 / _ 갯수가 글자가 들어가는 갯수임 예) __향은 성춘향이라는 값이 있기에 검색이 되지만 _향은 검색이 되지않음
-- SELECT * FROM user WHERE username LIKE '__향';

-- SELECT * FROM user WHERE age < 25 AND age >= 23;
SELECT * FROM user WHERE age BETWEEN 23 AND 25;