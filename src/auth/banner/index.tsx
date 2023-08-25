import bannerImage from './login-banner.png'
import { Carousel, CarouselItem } from '@arco-design/web-vue'

const carouselItem = [
  {
    slogan: '开箱即用的高质量模板',
    subSlogan: '丰富的的页面模板，覆盖大多数典型业务场景',
    image: bannerImage,
  },
  {
    slogan: '内置了常见问题的解决方案',
    subSlogan: '国际化，路由配置，状态管理应有尽有',
    image: bannerImage,
  },
  {
    slogan: '接入可视化增强工具AUX',
    subSlogan: '实现灵活的区块式开发',
    image: bannerImage,
  },
]

export function Banner() {
  return (
    <div class="w-1/4 bg-[linear-gradient(163.85deg,#1d2129_0%,#00308f_100%)] lg:w-[550px]">
      <div class="h-full flex-1">
        <Carousel class="h-full" animationName="fade">
          {carouselItem.map(item => {
            return (
              <CarouselItem key={item.slogan}>
                <div class="flex h-full flex-col items-center justify-center">
                  <div class="text-[20px] font-medium leading-7 text-[--color-fill-1]">
                    {item.slogan}
                  </div>
                  <div class="mt-2 text-[14px] leading-[22px] text-[--color-text-3]">
                    {item.subSlogan}
                  </div>
                  <img class="mt-[30px] w-[320px]" src={item.image} />
                </div>
              </CarouselItem>
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}
