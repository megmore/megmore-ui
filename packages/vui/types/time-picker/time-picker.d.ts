import { Vue } from 'vue-property-decorator';
import { dateValueFormat, datePickerType } from '../core/constants';
export default class MTimePicker extends Vue {
    name: string;
    landscope: boolean;
    desync: boolean;
    value: any;
    valueFormat: dateValueFormat;
    ampm: boolean;
    hourStep: number;
    minuteStep: number;
    max: any;
    min: any;
    firstDayOfWeek: number;
    pickerType: datePickerType;
    confirmation: boolean;
    onConfirm(): void;
    onCancel(): void;
    onInput(val: any): void;
    readonly styles: any;
    readonly classes: any;
    valueAdaptI(val: any): number;
    valueAdaptO(val: number): any;
    onValueUpdate(val: any, oldVal: any): void;
    onAMPMUpdate(val: any, oldVal: any): void;
    onPickerTypeChange(val: any): void;
    DateStore: any;
    RPanel(): JSX.Element;
    RHandler(): JSX.Element;
    render(): JSX.Element;
}
