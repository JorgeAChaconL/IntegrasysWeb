import {Navigate, Route} from 'react-router-dom'

export default function PrivateRoute(props) {

    const user = null;

    if(!user) return <Navigate to=''/>

  return (
    <Route {...props}/>

  )
}
