// TODO THESE FUNSTIONS WILL BE OBSOLETED AND MOVED TO OTHER FILES IN TIME

import { allComponents } from "../../dbMockup/allComponents";
import { documentViews } from "../../dbMockup/documentViews";
import { users } from "../../dbMockup/users";

// 1. Retrieve All DocViewIds for a given user
const getCurDocIds = (userId) => {
	return users[userId].documentViews;
};
// 2. Retrieve a single DocView
const getDocView = (docViewId) => {
	return documentViews[docViewId];
};
//3. Get all the components for given docViewId
const getComponents = (docViewId) => {
	const allComponentIds = documentViews[docViewId].allComponentIds;
	var res = {};
	for (var i = 1; i <= allComponentIds.length; i++) {
		res[i] = allComponents[i];
	}
	return res;
};
//4. Get Component & version for a specific componentId & userId
const getComponent = (componentId, userId,allComponents) => {
	const component = allComponents[componentId];
	const usersVersion = component.usersVersion[userId].versionId;
	const usersContent = component.versions[usersVersion];
	// present final output
	const final = JSON.parse(JSON.stringify(component));
	delete final.versions;
	delete final.usersVersion;
	const result = { ...final, usersVersion, ...usersContent };
	return result;
};

//5. Update components object with edited content
const updateComponent = (component, newContent, fieldToUpdate) => {
	const newFields = { [fieldToUpdate]: newContent };
	// console.log('newFields',newFields)
	const versionToChange =
		allComponents[component.id].versions[component.usersVersion];
	//1. Update version
	const updatedVersion = {
		[component.usersVersion]: {
			...versionToChange,
			...newFields,
		},
	};
	//2. update versions
	const updatedVersions = {
		versions: {
			...allComponents[component.id].versions,
			...updatedVersion,
		},
	};
	//3. update component
	const updatedComponent = 
    {
        [component.id]:{
        		...allComponents[component.id],
		        ...updatedVersions
	                    }
    }
	// console.log("updatedComponent", updatedComponent);
    //4. update allComponents
    const newAllComponents = {
        ...allComponents,
        ...updatedComponent
    }
    // console.log("newAllComponents", newAllComponents[1]);
    return newAllComponents
};

//get the current level
const getCurLevel = (componentId, documentView) => {
	return documentView.component_hierachy[componentId].level;
};

const getChildrenComponents = (componentId, components, curDocMap) => {
	const getCurChildrenIds = (componentId, curDocMap) => {
		// console.log('componentId',componentId)
		// console.log('documentMap',curDocMap.component_hierachy[componentId].children)
		return curDocMap.component_hierachy[componentId].children;
	};
	const childrenIds = getCurChildrenIds(componentId, curDocMap);

	const getComponent = (num) => {
		return components[num];
	};
	const res = childrenIds.map(getComponent);
	return res;
};

export {
	getCurDocIds,
	getDocView,
	getComponents,
	getComponent,
	updateComponent,
	getCurLevel,
	getChildrenComponents,
};
/*
FUNCTIONS USED TO RENDER THE PONDERMAP DOCUMENT


 HOW THIS WORKS
1. starting with a userId all docVerId can be retrieved using getDocIds
A docVerId is a version of a document(1 doc has different docVerId, unique per user)

2. Any docVerId has a docMap (this shows the relationships between all containers in the 
    users version of this document)

3. All components for a docMpa relating to a docVerId can be found but using the getComponents
funciton */
