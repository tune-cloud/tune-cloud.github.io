import {Search} from "react-bootstrap-icons";
import {useHistory} from "react-router-dom";

export default function MobileSearchBar() {
    const history = useHistory();
    return (
        <div className="input-group w-75">
            <span className="input-group-text" id="basic-addon1">
                <Search />
            </span>
            <input type="text" className="form-control" placeholder="Search for an artist"
               aria-label="Input group example" aria-describedby="basic-addon1"
               onFocus={()=>history.push('/search')}
            />
    </div>)
}
