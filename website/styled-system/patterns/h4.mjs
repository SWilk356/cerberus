import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const h4Config = {
  transform(props14) {
    return props14
  },
}

export const getH4Style = (styles = {}) => {
  const _styles = getPatternStyles(h4Config, styles)
  return h4Config.transform(_styles, patternFns)
}

export const h4 = (styles) => css(getH4Style(styles))
h4.raw = getH4Style
