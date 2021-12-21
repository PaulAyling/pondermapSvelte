import { getUsersViewId } from '../utils/utils'
// const util = require('util')

const add = (parentId,newComponent,documentState) =>{
    //1 ADD NEW COMPONENTS
    //A Create & Add newComponentNode
    const newComponentNode = newComponent.newComponentNode()
    const documentComponents = documentState.document.documentComponents
        const newDocumentComponents = { ...documentComponents, [newComponentNode.componentId]:newComponentNode}
    //B Create & Add newViewNode    
    const newViewNode = newComponent.newViewNode()
    const documentViews = documentState.document.documentViews
    const usersViewId = getUsersViewId(documentState)
    const usersView = documentViews[usersViewId]
    const newDocumentViewsComponentHierachy = { ...usersView.componentHierachy, [newComponentNode.componentId]:newViewNode}
    const newDocumentView = {...usersView, 'componentHierachy':newDocumentViewsComponentHierachy}
        const newDocumentViews = {...documentViews, [usersViewId]:newDocumentView}
    // console.log('newDocumentViews',newDocumentViews)
    // 2. UPDATE PARENT
    documentState.document.documentViews[usersViewId].componentHierachy[parentId].children.push(newComponentNode.componentId)
    const res = {
        ...documentState.document,
        'documentComponents':newDocumentComponents,
        'documentViews':newDocumentViews
    }
    return res
}
export {add}