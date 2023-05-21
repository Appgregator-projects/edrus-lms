import {
    getDownloadURL,
    ref,
    uploadBytes,
    uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../config/firebase";

export const UploadBlob = async (file, folder, type, name, title ) => {
    // console.log("inside upload");
    if (!file) {
        alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `${folder}/${type}/${name}/${title}`);

    // progress can be paused and resumed. It also exposes progress updates.

    // Receives the storage reference and the file to upload.

    return new Promise((resolve, reject) => {
        //   uploadBytes(storageRef, file)
        uploadBytes(storageRef, file)
            .then((snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                // update progress
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    resolve({
                        percent: percent,
                        url: downloadURL,
                    });
                    // console.log("Uploaded file!");
                });
            })
            .catch((error) => reject(error.message));
    });
};
