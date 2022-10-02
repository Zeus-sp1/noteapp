import React, {createContext, Component} from 'react';
import { Alert, AsyncStorage } from 'react-native';

export const erroHandler = e =>{
    Alert.alert(
        'Notes Error',
        'soory about the issue: $(e)',
        [
            {
                text:'ok'
            },
        ],
        {cancelable: false}
    )
}

export const NoteContext = creatContext();

export class NoteProvider extends Component {
    constructor(props) {
        super(props);
        
            
            this.getNotetextNotes = () => {
                try {
                    const stooredNotes = AsyncStorage.getItem('anotes');
                    if (stooredNotes) {
                        this.setState({contextNotes: [...JSON.parse(storedNotes)]})
                    }
                    return this.state.contextNotes;
                } catch (error) {
                    errorHndler(error);
                }
                
            };
            this.addContextNote = newNote => {
                const {contextNotes} = this.state;
                contextNotes.push(newNote);
                this.setState({contextNotes}, async() => await this.StoreData());

            };
            this.updateContextNote = (note, id) => {
                const {contextNotes} = this.state;
                const noteIndex = contextNotes.findIndex(item => item.id == id);
                contextNotes[noteIndex].title = note.title;
                contextNotes[noteIndex].content = note.content;
                this.setState({contextNotes}, async() => await this.StoreData());
            };
            this.deleteContextNote = id => {
                const {contextNotes: oldNotes} =this.state;
                const contextNotes = oldNotes.filter(note => note.id !== id);
                this.setState({contextNotes}, async() => await this.StoreData());
            };
            this.state = {
                addContextNote: this.addContextNote,
                getNotetextNotes: this.getNotetextNotes,
                updateContextNote: this.updateContextNote,
                deleteContextNote: this.deleteContextNote,
                contextNotes: []
            };

        }

        StoreData = async() => {
            try{
                await AsyncStorage.setItem(
                    'anotes',
                    JSON.stringify({...this.state.contextNotes}),

                );
            } catch(error) {
                erroHandler(error);
            }
        
    };

    render() { 
        return(
            <NoteContext.Provider value = {this.state}>
                {this.props.children}
            </NoteContext.Provider>
        )
    }
};


