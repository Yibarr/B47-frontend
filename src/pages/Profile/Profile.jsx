import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import {
  NavBar
} from '../../components/index.js'

const Profile = () => {
  return (
    <React.Fragment>
      <NavBar/>
      <Container>
        <Row style={{ border: 'solid 1px' }}>
          <Col xs="4" style={{ border: 'solid 1px' }}>
            Columna
          </Col>
          <Col xs="8" style={{ border: 'solid 1px' }}>
            Columna
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Profile

