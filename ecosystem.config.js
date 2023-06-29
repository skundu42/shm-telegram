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
                  token: "6352580817:AAEy65w_Oegjw8hVe1RPQrZ6jF_3-RiqoSA"
                },
          },
        ],
  };
