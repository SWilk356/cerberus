import preferPandaShorthand from './preferPandaShorthand'
import fs from 'fs'

interface Package {
  name: string
  version: string
}

const pkg: Package = JSON.parse(
  fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
) as Package

const preferPandaShorthandPlugin = {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },
  rules: {
    'prefer-panda-shorthand': preferPandaShorthand,
  },
}

export default preferPandaShorthandPlugin
