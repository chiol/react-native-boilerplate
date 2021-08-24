module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
        [
            "module-resolver",
            {
                root: ["./src"],
                extensions: [".ts", ".tsx"],
                alias: {
                    "@": "./src",
                    "@User": "./src/domains/User",
                    "@Product": "./src/domains/Product",
                    "@Message": "./src/domains/Message",
                },
            },
        ],
        [
            "module:react-native-dotenv",
            {
                moduleName: "react-native-dotenv",
            },
        ],
    ],
};
