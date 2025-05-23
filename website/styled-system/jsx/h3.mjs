import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getH3Style } from '../patterns/h3.mjs'
import { cerberus } from './factory.mjs'

export const H3 = /* @__PURE__ */ function H3(props) {
  const [patternProps, restProps] = splitProps(props, [])

  const styleProps = getH3Style(patternProps)
  const mergedProps = mergeProps(styleProps, restProps)

  return createComponent(cerberus.h3, mergedProps)
}
