import { Grid } from "@material-ui/core"
import Details from "./components/Details/Details"
import Main from "./components/Main/Main"
import useStyles from './styles'
const App = () => {
    const classes = useStyles()


    return (
        <div>
            <Grid
                className={classes.grid}
                style={{ height: "100vh" }}
                container spacing={0}
                alignContent="center"
                justify="center"
            >
                <Grid item xs={12} sm={4}>
                    <Details title="Income" />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Main />
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Details title="Expense" />
                </Grid>
            </Grid>
        </div>
    );
};

export default App;