// Catherine will add functionality and styles
import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { withRouter, useParams } from 'react-router-dom'
import { postProject, saveEditProject } from '../../redux/actions'
// import { AvForm, AvField } from 'availity-reactstrap-validation'
// import { Button } from 'reactstrap'
import style from "styled-components";

const AddEditContainer = style.div`
  display: flex;
  height: 100%;
`;

const Form = style.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const FormContainer = style.form`
	width: 100%
	padding: auto;
	overflow: auto;
	flex: 1;
	margin-botton: 80px;
`;

const FormTitle = style.h1`
	font-size: 30px;
	font-weight: 900;
  color: #363131;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-directions: column;
`;

const Label = style.label`
	font-size: 15px;
	font-weight: 600;
	color: #8f8d8d;
	margin-top: 10px;
`;

const Button = style.button`
	background-color: #F99C1B;
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
      background-color: #FA7027;
    }
`;

const FormInput = style.input`
  border: 1px solid #a9a9a9;
  padding: 10px;
  width: 100%;
  border-radius: 3px;
  border: solid 1px #e2e0e0;
  background-color: #f3f3f3;
  box-sizing: border-box;
  margin-top: 10px;
`;

// const FormRight = style.div`
//   width: 66.66%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   background-color: #2281bf;
// `;

const AddProjectForm = props => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const [project, setProject] = useState({
    project_id: 'project_id',
    title: '',
    subject: '',
    favorite: '',
    description: '',
    imgurl: ''
	});

	// useEffect(() => {
	// 	dispatch(setProject())
	// }, [dispatch])
	
	const handleChanges = event => {
		setProject({ ...project, [event.target.name]: event.target.value })
		console.log(event.target.name)
	}

	const handleNumbers = event => {
		setProject({ ...project, [event.target.name]: parseInt(event.target.value) })
		console.log(event.target.name)
	}

	const handleClick = event => {
		setProject({ ...project, [ event.target.name]: (event.target.checked ? 1 : 0) })
		console.log(event.target.name)
	}

	const submitForm = event => {
		event.preventDefault();
		props.postProject(localStorage.getItem("token"), project, props.history)
	}

	const editForm = event => {
		event.preventDefault();
		props.saveEditProperty(localStorage.getItem("token"), project, props.history)
	}

	return (
    <AddEditContainer>
      <Form>
        <FormTitle>
          {props.editProjectStart ? "Edit" : "Add"} Project
        </FormTitle>
        <br />
        <FormContainer
          onSubmit={props.editProjectStart ? editForm : submitForm}>
          {/* <Label htmlFor="title">Title</Label> */}
          <FormInput
            required
            project_id="project_id"
            type="text"
            name="title"
            value={project.title}
            placeholder="Project Name"
            onChange={handleChanges}
          />
          <br />
          <Label htmlFor="subject">Subject</Label>
          <br />
          <select
            required
            type="dropdown"
            name="subject"
            value={project.subject}
            placeholder="Choose a Subject"
            onChange={handleChanges}>
            <option value="">Computer Education</option>
            <option value="">Math</option>
            <option value="">Science</option>
            <option value="">History</option>
            <option value="">Languages</option>
            <option value="">Literature</option>
          </select>
          <br />
          <br />
          <Label htmlFor="description">Description</Label>
          <FormInput
            required
            type="text"
            name="description"
            value={project.description}
            placeholder="Instructions & Notes"
            onChange={handleChanges}
          />
          <FormInput
            required
            type="url"
            name="imageurl"
            id="imageurl"
            value={project.imageurl}
            placeholder="Insert an Image URL"
            onChange={handleChanges}
          />
          {props.postProjectStart || props.saveEditProjectStart ? (
            <Button type="submit" disabled>
              Submitting...
            </Button>
          ) : (
            <Button type="submit">Submit</Button>
          )}
          {(props.postProjectError || props.saveEditProjectError) && (
            <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
              Well, looks like the Project was Not saved
            </p>
          )}
        </FormContainer>
      </Form>
    </AddEditContainer>
  );
}

const mapStateToProps = state => ({
  projects: state.projects,
  postProjectError: state.postProjectError,
  postProjectStart: state.postProjectStart,
  editProjectStart: state.editProjectStart,
  saveEditProjectStart: state.saveEditProjectStart,
  saveEditProjectError: state.saveEditProjectError,
  currentProject: state.currentProject,
});

export default connect(mapStateToProps, {postProject, saveEditProject })(
	withRouter(AddProjectForm))
