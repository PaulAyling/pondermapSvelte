class newComponent {
    constructor(parentId,newId,url,title,imageUrl,notes,allTags){
        this.parentId = parentId
        this.newId = newId
        this.url = url
        this.title = title
        this.imageUrl = imageUrl
        this.notes= notes
        this.allTags = allTags
        this.versionId = 1
    }
    // create a method to gnerate the new node to add to the database
    newComponentNode(){
      //create the node that gets added to the components data
      const res = {
        componentId:this.newId,
        url:this.url,
        allTags:this.all_tags,
        usersVersion:{1:{'userId':1,'VersionId':1}},
        versions:{1:{
          title:this.title,
          imageUrl:this.imageUrl,
          notes:this.notes,
        }}
      }
      return res
    }
    newViewNode(){
      //create the node that gets added to the view data
      const res = {
        componentId:this.newId,
        versionId:this.versionId,
        parentId:this.parentId,
        children:[],
        siblings:[],
        }
      
      return res
    }
}
export {newComponent }