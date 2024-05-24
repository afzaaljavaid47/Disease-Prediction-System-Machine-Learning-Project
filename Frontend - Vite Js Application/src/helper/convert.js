// convert image into base64 format to store image in database

export default function convertToBase64(file){
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => resolve(fileReader.result)
        fileReader.onerror = (error) => reject(error)
    })
}