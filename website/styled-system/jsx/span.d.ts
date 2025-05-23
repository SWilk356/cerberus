/* eslint-disable */
import type { Component } from 'solid-js'
import type { SpanProperties } from '../patterns/span'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface SpanProps
  extends SpanProperties,
    DistributiveOmit<HTMLCerberusProps<'span'>, keyof SpanProperties> {}

/**
 * A span element


 */
export declare const Span: Component<SpanProps>
