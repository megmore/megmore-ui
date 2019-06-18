import { Component, Mixins } from 'vue-property-decorator'
import mixBase from '../core/mixin/base'
import mixVariety from '../core/mixin/variety'
import mixShape from '../core/mixin/shape'
import mixElevation from '../core/mixin/elevation'

@Component
export default class MAppBar extends Mixins (
  mixBase,
  mixVariety,
  mixShape
) {
  name = 'm-app-bar'

  get styles () {
    return {
      ...this.baseStyle,
    }
  }

  get classes () {
    return {
      ...this.baseClass,
      ...this.varietyClass,
      ...this.shapeClass
    }
  }

  render () {
    const { name, $slots, classes, styles } = this

    return (
      <div staticClass={name}
           style={styles}
           class={classes}>
        {$slots.default}
      </div>
    )
  }
}
