import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getCenterStyle } from '../patterns/center.mjs'
import { cerberus } from './factory.mjs'

export const Center = /* @__PURE__ */ function Center(props) {
  const [patternProps, restProps] = splitProps(props, ['inline'])

  const styleProps = getCenterStyle(patternProps)
  const mergedProps = mergeProps(styleProps, restProps)

  return createComponent(cerberus.div, mergedProps)
}
