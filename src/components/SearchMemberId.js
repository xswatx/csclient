import React, {Component} from 'react';
import {TextField, Button} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 120,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class SearchMemberId extends Component {
  state = {
    id: ''
  };

  handleChange = id => event => {
    this.setState({ [id]: event.target.value });
  };
    render() {
      const { classes } = this.props;
      return (
        <div >
          <form className={classes.container} noValidate autoComplete="off" onSubmit={function(e){
            e.preventDefault();
            this.props.onSubmit(e.target.id.value)
          }.bind(this)}>
              <TextField
                id="standard-name"
                label="회원 id"
                name='id'
                className={classes.textField}
                value={this.state.id}
                onChange={this.handleChange('id')}
                margin="normal"
              />
            <Button type="submit" variant="contained" color="primary" className={classes.button}>
                검색
              </Button>
            </form>
        </div>
      );
    }
  }

export default withStyles(styles)(SearchMemberId);