import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    Typography,
} from "@material-ui/core";
import Form from "./Form/Form";
import List from "./List/List";
import useStyles from "./styles";

const Main = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                title="Expense Tracker"
                subheader="Powered By Speechly"
            />

            <CardContent>
                <Typography align="center" variant="h5">
                    Total Balance $100
                </Typography>

                <Typography
                    style={{
                        lineHeight: "1.5em",
                        marginTop: "20px",
                    }}
                    variant="subtitle1"
                >
                    Try saying: add Income for 100$ Category Salary for
                    Monday...
                </Typography>
                <Divider />
                <Form />
            </CardContent>

            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Main;
