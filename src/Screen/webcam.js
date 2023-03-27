import React, {useEffect} from "react";
import Webcam from "react-webcam";
import {useOpenCv} from "opencv-react";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

const WebcamCapture = () => (
    <Webcam
        audio={false}
        height={720}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
    >
        {/*{({ getScreenshot }) => (*/}
        {/*    <button*/}
        {/*        onClick={() => {*/}
        {/*            const imageSrc = getScreenshot()*/}
        {/*        }}*/}
        {/*    >*/}
        {/*        Capture photo*/}
        {/*    </button>*/}
        {/*)}*/}
    </Webcam>
);

function Mycomponent() {
    const { loaded, cv } = useOpenCv()

    useEffect(() => {
        if (cv) {
            console.log("opencv working")
            // get video feed from opencv
        }
        else {
            console.log("opencv not working")
        }
    }, [cv])

    return <div>
        <WebcamCapture></WebcamCapture>
    </div>
}
export default Mycomponent