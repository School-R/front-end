// Catherine will add functionality and styles
import React, { useState } from 'react'
import { /* useSelector, */ useDispatch } from 'react-redux'
import { postProject, getProjects } from '../../redux/actions'
import {useHistory, useParams} from 'react-router-dom'
import style from 'styled-components'
import {
  FormGroup,
  Input
} from "reactstrap"

const AddContainer = style.div`
  display: flex;
  height: 100%;
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
	background-color: #FCCB3D;
	color: #fff;
	padding: 10px;
	width: 100%;
	border: none;
	border-radius: 4px;
	font-size: 14px;
	font-weight: bold;
	margin-top: 10px;
	cursor: pointer;
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
  width: 100%;
  border-radius: 3px;
  border: solid 1px #e2e0e0;
  background-color: #f3f3f3;
  box-sizing: border-box;
  margin-top: 10px;
`

const AddProjectForm = () => {

  /* const project = useSelector(state => state.projects) */

  const dispatch = useDispatch()
	const history = useHistory()
	const { id } = useParams()
	
	const [newProject, setNewProject] = useState({
    id:'',
    title: '',
    subject: '',
    favorite: 'five stars',
    description: '',
    imgurl: ''
	});
	
	const handleChanges = event => {
		setNewProject({ ...newProject, [event.target.name]: event.target.value })
	}

  // Jesus might need them later 
	/* const handleNumbers = event => {
		setProject({ ...project, [event.target.name]: parseInt(event.target.value) })
		console.log(event.target.name)
	}

	const handleClick = event => {
		setProject({ ...project, [event.target.name]: event.target.checked ? 1 : 0 })
		console.log(event.target.name)
	} */

  // postProject
	const submitForm = (e) => {
    e.preventDefault()
		dispatch(postProject(newProject))
		dispatch(getProjects())
		history.push(`/parents-dash/${id}/newsfeed`) // will use useHistory hook later
	}

	// const editForm = event => {
	// 	event.preventDefault()
	// 	props.saveEditProperty(localStorage.getItem('token'), project, props.history)
  // }

	return (
		<AddContainer>
			<Form>
				<FormTitle>Add New Project</FormTitle>
				<FormContainer onSubmit={submitForm}>
					<FormInput
						required
						type='text'
						name='title'
						value={newProject.title}
						placeholder='Project Name'
						onChange={handleChanges}
						id='title'
					/>
					<br />
					<FormGroup>
						<Label htmlFor='subject'>Subjects</Label>
						<br />
						<Input
							required
							type='select'
              name='subject'
              value={newProject.subject}
              onChange={handleChanges}>
							<option disabled>
								Choose A Subject
							</option>
							<option value="computer_education">Computer Education</option>
              <option value="science">Science</option>
              <option value="math">Math</option>
              <option value="history">History</option>
              <option value="languages">Languages</option>
              <option value="literature">Literature</option>
						</Input>
					</FormGroup>
					<Label htmlFor='description'>Description</Label>
					<FormInput
						required
						type='text'
						name='description'
						value={newProject.description}
						placeholder='Instructions & Notes'
						onChange={handleChanges}
					/>
					<FormInput
						required
						type='url'
						name='imgurl'
						value={newProject.imgurl}
						placeholder='Insert an Image URL'
						onChange={handleChanges}
						id='imgurl'
					/>
						<Button type='submit'>Submit</Button>
				</FormContainer>
			</Form>
		</AddContainer>
	)
}

export default AddProjectForm
