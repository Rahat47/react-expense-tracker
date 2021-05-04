import React, { useContext } from "react";
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
import { ExpenseTrackerContext } from "../../../context/context";

const List = () => {
    const classes = useStyles();

    const { deleteTransaction, transactions } = useContext(
        ExpenseTrackerContext
    );

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
                                onClick={() =>
                                    deleteTransaction(transaction.id)
                                }
                                edge="end"
                                aria-label="Delete"
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
