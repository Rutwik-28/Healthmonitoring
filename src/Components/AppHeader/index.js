import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import LogoutButton from "../../LogOut";

function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Predefined comments
  const predefinedComments = [
    {
      id: 1,
      body: "John DOE : Hey Doc thanks for the last week session. I am feeling much better now",
    },
    { id: 2, body: "James Anderson: Hi I am suffering from soar throat." },
    {
      id: 3,
      body: "Sophia Clark: Hi Doc thanks for the Lifestyle changes. I am feeling much energtic now.",
    },
  ];

  // Predefined orders
  const predefinedOrders = [
    { id: 1, title: "John DOE, James Anderson, Sophia Clark messaged you." },
    { id: 2, title: "Please dont forget you 2pm meeting with Mr Anderson" },
    { id: 3, title: "Newsletter for this week is Due for release," },
  ];

  useEffect(() => {
    // Set the comments with the predefined comments
    setComments(predefinedComments);

    // Set the orders with the predefined orders
    setOrders(predefinedOrders);
  }, []);

  return (
    <div className="AppHeader">
      <Image
        width={40}
        // add Image
        src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Star_of_life2.svg"
      ></Image>

      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge>
        <Badge>
          <LogoutButton />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text>
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
}
export default AppHeader;
