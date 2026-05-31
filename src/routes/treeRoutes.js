const express = require('express');

const {
  addTree,
  getTrees,
  updateTreeHealth,
  getStats
} = require(
  '../controllers/treeController'
);

const router = express.Router();

router.post('/', addTree);
router.get('/', getTrees);
router.get('/stats', getStats);
router.put('/:id',updateTreeHealth);

module.exports = router;