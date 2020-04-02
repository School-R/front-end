import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

// ### REACTSTRAP ###
import { 
  CardColumns, 
  Card, 
  CardBody, 
  CardTitle, 
  CardSubtitle, 
  CardImg, 
  CardText, 
  Button } from 'reactstrap'


// ###  NewsFeed Nav Component ###
import NewsFeedNav from './NewsFeedNav';

//REDUX Actions-> GetProjects
import { getProjects } from '../../redux/actions'

const NewsFeed = () => {

  const dispatch = useDispatch();

  const projects = useSelector(state => state.projects)

  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])
  
  return (
    <>
    
    <NewsFeedNav/>
    

    <section id="page-wrap">
      <div id='projects'>
      {projects.map(info =>
        // <div id='pCard'>
        //   <div>
        //     <div key={info.id}></div>
        //     <h2>{info.title}</h2>
        //     <p> {info.subject}</p>
        //     <p>Rating:{info.favorite}</p>
        //     <p>Description:{info.description}</p>
        //   </div>
        // </div>
      <div id='projectsCard'>
        <div key={info.id}>
        <img src={info.imgurl} alt="imageobject" />
        <div id='cardBody'>
          
          <h4>{info.title}</h4>
          <h6>{info.subject}</h6>
          <div id='cardDes'>
            <p>{info.description}</p>
          </div>
        </div>
        <div id='cardBtns'>
          <Button color='secondary'>Edit</Button>
          <Button color='danger'>Delete</Button>
          </div>
      </div>
      </div>
        )}
      </div>
    </section>

    </>
  )
}
export default NewsFeed
