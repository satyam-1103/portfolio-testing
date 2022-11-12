export default {
    name : "skill",
    type: "document",
    title: "Skill",
    fields : [
        {
            name : "title",
            title  :"Title",
            type: "string",
            description: "Title of Skill"
        },
        {
            name : "progress",
            title : "Progress",
            description : "Progress of skill from 0 to 100%",
            type: "number",
            validation: Rule => Rule.min(0).max(100)
        },
        {
            name : "image",
            title : "Image",
            type : "image",
            options : {
                hotspot : true,
            }
        }
    ]
}