import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const h3Config = {
  transform(props14) {
    return props14
  },
}

export const getH3Style = (styles = {}) => {
  const _styles = getPatternStyles(h3Config, styles)
  return h3Config.transform(_styles, patternFns)
}

export const h3 = (styles) => css(getH3Style(styles))
h3.raw = getH3Style
