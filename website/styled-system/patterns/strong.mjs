import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const strongConfig = {
  transform(props14) {
    return props14
  },
}

export const getStrongStyle = (styles = {}) => {
  const _styles = getPatternStyles(strongConfig, styles)
  return strongConfig.transform(_styles, patternFns)
}

export const strong = (styles) => css(getStrongStyle(styles))
strong.raw = getStrongStyle
