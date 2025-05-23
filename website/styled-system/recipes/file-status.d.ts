/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface FileStatusVariant {
  /**
   * @default "todo"
   */
  status: 'todo' | 'processing' | 'done' | 'error'
}

type FileStatusVariantMap = {
  [key in keyof FileStatusVariant]: Array<FileStatusVariant[key]>
}

export type FileStatusVariantProps = {
  [key in keyof FileStatusVariant]?:
    | ConditionalValue<FileStatusVariant[key]>
    | undefined
}

export interface FileStatusRecipe {
  __type: FileStatusVariantProps
  (props?: FileStatusVariantProps): Pretty<Record<'root' | 'icon', string>>
  raw: (props?: FileStatusVariantProps) => FileStatusVariantProps
  variantMap: FileStatusVariantMap
  variantKeys: Array<keyof FileStatusVariant>
  splitVariantProps<Props extends FileStatusVariantProps>(
    props: Props,
  ): [
    FileStatusVariantProps,
    Pretty<DistributiveOmit<Props, keyof FileStatusVariantProps>>,
  ]
  getVariantProps: (props?: FileStatusVariantProps) => FileStatusVariantProps
}

export declare const fileStatus: FileStatusRecipe
