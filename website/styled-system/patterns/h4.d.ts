/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { SystemProperties } from '../types/style-props'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface H4Properties {}

interface H4Styles
  extends H4Properties,
    DistributiveOmit<SystemStyleObject, keyof H4Properties> {}

interface H4PatternFn {
  (styles?: H4Styles): string
  raw: (styles?: H4Styles) => SystemStyleObject
}

/**
 * A h4 element


 */
export declare const h4: H4PatternFn
