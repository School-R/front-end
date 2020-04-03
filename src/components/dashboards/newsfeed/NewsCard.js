/* Updating an Issue:
Add a route at the path /update-issue/:id
Create a component with a form to update the chosen issue
Add a button in the issue component that routes you to your new route with the issues' id as the URL param
1. The form should make a PUT request to the server when submitted
2. When the call comes back successfully, reset your form state and route the user to /issues where they will see the updated issue in the list
3. Pre-populate with all of the data - You usually need a PUT request to update a form
4. Click on update button
    - history.push to update form with :id of the item
    - update form will take in the item list as id
    - in the update form we find the item clicked from the list via the id param
    - populate the form with that item's data.
Tasks:
  - Add a Route for the UpdateForm component
  - in Item.js add a click handler for the update button
  - in the handler function navigate the user to the updateForm with the id of that item in the params.
*/
import React, { useState } from 'react'
import UpdateProject from "../../forms/UpdateProject"
import StarRating from "./StarRating";
import { axiosWithAuth } from "../../../utils/axiosWithAuth"

// ### REACTSTRAP ###
import { Card, CardImg, CardTitle, CardBody, Button, CardText, CardFooter } from 'reactstrap'

const NewsCard = ({ imgurl, title, subject, description, id }) => {

  const [editFlip, setEditFlip] = useState(false); // local state
	const [newEditProject, setNewEditProject] = useState({}); // local state

  // Cat will add functionality code here
  // grab project by id here '/projects/:id' GET BY ID PROJECT TO POPULATE THE ORIGINAL POST
  const handleEditClick = () => {
		setEditFlip(true); // flip the card over so that you can see the form
		axiosWithAuth()
			.get(`/projects/${id}`)
			.then(res => 
				setNewEditProject(res.data))
			.catch(err => console.log('error getting project info', err))
			 // we are changing global to local so that local can manipulate data
  }
	
  // local state is going to manipulate the global state.

  return (
    <section>
      {editFlip === true ? (
        <Card className="projectsCard" id="flipper">
          <UpdateProject
            setEditFlip={setEditFlip}
            newEditProject={newEditProject}
            setNewEditProject={setNewEditProject}
          />
        </Card>
      ) : (
        <Card className="projectsCard">
          <div className="news-card-img-div">
            <CardImg
              src={imgurl}
              alt="information on subject"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>{subject}</CardText>
            <CardText>{description}</CardText>
            <StarRating totalStars={5} />
          </CardBody>

          <CardFooter>
            <Button
              outline
              className="edit-button"
              color="warning"
              style={{ color: "#fff" }}
              onClick={handleEditClick}
              // `/projects/${projects.id}`
            >
              Edit
            </Button>
            <Button outline className="delete-button" color="danger">
              Delete
            </Button>
          </CardFooter>
        </Card>
      )}
    </section>
  );
};

export default NewsCard
