const NotionPageToHtml = require("notion-page-to-html");
const fs = require("fs");

const html = NotionPageToHtml.convert(
  "https://www.notion.so/dianait/Tu-pagina-web-con-Notion-y-Netlify-cfe8257a1cac405fa575c534a58e9437"
).then((result) => createHTMLFile(result, "index.html"));

function createHTMLFile(content, fileName) {
  const html = content.html;
  var stream = fs.createWriteStream(fileName);
  stream.once("open", function (fd) {
    stream.end(html);
  });
}
