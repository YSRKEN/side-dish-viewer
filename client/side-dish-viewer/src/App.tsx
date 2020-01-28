import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'App.css';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { useStore } from 'store/store';
import { ApplicationContext } from 'store/context';
import LogView from 'container/LogView';

const App: React.FC = () => {
  const store = useStore();

  useEffect(() => {
    store.dispatch({type: 'addLog', message: 'アプリを起動.'});
  }, []);

  const onSelectNavBar = (eventKey: string) => {
    store.dispatch({type: 'setViewMode', message: eventKey});
  };

  const getView = () => {
    switch (store.viewMode) {
      case 'log':
        return <LogView/>;
      default:
        return <></>;
    }
  }

  return (<ApplicationContext.Provider value={store}>
    <Container>
      <Row className="my-3">
        <Col>
          <h1 className="text-center">ビューアー</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav variant="tabs" defaultActiveKey="recent" onSelect={onSelectNavBar}>
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
      <Row className="my-3">
        <Col>
          {getView()}
        </Col>
      </Row>
    </Container>
  </ApplicationContext.Provider>
  );
}

export default App;
