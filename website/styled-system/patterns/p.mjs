import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const pConfig = {
  transform(props14) {
    return props14
  },
}

export const getPStyle = (styles = {}) => {
  const _styles = getPatternStyles(pConfig, styles)
  return pConfig.transform(_styles, patternFns)
}

export const p = (styles) => css(getPStyle(styles))
p.raw = getPStyle
