import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GameCard from './GameCard'
import { Row, Col } from 'reactstrap'

const List = () => {
  const [language, setLanguage] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://ccdb.hemiola.com/characters/radicals/85?filter=gb&fields=kDefinition,kMandarin,string"
      )
      .then(res => {
        console.log(res.data);
        setLanguage(res.data);
      })
      .catch(err => console.log("There was an error fetching data", err));
  }, [])

  return (
    <Row>
      {language.map((info, index) => (
        <Col lg="3" key={index}>
          <div>
            <GameCard
              word={info.kMandarin}
              def={info.kDefinition}
              string={info.string}
            />
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default List

//https://cors-anywhere.herokuapp.com/