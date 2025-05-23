import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const emConfig = {
  transform(props14) {
    return props14
  },
}

export const getEmStyle = (styles = {}) => {
  const _styles = getPatternStyles(emConfig, styles)
  return emConfig.transform(_styles, patternFns)
}

export const em = (styles) => css(getEmStyle(styles))
em.raw = getEmStyle
