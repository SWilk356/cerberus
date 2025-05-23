/* eslint-disable */
import type { Component } from 'solid-js'
import type { CircleProperties } from '../patterns/circle'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface CircleProps
  extends CircleProperties,
    DistributiveOmit<HTMLCerberusProps<'div'>, keyof CircleProperties> {}

export declare const Circle: Component<CircleProps>
