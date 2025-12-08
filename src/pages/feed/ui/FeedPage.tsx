import { Button, Card, Typography, Image, Layout, Flex } from "antd"
import { useFetcher, useLoaderData } from "react-router"
import type { FeedLoader } from "../api/feedLoader"

const FeedPage = () => {
  const { Form } = useFetcher()
  const { data, error } = useLoaderData<FeedLoader>()

  return (
    <Layout>
      <Layout.Header>
        <Flex justify="flex-end" align="center">
          <Form method="post">
            <Button htmlType="submit">Выйти</Button>
          </Form>
        </Flex>
      </Layout.Header>
      <Layout.Content>
        {data ? (
          <Card>
            <Image src={data.avatar} />
            <Typography>{data.username}</Typography>
            <Typography>{data.about}</Typography>
          </Card>
        ) : (
          <Typography>{error}</Typography>
        )}
      </Layout.Content>
    </Layout>
  )
}

export { FeedPage }
