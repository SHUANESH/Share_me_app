import './topBar.scss'
import HomeIcon from '@mui/icons-material/Home';

export default function Topbar({ menu, setMenu }) {
    return (
        <div className={"topbar "+(menu && "active")} >
            <div className="warpper">
                <div className="left">
                <div className="itemContainer">
                <HomeIcon/>
                <a className="icon" href="#home"><Home/></a>
                    </div>
                    <div className="itemContainer">
                        <a className="icon" href="#home"><SignIp/></a>
                    </div>
                </div>
            </div>

        </div>
    )
}
