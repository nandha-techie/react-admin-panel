import { topDealUsers  } from '../../data';
import './topBox.scss';

const TopBox = ()=>{
    return(
        <div className="topBox">
            <h2>Top Deals</h2>
            <div className="list"> 
            {
                topDealUsers.map((user, index) => (
                    <div className='listItem' key={index}>
                        <div className='user'>
                            <img src={ user.img } alt=""></img>
                            <div className='userText'>
                                <span className="username">{ user.username }</span>
                                <span className="email">{ user.email }</span>
                            </div>  
                        </div>
                        <span className='amount'>${ user.amount }</span>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default TopBox;