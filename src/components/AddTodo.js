import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, StatusBar } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { connect } from "react-redux";
import { textInputChanged, addTodo } from "../actions";

class AddTodo extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', marginTop: 35, backgroundColor: '#eaeaea' }}>
                <TextInput
                    value={this.props.textInput}
                    onChangeText={text => this.props.textInputChanged(text)}
                    placeholder={'ADD TASK'}
                    placeholderTextColor='#5e5554'
                    style={{ height: 50, flex: 1, alignContent: 'center', paddingLeft: 10 }}
                />

                <TouchableOpacity onPress={() => this.props.addTodo(this.props.textInput)}>
                    <View style={{
                        alignContent: 'center',
                        paddingRight: 10,
                        height: 50,
                        justifyContent: 'center'
                    }} >
                        <Ionicons name='ios-add-circle-outline' size={35} />

                    </View>

                </TouchableOpacity>

            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        textInput: state.todo.textInput
    }
}

export default connect(mapStateToProps, { textInputChanged, addTodo })(AddTodo);