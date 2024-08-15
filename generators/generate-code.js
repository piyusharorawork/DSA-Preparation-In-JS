import ejs from "ejs";
import fs, { writeFileSync } from "fs";
import path from "path";

const getCamelCase = (word) => {
  let camelCase = "";
  const wordList = word.split("");
  const N = wordList.length;

  camelCase += wordList[0].toUpperCase();
  for (let i = 1; i < N; i++) {
    camelCase += wordList[i];
  }

  return camelCase;
};

const getFunctionName = (problemName) => {
  let functionName = "";
  const words = problemName.split("-");
  const N = words.length;

  if (N === 1) {
    return problemName;
  }

  functionName += words[0];

  for (let i = 1; i < N; i++) {
    const word = words[i];
    const camelCase = getCamelCase(word);
    functionName += camelCase;
  }

  return functionName;
};

const getTestName = (problemName) => {
  return problemName.replace("-", " ");
};

(() => {
  try {
    const problemName = process.argv[2];
    if (!problemName) {
      throw "problem name is required";
    }

    const dirPath = process.argv[3];
    if (!dirPath) {
      throw "dir path is required";
    }

    if (!fs.existsSync(dirPath)) {
      throw "incorrect dir path " + dirPath;
    }

    const problemDirPath = path.join(dirPath, problemName);
    if (!fs.existsSync(problemDirPath)) {
      fs.mkdirSync(problemDirPath);
    }

    const functionName = getFunctionName(problemName);
    const testName = getTestName(problemName);

    const codeFileName = `${problemName}.js`;
    const testFileName = `${problemName}.spec.js`;

    const codeFilePath = path.join(problemDirPath, codeFileName);
    const testFilePath = path.join(problemDirPath, testFileName);

    ejs.renderFile("generators/code.ejs", { functionName }, (err, str) => {
      if (err) {
        return console.error(err);
      }

      fs.writeFileSync(codeFilePath, str);
    });

    ejs.renderFile(
      "generators/test.ejs",
      { functionName, problemName, testName },
      (err, str) => {
        if (err) {
          return console.error(err);
        }

        fs.writeFileSync(testFilePath, str);
      }
    );
  } catch (error) {
    console.error(error);
  }
})();
