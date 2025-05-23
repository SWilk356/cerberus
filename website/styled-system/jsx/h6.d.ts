/* eslint-disable */
import type { Component } from 'solid-js'
import type { H6Properties } from '../patterns/h6'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface H6Props
  extends H6Properties,
    DistributiveOmit<HTMLCerberusProps<'h6'>, keyof H6Properties> {}

/**
 * A h6 element


 */
export declare const H6: Component<H6Props>
