const addMock ={
  header: {
    docId: 1,
    createdBy: 1,
    createdOn: '2021-08-01',
    DocumentTitle: 'Pauls first pondermap',
    userIds: [ 1, 2 ]
  },
  documentUsers: {
    '1': { userId: 1, name: 'Paul', documentViews: [ 1 ] },
    '2': { userId: 2, name: 'karoline', documentViews: [ 2 ] }
  },
  documentViews: {
    '1': {
      docViewId: 1,
      allComponentIds: [ 1, 2, 3 ],
      docId: 1,
      componentHierachy: {
        '1': {
          componentId: 1,
          versionId: 1,
          parentId: null,
          children: [ 2, 3, 'NewIdForTest' ],
          siblings: []
        },
        '2': {
          componentId: 2,
          versionId: 1,
          parentId: 1,
          children: [],
          siblings: []
        },
        '3': {
          componentId: 3,
          versionId: 1,
          parentId: 1,
          children: [],
          siblings: []
        },
        NewIdForTest: {
          componentId: 'NewIdForTest',
          versionId: 1,
          parentId: 1,
          children: [],
          siblings: []
        }
      }
    },
    '2': {
      docViewId: 2,
      allComponentIds: [ 1, 2 ],
      docId: 1,
      componentHierachy: {
        '1': {
          componentId: 1,
          versionId: 1,
          parentId: null,
          children: [ 2 ],
          siblings: []
        },
        '2': {
          componentId: 2,
          versionId: 1,
          parentId: 1,
          children: [],
          siblings: []
        }
      }
    }
  },
  documentComponents: {
    '1': {
      componentId: 1,
      url: 'tbc',
      allTags: [ 'lesiure', 'sport', 'machines' ],
      usersVersion: {
        '1': { userId: 1, versionId: 1 },
        '2': { userId: 2, versionId: 2 }
      },
      versions: {
        '1': {
          title: 'About Bicycles',
          imageUrl: 'https://bikexchange.com/wp-content/uploads/2020/12/bikes1212-e1630349513789.png',
          notes: 'tbc'
        },
        '2': {
          title: 'About Bicycles2',
          imageUrl: 'https://bikexchange.com/wp-content/uploads/2020/12/bikes1212-e1630349513789.png',
          notes: 'tbc'
        }
      }
    },
    '2': {
      componentId: 2,
      url: 'https://en.wikipedia.org/wiki/Road_bicycle',
      allTags: [ 'road', 'sport' ],
      usersVersion: {
        '1': { userId: 1, versionId: 1 },
        '2': { userId: 2, versionId: 1 }
      },
      versions: {
        '1': {
          title: 'Road Bikes',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Look_795_30th_Anniversary_Dura-Ace_9100-Mavic_Custom_Build_%2830636542393%29.jpg/300px-Look_795_30th_Anniversary_Dura-Ace_9100-Mavic_Custom_Build_%2830636542393%29.jpg',
          notes: 'Road racing can be fun...'
        }
      }
    },
    '3': {
      componentId: 3,
      url: 'https://en.wikipedia.org/wiki/Mountain_biking',
      allTags: [ 'road', 'sport' ],
      usersVersion: {
        '1': { userId: 1, versionId: 1 },
        '2': { userId: 2, versionId: 1 }
      },
      versions: {
        '1': {
          title: 'Mountain Bikes',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/MtnBiking_SedonaMag.jpg/250px-MtnBiking_SedonaMag.jpg',
          notes: 'Mountain bikeing is more fun and very dangerous, and soo exckting!'
        }
      }
    },
    NewIdForTest: {
      componentId: 'NewIdForTest',
      url: 'http://www.paulayling.me',
      allTags: undefined,
      usersVersion: { '1': { userId: 1, VersionId: 1 } },
      versions: {
        '1': {
          title: 'The best website',
          imageUrl: 'https://pbs.twimg.com/media/DmAdG5qU0AAEnZU?format=jpg&name=small',
          notes: 'short notes'
        }
      }
    }
  }
}

  const removeMock = {

  }
  export {addMock, removeMock}