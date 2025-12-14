import { Button, Card, Typography, Image, Layout, Flex } from "antd"
import { useFetcher, useLoaderData } from "react-router"
import type { FeedLoader } from "../api/feedLoader"

const { Text } = Typography

const FeedPage = () => {
  const { Form } = useFetcher()
  const { data, error } = useLoaderData<FeedLoader>()

  return (
    <Layout style={{ minHeight: "inherit" }}>
      <Layout.Header>
        <Flex justify="flex-end" align="center">
          <Form method="post">
            <Button htmlType="submit">Выйти</Button>
          </Form>
        </Flex>
      </Layout.Header>
      <Layout.Content style={{ height: "100%", padding: "20px" }}>
        {data ? (
          <Card
            style={{ width: "200px", marginInline: "auto", overflow: "hidden" }}
            cover={
              <Image
                src={data.avatar}
                height={200}
                width={200}
                preview={false}
              />
            }
          >
            <Card.Meta title={data.username} description={data.about} />
          </Card>
        ) : (
          <Text type="danger">{error}</Text>
        )}
      </Layout.Content>
    </Layout>
  )
}

export { FeedPage }
