import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import Button from "@material-ui/core/Button/";
import CircularProgress from '@material-ui/core/CircularProgress';
import { toast } from 'react-toastify';
// import Heat from "../heat.js";
// import Pacman from 'pacman-react';
// import Game from 'react-dinosaur-game';

const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  }
};

class TypographyPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      loading: false
    }
    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  onClick = (e) => {
    e.preventDefault();
    const files = this.state.file
    const formData = new FormData()
    formData.append('file', files)
    this.setState({ loading: true })
    fetch('/upload', {
      method: 'POST',
      body: formData
    }).then( res => res.json())
    .then(te => JSON.parse(te))
      .then(t => {
        console.log(t);
        toast.error(t.file, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      })
      .then(() => {
        this.setState({ loading: false })
      })

  }
  onChange(e) {
    this.setState({ file: e.target.files[0] })
  }
  render() {
    const { classes } = this.props;
    return (
      this.state.loading === true ? <CircularProgress size='40' color='primary' /> :
        <Card style={{ alignItems: 'center', paddingTop: '10%' }}>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>File Upload</h4>
            <p className={classes.cardCategoryWhite}>
              <form onSubmit={this.onClick}>
                <input type='file' id='multi' onChange={this.onChange} />
                <Button type="Submit"> Click to Upload </Button>
              </form>
            </p>
        </CardHeader>
        </Card>
    )
  }
}


export default withStyles(style)(TypographyPage);