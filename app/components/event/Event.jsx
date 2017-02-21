import React, { PropTypes, Component } from 'react';
import { firebase } from 'react-redux-firebase';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Event extends Component {
  static propTypes = {
    event: PropTypes.object,
    id: PropTypes.string,
  }

  render() {
    const { firebase, event, id } = this.props

    const deleteEvent = (e) => {
      firebase.remove(`/events/${id}`)
    }

    return(
      <Card>
        <CardTitle>{event.title}</CardTitle>
        <br/>
        <CardText>
          {event.host}<br/>
          {event.date}<br/>
          {event.time}<br/>
          {event.menu}<br/>
        </CardText>
        <CardActions>
          <FlatButton onClick={deleteEvent}>Delete</FlatButton>
        </CardActions>
      </Card>
    )
  }
}

export default firebase()(Event)
