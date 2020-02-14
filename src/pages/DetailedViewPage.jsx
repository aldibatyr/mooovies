import React from 'react'
import { useParams } from 'react-router-dom';
import './DetailedViewPage.scss';

const DetailedViewPage = (props) => {

  let {id} = useParams();
  return (
    <div className="detailed-view-page">
      this is detailed view for {id}
      selected movie is {props.selected.title}
    </div>
  )
}

export default DetailedViewPage;