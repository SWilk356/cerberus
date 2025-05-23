/* eslint-disable */
import type { Component } from 'solid-js'
import type { H5Properties } from '../patterns/h5'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface H5Props
  extends H5Properties,
    DistributiveOmit<HTMLCerberusProps<'h5'>, keyof H5Properties> {}

/**
 * A h5 element


 */
export declare const H5: Component<H5Props>
