import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from "../../assets/jss/material-dashboard-react/views/dashboardStyle";
// import FileViewer from 'react-file-viewer';

// const file = './malwaretypes.docx'
// const type = 'docx'


class Dashboard extends React.Component {
//   state = {
//     page_text: ""
//   };

//   onError(e) {
//     console.log('error in file-viewer', e)
//   }

//   componentWillMount(){
//     fetch('/malwaretypes.txt')
//     .then((r) => r.text())
//     .then(text  => {
//       console.log(text);
//       this.setState({page_text: text});
//     });
//   }


  render() {
    return (

        <div>
            {/* <FileViewer
            fileType={type}
            filePath={file}
            onError={this.onError}/> */}

            <h1>Types of Malware:</h1>
            <h3>Ramnit:</h3>
            <p>Virus:W32/Ramnit.N is distributed in infected EXE, DLL and HTML files; it can also be distributed via removable drives. Once active, the virus infects EXE, DLL and HTML files found on the computer. It will also drop a malicious file that attempts to connect to and download other files from a remote server. Before proceeding to infect other files on the machine, the malware first determines whether a previous instance of its process is already running by checking for its unique mutex . If the mutex is not present, the virus will spawn a new process (a copy of itself) . The dropped process will then spawn other hidden processes (either the default web browser process or svchost.exe). The infection routine is injected into these new processes via a hook on Windows Native System Services. Ramnit.N modifies EXE, DLL and HTML files by appending its own malicious code to the end of the file. When the infected file is run, it drops another malicious file to the same directory where it was executed. The dropped file will be named using the format, "[original_filename]mgr.exe". The dropped file might connect to and download other malicious files from a remote server.</p>

            {/* <div>{this.state.page_text}</div> */}
        </div>

    );
  }
}

export default withStyles(dashboardStyle)(Dashboard);
