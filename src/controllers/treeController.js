const Tree = require('../models/Tree');

const addTree = async (req, res) => {
  try {
    const {
      speciesName,
      latitude,
      longitude,
      plantingDate,
      healthStatus,
    } = req.body;

    const tree = await Tree.create({
      speciesName,
      latitude,
      longitude,
      plantingDate,
      healthStatus,
    });

    res.status(201).json({
      success: true,
      message: 'Tree added successfully',
      data: tree,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getTrees = async (req, res) => {
  try {
    const { species, health } = req.query;

    const filter = {};

    if (species) {
      filter.speciesName = species;
    }

    if (health) {
      filter.healthStatus = health;
    }

    const trees = await Tree.find(filter)
  .select('-__v')
  .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: trees.length,
      data: trees,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateTreeHealth = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const { healthStatus } = req.body;

    const tree =
      await Tree.findByIdAndUpdate(
        id,
        { healthStatus },
        {
          new: true,
          runValidators: true,
        }
      );

    if (!tree) {
      return res.status(404).json({
        success: false,
        message: 'Tree not found',
      });
    }

    res.status(200).json({
      success: true,
      message:
        'Health status updated successfully',
      data: tree,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getStats = async (req, res) => {
  try {
    const totalTrees =
      await Tree.countDocuments();

    const speciesAggregation =
      await Tree.aggregate([
        {
          $group: {
            _id: '$speciesName',
            count: { $sum: 1 },
          },
        },
      ]);

    const healthAggregation =
      await Tree.aggregate([
        {
          $group: {
            _id: '$healthStatus',
            count: { $sum: 1 },
          },
        },
      ]);

    const goodTrees =
      await Tree.countDocuments({
        healthStatus: 'Good',
      });

    const speciesStats = {};

    speciesAggregation.forEach(
      item => {
        speciesStats[item._id] =
          item.count;
      }
    );

    const healthStats = {};

    healthAggregation.forEach(
      item => {
        healthStats[item._id] =
          item.count;
      }
    );

    const goodHealthPercentage =
      totalTrees === 0
        ? 0
        : Number(
            (
              (goodTrees /
                totalTrees) *
              100
            ).toFixed(2)
          );

    res.status(200).json({
      success: true,
      totalTrees,
      speciesStats,
      healthStats,
      goodHealthPercentage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addTree,
  getTrees,
  updateTreeHealth,
  getStats,
};