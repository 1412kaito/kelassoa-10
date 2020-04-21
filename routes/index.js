const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Berhasil akses endpoint')
})

module.exports = router;