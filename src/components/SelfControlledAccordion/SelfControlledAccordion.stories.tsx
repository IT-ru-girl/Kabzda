import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import  {SelfControlledAccordion} from './SelfControlledAccordion';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Self Contr Acc',
    component: SelfControlledAccordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof SelfControlledAccordion>;



export const SelfCollapsed = () => <SelfControlledAccordion titleValue={'Menu'}/>

export const ChangeRating =()=> {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <SelfControlledAccordion titleValue={'Menu'}/>
    )
}
