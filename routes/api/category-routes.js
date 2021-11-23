const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [Product],
  }).then((data) => {
    res.json(data)
  })
});

router.get('/:id', (req, res) => {
  Category.findOne( {
    where: {
      id: req.params.id
    },
    include: [Product],
  }).then((data) => {
    res.json(data);
  })
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.title,
  })
  .then((newCategory) => {
    res.json(newCategory)
  })
  .catch((err) => console.log(err))
});

router.put('/:id', (req, res) => {
  Category.update({
    category_name: req.body.title
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
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedCategory) => {
    res.json(deletedCategory);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
