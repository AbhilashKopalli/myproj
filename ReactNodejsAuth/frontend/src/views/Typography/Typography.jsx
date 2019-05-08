import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import Button from "@material-ui/core/Button/";
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import { toast } from 'react-toastify';
import Loader from "react-loader-spinner";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
// import Heat from "../heat.js";
// import Pacman from 'pacman-react';
// import Game from 'react-dinosaur-game';

const values = [
  ["0", "Error", "There was an error in reading the file. Kindly retry."],
  ["1", "Ramnit", "W32/  Ramnit  .N  is  distributed  in  infected  EXE,  DLL  and  HTML  files;  it  can  also  be  distributed via removable drives.Once  active,  the  virus  infects  EXE,  DLL  and  HTML  files  found  on  the  computer. It  will  also  drop  a  malicious  file  that  attempts  to  connect  to  and  download  other  files  from  a  remote  server."],
  ["2", "Lollipop", "The Lollipop.exe file is a software component of Lollipop by Lollipop Network, S.L. \"Lollipop.exe\"  ,identified in Microsoft  '  s Threat Encyclopedia as \"Adware : Win32/Lollipop\" and  \ by Symantec as \" Trojan.Gen.2\", is adware by Lollipop Network"],
  ["3", "Kelihos_ver3", "Kelihos  malware  is  often  dropped  and  installed  as  the  payload  of  other  malware,  such  as  trojan-downloaders.  Some  variants  are  also  distributed  via  links  to  malicious  websites  that  are   circulated  through  the  Facebook  social  network."],
  ["4", "Vundo", "The adware is normally downloaded by users from the websites  ; these malicious sites are normally promoted by spam emails. The Vundo family is often distributed as DLL files. It is known to be bundled with adware and/or spyware programs."],
  ["5", "Simbda", "Backdoor  :W32/Simda was first seen in 2009, and has since rapidly expanded into a large family of malware with a wide range of capabilities  . Early variants focused primarily on stealing passwords and other data from infected machines. In 2013, Simda was reportedly found being used as a banking trojan (primarily targeting banks in Russia and Europe)"],
  ["6", "Tracur", "Win32/Tracur is a family of trojans that can redirect your web searches. They do this to earn revenue for the malware authors via online advertisement fraud. The trojans hijack search result links from the few search engines, and redirect you to a different webpage"],
  ["7", "Kelihos_ver1", "The Kelihos botnet, also known as Hlux, is a botnet mainly involved in spamming and the theft of bitcoins"],
  ["8", "Obfuscator.ACY", "This threat has been obfuscated, which means it has tried to hide its purpose so your security software doesn't detect it.The malware that lies underneath this obfuscation can have almost any purpose."],
  ["9", "Gatak", "This trojan gathers information about your PC and sends it to a hacker.It can arrive on your PC as part of a key generator application, or by appearing to be an update for a legitimate application."]
];
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
      loading: false,
      result: false,
      resultValue: 0
    }
    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  onClick = (e) => {
    e.preventDefault();
    const files = this.state.file
    if (files == null) {
      toast.error("Please upload a file.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      return;
    }
    const formData = new FormData()
    formData.append('file', files)
    this.setState({ loading: true })
    fetch('/upload', {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(te => JSON.parse(te))
      .then(t => {
        console.log(t);
        this.setState({ loading: false, resultValue: t.file, result: true })
        toast.success("This file belongs to Malware Class: " + t.file, {
          position: "bottom-right",
          autoClose: 10000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      })
      .catch(() => {
        this.setState({ loading: false, resultValue: 0, result: true })
        toast.error("There was an error in running the file. Recheck and try again.", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      })
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] })
  }
  render() {
    const { classes } = this.props;
    return (
      this.state.result == true ?
        <div>
          <GridContainer style={{justifyContent: "center", alignItems: "center", paddingTop: "5%"}}>
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <CardHeader color="primary">
                {console.log(this.state.resultValue)}
                  {console.log(values[this.state.resultValue])}
                  <h4 className={classes.cardTitleWhite}>File Class: {values[this.state.resultValue][1]}</h4>
                </CardHeader>
                <CardBody style={{fontSize: 'initial', fontStyle: 'italic'}}>
                  {values[this.state.resultValue][2]}
                </CardBody>
                <CardFooter style={{justifyContent: "flex-end"}}>
                  <Button variant="contained"  onClick={() => this.setState({result: false})}> Upload another file </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>

        :
        this.state.loading === true ? <Loader type="ThreeDots" color="#0000FF" height={80} width={80} style="loaderStyle" /> :
          <Card style={{ alignItems: 'center', paddingTop: '10%' }}>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>File Upload</h4>
              <p className={classes.cardCategoryWhite}>
                <form onSubmit={this.onClick}>
                  <input type='file' id='multi' onChange={this.onChange} />
                  <Button variant="contained"  type="Submit"> Click to Upload </Button>
                </form>
              </p>
            </CardHeader>
          </Card>
    )
  }
}


export default withStyles(style)(TypographyPage);