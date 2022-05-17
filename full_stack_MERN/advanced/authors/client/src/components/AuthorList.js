import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Container,
    Button,
} from "@material-ui/core";

const AuthorList = (props) => {
    const { authors, setAuthors } = props;

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch((err) => {
                console.log("Error with the getAll request", err);
            });
    }, []); //Remember to stop the madness with an empty array!

    const handleDelete = (authorId) => {
        axios
            .delete(`http://localhost:8000/api/authors/${authorId}`)
            .then((res) => {
                console.log(res);
                setAuthors(authors.filter((author) => author._id !== authorId));
            })
            .catch((err) => {
                console.log("Error with the delete request", err);
            });
    };

    return (
        <Container component={Paper}>
            <Link to="/author/add" align="left">
                Add an author
            </Link>
            <h3 align="left">We have quotes by:</h3>
            <Table className="DisplayTable">
                <TableHead>
                    <TableRow>
                        <TableCell>Author</TableCell>
                        <TableCell>Actions Available</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {authors.map((author, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{author.name}</TableCell>
                                <TableCell>
                                    <Button variant="contained">Edit</Button>
                                    <Button
                                        variant="contained"
                                        onClick={() => handleDelete(author._id)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Container>
    );
};

export default AuthorList;
