import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";


const Blog = ({ blog, handleBookmark }) => {
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
                        <span>{reading_time}</span>
                        <button className='ml-2' 
                        onClick={() => handleBookmark(blog)}>
                        <IoBookmarksOutline />
                        </button>
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

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired
};

export default Blog;