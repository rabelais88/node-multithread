const { isMainThread, parentPort, workerData } = require("worker_threads");

const logger = (...m) => console.log('worker.js', ...m);
logger('isMainThread', isMainThread)
logger('workerData', workerData)
setTimeout(() => {
  parentPort.postMessage({ success: true, workerData });
}, 1000);
