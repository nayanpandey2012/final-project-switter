module.exports = {
  apps : [
    {
      name: "server",
      script : "../server/server.js",
      watch: true,
      instances: 2,
      exec_mode: "cluster",
      ignore_watch: ["node_modules"],
      watch: true,
    },
    {
      name: "websocket",
      script: "../server/websocket.js",
      watch: true,
      instances: 2,
      exec_mode: "cluster",
      ignore_watch: ["node_modules"],
      watch: true,
    },
    {
      name: "fileServer",
      script: "../server/fileServer.js",
      watch: true,
    },
    {
      name: "gateway",
      script: "./gateway.js",
      watch: true,
      ignore_watch: ["node_modules"],
      watch: true,
    },
  ]
}
