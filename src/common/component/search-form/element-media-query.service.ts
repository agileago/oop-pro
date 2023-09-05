import { Mut, VueService } from 'vue3-oop'
import { ref } from 'vue'
import { eagerComputed, useElementSize } from '@vueuse/core'

/**
 * 元素尺寸变化
 */
export class ElementMediaQueryService extends VueService {
  elementRef = ref<HTMLElement>()
  size = useElementSize(this.elementRef, { width: 0, height: 0 })
  @Mut() breakpoint = {
    xs: 576,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
    xxxl: 2000,
  }
  private isXsRef = eagerComputed(
    () => this.size.width.value < this.breakpoint.xs,
  )
  private isSmRef = eagerComputed(
    () => this.size.width.value >= this.breakpoint.sm,
  )
  private isMdRef = eagerComputed(
    () => this.size.width.value >= this.breakpoint.md,
  )
  private isLgRef = eagerComputed(
    () => this.size.width.value >= this.breakpoint.lg,
  )
  private isXlRef = eagerComputed(
    () => this.size.width.value >= this.breakpoint.xl,
  )
  private isXxlRef = eagerComputed(
    () => this.size.width.value >= this.breakpoint.xxl,
  )
  private isXxxlRef = eagerComputed(
    () => this.size.width.value >= this.breakpoint.xxxl,
  )

  /**
   * 最小 < 576px
   */
  get isXs() {
    return this.isXsRef.value
  }
  /**
   * 小 >= 576
   */
  get isSm() {
    return this.isSmRef.value
  }
  /**
   * 正常 >= 768
   */
  get isMd() {
    return this.isMdRef.value
  }
  /**
   * 大屏 >= 992
   */
  get isLg() {
    return this.isLgRef.value
  }
  /**
   * 大屏+ >= 1200
   */
  get isXl() {
    return this.isXlRef.value
  }
  /**
   * 大屏++ >= 1600
   */
  get isXxl() {
    return this.isXxlRef.value
  }
  /**
   * 大屏+++ >= 2000
   */
  get isXxxl() {
    return this.isXxxlRef.value
  }
}
