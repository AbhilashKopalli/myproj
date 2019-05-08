import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";

import iconsStyle from "../../assets/jss/material-dashboard-react/views/iconsStyle.jsx";

function Icons(props) {
  const { classes } = props;
  return (
<div style={{backgroundColor: "black",color: "white"}}>

<h3 style={{color: "white"}}> General Information about Malware can be found below: </h3>

<br/> <br /> 

<p>Malware analysis is the study or process of determining the functionality, origin and potential impact of a given malware sample such as a virus, worm, trojan horse, rootkit, or backdoor.[1] Malware or malicious software is any computer software intended to harm the host operating system or to steal sensitive data from users, organizations or companies. Malware may include software that gathers user information without permission.
</p>

<p>The method by which malware analysis is performed typically falls under one of two types:
<br />
<ul>
<li>Static malware analysis: Static or Code Analysis is usually performed by dissecting the different resources of the binary file without executing it and studying each component. The binary file can also be disassembled (or reverse engineered) using a disassembler such as IDA. The machine code can sometimes be translated into assembly code which can be read and understood by humans: the malware analyst can then make sense of the assembly instructions and have an image of what the program is supposed to perform. Some modern malware is authored using evasive techniques to defeat this type of analysis, for example by embedding syntactic code errors that will confuse disassemblers but that will still function during actual execution.</li>
<br /> <br />
<li>Dynamic malware analysis: Dynamic or Behavioral analysis is performed by observing the behavior of the malware while it is actually running on a host system. This form of analysis is often performed in a sandbox environment to prevent the malware from actually infecting production systems; many such sandboxes are virtual systems that can easily be rolled back to a clean state after the analysis is complete. The malware may also be debugged while running using a debugger such as GDB or WinDbg to watch the behavior and effects on the host system of the malware step by step while its instructions are being processed. Modern malware can exhibit a wide variety of evasive techniques designed to defeat dynamic analysis including testing for virtual environments or active debuggers, delaying execution of malicious payloads, or requiring some form of interactive user input.</li>
</ul>
</p>

<br/> <br />

<h4> What's the difference between Virus and Malware </h4>

<iframe width="1000" height="500" src="https://www.youtube.com/embed/fKxuKWsA_JI?autoplay=1">
</iframe>

<br/> <br /> <br/> <br />


<h4> Introduction to Malware Analysis- Part 1 </h4>

<iframe width="1000" height="500" src="https://www.youtube.com/embed/f-fMdnUW4X4">
</iframe>

<br/> <br /> <br/> <br />

<h4> Introduction to Malware Analysis- Part 2 </h4>

<iframe width="1000" height="500" src="https://www.youtube.com/embed/_Mz8Pu-4WVw">
</iframe>

</div>
  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
