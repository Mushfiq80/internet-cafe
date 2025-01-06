import PropTypes from 'prop-types';


function Bookmarks({ bookmarks, readingTime }) {
    return (
        // readingTime
        <div>
            <div className='bg-blue-800 text-white p-4 rounded-md text-center mb-2'>
                <h2>Reading Time: {readingTime} minutes</h2>
            </div>
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
        </div>
    );
}


Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
};
export default Bookmarks;
