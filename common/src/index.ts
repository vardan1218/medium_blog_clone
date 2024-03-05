import z from "zod";

export const signupBody =  z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})


export const signinBody =  z.object({
    username: z.string().email(),
    password: z.string().min(6),
})


export const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
})


export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})

export type signupBody = z.infer<typeof signupBody>
export type signinBody = z.infer<typeof signinBody>
export type createBlogInput = z.infer<typeof createBlogInput>
export type updateBlogInput = z.infer<typeof updateBlogInput>