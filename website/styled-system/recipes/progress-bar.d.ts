/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface ProgressBarVariant {
  /**
   * @default "md"
   */
  size: 'sm' | 'md'
  /**
   * @default "rounded"
   */
  usage: 'block' | 'rounded'
}

type ProgressBarVariantMap = {
  [key in keyof ProgressBarVariant]: Array<ProgressBarVariant[key]>
}

export type ProgressBarVariantProps = {
  [key in keyof ProgressBarVariant]?:
    | ConditionalValue<ProgressBarVariant[key]>
    | undefined
}

export interface ProgressBarRecipe {
  __type: ProgressBarVariantProps
  (props?: ProgressBarVariantProps): Pretty<Record<'root' | 'bar', string>>
  raw: (props?: ProgressBarVariantProps) => ProgressBarVariantProps
  variantMap: ProgressBarVariantMap
  variantKeys: Array<keyof ProgressBarVariant>
  splitVariantProps<Props extends ProgressBarVariantProps>(
    props: Props,
  ): [
    ProgressBarVariantProps,
    Pretty<DistributiveOmit<Props, keyof ProgressBarVariantProps>>,
  ]
  getVariantProps: (props?: ProgressBarVariantProps) => ProgressBarVariantProps
}

export declare const progressBar: ProgressBarRecipe
