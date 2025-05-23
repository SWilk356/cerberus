import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getPStyle } from '../patterns/p.mjs'
import { cerberus } from './factory.mjs'

export const P = /* @__PURE__ */ function P(props) {
  const [patternProps, restProps] = splitProps(props, [])

  const styleProps = getPStyle(patternProps)
  const mergedProps = mergeProps(styleProps, restProps)

  return createComponent(cerberus.p, mergedProps)
}
