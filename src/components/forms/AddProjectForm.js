// Catherine will add functionality and styles
import React, { useState} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { postProject, saveEditProject } from '../../redux/actions'
import style from "styled-components";

const AddEditContainer = style.div`
  display: flex;
  height: 100%;
`;

const Form = style.div`
	width: 100%;
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

const AddProjectForm = props => {

	const [project, setProject] = useState({
    project_id: 'project_id',
    title: '',
    subject: '',
    favorite: '',
    description: '',
    imgurl: ''
	});
	
	const handleChanges = event => {
		setProject({ ...project, [event.target.name]: event.target.value })
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
        <FormTitle>{props.editProjectStart ? "Edit" : "Add"} Project</FormTitle>
        <FormContainer
          onSubmit={props.editProjectStart ? editForm : submitForm}>
          <FormInput
            required
            project_id="project_id"
            type="text"
            name="title"
            value={project.title}
            placeholder="Project Name"
            onChange={handleChanges}
            id="title"
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
            onChange={handleChanges}
            id="subject">
            <option value={"computer_education"}>Computer Education</option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            <option value="language">Languages</option>
            <option value="literature">Literature</option>
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
            value={project.imageurl}
            placeholder="Insert an Image URL"
            onChange={handleChanges}
            id="imageurl"
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
