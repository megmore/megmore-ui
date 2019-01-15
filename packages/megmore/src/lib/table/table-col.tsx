import { Component, Prop, Vue } from 'vue-property-decorator'
import { Align, Color } from '@/types/model'

export const _name = 'm-table-col'

@Component
export default class MTableCol extends Vue {
    @Prop({ type: String })
    private type?: 'select' | 'expand'

    @Prop({ type: String })
    private title?: string

    @Prop({ type: [ String, Number ], default: 'auto' })
    private width?: string

    @Prop({ type: String })
    private field?: string

    @Prop({ type: String, default: 'center' })
    private align?: Align

    @Prop({ type: String, default: 'primary' })
    private color?: Color

    @Prop({ type: Function })
    private sort?: () => boolean

    @Prop({ type: Boolean, default: false })
    private sortable?: boolean
}
