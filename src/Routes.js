import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './components/Posts';

const Routes = () => {

    return (
        <div>
            <Router>
                
                   
                    <div>
                        <Switch>
                            <Route exact path="/" > <Posts /> </Route>
                            <Route exact path="/home" > <Posts /> </Route>
                      
                        </Switch>
                    </div>
                    </Router>   
            </div>   
           
       
    );
    }


export default Routes;