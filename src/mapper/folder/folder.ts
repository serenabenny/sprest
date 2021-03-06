import {RequestType} from "../../types";

export const folder = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/

    properties: [
        "Files|files|/getByUrl('[Name]')|file", "Folders|folders|/getByUrl('[Name]')|folder", "ListItemAllFields",
        "ParentFolder|folder", "Properties|propertyvalues", "StorageMetrics"
    ],

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Deletes the object
    delete: {
        requestType: RequestType.Delete
    },

    // Get the file at the specified URL.
    getByUrl: {
        argNames: ["serverRelativeUrl"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "folder"
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    },

    // Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
    recycle: {
        requestType: RequestType.Post
    },

    // Updates it's properties.
    update: {
        metadataType: "SP.Folder",
        name: "",
        requestMethod: "MERGE",
        requestType: RequestType.PostWithArgsInBody
    }
};