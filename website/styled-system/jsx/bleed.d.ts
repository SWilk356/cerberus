/* eslint-disable */
import type { Component } from 'solid-js'
import type { BleedProperties } from '../patterns/bleed'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface BleedProps
  extends BleedProperties,
    DistributiveOmit<HTMLCerberusProps<'div'>, keyof BleedProperties> {}

export declare const Bleed: Component<BleedProps>
