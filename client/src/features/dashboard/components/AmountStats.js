import UsersIcon from "@heroicons/react/24/outline/UsersIcon"
import { NavLink,  Routes, Link , useLocation} from 'react-router-dom'
function AmountStats(){
    return(
        <div className="stats bg-base-100 shadow">
            <div className="stat">
                <div className="stat-title">Restorage Amount</div>
                <div className="stat-value">150</div>
                <div className="stat-actions">
                <Link to={'/app/welcome'}><button className="btn btn-xs" >View Restorage</button> </Link>
                </div>
                <div className="stat-figure invisible md:visible">
                    <UsersIcon className='w-8 h-8'/>
                </div>
            </div>
            
            <div className="stat">
                <div className="stat-title">Family Members</div>
                <div className="stat-value">3</div>
                <div className="stat-actions">
                    <button className="btn btn-xs">View Members</button> 
                </div>
                <div className="stat-figure invisible md:visible">
                    <UsersIcon className='w-8 h-8'/>
                </div>
            </div>
        </div>
    )
}

export default AmountStats