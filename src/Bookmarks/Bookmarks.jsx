import PropTypes from 'prop-types';


function Bookmarks({ bookmarks }) {
    return (
        <div className='bg-gray-500 p-4 rounded-md text-center'>
            <h2 className='md:text-2xl mb-4'>Bookmarked Blogs: {bookmarks.length}</h2>
            <div className='grid grid-cols-1 gap-2 '>
                {
                    bookmarks.map((bookmark, index) => (
                        <div key={index}>
                            <h3 className='text-lg bg-slate-800 text-white p-2 rounded-md'>{bookmark.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}


Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
};
export default Bookmarks;
