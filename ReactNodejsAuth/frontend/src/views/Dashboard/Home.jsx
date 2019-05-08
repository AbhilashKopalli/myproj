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

        <div style ={{color: "white", backgroundColor: "black"}}>
            {/* <FileViewer
            fileType={type}
            filePath={file}
            onError={this.onError}/> */}

            <h1><u>Types of Malware</u>:</h1>
            <br/><br/>
            <h3 style ={{color: "white"}}>1)<u>Ramnit</u>:</h3>
            <br/>
            <p>Virus:W32/Ramnit.N is distributed in infected EXE, DLL and HTML files; it can also be distributed via removable drives. Once active, the virus infects EXE, DLL and HTML files found on the computer. It will also drop a malicious file that attempts to connect to and download other files from a remote server. Before proceeding to infect other files on the machine, the malware first determines whether a previous instance of its process is already running by checking for its unique mutex . If the mutex is not present, the virus will spawn a new process (a copy of itself) . The dropped process will then spawn other hidden processes (either the default web browser process or svchost.exe). The infection routine is injected into these new processes via a hook on Windows Native System Services. Ramnit.N modifies EXE, DLL and HTML files by appending its own malicious code to the end of the file. When the infected file is run, it drops another malicious file to the same directory where it was executed. The dropped file will be named using the format, "[original_filename]mgr.exe". The dropped file might connect to and download other malicious files from a remote server.</p>
            <br/><br/>
            <h3 style ={{color: "white"}}>2)<u>Kelihos</u>:</h3>
            <br/>
            <p>Kelihos malware is often dropped and installed as the payload of other malware, such as trojan-downloaders. Some variants are also distributed via links to malicious websites that are circulated through the Facebook social network. Once the malware has been installed on a system, it typically tries to contact a remote server and download its other components, including a backdoor that gives remote attackers further control over the affected system. <br/> <br/>
The backdoor also connects the system to a botnet under the attacker's control. The botnet (referred to as the Kelihos or Hlux botnet) is built on a peer-to-peer or P2P infrastructure, so commands are relayed through other similarly infected machines from the attacker's command and control server (a structure that makes this kind of botnet much harder to detect and shut down). Once included in the botnet, the affected system may be instructed to download other malware, or be used to send spam email messages to other victims. It may also be directed to perform other malicious actions, such as stealing Bitcoins. When present on the system, the Kelihos malware is able to function as an information stealer. 
</p>
<br/><br/>
<h3 style ={{color: "white"}}>3)<u>Vundo</u>:</h3>
<br/>
<p>The adware is normally downloaded by users from the websites; these malicious sites are normally promoted by spam emails. The Vundo family is often distributed as DLL files. It is known to be bundled with adware and/or spyware programs.
For representative examples of Vundo variants and associated programs:
<br /><br />
<ul>
<li> Trojan:W32/Vundo.HD</li>
<li> Trojan:W32/Monderd.gen</li>
<li> Adware:W32/Virtumonde</li>
</ul>
<br />
Malware in the Vundo family are installed without the user's consent as a Browser Helper Objects (BHOs). During installation, the DLL file is dropped in Windows system directory. The file name is randomly generated using 8 alphabetic characters. Upon execution, the DLL is injected into 2 running processes:
<br /><br />
<ul>
<li> Explorer.exe</li>
<li> Winlogon.exe</li>
</ul> 
<br/>
<h6>Activity</h6>
<br />
Once installed, the trojan modifies Microsoft Internet Explorer's security setting to trust cookie content created by the trojan. Some variants may also attempt to download and execute arbitrary files from remote websites. The program runs hidden from the user.
</p>
<br/><br/>
<h3 style ={{color: "white"}}>4)<u>Lollipop</u>:</h3>
<br/>
<p>The Lollipop.exe file is a software component of Lollipop by Lollipop Network, S.L.
"Lollipop.exe", identified in Microsoft's Threat Encyclopedia as "Adware:Win32/Lollipop" and by Symantec as "Trojan.Gen.2", is adware by Lollipop Network, S.L., in Barcelona, Spain, a "primary distributor" of unwanted software, advertised as a "performance based contextual advertising network" aimed at Europe and Latin America. It is typically bundled with the PlayerPlus application on video streaming websites and installs without user consent under the profile folder as "C:\Users\\AppData\Local\Lollipop\Lollipop.exe". It has three different ways of setting itself to start at Windows boot depending on the OS and antivirus in use. It transmits data to a remote server identifying the computer's geographical location and security software. The ads it presents vary based on location and browsed keywords and may be pornographic. It can be removed via the Control Panel; removing all entries containing "Lollipop" is advised.
</p>
<br /> <br />
<h3 style ={{color: "white"}} >5)<u>Simda</u>:</h3>
<br/>
<p>Backdoor:W32/Simda was first seen in 2009, and has since rapidly expanded into a large family of malware with a wide range of capabilities. Early variants focused primarily on stealing passwords and other data from infected machines. In 2013, Simda was reportedly found being used as a banking trojan (primarily targeting banks in Russia and Europe).
  <br />
