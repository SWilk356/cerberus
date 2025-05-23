import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const h6Config = {
  transform(props14) {
    return props14
  },
}

export const getH6Style = (styles = {}) => {
  const _styles = getPatternStyles(h6Config, styles)
  return h6Config.transform(_styles, patternFns)
}

export const h6 = (styles) => css(getH6Style(styles))
h6.raw = getH6Style
