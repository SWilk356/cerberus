/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { SystemProperties } from '../types/style-props'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface H6Properties {}

interface H6Styles
  extends H6Properties,
    DistributiveOmit<SystemStyleObject, keyof H6Properties> {}

interface H6PatternFn {
  (styles?: H6Styles): string
  raw: (styles?: H6Styles) => SystemStyleObject
}

/**
 * A h6 element


 */
export declare const h6: H6PatternFn
