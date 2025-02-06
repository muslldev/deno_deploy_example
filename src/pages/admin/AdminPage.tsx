import { Button, Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "../../shared/supabaseClient";
import TopicsList from "./components/TopicsList";
import { GithubOutlined } from "@ant-design/icons";

function AdminPage() {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      console.log(session);
      if (!session) {
        navigate("/login");
      }
    };
    checkSession();
  }, []);

  async function logout() {
    supabase.auth.signOut();
    navigate("/login");
  }

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider style={{ background: colorBgContainer }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              label: "nav 1",
            },
            {
              key: "2",
              label: "nav 2",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              width: "100%",
              height: "100%",
              padding: "15px",
              columnGap: "15px",
            }}
          >
            <Button
              type="text"
              icon={<GithubOutlined />}
              onClick={() => window.open("https://github.com/muslldev")}
            >
              Dev's GitHub
            </Button>

            <Button type="primary" danger onClick={() => logout()}>
              Выйти
            </Button>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <TopicsList />
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminPage;
