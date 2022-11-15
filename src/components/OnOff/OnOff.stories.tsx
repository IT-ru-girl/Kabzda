import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import {OnOff} from './OnOff';
import {Rating} from '../Rating/Rating';
import {action} from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'OnOff',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof OnOff>;

const callback = action(' on or off clicked')

export const OnMode = () => <OnOff on={true} onChange={callback}/>
export const OffMode = () => <OnOff on={false} onChange={callback}/>

export const ModeChanging =()=> {
    const [value, setValue] = useState<boolean>(true);
    return (
        <OnOff on={value} onChange={setValue}/>
    )
}
