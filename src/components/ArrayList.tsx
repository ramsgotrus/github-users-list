import React, { FC } from 'react'


enum Side { Right, Left }

interface ListItem {
    id: number,
    title: string,
    isChecked: boolean
    side: Side,
}

interface ArrayListProps {
    items: ListItem[],
    handleOnClick: (event: React.ChangeEvent<HTMLInputElement>) => void
}



const ArrayList: FC<ArrayListProps> = ({ items, handleOnClick }) => {

    const onClickHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault()
        handleOnClick && handleOnClick(event)
    }

    return (<div className='grid bg-powderblue'>
        {items && items.map((item) => (
            <React.Fragment>
                <input id={item.id.toString()} key={Math.random()} checked={item.isChecked} type='checkbox' onChange={onClickHandler} />
                <p>{item.title}</p>
            </React.Fragment>
        ))}

    </div>)
}

export default ArrayList