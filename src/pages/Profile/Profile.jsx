import {
  Container,
  Row,
  Col
} from 'reactstrap'

const Profile = () => {
  return (
    <Container>
      <Row style={{ border: 'solid 1px', height: '500px' }}>
        <Col xs="4" style={{ border: 'solid 1px' }}>
          Columna
        </Col>
        <Col xs="8" style={{ border: 'solid 1px' }}>
          Columna
        </Col>
      </Row>
    </Container>
  )
}

export default Profile

