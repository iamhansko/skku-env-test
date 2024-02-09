# SKKU-LOGIN-CONTAINER

컨테이너의 환경변수 사용을 연습하기 위한 간단한 프로젝트입니다. 

## NPM
```bash
npm install

# Linux/MacOS (Terminal)
export STUDENT_NAME=현수
export STUDENT_MAJOR=전전

# Windows (CMD)
set STUDENT_NAME=현수
set STUDENT_MAJOR=전전

# Development Stage
npm run dev

# Producton Stage
npm run start
```
Then, check `http://localhost:9000`

## Docker
```bash
docker build -t skku-login .
docker run -p 30009:9000 -e STUDENT_NAME=현수 -e STUDENT_MAJOR=전전 skku-login
```
Then, check `http://localhost:30009`