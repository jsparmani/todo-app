import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class TodoApp extends Component {


    render() {
        return (
            <View style={styles.container}>
                <AddTodo />
                <TodoList />
            </View>
        );
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1, margin: 10
    }
});