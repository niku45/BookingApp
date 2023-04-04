import Header from './Header';
import {Outlet} from "react-router-dom";
//Layout for loginpage
//flex-col = makes it one big column rather than rows
export default function Layout() {
  return (
    <div className='p-4 pz-8 flex flex-col min-h-screen'>
        <Header/>
        <Outlet/>
    </div>
  )
}
