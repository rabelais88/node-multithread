const {
  Worker, isMainThread, parentPort, workerData
} = require('worker_threads');
const path = require('path')

const logger = (...m) => console.log('index.js', ...m);

logger('isMainThread', isMainThread)

const maxWorks = 10;
const works = Array.from({length: maxWorks}).map((_, i) => {
  const worker = new Worker(path.join(__dirname, 'worker.js'), { workerData: `data ${i}` })
  worker.on('message', m => logger('message received', m))
  worker.on('error', e => console.error(e))
  worker.on('exit', c => logger('worker exited', c))
})