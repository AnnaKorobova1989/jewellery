module.exports = {
  "env": {
    "browser": true
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "extends": "htmlacademy/vanilla",
  "rules": {
    "comma-dangle": [
      "error",
      "only-multiline"
    ],
    "semi": [
      "error",
      "always"
    ],
    "max-len": [
      "error",
      {
        "code": 120
      }
    ],
    "quotes": [
      "error",
      "single"
    ],
    "strict": [
      "off",
      "global"
    ],
    "no-console": "warn",
    "no-alert": "warn"
  },
}
