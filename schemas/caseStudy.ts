import { defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
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
      name: "industry",
      title: "Industry",
      type: "string"
    }),
    defineField({
      name: "problem",
      title: "Problem",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "outcome",
      title: "Outcome",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "metrics",
      title: "Metrics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Value", type: "string" },
            { name: "label", title: "Label", type: "string" }
          ]
        }
      ]
    })
  ]
});
