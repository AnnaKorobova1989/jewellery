module.exports = {
  "env": {
    "browser": true
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
  }
}
