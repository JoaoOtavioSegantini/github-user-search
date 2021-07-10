import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Navbar from 'core/components/Navbar'
import Search from 'pages/Search'

function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/">
                    <Home />
                </Route>

            </Switch>
        </BrowserRouter>
    )

}

export default Routes;