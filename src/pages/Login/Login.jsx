import React, { useState } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  FormGroup,
  Button,
  Label,
  Input,
} from 'reactstrap'
import { auth } from '../../services/index.js'



const Login = () => {

  const [ email, setEmail ] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  
  const handleForm = async (e) => {
    try {
      e.preventDefault()
      const body = { email, password }
      const response = await auth.login(body)
      const token = response.data.payload
      console.log(token)
    } catch (error) {
      setError(error.message)
      setTimeout(() => {
        setError(null)
      }, 15000)
    }
  }
  

  return (
    <Container>
      <Row style={{ padding: '10% 0' }}>
        <Col xs={{ size: "4", offset: "4" }}>
          <Card style={{ padding: '5% 15%' }}>
            <h3 style={{ textAlign: 'center', margin: '15% 0' }}>
              Instababy
            </h3>
            <Form onSubmit={handleForm}>
              <FormGroup>
                <Label for="exampleEmail" hidden>Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email"
                  onChange={(e) => {
                    setError(null)
                    setEmail(e.target.value)
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword" hidden>Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Password"
                  onChange={(e) => {
                    setError(null)
                    setPassword(e.target.value)
                  }}
                />
              </FormGroup>
              <Button
                type="submit"
                color="primary"
                style={{ width: '100%', fontWeight: 700 }}
              >
                Log In
              </Button>
            </Form>
          </Card>
          <Card  style={{ textAlign: 'center', margin: '5% 0', padding: '5%' }}>
            Dont have an account? Sign up
          </Card>
          {
            error
              ? (
                <Card  style={{ textAlign: 'center', margin: '5% 0', padding: '5%', color: 'red' }}>
                  { error }
                </Card>
              )
              : null
          }
        </Col>
      </Row>
    </Container>
  )
}

export default Login

