import { type FC } from "react"
import { Flex, Layout, Input, Button, Typography } from "antd"
import { Link, useFetcher } from "react-router"

const RegisterPage: FC = () => {
  const { Form, state, data } = useFetcher()

  const pending = state !== "idle"

  return (
    <Layout style={{ minHeight: "inherit" }}>
      <Layout.Content style={{ minHeight: "inherit" }}>
        <Flex vertical gap="small" style={{ minHeight: "inherit" }}>
          <Form
            method="post"
            autoComplete="off"
            style={{ width: "50%", marginInline: "auto", marginTop: "auto" }}
          >
            <Flex vertical gap="small">
              <Input name="username" placeholder="Введите имя" />
              {data?.errors?.username && <p>{data.errors.username}</p>}
              <Input
                name="password"
                type="password"
                placeholder="Введите пароль"
              />
              {data?.errors?.password && <p>{data.errors.password}</p>}
              <Button type="primary" htmlType="submit" disabled={pending}>
                Регистрация
              </Button>
            </Flex>
          </Form>
          <Typography.Paragraph
            style={{ marginBottom: "auto", marginInline: "auto" }}
          >
            Уже зарегистрированы? <Link to="/login">Вернуться</Link>
          </Typography.Paragraph>
        </Flex>
      </Layout.Content>
    </Layout>
  )
}

export default RegisterPage
