require('dotenv').config();
const v2  = require('cloudinary');


// Configuration
v2.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET
});

const uploadFileOnCloudinary = async (localPath)=>  {
    const uploadResult = await v2.uploader
    .upload(
        localPath,
        {
            resource_type:"auto"
        }
    )
    .catch((error) => {
        console.log(error);
    }); 
}


console.log(uploadFileOnCloudinary);
    
   
    
