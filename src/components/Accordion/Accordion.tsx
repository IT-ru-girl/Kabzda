import React from 'react';

type AccordionPropsType = {
    titleValue: string
    accordionCollapsed: boolean
    setAccordionCollapsed: (accordionCollapsed: boolean) => void
}


 export function Accordion(props: AccordionPropsType) {
    console.log('SelfControlledAccordion rendered')
    return (
        <div>
            <AccordionTitle accordionCollapsed={props.accordionCollapsed}
                            setAccordionCollapsed={props.setAccordionCollapsed} title={props.titleValue}/>
            {!props.accordionCollapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitleType = {
    title: string
    setAccordionCollapsed: (accordionCollapsed: boolean) => void
    accordionCollapsed: boolean
}

function AccordionTitle(props: AccordionTitleType) {
    console.log('AccordionTitle rendered')
    return (
        <div>
            <h3 onClick={() => {
                props.setAccordionCollapsed(!props.accordionCollapsed)
            }}> {props.title}</h3>
        </div>
    );
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

