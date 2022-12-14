import React from 'react';
import {Card, CardItem, Body, H3, Text} from 'native-base';
import { Alert } from 'react-native';


export const NoteContent = ({note}) => {
    return (
        <Card>
            <CardItem>
            <Body>
                <H3>{note.item.title }</H3>    
            <Text>
                { note.item.NoteContent.length > 120 ? 
                '${note item content. substr(0, 120)...}'
                : note.item.content
                }
                
            </Text>
        </Body> 
        </CardItem>
    </Card>
    );
};