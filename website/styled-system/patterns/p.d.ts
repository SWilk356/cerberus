/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { SystemProperties } from '../types/style-props'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface PProperties {}

interface PStyles
  extends PProperties,
    DistributiveOmit<SystemStyleObject, keyof PProperties> {}

interface PPatternFn {
  (styles?: PStyles): string
  raw: (styles?: PStyles) => SystemStyleObject
}

/**
 * A p element


 */
export declare const p: PPatternFn
