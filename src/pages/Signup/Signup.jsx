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
import {
  Link
} from 'react-router-dom'
import { auth } from '../../services/index.js'



const Signup = () => {
  const [ email, setEmail ] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [birth_date, setBirthDate] = useState('')
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  
  const handleForm = async (e) => {
    try {
      e.preventDefault()
      const body = {
        email,
        password,
        birth_date,
        first_name,
        last_name,
      }
      const response = await auth.signup(body)
      console.log(response)
    } catch (error) {
      setError(error.response.data.error)
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
                <Label hidden>Email</Label>
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
                <Label hidden>Birth date</Label>
                <Input
                  type="date"
                  name="birth_date"
                  id="birth_date"
                  placeholder="Select your birth date"
                  onChange={(e) => {
                    setError(null)
                    setBirthDate(e.target.value)
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label hidden>First Name</Label>
                <Input
                  name="firs_name"
                  id="firs_name"
                  placeholder="Enter yout first name"
                  onChange={(e) => {
                    setError(null)
                    setFirstName(e.target.value)
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label hidden>Last name</Label>
                <Input
                  name="last_name"
                  id="last_name"
                  placeholder="Enter yout last name"
                  onChange={(e) => {
                    setError(null)
                    setLastName(e.target.value)
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label hidden>Password</Label>
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
                Sign up
              </Button>
            </Form>
          </Card>
          <Card  style={{ textAlign: 'center', margin: '5% 0', padding: '5%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            Have an account? <Link to="/login" style={{ marginLeft: '2%' }}> Log In </Link>
          </Card>
          {
            error &&
              <Card  style={{ textAlign: 'center', margin: '5% 0', padding: '5%', color: 'red' }}>
                { error }
              </Card>
          }
        </Col>
      </Row>
    </Container>
  )
}

export default Signup

