import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getSpanStyle } from '../patterns/span.mjs'
import { cerberus } from './factory.mjs'

export const Span = /* @__PURE__ */ function Span(props) {
  const [patternProps, restProps] = splitProps(props, [])

  const styleProps = getSpanStyle(patternProps)
  const mergedProps = mergeProps(styleProps, restProps)

  return createComponent(cerberus.span, mergedProps)
}