Simda variants are typically distributed via compromised sites that redirect users to websites hosting exploit kits, which deliver the malware onto systems containing vulnerabilities the kits are able to exploit. When executed on a machine, Backdoor:W32/Simda will install a copy of itself, then delete the original file. During installation, some Simda variants include routines to check for the presence of virtual machines, sandboxes, debugging programs or network traffic analysis tools (essentially, programs that are often used by security researchers); if found, the malware will delete itself. This check allows the malware to evade systems that could potentially spot the infection in progress. <br />
<br/>
<h6>Information harvesting</h6>
<br />
If successfully installed, Simda will hook into various APIs in order to capture various types of data, depending on the specific variant involved. Data captured may include network and machine information, online banking and shopping details, email credentials, browser history details, screenshots and so on.
</p>
<br /> <br />
<h3 style ={{color: "white"}}>6)<u>Tracur</u>:</h3>
<br/>
<p>When the Trojan is executed, it copies itself as the following file:
%System%\[NAME OF AN EXISTING DLL]32.exe 
<br />
It then drops the following files:
<br /><br />
<ul>
<li> %System%\[NAME OF AN EXISTING DLL]32.exe (W32.Mozipowp) </li>
<li> %System%\[NAME OF AN EXISTING DLL]32.dll</li>
<li> %UserProfile%\Application Data\SysWin\lsass.exe (W32.Mozipowp)</li>
</ul>
<br />
If Firefox/chrome is installed on the computer, the threat installs itself as a Firefox/chrome extension by replacing the following files: 
<br /><br />
<ul>
<li>	%UserProfile%\Application Data\Mozilla\Firefox\Profiles\install.rdf </li>
<li>  %UserProfile%\Application Data\Mozilla\Firefox\Profiles\chrome\xulcache.jar</li>
<li>	%UserProfile%\Application Data\Mozilla\Firefox\Profiles\chrome\chrome.manifest</li>
<li>	%UserProfile%\Application Data\Google\Chrome\User Data\Default\[RANDOM LETTERS]\contentscript.js</li>

</ul>
  <br />
It will also record the information when the user visits websites that URL contain any of the following strings:
<br /> <br />
<ul>
<li>	search.aol.com</li>
<li>	search.yahoo.com</li>
<li>  search.netscape.com</li>
<li>	bing.com</li>
<li>	search.lycos.com</li>
<li>	altavista.com</li>
<li>	gigablast.com</li>
<li>	youtube.com/results</li>
</ul>
The Trojan then opens a back door on the compromised computer by attempting to connect to a server and then waits for commands. The remote attacker can perform the following actions on the compromised computer: 
<br />
<ul>
<li>	 Download and execute remote files</li>
<li>	 Control the web browser redirection parameters</li>
<li>	 Steal information</li>
</ul>
<br />
It then creates the registry entries to register itself as a system service.
</p>

<br /> <br />
<h3 style ={{color: "white"}}>7)<u>Gatak</u>:</h3>
<br/>
<p>It may arrive as one of the following files: 
  <br /><br />
  <ul>
<li>	%UserProfile%\Application Data\Google Talk\googletalk.exe </li>
<li>	%UserProfile%\Application Data\Skype\Phone\Skype.exe </li>
</ul>
  <br />
When the Trojan is executed, it may create several configuration files at the following location:  %UserProfile%\Application Data\Microsoft\[RANDOM FOLDER NAME]\[RANDOM FILE NAME] 
Next, the Trojan may create one of the following registry entries so that it is executed every time Windows starts: 
<br /><br />
<li>	HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run\"googletalk" = "%UserProfile%\Application Data\Google Talk\googletalk.exe /autostart" </li>
<li>	HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run\"Skype" = "%UserProfile%\Application Data\Skype\Phone\Skype.exe\" /nosplash /minimized"" </li>
<br />
It then injects itself into the following process: 
explorer.exe . The Trojan then opens a back door on TCP port 80 and connects to the remote locations: 
</p>
            
            {/* <div>{this.state.page_text}</div> */}
        </div>

    );
  }
}

export default withStyles(dashboardStyle)(Dashboard);
