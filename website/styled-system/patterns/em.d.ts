/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { SystemProperties } from '../types/style-props'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface EmProperties {}

interface EmStyles
  extends EmProperties,
    DistributiveOmit<SystemStyleObject, keyof EmProperties> {}

interface EmPatternFn {
  (styles?: EmStyles): string
  raw: (styles?: EmStyles) => SystemStyleObject
}

/**
 * A em element


 */
export declare const em: EmPatternFn
