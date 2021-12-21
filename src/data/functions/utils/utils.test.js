import {numberOfParents, getUsersViewId } from '../utils/utils'
import stateMimic from '../../stateMimic';
import {componentHierachy} from './utilsTestMocks'

const util = require('util')
   //  console.log('stateMimic....',util.inspect(stateMimic,{ depth: null }))

describe.only('UTILS SUITE', () => {

 it('1. Get Users view id ', () => {
    const usersViewId = getUsersViewId(stateMimic)
   //  console.log('1. Get Users view id RES',util.inspect(usersViewId,{ depth: null }))
    expect(usersViewId).toStrictEqual(1);
 });
 it('2. Get NumberOfParents', () => {
    const NumberOfParents = numberOfParents(2,componentHierachy)
    console.log('NumberOfParents',util.inspect(NumberOfParents,{ depth: null }))
    expect(NumberOfParents).toStrictEqual(4);
 });
 
});
