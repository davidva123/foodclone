import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import RecipeHome from "./pages/RecipeHome/RecipeHome";
import NotFound from "./pages/PageNotFound/PageNotFound";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import { RecipeContext } from "././contexts/RecipeContext";
// This import is the old home page
// For just now i've rendered the old homepage to / although ultimately we will need to split it up. Navigation should probably go in here and
import FoodClone from "./FoodClone";

const App = () => {
  const recipes = useContext(RecipeContext);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} render={() => <FoodClone />} />
          <Route
            exact
            path={ROUTES.RECIPES_HOME}
            render={() => <RecipeHome />}
          />
          <Route
            exact
            path={`${ROUTES.RECIPES_HOME}/:recipeId`}
            render={(routeProps) => <RecipeDetail {...routeProps} recipe={recipes} />}
          />
          <Route render={() => <NotFound />} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
