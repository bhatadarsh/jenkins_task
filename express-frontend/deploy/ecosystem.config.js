module.exports = {
  apps : [{
    name: "express-app",
    script: "./index.js",
    env: {
      NODE_ENV: "production",
      PORT: 3000
    }
  }]
}
