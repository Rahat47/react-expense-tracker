import React from "react";
import useStyles from "./styles";
import {
    Avatar,
    IconButton,
    List as MUIList,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";

const List = () => {
    const classes = useStyles();

    const transactions = [
        {
            id: 1,
            type: "Income",
            category: "Salary",
            ammount: 100,
            date: "Tue May 04 2021",
        },
        {
            id: 2,
            type: "Expense",
            category: "Home",
            ammount: 50,
            date: "Tue May 04 2021",
        },
        {
            id: 3,
            type: "Income",
            category: "Business",
            ammount: 150,
            date: "Tue May 04 2021",
        },
    ];

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map(transaction => (
                <Slide
                    direction="down"
                    in
                    mountOnEnter
                    unmountOnExit
                    key={transaction.id}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                className={
                                    transaction.type === "Income"
                                        ? classes.avatarIncome
                                        : classes.avatarExpense
                                }
                            >
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={transaction.category}
                            secondary={`$${transaction.ammount} - ${transaction.date}`}
                        />
                        <ListItemSecondaryAction>
                            <IconButton
                                edge="end"
                                aria-label="Delete"
                                onClick=""
                            >
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    );
};

export default List;
