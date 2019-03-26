const OwCharacter = require('../models/overwatchCharacter');

exports.getAllCharacters = async (req, res, next) => {
  try {
    const allCharacters = await OwCharacter.find().sort({name: 1}).collation({strength: 1})
    // console.log(allCharacters)
    res.send(allCharacters);
  } catch (error) {
    console.log(error);
  }
};

exports.getOneCharacter = (req, res, next) => {
  let characterName = req.params.name;
  characterName = characterName.charAt(0).toUpperCase() + characterName.slice(1);
  console.log(characterName);

  OwCharacter.find({
      name: characterName
    })
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err));
};

exports.getByClass = (req, res, next) => {
  let characterClass = req.params.class;
  characterClass = characterClass.charAt(0).toUpperCase() + characterClass.slice(1);
  OwCharacter.find({
      class: characterClass
    })
    .then(result => {
      res.send(result)
    })
};

exports.postOneCharacter = (req, res, next) => {
  console.log('Post Character');
  // console.log(req.body)
  const name = req.body.name;
  const weapon = req.body.weapon;
  const ultimate = req.body.ultimate;
  const className = req.body.class;
  const imageUrl = req.body.imageUrl
  const quote = req.body.quote

  const character = new OwCharacter({
    name: name,
    ultimate: ultimate,
    class: className,
    weapon: weapon,
    imageUrl: imageUrl,
    quote: quote
  });
  character.save()
    .then(result => {
      res.status(201)
        .redirect('http://localhost:8080/')
    })
    .catch(err => console.log(err));
};

exports.deleteOneCharacter = (req, res, next) => {
  console.log(req);
  const characterId = req.params.id;
  OwCharacter.findByIdAndDelete(characterId)
    .then(result => {
      res.status(200).send({
        message: 'Character Deleted'
      })
    })
    .catch(err => console.log(err));
};

exports.putOneCharacter = (req, res, next) => {
  console.log(req.body.characterClass);
  const characterId = req.body.id;
  const updatedName = req.body.name;
  const updatedWeapon = req.body.weapon;
  const updatedUltimate = req.body.ultimate;
  const updatedClass = req.body.characterClass;
  const updatedImageUrl = req.body.imageUrl;
  const updatedQuote = req.body.quote;

  OwCharacter.findByIdAndUpdate(characterId, {
      name: updatedName,
      weapon: updatedWeapon,
      ultimate: updatedUltimate,
      class: updatedClass,
      imageUrl: updatedImageUrl,
      quote: updatedQuote
    })
    .then(result => {
      res.status(200)
        .send('Updated')
    })
    .catch(err => console.log(err));
};