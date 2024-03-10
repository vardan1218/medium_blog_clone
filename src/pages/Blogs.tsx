
import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading, blogs} = useBlogs()

    if(loading) {
        return <div>
            ...loading
        </div>
    }

    return <div>
        <AppBar />
     <div className="flex justify-center">
    <div className=" max-w-xl">
        {blogs.map(blog => 
            <BlogCard
            authorName={"Vardan wadhwa"}
            title={"How an ugly single website page makes 5000$ per month with affiliate marketing"}
            content={'How an ugly single website page makes 5000$ per month with affiliate marketing'}
            publishedDate={"2nd Feb 2020"}
        />
        )}
        
    </div>
    </div>
    </div>
}