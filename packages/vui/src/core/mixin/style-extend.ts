import { Vue, Component, Prop } from 'vue-property-decorator'
import { size } from '../constant'
import { getStyleSize, genSize } from '../util'

type SizeStyles = {
  size?: size | string | number
  height?: string | number
  width?: string | number
  fontSize?: string | number
}

@Component
export default class SizeMixin extends Vue {
  name!: string

  @Prop({ type: [String, Number] })
  size?: size | string | number

  @Prop({ type: [String, Number] })
  minHeight?: string | number

  @Prop({ type: [String, Number] })
  minWidth?: string | number

  @Prop({ type: [String, Number] })
  height?: string | number

  @Prop({ type: [String, Number] })
  width?: string | number

  @Prop({ type: [String, Number] })
  maxHeight?: string | number

  @Prop({ type: [String, Number] })
  maxWidth?: string | number

  @Prop({ type: [String, Number] })
  fontSize?: size | string | number

  private get sizeStyle () {
    const { height, width, size, fontSize } = this
    const styles: SizeStyles = {}

    genSize(styles, this.name, size)

    if (height !== undefined) {
      styles.height = getStyleSize(height)
    }
    if (width !== undefined) {
      styles.width = getStyleSize(width)
    }
    if (fontSize !== undefined) {
      styles.fontSize = getStyleSize(fontSize)
    }

    return styles
  }

  beforeMount () {

  }
}