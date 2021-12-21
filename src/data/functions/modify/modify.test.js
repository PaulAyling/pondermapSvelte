 import {add } from './add'
 import { remove } from './remove'
 import { edit } from './edit'
 import { v4 as uuidv4 } from 'uuid';
 import { newComponent } from '../../classes/contextClasses'
 import stateMimic from '../../stateMimic';
 import {addMock } from './modifyTestMocks'

const util = require('util')
var state = {}
// console.log('stateMimic',util.inspect(stateMimic,{ depth: null }))
describe.skip('MODIFY SUITE', () => {
  it.skip('1 Add ', () => {
  //Create New Object
  const newComp = new newComponent(
    1,                              //parent_id
    'NewIdForTest', //should be uuidv4(),     //new id for component
    'http://www.paulayling.me',     //url
    'The best website',             //title
    'https://pbs.twimg.com/media/DmAdG5qU0AAEnZU?format=jpg&name=small',  //image url
    'short notes',                  //notes
    ['bikes','transport']);         //tags
    // const newState = add(1,newComp,stateMimic)
    // state = newState
    // console.log('TEST ADD RUNNING ADD...',util.inspect(newState.documentViews[1].componentHierachy['NewIdForTest'],{ depth: null }))
    // console.log('TEST ADD RUNNING ADD...',util.inspect(newState,{ depth: null }))
    expect(newState).toStrictEqual(addMock);
  });
  it.skip('2 Remove ', () => {
  //Create New Object
    // console.log('newState',util.inspect(state,{ depth: null }))
    const newState2 = remove('2',stateMimic)
    // console.log('TEST Remove Running....',util.inspect(newState2,{ depth: null }))
    expect('').toStrictEqual('');
  });
  it('2 Edit ', () => {
  // //Edit Existing Object
    const newState = edit('title','This title has been updated',1,stateMimic.document)
    // console.log('TEST EDIT Running....',util.inspect(newState,{ depth: null }))
    expect('').toStrictEqual('');
  });
});
