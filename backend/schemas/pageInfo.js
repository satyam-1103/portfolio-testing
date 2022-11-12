export default {
    name : "pageInfo",
    title : "pageInfo",
    type: "document",
    fields : [
        {
            name : "name",
            title : "Name",
            type : "string",
        },
        {
            name : "role",
            title : "Role",
            type : "string",
        },
        {
            name :"heroImage",
            title : "Image",
            type: "image",
            options : {
                hotspot : true,
            },
        },
        {
            name : "backgroundInformation",
            title: "BackgroundInformation",
            type: "string",
        },
        {
            name : "profileImage",
            title : "profileImage",
            type : "image",
            options: {
                hotspot : true,
            }
        },
	  {
            name : "phone",
            title : "Phone No",
            type : "number",
        },
	  {
            name : "address",
            title : "Address",
            type : "string",
        },
	  {
            name : "email",
            title : "Email",
            type : "email",
        },
    ]
}