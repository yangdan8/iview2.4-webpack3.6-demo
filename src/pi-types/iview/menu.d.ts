// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default Menu;

export interface Menu extends Vue {
  /**
   * 菜单类型，可选值为 horizontal（水平） 和 vertical（垂直）
   * 默认值vertical
   */
  mode: string;
  /**
   * 主题，可选值为 light、dark、primary，其中 primary 只适用于 mode="horizontal"
   * 默认值light
   */
  theme: string;
  /**
   * 激活菜单的 name 值
   */
  'active-name': string | number;
  /**
   * 展开的 Submenu 的 name 集合
   */
  'open-names': string[] | number[];
  /**
   * 是否开启手风琴模式，开启后每次至多展开一个子菜单
   * 默认值false
   */
  accordion: boolean;
  /**
   * 导航菜单的宽度，只在 mode="vertical" 时有效，如果使用 Col 等布局，建议设置为 auto
   * 默认值240px
   */
  width: string;
  /**
   * 选择菜单（MenuItem）时触发
   */
  $emit(eventName: 'on-select', name: string | number): this;
  /**
   * 当 展开/收起 子菜单时触发	
   * 默认值当前展开的 Submenu 的 name 值数组
   */
  $emit(eventName: 'on-open-change', names: string[] | number[]): this;
  /**
   * 更新当前展开的子目录
   */
  updateOpenKeys(name: number | string): void;
  /**
   * 手动更新展开的子目录，注意要在 $nextTick 里调用
   */
  updateOpened(): void;
  /**
   * 手动更新当前选择项，注意要在 $nextTick 里调用
   */
  updateActiveName(): void;
}

export interface MenuItem extends Vue {
  /**
   * 菜单项的唯一标识，必填
   */
  name: string | number;
}

export interface Submenu extends Vue {
  /**
   * 子菜单的唯一标识，必填
   */
  name: string | number;
  /**
   * slot插槽对象
   */
  $slot: {
    /**
     * 菜单项
     */
    '': string;
    /**
     * 子菜单标题
     */
    title: string;
  }
}

export interface MenuGroup extends Vue {
  /**
   * 分组标题
   * 默认值空
   */
  title: string;
}