/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { SystemProperties } from '../types/style-props'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface StrongProperties {}

interface StrongStyles
  extends StrongProperties,
    DistributiveOmit<SystemStyleObject, keyof StrongProperties> {}

interface StrongPatternFn {
  (styles?: StrongStyles): string
  raw: (styles?: StrongStyles) => SystemStyleObject
}

/**
 * A strong element


 */
export declare const strong: StrongPatternFn
