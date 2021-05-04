import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@material-ui/core";
import { useContext, useState } from "react";
import { ExpenseTrackerContext } from "../../../context/context";
import useStyles from "./styles";
import { v4 as uuidv4 } from "uuid";
import {
    expenseCategories,
    incomeCategories,
} from "../../../constants/categories";
import { formatDate } from "../../../utils/formatDate";
const initialState = {
    ammount: "",
    category: "",
    type: "Income",
    date: formatDate(new Date()),
};

const Form = () => {
    const classes = useStyles();

    const [formData, setFormData] = useState(initialState);

    const { addTransaction } = useContext(ExpenseTrackerContext);

    const createTransaction = () => {
        const transaction = {
            ...formData,
            ammount: Number(formData.ammount),
            id: uuidv4(),
        };

        addTransaction(transaction);
        setFormData(initialState);
    };

    const selectedCategories =
        formData.type === "Income" ? incomeCategories : expenseCategories;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    ...
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select
                        value={formData.type}
                        onChange={e =>
                            setFormData({ ...formData, type: e.target.value })
                        }
                    >
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={formData.category}
                        onChange={e =>
                            setFormData({
                                ...formData,
                                category: e.target.value,
                            })
                        }
                    >
                        {selectedCategories.map(c => (
                            <MenuItem key={c.type} value={c.type}>
                                {c.type}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    value={formData.ammount}
                    onChange={e =>
                        setFormData({
                            ...formData,
                            ammount: e.target.value,
                        })
                    }
                    type="number"
                    label="Amount"
                    fullWidth
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    label="Date"
                    fullWidth
                    value={formData.date}
                    onChange={e =>
                        setFormData({
                            ...formData,
                            date: formatDate(e.target.value),
                        })
                    }
                />
            </Grid>
            <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                fullWidth
                onClick={createTransaction}
            >
                Create
            </Button>
        </Grid>
    );
};

export default Form;
