import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from "react-redux";

class TodoList extends Component {

    renderList = () => {
        return this.props.todoList.map(todo => {
            return (
                <TouchableOpacity
                    key={todo.id}
                    onPress={() => { }}
                >
                    <Text style={{ fontSize: 24 }}> {todo.text} </Text>
                </TouchableOpacity>
            )
        })
    }

    render() {
        return (
            <View>
                {this.renderList()}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        todoList: state.todo.list
    }
}

export default connect(mapStateToProps)(TodoList)
