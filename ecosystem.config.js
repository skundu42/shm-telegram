module.exports = {
        apps: [
          {
                name: "SHMFaucetBot",
                exec_mode: "cluster",
                instances: "1",
                script: "./index.js",
                args: "start",
                env: {
                  NODE_ENV: "production",
                  pKey: "40d186f1285456cc4b5af73ab82c0a2c8aa1b91ee8fb12b594efee9eee8684f4",
                  token: "5739241079:AAHwyzGegs5-_rzPOHpAa8jE8UC2ZokF-ps"
                },
          },
        ],
  };
