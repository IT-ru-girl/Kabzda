import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';



import {UncontrolledRating} from './UncontrolledRating';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Uncontrolled Rating',
    component: UncontrolledRating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof UncontrolledRating>;



export const SelfCollapsed = () => <UncontrolledRating />

export const ChangeRating =()=> {
    const [value, setValue] = useState<number>(0);
    return (
        <UncontrolledRating/>
    )
}
