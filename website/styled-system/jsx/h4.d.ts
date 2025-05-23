/* eslint-disable */
import type { Component } from 'solid-js'
import type { H4Properties } from '../patterns/h4'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface H4Props
  extends H4Properties,
    DistributiveOmit<HTMLCerberusProps<'h4'>, keyof H4Properties> {}

/**
 * A h4 element


 */
export declare const H4: Component<H4Props>
