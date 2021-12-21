# ABOUT THE DATA STRUCTURE OF A SINGLE DOCUMENT
Any Single document
    * Can have many contributors
    * One contributor can create 1 view of document. The view is where the hierachy of the unique conpmonents is defined
    * Components can have many versions
    * A view can contain only one hierachy and 1 version of any unique component

#  ABOUT DATA SOURCES
There are 3 layers in the data for this app
1. Database             (all data for all documents)
2. Document             (all data for a single document generated via api call and also some code to reformat data)
3. Document Functions    (all functions for manipulation of the document)

# 1. DATABASE
below are the files that currently mock the database
## documents.js      | PK: doc_id   FK: user_ids
All the pondermap documents
## documentViews     | PK: doc_view_id   FK: {doc_id    , conponent_id}
One document can have many views, one view per user. This is all the view for all the documents
## allComponents     | PK: component_id   
All the components for all the document views
## users.js             |PK: user_id     FK:doc_view_id
All thes user of this app with associated document views

# 2. DOCUMENT


# 3. DOCUMENT FUNCTIONS
    Display
    Edit