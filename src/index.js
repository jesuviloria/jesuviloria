const fs = require("fs").promises;
/* const Parser = require("rss-parser");
const parser = new Parser(); */
import { PLACEHOLDERS } from "./constants.js";

(async () => {
  const markdownTemplate = await fs.readFile("./README.md.tpl", {
    encoding: "utf8",
  });

  const newMarkdown = markdownTemplate.replace(
    PLACEHOLDERS.ICONS_SIZE_PLACEHOLDER,
    PLACEHOLDERS.ICONS_SIZE
  );

  await fs.writeFile("README.md", newMarkdown);
})();
