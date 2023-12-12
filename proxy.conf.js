module.exports = {
  "/api": {
    target: "https://v3.football.api-sports.io",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    },
  },
};
