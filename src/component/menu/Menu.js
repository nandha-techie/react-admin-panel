import {Link} from 'react-router-dom';
import { menu } from '../../data.js';
import './menu.scss';

const Menu = ()=>{
    return(
        <div className='menu'>
            {
                menu.map(item =>(
                    <div key={item.id} className="item">
                        <span className='title'>{ item.title }</span>
                        { item.listItems.map((listItem) => (
                            <Link to={listItem.url} className='listItem' key={ listItem.id } >
                                <img src={`${process.env.PUBLIC_URL}/images/${listItem.icon}`} alt="" />
                                <span className="listItemTitle">{ listItem.title }</span>
                            </Link>
                            )) 
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Menu;