import { getComponent,getChildrenIds} from './display'
import {getComponentMock,getChildrenIdsMock} from './displayTestMocks'
import stateMimic from '../../stateMimic'

const util = require('util')
// console.log('stateMimic:',util.inspect(stateMimic,{ depth: null }))

describe.only('Display:', () => {
    it('1. getComponent', () => {
        const curComponent = getComponent(1,stateMimic)
        // console.log('1. TEST getComponet:',util.inspect(curComponent,{ depth: null }))
        // console.log('1. TEST getComponentMock:',util.inspect(getComponentMock,{ depth: null }))
        expect(curComponent).toStrictEqual(getComponentMock);
    });
    it('2. getChildrenIds', () => {
         const childrenIds = getChildrenIds(1,stateMimic)   
        //  console.log('2. getChildrenIds:',util.inspect(childrenIds,{ depth: null }))
          expect(childrenIds).toStrictEqual(getChildrenIdsMock);
        });
        

    });