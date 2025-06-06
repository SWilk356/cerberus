import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getHstackStyle } from '../patterns/hstack.mjs'
import { cerberus } from './factory.mjs'

export const HStack = /* @__PURE__ */ function HStack(props) {
  const [patternProps, restProps] = splitProps(props, ['justify', 'gap'])

  const styleProps = getHstackStyle(patternProps)
  const mergedProps = mergeProps(styleProps, restProps)

  return createComponent(cerberus.div, mergedProps)
}
