import swaggerAutogen from "swagger-autogen";

// digunakan untuk menggunaakn sweagerautogen
const doc = {
    info : {
        version : 'v1.0.0',
        title: 'swager demo',
        description: 'implementasi swager'
    },
    servers: [
        {
            url : 'http://localhost:3000',
            description: ''
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            }
        }
    }
};


const outputFile = './swagger.json'
const enpointsFile = ['./src/docs/index.ts']

// digunakan untuk memastikan bahwa file swweager benar-benar dibuat
swaggerAutogen({ openapi: '3.0.0', autoHeader: true, autoBody: true, autoQuery: true})(outputFile, enpointsFile, doc).then(() => {
    console.log("File Json Behasil Dibuat")
})