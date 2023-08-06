import React from 'react'
import Form from '../components/Form'
import { signIn } from 'next-auth/react'
const signin = () => {
  const onSubmit = (email, password) => {
    signIn('credentials', {
      callbackUrl: '/quiz',
      email,
       password
    })
  }

  return (
    <>
      <Form signin={true} onFormSubmit={onSubmit} />
    </>
  )
}

export default signin
