import VuiComponent from '../vuiComponent';
import { size } from '../constant';
declare type SizeStyles = {
    size?: size | string | number;
    height?: string | number;
    width?: string | number;
};
export default class MixinSize extends VuiComponent {
    size?: size | string | number;
    height?: string | number;
    width?: string | number;
    readonly sizeStyle: SizeStyles;
}
export {};
