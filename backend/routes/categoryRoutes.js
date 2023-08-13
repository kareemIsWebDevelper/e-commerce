const express = require('express');
const router = express.Router();
const {
    createCategory,
    getCategories,
    getCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/categoryController');

router.post("/", createCategory);

router.get('/', getCategories);

router.get("/:id", getCategory);

router.patch("/:id", updateCategory);

router.delete("/:id", deleteCategory);

module.exports = router