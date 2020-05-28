const crypto = require("crypto")
const string = process.argv[2]
console.log("入力した文字列: ", string)
const hashHex = crypto.createHash("sha256").update(string, "utf8").digest("base64")

console.log("sha256,base64:", hashHex)
