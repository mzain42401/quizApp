import React from 'react'
import Form from '../components/Form'

const signup = () => {

  const onSubmit = async (email, password) => {
    const response = await fetch('/api/auth/hello', {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (response.ok) {
      alert("signuUp success fully")

    }
  }
  return (
    <>
      <Form signin={false} onFormSubmit={onSubmit} />
    </>
  )
}

export default signup
