import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getH2Style } from '../patterns/h2.mjs'
import { cerberus } from './factory.mjs'

export const H2 = /* @__PURE__ */ function H2(props) {
  const [patternProps, restProps] = splitProps(props, [])

  const styleProps = getH2Style(patternProps)
  const mergedProps = mergeProps(styleProps, restProps)

  return createComponent(cerberus.h2, mergedProps)
}
