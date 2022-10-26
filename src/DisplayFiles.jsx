import { useEffect, useState } from "react"
import { dbConn } from "./database/dbCalls"

export const DisplayFile = () => {

    const [docList, setDocList] = useState();
    console.log(docList);

    useEffect(() => {
        const runUseEffect = async () => {
            const queryObj = {
                map: function(doc) {
                    emit(doc._id)
                }
            };
        
            let docList = await dbConn.query(queryObj, {
                include_docs: true,
                attachments: true,
                binary: true
            });
            console.log(docList.rows[0].doc);
            setDocList(docList.rows);
        };
        runUseEffect();
    }, []);

    const handleDownload = (blob) => {
        let objectUrl = URL.createObjectURL(blob);
        console.log(objectUrl);
    }

    return (
        <div style={{display: "flex", flexDirection: "column", margin: "5px"}}>
            {docList && docList?.map(mapObj => (
                <button key={mapObj.id} onClick={() => handleDownload(mapObj?.doc?._attachments?.file0?.data)}>
                    {mapObj?.id}
                    <br/>
                    {mapObj?.doc?._attachments?.file0?.stub ? "true" : "false"}
                </button>
            ))}
        </div>
    )
}