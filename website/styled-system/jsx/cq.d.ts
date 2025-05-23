/* eslint-disable */
import type { Component } from 'solid-js'
import type { CqProperties } from '../patterns/cq'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface CqProps
  extends CqProperties,
    DistributiveOmit<HTMLCerberusProps<'div'>, keyof CqProperties> {}

export declare const Cq: Component<CqProps>
