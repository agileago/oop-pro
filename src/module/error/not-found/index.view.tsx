import { Button, Result } from '@arco-design/web-vue'
import { useRouter } from 'vue-router'

export default function NotFound() {
  const router = useRouter()
  return (
    <div class={'absolute left-1/2 top-1/2 ml-[-95px] mt-[-121px] text-center'}>
      <Result status={'404'} subtitle={'抱歉，页面不见了～'}></Result>
      <div>
        <Button
          type={'primary'}
          key={'back'}
          onClick={() => router.push({ name: 'Workplace' })}
        >
          返回
        </Button>
      </div>
    </div>
  )
}
