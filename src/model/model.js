const tf = require('@tensorflow/tfjs-node');

module.exports = async () => {
  const labels = ['Class A', 'Class B', 'Class C', 'Class D', 'Class F'];
  const model = await tf.node.loadSavedModel(__dirname);

  return { model, labels };
};
