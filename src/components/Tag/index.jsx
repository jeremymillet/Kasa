import './Tag.scss';

function Tag({ tags }) {
    return (
        <div>
            <ul className='tag-container'>
                {tags.map((tag,index) => (
                    <li className='tag' key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    )
}


export default Tag
