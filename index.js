const cluster = require("cluster");
const instanceCPUs = require("os").cpus();

if (cluster.isMaster) {
  console.log(`MASTER thread with process id => ${process.pid}`);

  instanceCPUs.map((ele) => {
    cluster.fork();
  });
} else {
  console.log(`WORKER thread with process id => ${process.pid}`);
}
