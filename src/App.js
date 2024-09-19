import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Home from "./pages/Home";
import CreatePoll from "./pages/CreatePoll";
import PollDetail from "./pages/PollDetail";
import Login from "./pages/Login";

const { Header, Content, Footer } = Layout;

const headerStyle = {
  display: "flex",
  alignItems: "center",
};

const items = [
  { key: 1, label: "Home" },
  { key: 2, label: "Leaderboard" },
  { key: 3, label: "New" },
];

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Router>
      <Layout className="layout">
        <Header style={headerStyle}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            // defaultSelectedKeys={[1]}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
        </Header>
        <Content
          style={{
            padding: "0 50px",
            margin: "16px 0",
          }}
        >
          <div
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          ></div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/create" element={<CreatePoll />} />
            <Route path="/poll/:id" element={<PollDetail />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Employee Polls ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
