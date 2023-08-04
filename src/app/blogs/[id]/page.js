import loadBlogsData from "@/utils/loadBlogsData";
import loadSingleBlogData from "@/utils/loadSingleBlogData";
export const generateMetadata = async ({params}) =>{
    const {title} = await loadSingleBlogData(params.id);
    return {
        title: title,
    }
}

export const generateStaticParams = async () =>{
    const blogs = await loadBlogsData();
}

const SingleBlog = async ({ params }) => {
    const {id, title, body} = await loadSingleBlogData(params.id);

    return (
        <div className="border-4 border-blue-800 p-2 my-3">
            <h2>{id}. {title}</h2>
            <p className="my-3">{body}</p>
            
        </div>
    );
};

export default SingleBlog;