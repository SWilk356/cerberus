/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { SystemProperties } from '../types/style-props'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface SmallProperties {}

interface SmallStyles
  extends SmallProperties,
    DistributiveOmit<SystemStyleObject, keyof SmallProperties> {}

interface SmallPatternFn {
  (styles?: SmallStyles): string
  raw: (styles?: SmallStyles) => SystemStyleObject
}

/**
 * A small element


 */
export declare const small: SmallPatternFn
