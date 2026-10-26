import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';


const link = defineCollection({
    loader: file("src/content/links/links.json"),
    schema: z.object({
        title: z.string(),
        url: z.string(),
        icon: z.string(),
        options: z.object({
            target: z.enum(["_blank", "_self"]).default("_self"),
            download: z.boolean().default(false),
            rel: z.string().optional(),
        })
    })

})

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string().max(200),
        repository: z.string().url()
    })

})

export const collections = {
    link,
    projects
}