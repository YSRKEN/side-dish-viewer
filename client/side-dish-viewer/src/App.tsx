import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'App.css';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <Container>
      <Row className="my-3">
        <Col>
          <h1 className="text-center">ビューアー</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav variant="tabs" defaultActiveKey="recent">
            <Nav.Item>
              <Nav.Link eventKey="recent">新着</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="favorite">お気に入り</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="log">ログ</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
