module.exports = {
  devServer: {
    proxy: {
      "/api": {
        ws: false,
        target: "http://192.168.137.127:7001",
        changeOrigin: true,
        withCredentials: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
