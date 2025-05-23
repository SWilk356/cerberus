import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getScrollableStyle } from '../patterns/scrollable.mjs'
import { cerberus } from './factory.mjs'

export const Scrollable = /* @__PURE__ */ function Scrollable(props) {
  const [patternProps, restProps] = splitProps(props, [
    'direction',
    'hideScrollbar',
  ])

  const styleProps = getScrollableStyle(patternProps)
  const mergedProps = mergeProps(styleProps, restProps)

  return createComponent(cerberus.div, mergedProps)
}
