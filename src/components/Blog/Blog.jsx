import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {

    const { id, cover_img, author, author_img, title, posted_date, reading_time, hashtags } = blog
    return (
        <div className='mb-14  space-y-4 bg-fuchsia-200 p-6 rounded-4xl'>
            <img className='w-full mb-8 rounded-4xl' src={cover_img} alt={`Cover picture of the ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14 rounded-4xl' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2.5'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-400 font-bold bookmarkbtn'><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl font-extrabold">{title}</h2>
            <p>
                {
                    hashtags.map((hash, index) => <span className='mr-2' key={index}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;