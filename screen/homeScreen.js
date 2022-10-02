import React, {useEffect, useState, useContext, useRef} from 'react';
import {Text, Flatlist, TouchableOpacity} from 'react-native';
import {withNavigationFocus} from 'react-navigation';
import {Button} from 'native-base';
import {Layout} from '../component/layout';
import { NoteContent } from '../component/noteconstant';
import { NoteContext } from '../context/notecontext';

const HomeScreen = props => {
    const prevPros = useRef(false);
    const {getContextNotes} = userContext(NoteContext);
    const {notes, setNotes} = userState();

    useEffect(() => {
        const getData = () => {
            if (prevProps.isFocused === props.isFocused) {
                const getNotes = getContextNotes();
                setNotes(getNotes);
            }
            

        };
        getData();
    },[getContextNotes, props.isFocused]);

    return (
        <Layout
        title='My Notes'
        footer={
            <Button full onPress = {() => props.navigation.navigate('AddNoteScreen')}>
                <Text>Add Note</Text>
            </Button>
        }
        >
        <Flatlist
            data = {notes}
            keyExtractor = {note => note.id}
            renderItem = {note => (
                <TouchableOpacity
                onPress= {() => 
                props.navigation.navigate('Module', {
                    id: note.item.id,
                })}
                >
                    <NoteContent note ={{...note}} />
                </TouchableOpacity>

            
            )}
        />
        </Layout>

    );
};

export default withNavigationFocus(HomeScreen);