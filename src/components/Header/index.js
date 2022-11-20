import { HeaderStyle, SearchProfile, IconHeader} from "./style"
import { useState } from "react"
import background from '../../assets/background.png';


export default function Header(props) {
    
    const[user,setUser] = useState('');
    
    const handleGetUser = async () => {
        console.log(user);
        props.handleCurrentUser(user);
    }

    document.addEventListener("keypress", function(e){
    
        if(e.key === "Enter"){
            const btn = document.querySelector("#btn");

            btn.click();
        }

    })

    return ( 
        <HeaderStyle>
                    <div>
                        <a href="/">
                            <IconHeader src={background} alt=""/>
                        </a>
                    </div>
            <SearchProfile>
                <div>
                    <input name='usuario' value={user} onChange={event => setUser(event.target.value)} placeholder='@ Username' autoComplete="off"/>
                    <button id="btn" type="submit" onClick={handleGetUser}>Buscar</button>
                </div>
            </SearchProfile>
        </HeaderStyle>
    )
}
