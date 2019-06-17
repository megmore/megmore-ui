import mixBase from '../core/mixin/base';
import { typeHeader, typeHover, typeSelect } from './constant';
declare const MTable_base: import("vue-class-component/lib/declarations").VueClass<mixBase>;
export default class MTable extends MTable_base {
    height?: string | number;
    border?: boolean;
    data: any[];
    keyField?: string;
    header?: typeHeader;
    hover?: typeHover;
    rowSelect?: boolean;
    select?: typeSelect;
    selected?: any;
    noSelect?: any;
    rowExpand?: boolean;
    expand?: typeSelect;
    expanded?: any;
    noExpand?: any;
    filter?: () => boolean;
    onExpand(row: any, index: number): void;
    onExpandAll(row: any, index: number): void;
    onSelect(row: any, index: number): void;
    onSelectAll(row: any, index: number): void;
    onRowClick(row: any, index: number): void;
    onRowDblclick(row: any, index: number): void;
    handleDataUpdate(val: any[]): void;
    handleSelectedUpdate(val: any): void;
    handleExpandedUpdate(val: any): void;
    syncSelected(data: any): void;
    syncExpanded(data: any): void;
    TableStore: any;
    readonly TableCols: any[];
    dataAdaptI(val?: any[]): any[];
    render(): JSX.Element;
}
export {};
