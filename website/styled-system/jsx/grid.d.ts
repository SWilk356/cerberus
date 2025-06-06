/* eslint-disable */
import type { Component } from 'solid-js'
import type { GridProperties } from '../patterns/grid'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface GridProps
  extends GridProperties,
    DistributiveOmit<HTMLCerberusProps<'div'>, keyof GridProperties> {}

export declare const Grid: Component<GridProps>
