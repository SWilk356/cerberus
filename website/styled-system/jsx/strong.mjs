import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getStrongStyle } from '../patterns/strong.mjs'
import { cerberus } from './factory.mjs'

export const Strong = /* @__PURE__ */ function Strong(props) {
  const [patternProps, restProps] = splitProps(props, [])

  const styleProps = getStrongStyle(patternProps)
  const mergedProps = mergeProps(styleProps, restProps)

  return createComponent(cerberus.strong, mergedProps)
}
