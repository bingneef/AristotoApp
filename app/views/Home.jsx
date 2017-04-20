import React, { Component } from 'react';
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Home extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Awesomeness by Creative Developers</h1>
        <p>Test something</p>
        <RaisedButton label='default' primary={true} />

        <Card>
          <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar="https://placehold.it/250x250"
          />
          <CardTitle title="Card title" subtitle="Card subtitle" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return { }
};

export default connect(mapStateToProps)(Home);
