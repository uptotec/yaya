const loadModel = require('../model/model');
const loadTensorFromLocalImage = require('../utils/loadTensorFromLocalImage');

const predictFromImage = async (req, res) => {
  const { model, labels } = await loadModel();

  const imgTensor = await loadTensorFromLocalImage(req.file.path);

  const predictions = await model.predict(imgTensor).dataSync();

  const predictionResponse = {};

  for (let i = 0; i < labels.length; i++) {
    const label = labels[i];
    const probability = predictions[i];
    predictionResponse[label] = probability;
  }

  res.status(200).json(predictionResponse);
};

module.exports = {
  predictFromImage,
};
