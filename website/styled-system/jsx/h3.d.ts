/* eslint-disable */
import type { Component } from 'solid-js'
import type { H3Properties } from '../patterns/h3'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface H3Props
  extends H3Properties,
    DistributiveOmit<HTMLCerberusProps<'h3'>, keyof H3Properties> {}

/**
 * A h3 element


 */
export declare const H3: Component<H3Props>
