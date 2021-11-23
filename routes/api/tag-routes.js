const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [Product],
  })
  .then((data) => res.json(data))
  .catch((err) => res.json(err))
});

router.get('/:id', (req, res) => {
  Tag.findAll({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
  .then((data) => res.json(data))
  .catch((err) => res.json(err))
});

router.post('/', (req, res) => {
  Tag.create({
    Tag_name: req.body.title,
  })
  .then((newTag) => {
    res.json(newTag)
  })
  .catch((err) => console.log(err))
});

router.put('/:id', (req, res) => {
  Tag.update({
    Tag_name: req.body.title
  },
  {
    where: {
      id: req.params.id,
    },
  })
  .then((data) => {
    res.json(data);
  })
  .catch((err) => res.json(err))
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedTag) => {
    res.json(deletedTag);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
