import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getH1Style } from '../patterns/h1.mjs'
import { cerberus } from './factory.mjs'

export const H1 = /* @__PURE__ */ function H1(props) {
  const [patternProps, restProps] = splitProps(props, [])

  const styleProps = getH1Style(patternProps)
  const mergedProps = mergeProps(styleProps, restProps)

  return createComponent(cerberus.h1, mergedProps)
}
