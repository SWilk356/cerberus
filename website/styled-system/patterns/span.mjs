import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const spanConfig = {
  transform(props14) {
    return props14
  },
}

export const getSpanStyle = (styles = {}) => {
  const _styles = getPatternStyles(spanConfig, styles)
  return spanConfig.transform(_styles, patternFns)
}

export const span = (styles) => css(getSpanStyle(styles))
span.raw = getSpanStyle
