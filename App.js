// import { ScrollView, Text, Button } from "react-native";
// import Resume from "./components/firstComponent";

// export default function App() {
//   const downloadCV = () => {
    
//   };
//   return (
//     <>
//       <Resume />

//       <Button
//         title="Download CV"
//         onPress={downloadCV}
//       />
//     </>


//   );
// }





import React from 'react';
import { Button } from 'react-native';
import ViewShot from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';
import SecondComponent from './components/secondComponent';
import Resume from './components/firstComponent';
import ThirdComponent from './components/thirdComponent';

export default function App() {
  const viewShotRef = React.useRef(null);

  const takeScreenshot = async () => {
    if (viewShotRef.current) {
      try {
        const uri = await viewShotRef.current.capture();
        await MediaLibrary.saveToLibraryAsync(uri);
        alert('Screenshot saved to device gallery');
      } catch (error) {
        console.error('Failed to save screenshot', error);
        alert('Failed to save screenshot');
      }
    }
  };

  return (
    <>
        {/* <Resume /> */}
     {/* <SecondComponent />  */}
      {/* <Button title="Download CV" onPress={takeScreenshot} /> */}
      <ThirdComponent/>
    </>
  );
}
