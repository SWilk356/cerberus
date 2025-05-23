/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { SystemProperties } from '../types/style-props'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface H1Properties {}

interface H1Styles
  extends H1Properties,
    DistributiveOmit<SystemStyleObject, keyof H1Properties> {}

interface H1PatternFn {
  (styles?: H1Styles): string
  raw: (styles?: H1Styles) => SystemStyleObject
}

/**
 * A h1 element


 */
export declare const h1: H1PatternFn
