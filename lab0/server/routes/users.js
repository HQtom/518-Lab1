var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/Num', async (req, res, next)=> {
  let a = req.body
  console.log(a)
  try{
    res.status(200).json({Num:a.Num})
  }catch(e){
    res.status(404).json({error:"test error"})
  }
})

module.exports = router;
