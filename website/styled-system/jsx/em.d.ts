/* eslint-disable */
import type { Component } from 'solid-js'
import type { EmProperties } from '../patterns/em'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface EmProps
  extends EmProperties,
    DistributiveOmit<HTMLCerberusProps<'em'>, keyof EmProperties> {}

/**
 * A em element


 */
export declare const Em: Component<EmProps>
