import multer from "multer";

var storage_engine = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"../uploads")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"_"+file.orginalname)
    }
})

let imageupload = multer({storage:storage_engine})
export default imageupload