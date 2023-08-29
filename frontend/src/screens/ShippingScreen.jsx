import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer';

export const ShippingScreen = () => {
    const [address, setAddress] = useState('');
    const [city, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

  return (
    <div>ShippingScreen</div>
  )
}
export default ShippingScreen
