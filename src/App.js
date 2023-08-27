import "./styles.css";

let Link = ({ src, title }) => <a href={src} children={title} />;
// import { Header } from "antd/lib/layout/layout";
import {
  Space,
  Container,
  Tag,
  PageHeader,
  Drawer,
  Row,
  Col,
  Form,
  Button,
  Input,
  Select,
} from "antd";

export default function App() {
  return (
    <div className="App">
      <PageHeader
        title={
          <Row>
            <Link> Link </Link>
            <img
              width="56"
              src="https://www.gov.spb.ru/static/2/files/logo.2cc00c1e.6826b6aa2472.svg"
            />
          </Row>
        }
        extra={"@Username"}
      />
      <div></div>
      <h2>Авторизация</h2>
      <Space>
        <Row>
          <Form id="authWeb">
            <Form.Item>
              <Input placeholder="Имя пользователя" />
            </Form.Item>
            <Form.Item>
              <Input type="password" placeholder="Пароль" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Домен" />
            </Form.Item>

            <Button type="submit">Далее</Button>
          </Form>
        </Row>
      </Space>
    </div>
  );
}
