module.exports = {
    env: {
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "@react-native-community",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:import/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: [
        "@react-native-community",
        "react",
        "@typescript-eslint",
        "prettier",
    ],
    rules: {
        "prettier/prettier": "error",
        "import/no-unresolved": "off",
        "@typescript-eslint/no-namespace": [
            "error",
            { allowDeclarations: true },
        ],
        "react/prop-types": "off",
    },
    settings: {
        "import/resolver": {
            node: {
                paths: ["src"],
            },
        },
        "import/ignore": ["node_modules"],
        react: {
            version: "detect",
        },
        "babel-module": {},
    },
};
