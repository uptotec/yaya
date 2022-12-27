const tf = require('@tensorflow/tfjs-node');

module.exports = async () => {
  const labels = ['Positive', 'Nigative'];
  const model = await tf.node.loadSavedModel(__dirname);

  return { model, labels };
};
