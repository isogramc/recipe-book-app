import axios from "axios";
import { useState } from "react";

function FileUpload(){
    const [selectedFile, setSelectedFile] = useState(null);

    function fileChange(event){
        event.preventDefault();
        // Update the state
        setSelectedFile(event.target.files[0]);
    };

    function fileUploadFun(){
        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "myFile",
            selectedFile,
            selectedFile.name
        );

        // Details of the uploaded file
        console.log(selectedFile);

        // Request made to the backend api
        // Send formData object
        axios.post("api/uploadfile", formData);
    };

    function fileData(){
        if (selectedFile) {
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {selectedFile.name}</p>

                    <p>File Type: {selectedFile.type}</p>

                    <p>
                        Last Modified:
                        {selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    return(
        <div>
             <h3>File Upload using React!</h3>
                <div>
                    <input type="file" onChange={fileChange} />
                    <button onClick={fileUploadFun}>Upload!</button>
                </div>
                {fileData()}
        </div>
    )

}
export default FileUpload;