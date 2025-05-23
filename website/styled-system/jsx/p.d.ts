/* eslint-disable */
import type { Component } from 'solid-js'
import type { PProperties } from '../patterns/p'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface PProps
  extends PProperties,
    DistributiveOmit<HTMLCerberusProps<'p'>, keyof PProperties> {}

/**
 * A p element


 */
export declare const P: Component<PProps>
