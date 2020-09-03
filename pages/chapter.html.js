import chapter from './_chapter';
import tao from './tao.json.js'

let chapters = {}
JSON.parse(tao).forEach((c, i) => {
  chapters[c.number] = chapter(c);
});

// exports to unique pages in 'chapter' directory. Key = file name, value = file contents

export default chapters;