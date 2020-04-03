import React, { useState } from 'react'
import MainNav from '../navs/MainNav'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions'
import { v4 as uuid } from 'uuid'
import style from 'styled-components'
const LogInContainer = style.div`
  display: flex;
	height: 500px;
	margin-top: 2%;
`
const Form = style.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

const FormContainer = style.form`
	width: 100%
	padding: auto;
	overflow: auto;
	flex: 1;
	margin-bottom: 80px;
	border: 5px solid silver;
`

const FormTitle = style.h1`
	font-size: 30px;
	font-weight: 900;
  color: #363131;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-directions: column;
`

const Label = style.label`
	font-size: 15px;
	font-weight: 600;
	color: #8f8d8d;
	margin-top: 10px;
`

const Button = style.button`
	text-shadow: -1px 0 #555, 0 1px #555, 1px 0 #555, 0 -1px #555;
	background-color: #FCCB3D;
	color: #fff;
	padding: 10px;
	width: 98%;
	border: none;
	border-radius: 4px;
	font-size: 14px;
	font-weight: bold;
	margin-top: 35px;
	cursor: pointer;
	margin-bottom: 10px;
	&:disabled {
      opacity: .5;
    }
    &:hover {
      background-color: #FFDB48;
    }
`

const FormInput = style.input`
  border: 1px solid #a9a9a9;
  padding: 10px;
  width: 98%;
  border-radius: 3px;
  border: solid 1px #e2e0e0;
  background-color: #f3f3f3;
	box-sizing: border-box;
	margin-top: 10px;
	
`

const Login = props => {
	const dispatch = useDispatch()
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
		isParent:false,
		token: uuid()
	})

	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(login(credentials, props))
	}
	return (
		<section>
			<MainNav />
			<LogInContainer>
				<Form onSubmit={handleSubmit}>
					<FormContainer>
						<FormTitle>Log In</FormTitle>
						<Label htmlFor='email'>Email</Label>
						<FormInput
							required
							type='email'
							name='email'
							value={credentials.email}
							placeholder='Email'
							onChange={handleChange}
						/>
						<Label htmlFor='password'>Password</Label>
						<FormInput
							required
							type='password'
							name='password'
							value={credentials.password}
							placeholder='Password'
							onChange={handleChange}
						/>
						<br />
						<br />
						<span>
							<Label>
								Parent
								<br />
								<input type='checkbox' onChange={e => setCredentials({ ...credentials, isParent: true })} />
							</Label>
							<br />
						</span>
						<Button>Log In</Button>
					</FormContainer>
				</Form>
			</LogInContainer>
		</section>
	)
}

export default Login
