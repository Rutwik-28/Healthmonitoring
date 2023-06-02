import OPTION1 from "../../Pages/Option-1"
import OPTION2 from "../../Pages/Option-2"
import OPTION3 from "../../Pages/Option-3"
import OPTION4 from "../../Pages/Option-4"
import OPTION5 from "../../Pages/Option-5"
import {BrowserRouter, Route, Routes} from "react-router-dom";

function AppRoutes(){
    return (
        
            <Routes>
                <Route path="/" element={<OPTION1/>}></Route>
                <Route path="/op1" element={<OPTION2/>}></Route>
                <Route path="/op2" element={<OPTION3/>}></Route>
                <Route path="/op3" element={<OPTION4/>}></Route>
                <Route path="/op4" element={<OPTION5/>}></Route>

            </Routes>
        
    )
 }
 export default AppRoutes