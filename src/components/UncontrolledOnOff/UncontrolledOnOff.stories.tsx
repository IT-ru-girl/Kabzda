import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';




import {action} from '@storybook/addon-actions';
import UncontrolledOnOff from './UncontrolledOnOff';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof UncontrolledOnOff>;

const callback = action(' on or off clicked')

export const OnOffMode = () => <UncontrolledOnOff onChange={callback}/>

export const ModeChanging =()=> {
    const [on, setOn] = useState<boolean>(true);
    return (
        <UncontrolledOnOff onChange={setOn}/>
    )
}
