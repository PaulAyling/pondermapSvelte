import { getUsersVersion } from '../utils/utils'
import { arrayIsValueInArray } from '../utils/array_fn'

// const util = require('util')
const edit = (fieldToUpdate,newContent,componentId,document) =>{
    const validFieldsToUpdate = ['title','imageUrl','notes']
    if(arrayIsValueInArray(validFieldsToUpdate,'title') !== true){
        return "Error! Field Name is not valid"
    } else{
    // A. Create the Data
        // get documentComponents
            const documentComponents = document.documentComponents
        // Get the documentComponent
            const documentComponent = document.documentComponents[componentId]
        // Identify document version
            const docVersions = documentComponent.usersVersion
            const versionId = getUsersVersion(docVersions)
        // Get the usersComponent
            const usersComponent = JSON.parse(JSON.stringify(documentComponent.versions[versionId]))
    // B. create new data parts
        // update field
            usersComponent[fieldToUpdate]  = newContent
        //update newDocumentComponents
            const newDocumentComponentsVersions = {...documentComponent.versions, [versionId]:usersComponent}
            const newDocumentComponent = {...documentComponent,'usersVersions':newDocumentComponentsVersions }
            const newDocumentComponents = {...documentComponents,[componentId]:newDocumentComponent}
    // C. Create final output
        const res = {...document, 'documentComponents':newDocumentComponents,}
        // console.log(' edit outputr....',util.inspect(res,{ depth: null }))
        return res
    }
}

export {edit }