import { getUsersViewId } from '../utils/utils'

const getComponent = (componentId,documentState)=>{
    // A. Get data form curent user / current version
        const curComponent = documentState.document.documentComponents[componentId]
        const authenticatedUserId = documentState.authenticatedUserId
        const usersVersionId = documentState.document.documentComponents[componentId].usersVersion[authenticatedUserId].versionId
        const currentVersionContent = curComponent.versions[usersVersionId]
    // B. Create output of current componet / version for render
        const res_unformatted = {...curComponent,'versions':currentVersionContent }
        const res = { 
            'componentId': res_unformatted.componentId,
            'url':res_unformatted.url,
            'title':res_unformatted.versions.title,
            'imageUrl':res_unformatted.versions.imageUrl,
            'notes':res_unformatted.versions.notes,
            'allTags':res_unformatted.allTags,
        }
        return res  
    }
const getChildrenIds = (id,documentState)=>{
    //THIS FUNCTION IS WRONG!!!!!


    // 1. Get usersViewid
    const usersViewId = getUsersViewId(documentState)

    // 2. Get userView
        const documentViews = documentState.document.documentViews
        const usersView = documentViews[usersViewId]
    // 3. Get Components in usersView
        const usersViewsComponents = usersView.componentHierachy
    // 4. Get users view of the component
        const usersViewsComponent = usersViewsComponents[id]
    // 5. return children
    const res = usersViewsComponent.children
    return res
}

export { getComponent, getChildrenIds}