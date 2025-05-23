/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { SystemProperties } from '../types/style-props'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface SpanProperties {}

interface SpanStyles
  extends SpanProperties,
    DistributiveOmit<SystemStyleObject, keyof SpanProperties> {}

interface SpanPatternFn {
  (styles?: SpanStyles): string
  raw: (styles?: SpanStyles) => SystemStyleObject
}

/**
 * A span element


 */
export declare const span: SpanPatternFn
