const buttonsVisable = {
        'paragraph':{
                'drag':false,
                'add':false,
                'delete':false,
                'url':false,
                'share':false
        },
        'word':{
                'drag':false,
                'add':true,
                'delete':false,
                'url':false,
                'share':false
        }
    }
// In time I will depreciate this with tailwind custom components
const styleDefaults = {
        'paragraph':{
                'cardContainer':' rounded flex flex-col justify-between p-1 bg-gray-300 text-black',
                'cardHeaderContainer':'',
                'cardHeaderText':'text-center font-extralight font-bold text-xl',       
        },
        'word':{
                'cardContainer':'rounded flex flex-col justify-between p-1 m-1 bg-gray-100 text-black',
                'cardHeaderContainer':'hover:bg-gray-300 rounded ',
                'cardHeaderText':'text-center font-extralight font-bold text-xl text-decoration: underline text-blue',
        }
}
export { buttonsVisable, styleDefaults } 
