import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'reactstrap'
// ### NewsCard ###
import NewsCard from './NewsCard'


// ###  NewsFeed Nav Component ###
import NewsFeedNav from './NewsFeedNav';

//REDUX Actions-> GetProjects
import { getProjects } from '../../../redux/actions'

const NewsFeed = () => {

  const dispatch = useDispatch();

  const projects = useSelector(state => state.projects)

  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])

  
  
  return (
    <Row>
      <section>
        <NewsFeedNav />
      </section>
      {projects.map((info, index) => (
        <Col lg="4" key={index}>
          <div>
            <NewsCard
              index={index}
              id={info.id}
              imgurl={info.imgurl}
              title={info.title}
              subject={info.subject}
              description={info.description}
            />
          </div>
        </Col>
      ))}
    </Row>
  );
}
export default NewsFeed
