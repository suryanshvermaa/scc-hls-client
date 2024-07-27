const {VideoUploadUrl,TranscodeVideo} =require('scs-hls-client') 
async function init(){
    const resp1=await VideoUploadUrl({
        fileName:'skgsnlkslfgdfkl',
        credentials:{
            accessKey:'sdfkjkjs',
            secretAccessKey:"jhfjgk"
        }
    })
    console.log(resp1);
    const resp2=await TranscodeVideo({
        credentials:{
            accessKey:'sdfkjkjs',
            secretAccessKey:"jhfjgk"
        },
        awsCredentials:{
            accessKey:'sjflw',
            secretAccessKey:"rjge"
        },
        bucketName:"weljtjier",
        bucketPath:'wekjljilwr',
        email:'wkfmklwrs'
    })
    console.log(resp2);
}
init()