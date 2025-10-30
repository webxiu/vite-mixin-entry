/*
 * @Author: lixiuhai
 * @Date: 2023-06-23 10:00:30
 * @Last Modified by: Hailen
 * @Last Modified time: 2024-09-11 10:17:46
 */
import type { FunctionalComponent } from "vue";
import type { ECharts } from "echarts";
import type { IconifyIcon } from "@iconify/vue";
import { type RouteComponent, type RouteLocationNormalized } from "vue-router";

/**
 * 全局类型声明，无需引入直接在 `.vue` 、`.ts` 、`.tsx` 文件使用即可获得类型提示
 */
declare global {
  const wx: any;
  /**
   * 平台的名称、版本、依赖、最后构建时间的类型提示
   */
  const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      dependencies: Recordable<string>;
      devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
  };

  /**
   * Window 的类型提示
   */
  interface Window {
    // Global vue app instance
    __APP__: App<Element>;
    webkitCancelAnimationFrame: (handle: number) => void;
    mozCancelAnimationFrame: (handle: number) => void;
    oCancelAnimationFrame: (handle: number) => void;
    msCancelAnimationFrame: (handle: number) => void;
    webkitRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    mozRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    oRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    msRequestAnimationFrame: (callback: FrameRequestCallback) => number;
  }

  /**
   * 接口请求数据响应类型
   */
  interface BaseResponseType<T> {
    data: T;
    code: number;
    message: string;
  }
  /**
    * 迅光接口请求数据响应类型
    */
  interface XGBaseResponseType<T=unknown> {
    result: BaseResponseType<T>;
  }
  /**
   * 打包压缩格式的类型声明
   */
  type ViteCompression = "none" | "gzip" | "brotli" | "both" | "gzip-clear" | "brotli-clear" | "both-clear";

  /**
   * 全局自定义环境变量的类型声明
   * @see {@link https://yiming_chang.gitee.io/pure-admin-doc/pages/config/#%E5%85%B7%E4%BD%93%E9%85%8D%E7%BD%AE}
   */
  interface ViteEnv {
    VITE_PORT: number;
    VITE_PUBLIC_PATH: string;
    VITE_ROUTER_HISTORY: string;
    VITE_CDN: boolean;
    VITE_HIDE_HOME: string;
    VITE_COMPRESSION: ViteCompression;
  }

  /**
   * `src/router` 文件夹里的类型声明
   */
  interface toRouteType extends RouteLocationNormalized {
    meta: {
      roles: Array<string>;
      keepAlive?: boolean;
      dynamicLevel?: string;
    };
  }

  /**
   * @description 完整路由配置表(自定义meta)
   */
  interface RouteConfigRawType {
    /** 子路由地址 `必填` */
    path: string;
    /** 路由名字（对应不要重复，和当前组件的`name`保持一致）`必填` */
    name?: string;
    /** 路由重定向 `可选` */
    redirect?: string;
    /** 按需加载组件 `可选` */
    component?: RouteComponent;
    meta?: {
      /** 菜单名称（兼容国际化、非国际化，如何用国际化的写法就必须在根目录的`locales`文件夹下对应添加） `必填` */
      title: string;
      /** 菜单图标 `可选` */
      icon?: string | FunctionalComponent | IconifyIcon;
      /** 是否显示顶部返回菜单(针对所有路由,默认不显示) */
      showNav?: boolean;
      /** 是否缓存路由 */
      noCache?: boolean;
      /** 路由组件缓存（本项目不涉及）`可选` */
      keepAlive?: boolean;
      /** 是否隐藏路由， 默认显示 */
      hidden?: boolean;
      /** 是否禁用路由 */
      disable?: boolean;
      /** 页面加载动画（有两种形式，一种直接采用vue内置的`transitions`动画，另一种是使用`animate.css`写进、离场动画）`可选` */
      transition?: {
        /**
         * @description 当前路由动画效果
         * @see {@link https://next.router.vuejs.org/guide/advanced/transitions.html#transitions}
         * @see animate.css {@link https://animate.style}
         */
        name?: string;
        /** 进场动画 */
        enterTransition?: string;
        /** 离场动画 */
        leaveTransition?: string;
      };
      /** 是否隐藏路由， 默认显示 */
      pathType?: string;
    };
    /** 子路由配置项 */
    children?: Array<RouteConfigRawType>;
  }

  /** 分页表格响应类型 */
  export interface TablePagingResType<T> {
    records: T[];
    total: number;
    size: number;
    current: number;
    orders: number[];
    optimizeCountSql: boolean;
    searchCount: boolean;
    countId: number;
    maxLimit: number;
    pages: number;
  }
}
