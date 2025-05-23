/* eslint-disable */
import type { Component } from 'solid-js'
import type { AnimateInProperties } from '../patterns/animate-in'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface AnimateInProps
  extends AnimateInProperties,
    DistributiveOmit<
      HTMLCerberusProps<'div'>,
      keyof AnimateInProperties | 'overflow'
    > {}

/**
 * A container that fades in the content


 */
export declare const AnimateIn: Component<AnimateInProps>
