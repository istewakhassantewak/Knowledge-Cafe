import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-300  md:ml-4 mt-5 pt-4 rounded-4xl pb-4">
            <div className='bg-green-200 p-10 rounded-4xl m-4'>
                <h3 className="lg:text-3xl font-bold xl:text-4xl text-center">Reading Time: {readingTime}</h3>
            </div>
            <div>
                <h2 className="text-3xl text-center font-bold">Bookmarked Blogs: {bookmarks.length}
                    {
                        bookmarks.map((bookmark, index) => <Bookmark key={`${index}${bookmark.id}`} bookmark={bookmark}></Bookmark>)
                    }
                </h2>
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;