/* eslint-disable */
import type { Component } from 'solid-js'
import type { H1Properties } from '../patterns/h1'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface H1Props
  extends H1Properties,
    DistributiveOmit<HTMLCerberusProps<'h1'>, keyof H1Properties> {}

/**
 * A h1 element


 */
export declare const H1: Component<H1Props>
