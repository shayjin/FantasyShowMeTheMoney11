const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const str = [{
        "name": "Shay Jin",
        "msg": "Hello world",
        "username": "shay_0419"
    }];
    
    res.end(JSON.stringify(str));
})

router.post('addTweet', (req, res) => {
    res.end('NA');
});

module.exports = router;