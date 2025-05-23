import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getFloatStyle } from '../patterns/float.mjs'
import { cerberus } from './factory.mjs'

export const Float = /* @__PURE__ */ function Float(props) {
  const [patternProps, restProps] = splitProps(props, [
    'offsetX',
    'offsetY',
    'offset',
    'placement',
  ])

  const styleProps = getFloatStyle(patternProps)
  const mergedProps = mergeProps(styleProps, restProps)

  return createComponent(cerberus.div, mergedProps)
}
