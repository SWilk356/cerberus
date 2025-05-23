/* eslint-disable */
import type { Component } from 'solid-js'
import type { ScrollableProperties } from '../patterns/scrollable'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface ScrollableProps
  extends ScrollableProperties,
    DistributiveOmit<
      HTMLCerberusProps<'div'>,
      keyof ScrollableProperties | 'overflow'
    > {}

/**
 * A container that allows for scrolling


 */
export declare const Scrollable: Component<ScrollableProps>
