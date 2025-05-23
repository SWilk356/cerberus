/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { SystemProperties } from '../types/style-props'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface H5Properties {}

interface H5Styles
  extends H5Properties,
    DistributiveOmit<SystemStyleObject, keyof H5Properties> {}

interface H5PatternFn {
  (styles?: H5Styles): string
  raw: (styles?: H5Styles) => SystemStyleObject
}

/**
 * A h5 element


 */
export declare const h5: H5PatternFn
