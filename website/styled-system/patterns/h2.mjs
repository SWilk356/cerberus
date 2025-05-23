import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const h2Config = {
  transform(props14) {
    return props14
  },
}

export const getH2Style = (styles = {}) => {
  const _styles = getPatternStyles(h2Config, styles)
  return h2Config.transform(_styles, patternFns)
}

export const h2 = (styles) => css(getH2Style(styles))
h2.raw = getH2Style
