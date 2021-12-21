/* PURPOSE: import database data & create document data (for a single document)*/
import {documents } from './dbMockup/documents'
import {documentViews } from './dbMockup/documentViews'
import { users } from './dbMockup/users'
import { getComponents} from './functions/display/render'
import { writable } from 'svelte/store'



//1. Create Data for single_document
    const docId = 1 //seelected by user
    //SIMULATED API QUERIES {these would be the queries to the database}
    const document = documents[docId]                       // Dcoument data
    const documentComponents = getComponents(docId)         // All components for document
    const documentUserIds = document.userIds               // Document contributors
    // Get documentUsers
    const getRecords = (filterValues,dict) => {
        var res = {};
        for (var i = 1; i <= filterValues.length; i++) {
            res[i] = dict[i];
        }
        return res;
    }
    const documentUsers = getRecords(documentUserIds,users) // Users data for the contributors
//3. Create document Context Data
    const singleDocument= writable({
            'header':document,
            'documentUsers':documentUsers,
            'documentViews':documentViews, //layout of the components for a given view
            'documentComponents':documentComponents // All components that belong to document,
        // 'utils':{newComponent,add,remove,edit}
    })
export {singleDocument} 


