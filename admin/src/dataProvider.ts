import simpleRestProvider from "ra-data-simple-rest";
import {DataProvider, withLifecycleCallbacks} from "react-admin";

export const dataProvider = withLifecycleCallbacks(simpleRestProvider(
        // import.meta.env.VITE_SIMPLE_REST_URL,
        "http://localhost:3000"
    ), [{
        resource: 'models',
        beforeCreate: async (params, dataProvider: DataProvider) => {
            console.log(params)
            // const newPictures = params.data.picture.filter(picture => picture.rawFile instanceof File)
            const newPictures = [params.data.base64ImageSrc].filter(picture => picture.rawFile instanceof File)

            const base64Pictures = await Promise.all(
                newPictures.map(convertFileToBase64)
            )
            const pictures = [
                ...base64Pictures.map((dataUrl, index) => ({
                    src: dataUrl,
                    title: newPictures[index].title,
                })),
                // ...formerPictures,
            ];
            console.log(params)
            console.log(pictures)
            return {
                data: {
                    ...params.data,
                    // TODO пока одна отка, а если надо несколько ?
                    base64ImageSrc:pictures[0].src
                }
            }
        }
    }])
;
const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file.rawFile);
    });
// export const dataProvider:DataProvider = {
//     create<RecordType, ResultRecordType>(resource: string, params: CreateParams): Promise<CreateResult<ResultRecordType>> {
//         return Promise.resolve(undefined);
//     },
//     delete<RecordType>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> {
//         return Promise.resolve(undefined);
//     },
//     deleteMany<RecordType>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
//         return Promise.resolve(undefined);
//     },
//     getMany<RecordType>(resource: string, params: GetManyParams<RecordType> & QueryFunctionContext): Promise<GetManyResult<RecordType>> {
//         return Promise.resolve(undefined);
//     },
//     getManyReference<RecordType>(resource: string, params: GetManyReferenceParams & QueryFunctionContext): Promise<GetManyReferenceResult<RecordType>> {
//         return Promise.resolve(undefined);
//     },
//     getOne<RecordType>(resource: string, params: GetOneParams<RecordType> & QueryFunctionContext): Promise<GetOneResult<RecordType>> {
//         const response = await fetch(`http://localhost:3000/${resource}`)
//         const data = await response.json()
//         console.log(data)
//         return {data,total:data.length}
//     },
//     update<RecordType>(resource: string, params: UpdateParams): Promise<UpdateResult<RecordType>> {
//         return Promise.resolve(undefined);
//     },
//     updateMany<RecordType>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> {
//         return Promise.resolve(undefined);
//     },
//     getList: async (resource, params) =>{
//         const response = await fetch(`http://localhost:3000/${resource}`)
//         const data = await response.json()
//         console.log(data)
//         return {data,total:data.length}
//     }
// }