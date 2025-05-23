import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getEmStyle } from '../patterns/em.mjs'
import { cerberus } from './factory.mjs'

export const Em = /* @__PURE__ */ function Em(props) {
  const [patternProps, restProps] = splitProps(props, [])

  const styleProps = getEmStyle(patternProps)
  const mergedProps = mergeProps(styleProps, restProps)

  return createComponent(cerberus.em, mergedProps)
}
