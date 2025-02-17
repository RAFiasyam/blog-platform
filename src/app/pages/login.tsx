import { useRouter } from 'next/router'
import React, { FormEvent } from 'react'

export default function LoginPage() {
    const router = useRouter()

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'appilacation/json' },
            body: JSON.stringify({ email, password })
        })

        if (response.ok) {
            router.push('/home')
        } else {
            return { message: 'Error email/password not found!!!' }
        }

    }

    return (
        <div className='w-screen h-[600px]'>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' placeholder='Email...' required />
                <input type="password" name='password' placeholder='Password...' required />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
