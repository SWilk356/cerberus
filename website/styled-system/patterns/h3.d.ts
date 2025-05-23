/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { SystemProperties } from '../types/style-props'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface H3Properties {}

interface H3Styles
  extends H3Properties,
    DistributiveOmit<SystemStyleObject, keyof H3Properties> {}

interface H3PatternFn {
  (styles?: H3Styles): string
  raw: (styles?: H3Styles) => SystemStyleObject
}

/**
 * A h3 element


 */
export declare const h3: H3PatternFn
