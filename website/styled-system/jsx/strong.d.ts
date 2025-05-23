/* eslint-disable */
import type { Component } from 'solid-js'
import type { StrongProperties } from '../patterns/strong'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface StrongProps
  extends StrongProperties,
    DistributiveOmit<HTMLCerberusProps<'strong'>, keyof StrongProperties> {}

/**
 * A strong element


 */
export declare const Strong: Component<StrongProps>
