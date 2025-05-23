import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const h5Config = {
  transform(props14) {
    return props14
  },
}

export const getH5Style = (styles = {}) => {
  const _styles = getPatternStyles(h5Config, styles)
  return h5Config.transform(_styles, patternFns)
}

export const h5 = (styles) => css(getH5Style(styles))
h5.raw = getH5Style
