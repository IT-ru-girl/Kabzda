import React, {useState} from 'react';

import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import SelfControlledAccordion from './components/SelfControlledAccordion/SelfControlledAccordion';
import {UncontrolledRating} from './components/UncontrollesRating/UncontrolledRating';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';

function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [switchOn, setSwitchOn] = useState(false)
    // const onClickButtonHandler =()=>{
    //     setAccordionCollapsed(accordionCollapsed)
    // }

    return (
        <div className={'App'}>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <SelfControlledAccordion titleValue={'Menu'}/>
            <PageTitle title={'my friends'}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'Me'} accordionCollapsed={accordionCollapsed}
                       setAccordionCollapsed={setAccordionCollapsed}/>
            <OnOff on={switchOn} onChange={(on) => {
                setSwitchOn(on)
            }}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}


export default App;
