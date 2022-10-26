import { dbConn, finalReplication } from "./database/dbCalls";

const handleUpload = async (event) => {
    let uploadedFile = event.target.files[0];
    console.log({uploadedFile});
    await dbConn.put({
        _id:new Date().toISOString(),
        _attachments: {
            file0: {
                content_type: uploadedFile.type,
                data: uploadedFile
            }
        }
    })
    finalReplication();
    
}

const UploadFile = () => {
    return (
        <div>
            <input type="file" onChange={handleUpload} />
        </div>
    )
}

export default UploadFile;