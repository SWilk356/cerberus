import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getAnimateInStyle } from '../patterns/animate-in.mjs'
import { cerberus } from './factory.mjs'

export const AnimateIn = /* @__PURE__ */ function AnimateIn(props) {
  const [patternProps, restProps] = splitProps(props, ['delay'])

  const styleProps = getAnimateInStyle(patternProps)
  const mergedProps = mergeProps(styleProps, restProps)

  return createComponent(cerberus.div, mergedProps)
}
