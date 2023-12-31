import { Autobind, injectService, VueComponent } from 'vue3-oop'
import {
  Button,
  Checkbox,
  Form,
  FormItem,
  Input,
  InputPassword,
  Link,
  Space,
} from '@arco-design/web-vue'
import { FormService } from '@/common/service/form.service'
import { IconLock, IconUser } from '@arco-design/web-vue/es/icon'
import { UserService } from '@/auth/user.service'
import { useStorage } from '@vueuse/core'
import config from '@/config'

@Autobind()
export class LoginForm extends VueComponent {
  us = injectService(UserService)

  loginConf = useStorage(config.storageKey.loginConf, {
    username: '',
    password: '',
    rememberPassword: true,
  })

  fs = new FormService({
    model: this.loginConf.value.rememberPassword
      ? {
          username: this.loginConf.value.username,
          password: this.loginConf.value.password,
        }
      : { username: '', password: '' },
    rules: {
      username: [{ required: true, message: '用户名不能为空' }],
      password: [{ required: true, message: '密码不能为空' }],
    },
    onSubmitSuccess: async model => {
      await this.us.login(model)
      // 存储账号密码
      if (this.loginConf.value.rememberPassword) {
        this.loginConf.value.username = this.fs.model.username
        this.loginConf.value.password = this.fs.model.password
      } else {
        // 清空数据
        this.loginConf.value.username = ''
        this.loginConf.value.password = ''
      }
    },
  })

  render() {
    const { fs } = this
    return (
      <div class="w-[320px]">
        <div class="text-[24px] font-medium leading-8 text-[--color-text-1]">
          登录 Arco Design Pro
        </div>
        <div class="text-[16px] leading-6 text-[--color-text-3]">
          登录 Arco Design Pro
        </div>
        <div class="h-8 leading-8 text-[rgb(var(--red-6))]"></div>
        <Form {...fs.formProps} layout={'vertical'}>
          <FormItem field={fs.formItemNames.username} hideLabel>
            <Input
              v-model={fs.model.username}
              placeholder={'用户名'}
              v-slots={{ prefix: () => <IconUser /> }}
            ></Input>
          </FormItem>
          <FormItem field={fs.formItemNames.password} hideLabel>
            <InputPassword
              v-model={fs.model.password}
              // @ts-ignore
              placeholder={'密码'}
              allowClear
              v-slots={{ prefix: () => <IconLock /> }}
            ></InputPassword>
          </FormItem>
          <Space size={16} direction={'vertical'}>
            <div class={'flex justify-between'}>
              <Checkbox v-model={this.loginConf.value.rememberPassword}>
                记住密码
              </Checkbox>
              <Link>忘记密码</Link>
            </div>
            <Button
              type={'primary'}
              htmlType={'submit'}
              long
              loading={fs.loading}
            >
              登录
            </Button>
            <Button type={'text'} long class={'!text-[--color-text-3]'}>
              注册账号
            </Button>
          </Space>
        </Form>
      </div>
    )
  }
}
