import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import {Accordion} from './Accordion';

import {action} from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Accordion>;

const callback = action(' on or off clicked')

export const Collapsed = () => <Accordion titleValue={'Menu'} accordionCollapsed={true} setAccordionCollapsed={callback} />
export const UnCollapsed = () => <Accordion titleValue={'Menu'} accordionCollapsed={false} setAccordionCollapsed={callback}/>

export const ModeChanging =()=> {
    const [accordionCollapsed, setAccordionCollapsed ] = useState<boolean>(true);
    return (
        <Accordion titleValue={'menu'} accordionCollapsed={accordionCollapsed} setAccordionCollapsed={() => {
            setAccordionCollapsed(!accordionCollapsed)
        }} />
    )
}
