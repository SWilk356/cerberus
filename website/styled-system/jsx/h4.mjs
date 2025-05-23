import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getH4Style } from '../patterns/h4.mjs'
import { cerberus } from './factory.mjs'

export const H4 = /* @__PURE__ */ function H4(props) {
  const [patternProps, restProps] = splitProps(props, [])

  const styleProps = getH4Style(patternProps)
  const mergedProps = mergeProps(styleProps, restProps)

  return createComponent(cerberus.h4, mergedProps)
}
