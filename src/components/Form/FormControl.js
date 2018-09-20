import React from 'react'
import { func, string, element, node, oneOfType } from 'prop-types'
import { Form } from 'semantic-ui-react'
import styled from 'styled-components'
import { Row, Col } from '../Grid'

const Label = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  font-size: 13px;
  padding: 5px;
  
  @media (min-width: 40.0rem) {
    justify-content: flex-end;
    margin-right: 20px;
    margin-top: 5px;
  }
`

export const FormControl = ({ label, children }) => (
  <Form.Field>
    <Row>
      <Col>
        <Label>
          <label>{label}</label>
        </Label>
      </Col>
      <Col>
        {children}
      </Col>
    </Row>
  </Form.Field>
)

FormControl.propTypes = {
  label: string,
  children: oneOfType([
    func,
    element,
    node,
  ])
}

FormControl.defaultProps = {
  label: '',
  children: null
}

