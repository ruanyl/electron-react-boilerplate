import React from 'react'
import { MailOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'

import styles from './LoginForm.css'

interface FormValues {
  username: string
  password: string
}

export const LoginForm = () => {
  const onFinish = (values: FormValues) => {
    console.log('Success:', values)
  }

  return (
    <Form className={styles.loginForm} onFinish={onFinish as any}>
      <Form.Item name="username" rules={[{ required: true }]}>
        <Input placeholder="Email" suffix={<MailOutlined />} />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true }]}>
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form.Item>
    </Form>
  )
}
