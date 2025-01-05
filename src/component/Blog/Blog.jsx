
const Blog = ({ blog }) => {
    const { author, author_img, cover, posted_date, reading_time, hashtags, title } = blog;
    return (
        <div>
            <div className="">
                <img className="w-full rounded-lg pb-2" src={cover} alt="" />
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <img className="w-10" src={author_img} alt="" />
                        <h4>{author} <br /><small>{posted_date}</small></h4>
                    </div>
                    <div>
                        <h3>{reading_time}</h3>
                        <p><img src="" alt="" /></p>
                    </div>
                </div>
                <div className="py-4 space-y-2">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p className="space-x-2 font-semibold text-gray-500">{
                        hashtags.map(tag => <span key={tag}>{tag}</span>)
                    }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;