import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const h1Config = {
  transform(props14) {
    return props14
  },
}

export const getH1Style = (styles = {}) => {
  const _styles = getPatternStyles(h1Config, styles)
  return h1Config.transform(_styles, patternFns)
}

export const h1 = (styles) => css(getH1Style(styles))
h1.raw = getH1Style
