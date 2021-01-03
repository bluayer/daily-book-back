const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const diaries = [
        {
            name: '기계는 어떻게 생각하는가',
            author: '숀 게리시',
            writer: '팽동은',
            content: '평균의 착시 효과',
            img: 'https://files.slack.com/files-tmb/TE0K1DADA-F01CZSU9QPN-da17d17b01/img_20201018_104149_720.jpg'
        },
        {
            name: 'TS 마스터는 바로 나!!',
            author: '김영재',
            writer: '김김영재',
            content: 'TS는 자바스크립트보다 근본이 덜 천하고, MS로부터 온 애로....',
            img: 'https://ca.slack-edge.com/TE0K1DADA-U01671L6PCL-3844b1daadca-512'
        },
        {
            name: '베조스 레터',
            author: '스티븐 앤더슨',
            writer: '노재석',
            content: '두 가지 유형의 결정이 있다.\n' +
                '소수의 비가역적인 유형 1 결정. 대부분 되돌릴 수 있는 유형 2 결정.\n' +
                '조직이 커감에 따라 대부분의 의사결정을 유형1 처럼 적용하려는 경향이 있는데, 이는 느려지고 혁신을 이루지 못하게 됨',
            img: 'https://files.slack.com/files-pri/TE0K1DADA-F01D9GXRQP4/img_20201025_142922.jpg'
        },
        {
            name: '베조스 레터',
            author: '스티븐 앤더슨',
            writer: '노재석',
            content: '새로운 가격체계를 도입하는 것도 유형 2 결정이다.\n' +
                '우리는 유형 1처럼 결정했었는데, 맞는걸까? 훨씬 큰 이익을 낼 수도 있기 때문에 일부러라도 리스크를 지고 테스트해봐야하지 않을까',
            img: 'https://files.slack.com/files-tmb/TE0K1DADA-F01D6EBD4N9-d0a265a785/img_20201025_142937_720.jpg'
        },
        {
            name: '최고의 변화는 어디서 시작되는가',
            author: '벤저민 하디',
            writer: '팽동은',
            content: '먼 목표에 단계적으로 접근하는 방법',
            img: 'https://files.slack.com/files-pri/TE0K1DADA-F01CJ9Y49TN/img_20201010_204817.jpg'
        }
    ]
    res.json(diaries)
})

module.exports = router
