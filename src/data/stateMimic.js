import {singleDocument} from './importSingleDocument'
import { authenticatedUser } from './dbMockup/authenticatedUser'
// FOR TESTING I MUST MIMIC THE STATE FORMAT AS I CANNOT IMPORT CONTEXT TO A MODULE
const stateMimic = {
    'document':{
        'header':singleDocument.header,
        'documentUsers':singleDocument.documentUsers,
        'documentViews':singleDocument.documentViews, //layout of the components for a given view
        'documentComponents':singleDocument.documentComponents
    }, // All components that belong to document}
    'authenticatedUserId':authenticatedUser.userId,
}
export default stateMimic
