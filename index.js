const fs = require("fs").promises;
const Parser = require("rss-parser");
const parser = new Parser();

const ICONS_SIZE_PLACEHOLDER = /%{{icon_size}}%/g;

const ICONS_SIZE = "20px";

(async () => {
  const markdownTemplate = await fs.readFile("./README.md.tpl", {
    encoding: "utf8",
  });

  const newMarkdown = markdownTemplate.replace(
    ICONS_SIZE_PLACEHOLDER,
    ICONS_SIZE
  );

  await fs.writeFile("./README.md", newMarkdown);
})();
