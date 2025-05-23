/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { SystemProperties } from '../types/style-props'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface H2Properties {}

interface H2Styles
  extends H2Properties,
    DistributiveOmit<SystemStyleObject, keyof H2Properties> {}

interface H2PatternFn {
  (styles?: H2Styles): string
  raw: (styles?: H2Styles) => SystemStyleObject
}

/**
 * A h2 element


 */
export declare const h2: H2PatternFn
