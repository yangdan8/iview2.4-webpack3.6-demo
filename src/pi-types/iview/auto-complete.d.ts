// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default AutoComplete;

export interface AutoComplete extends Vue {
  /**
   * 绑定的值，可使用 v-model 双向绑定
   */
  value: string | number;
  /**
   * 自动完成的数据源,默认值[]
   */
  data: string[] | number[];
  /**
   * 是否可以清空选项,默认值false
   */
  clearable: boolean;
  /**
   * 是否禁用,默认值false
   */
  disabled: boolean;
  /**
   * 占位文本
   */
  placeholder: string;
  /**
   * 输入框尺寸，可选值为 large、small、default 或者不设置
   */
  size: boolean;
  /**
   * 输入框尾部图标
   */
  icon: string;
  /**
   * 是否根据输入项进行筛选。当其为一个函数时，会接收 value 和 option 两个参数，
   * 当 option 符合筛选条件时，应返回 true，反之则返回 false,
   * 默认值false
   */
  'filter-method': boolean | (() => boolean);
  /**
   * 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，
   * 建议添加此属性，它将不受父级样式影响，从而达到更好的效果,
   * 默认值false
   */
  transfer: string;
  /**
   * 给表单元素设置 id，详见 Form 用法。
   */
  'element-id': string;
  /**
   * 选中 option，或 input 的 value 变化时，调用此函数
   */
  $emit(eventName: 'on-change', value: string | number): this;
  /**
   * 被选中时调用，参数为选中项的 value 值
   */
  $emit(eventName: 'on-select', value: string | number): this;
  /**
   * 搜索补全项的时候调用
   */
  $emit(eventName: 'on-search', query: string): this;
}
