/* eslint-disable */
import type { Component } from 'solid-js'
import type { SmallProperties } from '../patterns/small'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface SmallProps
  extends SmallProperties,
    DistributiveOmit<HTMLCerberusProps<'small'>, keyof SmallProperties> {}

/**
 * A small element


 */
export declare const Small: Component<SmallProps>
