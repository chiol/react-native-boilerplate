module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
        [
            "module-resolver",
            {
                root: ["./src"],
                extensions: [".ts", ".tsx"],
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
