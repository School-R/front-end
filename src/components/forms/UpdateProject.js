// Catherine 
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editProject } from '../../redux/actions'

import style from 'styled-components'
import {
  FormGroup, 
  FormText,
  Input
} from 'reactstrap'

const AddEditContainer = style.div`
  display: flex;
	height: 100%;
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
	background-color: #FCCB3D;
	color: #fff;
	padding: 10px;
	width: 98%;
	border: none;
	border-radius: 4px;
	font-size: 14px;
	font-weight: bold;
	margin-top: 10px;
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


const UpdateProject = () => {
  const dispatch = useDispatch();

  const [newEditProject, setNewEditProject] = useState({
    id: "",
    title: "",
    subject: "",
    favorite: "five stars",
    description: "",
    imageurl: "",
  });

  const handleChanges = event => {
    setNewEditProject({ ...newEditProject, [event.target.name]: event.target.value });
  };

  const submitEditForm = (e) => {
    e.preventDefault()
    dispatch(editProject(newEditProject)) // will use useHistory hook later
  }
  
	return (
      <AddEditContainer>
        <Form>
          
        <FormContainer onSubmit={submitEditForm}>
        <FormTitle>Update Project</FormTitle>
          <FormInput
            required
            type="text"
            name="title"
            value={newEditProject.title}
            placeholder="Updated Project Name"
            onChange={handleChanges}
            id="title"
          />
          <FormGroup>
            <Label htmlFor='subject'>Updated Subjects</Label>
            <Input 
              required
              type='select'
              name='subject'
              value={newEditProject.subject}
              onChange={handleChanges}
            >
              <option disable>
                Choose an Updated Subject
              </option>
              <option value="computer_education">Computer Education</option>
              <option value="math">Math</option>
              <option value="science">Science</option>
              <option value="history">History</option>
              <option value="languages">Languages</option>
              <option value="literature">Literature</option>
            </Input>
          </FormGroup>
          <FormText
            required 
            type="text" 
            value="" 
            placeholder="Instructions & Notes" 
          />
          <FormInput
            required 
            type="url"
            name="imageurl"
            value={newEditProject.imageurl}
            placeholder='Insert an Image URL'
            onChange={handleChanges} 
            id="imageurl" 
          />
          <Button type='submit'>Submit</Button>
          </FormContainer>
        </Form>
      </AddEditContainer>
    );
  }


export default UpdateProject

