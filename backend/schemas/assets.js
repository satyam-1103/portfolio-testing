export default {
    name : "assets",
    type : "document",
    title : "Assets",
    fields : [
        {
            name : "assetName",
            type : "string",
            title : "Asset Name",
            validation : Rule=>Rule.required()
        },
        {
            name : "assetImage",
            type : "array",
            title : "Asset Image",
            of : [{type : "image"}],
            options : {
                hotspot : true
            },
            validation : Rule=>Rule.required()
        }
    ]
}