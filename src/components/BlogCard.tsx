interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}


export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return (
    <div className="p-4 border-b border-slate-200 pb-3">
        <div className="flex">
            <div className="flex justify-center flex-col"> 
             <Avatar size={"small"} name={authorName}/> 
            </div>
            <div className="font-extralight pl-2">{authorName}</div>
            <div className="flex justify-center flex-col pl-2">
                <Circle />
            </div>
            <div className="pl-2 font-bold text-slate-600">
                {publishedDate}
            </div>
        </div>
        <div className="text-xl font-semibold pt-2">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0, 100) + "..."}
        </div>
        <div className=" text-slate-500 text-sm font-thin pt-4">
            {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
        
    </div>
    )
}


function Circle() {
    return <div className="rounded-full h-1 w-1 bg-slate-400"></div>
}

export function Avatar({ name, size = "small" }: { name: string, size: "small" | "big"}) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "h-10 w-10"}`}>
    <span className={`font-extralight text-gray-600 dark:text-gray-300 ${size === "small" ? "text-xs" : "text-md"}`}>{name[0]}</span>
</div>
    
}