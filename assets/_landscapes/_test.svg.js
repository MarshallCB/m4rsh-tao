import SVGO from 'svgo'
import fs from 'fs-extra'
import path from 'path'

let file = fs.readFileSync(path.join(__dirname,'./_test.svg'))

export default (new SVGO({
  plugins: [
    {
      removeAttrs: {attrs: '(stroke|fill)'},
    }
  ]
})).optimize(file).then(({data}) => { return data });
