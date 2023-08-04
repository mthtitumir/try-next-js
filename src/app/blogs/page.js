import loadBlogsData from "@/utils/loadBlogsData";
import Link from "next/link";
// import { useRouter } from "next/navigation";

// const blogs = [
//     {
//         id: 1,
//         year: 2016,
//         title: 'title',
//     },
//     {
//         id: 2,
//         year: 2016,
//         title: 'title 2',
//     },
//     {
//         id: 3,
//         year: 2016,
//         title: 'title 3',
//     },
//     {
//         id: 4,
//         year: 2016,
//         title: 'title 4',
//     },
// ]

const BlogsPage = async () => {
    // const router = useRouter();
    const blogs = await loadBlogsData();

    return (
        <div className="container mx-auto">
            {
                blogs.map(({ id, body, title }) =>
                    <div className="border-4 border-blue-800 p-2 my-3" key={id}>
                        <h2>{id}. {title}</h2>
                        <p className="my-3">{body}</p>
                        <Link
                            className="border px-5 py-2 my-3 rounded-2xl bg-cyan-600 text-white"
                            href={{
                                pathname: `/blogs/${id}`,
                                // query: {
                                //     title: title,
                                // },
                            }}
                            // onClick={()=> router.push(`/blogs/${year}/${id}?title=${title}`)}
                           >
                            See More
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default BlogsPage;