import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("eslint:recommended"), {
    languageOptions: {
        ecmaVersion: 6,
        sourceType: "module",
    },

    rules: {
        strict: [2, "global"],
        "block-scoped-var": 2,
        "consistent-return": 2,
        eqeqeq: [2, "smart"],
        "guard-for-in": 2,
        "no-caller": 2,
        "no-extend-native": 2,
        "no-loop-func": 2,
        "no-new": 2,
        "no-param-reassign": 2,
        "no-return-assign": 2,
        "no-unused-expressions": 2,
        "no-use-before-define": 2,
        radix: [2, "always"],
        indent: [2, 2],
        quotes: [2, "double"],
        semi: [2, "always"],
    },
}];