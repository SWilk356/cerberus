import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getVisuallyHiddenStyle } from '../patterns/visually-hidden.mjs'
import { cerberus } from './factory.mjs'

export const VisuallyHidden = /* @__PURE__ */ function VisuallyHidden(props) {
  const [patternProps, restProps] = splitProps(props, [])

  const styleProps = getVisuallyHiddenStyle(patternProps)
  const mergedProps = mergeProps(styleProps, restProps)

  return createComponent(cerberus.div, mergedProps)
}
