import axios from 'axios';

interface IvideoObj{
     fileName:string;
     credentials:{
        accessKey:string;
        secretAccessKey:string;
     }
}
const errorObj={error:'Invalid credentials or not sufficient amount or error fileName'};
export const VideoUploadUrl=async (video:IvideoObj)=>{
    try {
        axios.post('https://api.suryanshverma.site/api/v1/upload-video',{fileName:video.fileName,credentials:video.credentials})
        .then((res)=>{
            const responseObj={
                uploadUrl:res.data.uploadUrl,
                fileName:res.data.fileName
            }
            return responseObj;
        })
        .catch((err)=>{
            return  errorObj;
        })
    } catch (error) {
        return   errorObj
    }
}

interface ItranscodingProps{
    fileName:string;
    awsCredentials:{
        accessKey:string;
        secretAccessKey:string;
    }
    bucketPath:string;
    bucketName:string;
    email:string;
    credentials:{
        accessKey:string;
        secretAccessKey:string;
     }

}
export const TranscodeVideo=async(transcodingProps:ItranscodingProps)=>{
     try {
        const transcodingPropsObj={
            videoKey:`outputs/${transcodingProps.fileName}`,
            userAccessKey:transcodingProps.awsCredentials.accessKey,
            userSecretAccessKey:transcodingProps.awsCredentials.secretAccessKey,
            bucketPath:transcodingProps.bucketPath,
            userBucketName:transcodingProps.bucketName,
            email:transcodingProps.email,
            credentials:transcodingProps.credentials

        }
        axios.post('https://api.suryanshverma.site/api/v1/transcoding-video',{transcodingPropsObj})
        .then((res)=>{
            const resP= {
                success:true,
                message:'transcoding process is queued. when transcoding completes we will notify through email',
                videoPath:`https://s3.<yourregionName>..amazonaws.com/${transcodingProps.bucketName}/${transcodingProps.bucketPath}/outputs/master.m3u8`
            }
            return resP;
        }).catch((err)=>{
            const error={error:'Invalid credentials or not sufficient amount or error fileName'}
            return   error;
        })
     } catch (error) {
        const errorP={error:'Invalid credentials or not sufficient amount or error fileName'}
        return   errorP;
     }
}