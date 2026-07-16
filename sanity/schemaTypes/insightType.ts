import { defineField, defineType } from "sanity";

export const insightType = defineType({
  name: "insight",
  title: "Insight",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }]
    })
  ]
});
