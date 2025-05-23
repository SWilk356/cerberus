import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getSmallStyle } from '../patterns/small.mjs'
import { cerberus } from './factory.mjs'

export const Small = /* @__PURE__ */ function Small(props) {
  const [patternProps, restProps] = splitProps(props, [])

  const styleProps = getSmallStyle(patternProps)
  const mergedProps = mergeProps(styleProps, restProps)

  return createComponent(cerberus.small, mergedProps)
}
