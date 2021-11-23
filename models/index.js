// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "Cascade"
});

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

Product.belongsTo(Tag, {
  through: "ProductTag",
  foreignKey: "tag_id",
  onDelete: "Cascade"
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsTo(Tag, {
  through: "ProductTag",
  foreignKey: "product_id",
  onDelete: "Cascade"
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
