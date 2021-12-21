const getUsersViewId = (documentState) =>{
    //Helper functions
    const dictionaryItemCount=(dict)=>{
        return Object.keys(dict).length
    }
    // 1. All doc_view_id for current user
    const document = documentState.document
    const userId = documentState.authenticatedUserId
        const userViewIds = document.documentUsers[userId].documentViews
    // 2. All doc_view_id ids for current document
        const getDocViewIds = (documentViews) =>{
            var res = [];
        for (var i = 1; i <= dictionaryItemCount(documentViews); i++) {
            res.push(documentViews[i].docViewId)
        }
        return res;
        }
        const docViewsIds = getDocViewIds(document.documentViews)
    //3. doc_view_id in user and in document 
        const getUsersView = (docViewsIds, userViewIds) =>{
            for (var i = 0; i < docViewsIds.length; i++) {
                for (var a = 0; a < userViewIds.length; a++) {
                    if(docViewsIds[i] === userViewIds[a]){
                        return docViewsIds[i]
                    }
                }
            }
        return 'No matching ids found';
    }
        return getUsersView(docViewsIds, userViewIds)
}

const getUsersVersion = (usersVersionDict) =>{
    // const userId = authenticatedUser.userId
    // for (const [key, value] of Object.entries(usersVersionDict)) {
    //     if(key == userId){
    //         return value.versionId
    //     }
    //   }

}

// const getComponentLevel = (componentId,componentHierachy)=> {
//     // console.log('1. ARG: componentId',componentId)
//     // console.log('2. ARG: componentHierachy',componentHierachy)
//     if(componentHierachy[componentId].parentId==null){
//         print('parent is null') // if the component is apex then return 0
//         return 0
//     }

//     // Get 
//     var count = 0
//     var currentId = componentId
//     var currentParentId = componentHierachy[componentId]
//     // console.log('currentParentId',currentParentId)

    
//     // console.log('First Parent',componentHierachy[currentId].parentId)
//     // console.log('Initializations: currentID:',currentId,'currentParent:',currentParentId,'count',count)
//     while(currentParentId !== null){
//         count += 1
//         // console.log('Loops: currentID:',currentId,'currentParent:',currentParentId,'count',count)
//         currentId = currentParentId
//         currentParentId = componentHierachy[currentId].currentParentId
//     }

//     return count
// }
const numberOfParents = (componentId,componentHierachy)=> {
    // console.log('1. ARG: componentId',componentId,'ParentForThat:',componentHierachy[componentId].parentId)
    var cnt = 0
    var currentId = componentId
    var currentParentId = componentHierachy[componentId].parentId
    // console.log('1. T1: componentId',currentId,'ParentForThat:',currentParentId)
    if(componentHierachy[componentId].parentId==null){
        // console.log('parent is null') 
        return 0
    }
    while(currentParentId !== null){
        cnt += 1
        // console.log('has a parent','cnt:',cnt)
        currentId = currentParentId
        currentParentId = componentHierachy[currentId].parentId
        
    }
    return cnt
}


export {getUsersViewId,getUsersVersion, numberOfParents}