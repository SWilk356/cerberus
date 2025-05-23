import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getH5Style } from '../patterns/h5.mjs'
import { cerberus } from './factory.mjs'

export const H5 = /* @__PURE__ */ function H5(props) {
  const [patternProps, restProps] = splitProps(props, [])

  const styleProps = getH5Style(patternProps)
  const mergedProps = mergeProps(styleProps, restProps)

  return createComponent(cerberus.h5, mergedProps)
}
