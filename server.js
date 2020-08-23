const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {

    res.send([{
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name': '강민신',
        'birthday': '650128',
        'gender': '남자',
        'job': '사업가'
      },
      {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': '이세인',
        'birthday': '720223',
        'gender': '여자',
        'job': '회사원'
      },
      {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': '강체로',
        'birthday': '120504',
        'gender': '아이',
        'job': '초딩생'
    },
    {
        'id': 4,
        'image': 'https://placeimg.com/64/64/4',
        'name': '강마로',
        'birthday': '140619',
        'gender': '애기',
        'job': '꿈딩생'      }]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));