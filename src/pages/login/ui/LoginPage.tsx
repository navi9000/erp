import { type FC } from "react"
import { Flex, Layout, Input, Button, Typography } from "antd"
import { useFetcher, Link } from "react-router"

const LoginPage: FC = () => {
  const { Form, state, data } = useFetcher()

  const pending = state !== "idle"

  return (
    <Layout>
      <Layout.Content>
        <Form method="post" autoComplete="off">
          <Flex vertical gap="small">
            <Input name="username" />
            {data?.errors?.username && <p>{data.errors.username}</p>}
            <Input name="password" />
            {data?.errors?.password && <p>{data.errors.password}</p>}
            <Button htmlType="submit" disabled={pending}>
              Логин
            </Button>
          </Flex>
        </Form>
        <Typography>
          Не зарегистрированы? <Link to="/register">Зарегистироваться</Link>
        </Typography>
      </Layout.Content>
    </Layout>
  )
}

export default LoginPage
