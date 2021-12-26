import {storage} from './firebaseConfig'

export const uploadImg = async (file , path = '') => {
    
    let ref = storage.ref().child(path)
    return ref.put(file);
}
export const downloadImg = async (path) => { 
    const url = await storage.ref().child(path).getDownloadURL();
    return url

}
export const deleteSomePhoto = async (path) => {
    const res = await storage.ref().child(path).delete()
    
}