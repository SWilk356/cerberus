/* eslint-disable */
import type { Component } from 'solid-js'
import type { H2Properties } from '../patterns/h2'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface H2Props
  extends H2Properties,
    DistributiveOmit<HTMLCerberusProps<'h2'>, keyof H2Properties> {}

/**
 * A h2 element


 */
export declare const H2: Component<H2Props>
