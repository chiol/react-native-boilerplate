module.exports = {
    root: true,
    extends: [
        "@react-native-community",
        "plugin:prettier/recommended",
        "plugin:import/recommended",
    ],
    plugins: ["prettier", "import"],
    rules: {
        "prettier/prettier": "error",
    },
};
