// All the components used in any version of any document created by any user
const allComponents = 
{
	1: 
    {
		componentId: 1,
		url: "tbc",
        allTags: ["lesiure", "sport", "machines"],
        usersVersion:{
                // userId:{ userId :1, versionId :1}
                        1:{'userId':1,'versionId':1},
                        2:{'userId':2,'versionId':2},
                    },
		versions: 
        {
			1: 
            {
				title: "About Bicycles",
				imageUrl:
					"https://bikexchange.com/wp-content/uploads/2020/12/bikes1212-e1630349513789.png",
				notes: "tbc",
			},
			2: 
            {
				title: "About Bicycles2",
				imageUrl:
					"https://bikexchange.com/wp-content/uploads/2020/12/bikes1212-e1630349513789.png",
				notes: "tbc",
			},
		}
    },
    2: 
    {
        componentId: 2,
        url: "https://en.wikipedia.org/wiki/Road_bicycle",
        allTags: ["road", "sport"],
        usersVersion:{
                    1:{'userId':1,'versionId':1},
                    2:{'userId':2,'versionId':1},
                },
        versions: 
        {
            1: {
                title: "Road Bikes",
                imageUrl:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Look_795_30th_Anniversary_Dura-Ace_9100-Mavic_Custom_Build_%2830636542393%29.jpg/300px-Look_795_30th_Anniversary_Dura-Ace_9100-Mavic_Custom_Build_%2830636542393%29.jpg",
                notes: "Road racing can be fun...",
            }
        }
    },
    3: 
    {
        componentId: 3,
        url: "https://en.wikipedia.org/wiki/Mountain_biking",
        allTags: ["road", "sport"],
        usersVersion:{
                    1:{'userId':1,'versionId':1},
                    2:{'userId':2,'versionId':1},
                },
        versions: 
        {
            1: {
                title: "Mountain Bikes",
                imageUrl:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/MtnBiking_SedonaMag.jpg/250px-MtnBiking_SedonaMag.jpg",
                notes:
                    "Mountain bikeing is more fun and very dangerous, and soo exckting!",
            },
        },
    }
}

export { allComponents };
