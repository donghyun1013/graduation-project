const express = require('express')
const app = express()

app.use(express.static(__dirname + '/assets'))

app.listen(8083, () => {
  console.log('http:localhost:8083 에서 서버 실행중')
})

app.get('/', (요청, 응답) => {
  응답.sendFile(__dirname + '/index.html')
})