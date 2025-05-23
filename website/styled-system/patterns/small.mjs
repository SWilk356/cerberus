import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const smallConfig = {
  transform(props14) {
    return props14
  },
}

export const getSmallStyle = (styles = {}) => {
  const _styles = getPatternStyles(smallConfig, styles)
  return smallConfig.transform(_styles, patternFns)
}

export const small = (styles) => css(getSmallStyle(styles))
small.raw = getSmallStyle
