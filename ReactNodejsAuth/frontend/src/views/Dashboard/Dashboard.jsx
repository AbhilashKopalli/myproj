import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Table from "../../components/Table/Table.jsx";
import Tasks from "../../components/Tasks/Tasks.jsx";
import CustomTabs from "../../components/CustomTabs/CustomTabs.jsx";
import Danger from "../../components/Typography/Danger.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardIcon from "../../components/Card/CardIcon.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import knn_acc from "./Knn_accuracy.PNG";
import knn_con from "./Knn_confusion Matrix.PNG";
import knn_rec from "./Knn_recall.PNG";
import log_acc from "./log_accuracy.PNG";
import log_con from "./log_confusion.PNG";
import log_rec from "./log_recall.PNG";
import random_acc from "./RandomForest_confusion matrix.PNG";
import random_prec from "./RandomForest_precision.PNG";
import random_rec from "./RandomForest_recall.PNG"

import { bugs, website, server } from "../../variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../../variables/charts.jsx";

import dashboardStyle from "../../assets/jss/material-dashboard-react/views/dashboardStyle";




class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
 
 componentWillMount() {
<h2>Hi</h2>
}



  render() {
    const { classes } = this.props;
    return (
      <div style={{backgroundColor: "black", color: "white"}}>
         <GridContainer>

          <GridItem xs={20} sm={20} md={12}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Information About the Classes</h4>
                {/* <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
                </p> */}
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Class Name", "Class Description"]}
                  tableData={[
                    ["1", "Ramnit", "W32/  Ramnit  .N  is  distributed  in  infected  EXE,  DLL  and  HTML  files;  it  can  also  be  distributed via removable drives.Once  active,  the  virus  infects  EXE,  DLL  and  HTML  files  found  on  the  computer. It  will  also  drop  a  malicious  file  that  attempts  to  connect  to  and  download  other  files  from  a  remote  server."],
                    ["2", "Lollipop",  "The Lollipop.exe file is a software component of Lollipop by Lollipop Network, S.L. \"Lollipop.exe\"  ,identified in Microsoft  '  s Threat Encyclopedia as \"Adware : Win32/Lollipop\" and  \ by Symantec as \" Trojan.Gen.2\", is adware by Lollipop Network"],
                    ["3", "Kelihos_ver3", "Kelihos  malware  is  often  dropped  and  installed  as  the  payload  of  other  malware,  such  as  trojan-downloaders.  Some  variants  are  also  distributed  via  links  to  malicious  websites  that  are   circulated  through  the  Facebook  social  network."],
                    ["4", "Vundo",  "The adware is normally downloaded by users from the websites  ; these malicious sites are normally promoted by spam emails. The Vundo family is often distributed as DLL files. It is known to be bundled with adware and/or spyware programs."],
                    ["5", "Simbda",  "Backdoor  :W32/Simda was first seen in 2009, and has since rapidly expanded into a large family of malware with a wide range of capabilities  . Early variants focused primarily on stealing passwords and other data from infected machines. In 2013, Simda was reportedly found being used as a banking trojan (primarily targeting banks in Russia and Europe)"],
                    ["6", "Tracur", "Win32/Tracur is a family of trojans that can redirect your web searches. They do this to earn revenue for the malware authors via online advertisement fraud. The trojans hijack search result links from the few search engines, and redirect you to a different webpage"],
                    ["7", "Kelihos_ver1", "The Kelihos botnet, also known as Hlux, is a botnet mainly involved in spamming and the theft of bitcoins"],
                    ["8", "Obfuscator.ACY",  "This threat has been obfuscated, which means it has tried to hide its purpose so your security software doesn't detect it.The malware that lies underneath this obfuscation can have almost any purpose."],
                    ["9", "Gatak",  "This trojan gathers information about your PC and sends it to a hacker.It can arrive on your PC as part of a key generator application, or by appearing to be an update for a legitimate application."]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        
        
        
        
        <h4 style={{textAlign: "center"}}><u> KNN Model</u> </h4>
        <GridContainer>
          <GridItem xs={17} sm={17} md={6}>
          <Card>
            <h4 className={classes.cardTitle}> &emsp;&emsp;&emsp;&emsp;&emsp;KNN Model Accuracy</h4>
                <img  src={knn_acc}  />
              {/* <CardFooter chart> */}
                {/* <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div> */}
              {/* </CardFooter> */}
            </Card>
          </GridItem>
          <GridItem xs={15} sm={15} md={6}>
 <Card>
            <h4 className={classes.cardTitle}> &emsp;&emsp;&emsp;&emsp;&emsp;KNN Confusion Matrix</h4>
                <br /><img  src={knn_con}  />
              {/* <CardFooter chart> */}
                {/* <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div> */}
              {/* </CardFooter> */}
            </Card>
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={4}>
           <Card>
            <h4 className={classes.cardTitle}> &emsp;&emsp;&emsp;&emsp;&emsp;KNN Recall Matrix</h4>
                <img  src={knn_rec}  />
              <CardFooter chart>
                {/* <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div> */}
              {/* </CardFooter>
            </Card>
          </GridItem> */} 
        </GridContainer>
        <br />
    <h4 style={{textAlign: "center"}}><u> Logistic Regression Model</u> </h4>

        <GridContainer>
          <GridItem xs={17} sm={17} md={6}>
          <Card>
    <h4 className={classes.cardTitle}> &emsp;&emsp;&emsp;Logistic Regression Model Accuracy</h4>

                <img  src={log_acc}  />
              {/* <CardFooter chart> */}
                {/* <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div> */}
              {/* </CardFooter> */}
            </Card>
          </GridItem>
          <GridItem xs={15} sm={15} md={6}>
 <Card>
            <h4 className={classes.cardTitle}> &emsp;&emsp;&emsp;Logistic Regression Confusion Matrix</h4>
              <img  src={log_con}  />
              {/* <CardFooter chart> */}
                {/* <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div> */}
              {/* </CardFooter> */}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
           <Card>
            {/* <h4 className={classes.cardTitle}> &emsp;&emsp;&emsp;&emsp;Logistic Regression Recall Matrix</h4>
                <img  src={log_rec}  /> */}
              {/* <CardFooter chart> */}
                {/* <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div> */}
              {/* </CardFooter> */}
            </Card>
          </GridItem>
        </GridContainer>

      <h4 style={{textAlign: "center"}}><u> Random Forest Model</u> </h4>

                <GridContainer>

          <GridItem xs={17} sm={17} md={6}>
          <Card>
            <h4 className={classes.cardTitle}> &emsp;&emsp;&emsp;&emsp;Random Forest Model Accuracy</h4>
                <img  src={random_acc}  />
 
              {/* <CardFooter chart> */}
                {/* <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div> */}
              {/* </CardFooter> */}
            </Card>
          </GridItem>
          <GridItem xs={15} sm={15} md={6}>
 <Card>
            <h4 className={classes.cardTitle}> &emsp;&emsp;&emsp;&emsp;Random Forest Precision Matrix</h4>
                <img  src={random_prec}  />

              {/* <CardFooter chart> */}
                {/* <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div> */}
              {/* </CardFooter> */}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
           <Card>
            {/* <h4 className={classes.cardTitle}> &emsp;&emsp;&emsp;&emsp;Random Forest Recall Matrix</h4>
                <img  src={random_rec}  /> */}
              {/* <CardFooter chart> */}
                {/* <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div> */}
              {/* </CardFooter> */}
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
