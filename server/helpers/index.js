const fs = require('fs');

function getDataFromJson(filePath) {
  const file = fs.readFileSync(filePath, encoding = "utf8");
  const parsedJsonFileData = JSON.parse(file);
  
  return parsedJsonFileData;
}

module.exports = {
  getDataFromJson
};