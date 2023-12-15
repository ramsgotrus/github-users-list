import React, { FC, useState } from 'react'
import ArrayList from '../../../components/ArrayList'

interface MoveList {
    className?: string
}

enum Side { Right, Left }

interface ListItem {
    id: number,
    title: string,
    isChecked: boolean
    side: Side,
}

const MoveList: FC<MoveList> = ({ className }) => {

    const [items, setItems] = useState<ListItem[]>([{ id: 1, title: '1-Control the padding on one side of an element using the', isChecked: false, side: Side.Left },
    { id: 2, title: '2-Control the padding on one side of an element using the', isChecked: false, side: Side.Left },
    { id: 3, title: '3-Control the padding on one side of an element using the', isChecked: false, side: Side.Left },
    { id: 4, title: '4-Control the padding on one side of an element using the', isChecked: false, side: Side.Left },
    { id: 5, title: '5-Control the padding on one side of an element using the', isChecked: false, side: Side.Left },
    { id: 6, title: '6-Control the padding on one side of an element using the', isChecked: false, side: Side.Left },
    { id: 7, title: '7-Control the padding on one side of an element using the', isChecked: false, side: Side.Left },
    { id: 8, title: '8-Control the padding on one side of an element using the', isChecked: false, side: Side.Left },
    { id: 9, title: '9-Control the padding on one side of an element using the', isChecked: false, side: Side.Left },
    { id: 10, title: '10-Control the padding on one side of an element using the', isChecked: false, side: Side.Left },
    { id: 11, title: '11-Control the padding on one side of an element using the', isChecked: false, side: Side.Left },
    { id: 12, title: '12-Control the padding on one side of an element using the', isChecked: false, side: Side.Left },
    { id: 13, title: '13-Control the padding on one side of an element using the', isChecked: false, side: Side.Right }])

    const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setItems(items.map((item) => {
            if (item.id === parseInt(event.currentTarget.id)) {
                return { ...item, isChecked: !item.isChecked}
            }
            else return item
        }))
    }

    const handleMoveRightItems = (event: React.MouseEvent<HTMLElement>): void => {
        setItems(items.map((item) => {
            if (item.isChecked) {
                console.log(item)
                return { ...item, side: Side.Right, isChecked:!item.isChecked }
            }
            else return item
        }
        ))
    }

    const handleMoveLeftItems = (event: React.MouseEvent<HTMLElement>): void => {
        setItems(items.map((item) => {
            if (item.isChecked) { return { ...item, side: Side.Left, isChecked:!item.isChecked } } else return item
        }))
    }

    return (<div>
        <ArrayList items={items.filter((item) => item.side === Side.Left)} handleOnClick={handleChangeEvent} />
        <div className='grid'>
            <button disabled={items.filter((item) => item.side === Side.Left && item.isChecked === true).length === 0} onClick={handleMoveRightItems}>Right</button>
            <button onClick={handleMoveLeftItems}>Left</button>
        </div>
        <ArrayList items={items.filter((item) => item.side === Side.Right)} handleOnClick={handleChangeEvent} />
    </div>)
}

export default MoveList