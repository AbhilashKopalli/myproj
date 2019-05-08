/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";

import Table from "../../components/Table/Table.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import SnackbarContent from "../../components/Snackbar/SnackbarContent.jsx";
import Snackbar from "../../components/Snackbar/Snackbar.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploads: [],
      error: false
    };
  }
  componentWillMount() {
    fetch('/uploadhistory', {
      method: 'GET',
      headers: {
        "Authorization": localStorage.getItem("jwtToken")
      }
    }).then(res => res.json())
      .then((e) => {
        var temp = [];
        e.forEach((a) => temp.push([a._id, a.name, a.date]))
        this.setState({
        uploads: temp,
        error: false
      })
    })
      .catch((e) => {
        this.setState({
          uploads: [],
          error: true
        })
      })
  }
  componentWillUnmount() {
    this.setState({ uploads: [], error: false })
  }
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Upload History</h4>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CardBody>
                {this.state.uploads.length === 0 ?
                  <h4>You don't have any uploads. Please upload a couple of files to show history. </h4>
                  : <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Filename", "Upload Date"]}
                  tableData={this.state.uploads}
                  />
                }
                
              </CardBody>
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(styles)(Notifications);
