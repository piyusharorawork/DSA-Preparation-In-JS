import ejs from "ejs";
import fs from "fs";
import path from "path";

(() => {
  try {
    const dirPath = process.argv[2];
    if (!dirPath) {
      throw "dir path is required";
    }

    if (!fs.existsSync(dirPath)) {
      throw "incorrect dir path " + dirPath;
    }
    const folderName = path.basename(dirPath);

    const drawingFileName = `${folderName}.excalidraw`;

    const drawingFilePath = path.join(dirPath, drawingFileName);

    ejs.renderFile("generators/drawing.ejs", {}, (err, str) => {
      if (err) {
        return console.error(err);
      }

      fs.writeFileSync(drawingFilePath, str);
    });
  } catch (error) {
    console.error(error);
  }
})();
