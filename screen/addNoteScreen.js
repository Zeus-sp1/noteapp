import React, {Fragment, useState, useContext} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Button, Texterea, Form, Item, Input, Label} from 'native-base';
import {Layout} from '../components/Layout';
import { NoteContext } from '../context/notecontext';

const styles = StyleShee.create({
    container: {
        flex: 1,
    },
});

export const AddNoteScreen = props => {
    const { newNote, setNewNote} = useState({title: '', content: '', id: ''});
    const {addContextNote} = useContext(NoteContext);

    const saveNote = () => {
        addContextNote(newNote);
        props.NavigationPreloadManager.navigator('Home');

    };
    return (
        <Layout 
    title = 'Add Note'
    footer = {
        <Fragment>
            <Button full onPressed = {() => props.navigation.navigate(Home)}>
             <Text>Cancel</Text>
            </Button>
            <Button full onPressed = {(saveNote)}> 
             <Text>Save Note</Text>
            </Button>

        </Fragment>
    }>
        <Form style = {styles.container}>
            <Item>
                <label>Title</label>
                <Input
                value = {newNote.title}
                onChangeText = { title => 
                setNewNote ({
                    title,
                    contnt: newNote.content
                })
            }
            />
            </Item>
           <Texterea
           style = {styles.container}
           value = {newNote.content}
           onChangedText = {content =>
         setNewNote({
            title: newNote.title,
            content,
            id: new Date().getMilliseconds().toString(),
         })
         }  
         bordered
         placeholder = 'welcome to the new note'/>
        </Form>

        </Layout>
    );
               
    
};