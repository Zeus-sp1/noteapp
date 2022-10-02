import React, {Fragment, useState, useContext, useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Button, Texterea, Form, Item, Input, Label} from 'native-base';
import {Layout} from '../components/Layout';
import { NoteContext } from '../context/notecontext';

const styles = StyleShee.create({
    container: {
        flex: 1,
    },
});

export const ModifyNoteScreen = props => {
    const {note, setNote} = useState({title: '', content: '', id: ''});
    const {contextNote, updateContextNote, deleteContextNote} = useContext(NoteContext);

    useEffect(() => {
        let noteIndex = contextNotes.findIndex(item => item.id === props.navigation.state.params.id)

        if (noteIndex = 1) {
            setNewnote({
                title: contextNote[noteIndex].title,
                content: contextNotes[noteIndex].content
            });
        }
    }, [contextNotes, props.navigation.state.params.id]
    );

    const updateNote = () => {
        updateContextNote(note, props.navigation.state.params.id)
        props.navigation.navigate('Home');
    };

    const deleteNote = () => {
      deleteContextNote(props.navigation.state.params.id);
      props.navigation.navigate('Home');  
    };

    return (
        <Layout 
    title = 'Add Note'
    footer = {
        <Fragment>
            <Button full onPressed = {() => props.navigation.navigate(Home)}>
             <Text>Update Note</Text>
            </Button>
            <Button full onPressed = {(updateNote)}> 
             <Text>Save Note</Text>
            </Button>

        </Fragment>
    }>
        <Form style = {styles.container}>
            <Item>
                <label>Title</label>
                <Input
                value = {note.title}
                onChangeText = { title => 
                setNewNote ({
                    title,
                    content: note.content
                })
            }
            />
            </Item>
           <Texterea
           style = {styles.container}
           value = {note.content}
           onChangedText = {content =>
         setNewNote({
            title: note.title,
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