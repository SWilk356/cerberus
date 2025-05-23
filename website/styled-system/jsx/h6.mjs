import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getH6Style } from '../patterns/h6.mjs'
import { cerberus } from './factory.mjs'

export const H6 = /* @__PURE__ */ function H6(props) {
  const [patternProps, restProps] = splitProps(props, [])

  const styleProps = getH6Style(patternProps)
  const mergedProps = mergeProps(styleProps, restProps)

  return createComponent(cerberus.h6, mergedProps)
}
