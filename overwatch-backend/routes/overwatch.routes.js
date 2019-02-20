const express = require('express');
const router = express.Router();
const overwatchController = require('../controllers/overwatch.controller');

router.get('/', overwatchController.getAllCharacters);
router.get('/name/:name', overwatchController.getOneCharacter);
router.get('/class/:class', overwatchController.getByClass);


router.post('/post', overwatchController.postOneCharacter);
router.delete('/delete/:id', overwatchController.deleteOneCharacter);
router.put('/put', overwatchController.putOneCharacter);



module.exports = router;