import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import handleSignIn from './database/handleSignIn';
import {initialReplication} from './database/dbCalls';
import { constants } from './constants';
import UploadFile from './uploadFile';
import { DisplayFile } from './displayFiles';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [displayFiles, setDisplayFiles] = useState(false);

  const remoteDB = 
  useEffect(() => {
    handleSignIn()
      .then(loginRes => {
        console.log({loginRes});
        if(loginRes && loginRes.name === constants.passcode) {
          initialReplication();
          setIsLogin(true);
        } else {
          alert ("couldnt login into database");
        }
      });

  }, [])

  return (
    <div className="App">
      Login: {isLogin ? "true" : "false"}
      <UploadFile />
      <button onClick={() => setDisplayFiles(!displayFiles)}>
        Display Files.
      </button>
      {displayFiles && 
        <DisplayFile />
      }
    </div>
  )
}

export default App
