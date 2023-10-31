tfjs = require("@tensorflow/tfjs")

async function loadModel() {
    const model = await tfjs.loadLayersModel('file:///D:/Academics/B.E/Sem-5/PDS/Project/Server/Number_Predictor.h5');
    console.log(model);
    return model;
}

const model = loadModel();