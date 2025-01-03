```javascript
import { Camera, CameraType } from 'expo-camera';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [supportedRatios, setSupportedRatios] = useState([]);
  const [resolution, setResolution] = useState(undefined);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');

      const ratios = await Camera.getSupportedRatiosAsync(CameraType.back);
      setSupportedRatios(ratios);
    })();
  }, []);

  const handleTakePicture = async () => {
    if (resolution) {
      if (supportedRatios.includes(resolution.ratio)){
          //Proceed
      }
      else {
          alert("Resolution not supported")
      }
    }
    else {
        alert("Choose a resolution first")
    }
  };

  if (hasPermission === null) {
    return <View />; 
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ratio={resolution?.ratio}>
          <Button title='Take Picture' onPress={handleTakePicture}/>
      </Camera>
    </View>
  );
};
export default App;
```