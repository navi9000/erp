import { type FC } from "react"
import { Flex, Layout, Input, Button, Typography } from "antd"
import { useFetcher, Link } from "react-router"

const { Paragraph, Text } = Typography

const LoginPage: FC = () => {
  const { Form, state, data } = useFetcher()

  const pending = state !== "idle"

  return (
    <Layout style={{ minHeight: "inherit" }}>
      <Layout.Content style={{ minHeight: "inherit", padding: "12px" }}>
        <Flex vertical gap="small" style={{ minHeight: "inherit" }}>
          <Form
            method="post"
            autoComplete="off"
            style={{
              width: "100%",
              marginInline: "auto",
              marginTop: "auto",
              minWidth: "296px",
              maxWidth: "400px",
            }}
          >
            <Flex vertical gap="small">
              <Input name="username" placeholder="Введите имя" />
              {data?.errors?.username && (
                <Text type="danger">{data.errors.username}</Text>
              )}
              <Input
                name="password"
                type="password"
                placeholder="Введите пароль"
              />
              {data?.errors?.password && (
                <Text type="danger">{data.errors.password}</Text>
              )}
              <Button
                type="primary"
                htmlType="submit"
                disabled={pending}
                loading={pending}
              >
                Логин
              </Button>
            </Flex>
          </Form>
          <Paragraph style={{ marginBottom: "auto", marginInline: "auto" }}>
            Не зарегистрированы? <Link to="/register">Зарегистироваться</Link>
          </Paragraph>
        </Flex>
      </Layout.Content>
    </Layout>
  )
}

export default LoginPage
