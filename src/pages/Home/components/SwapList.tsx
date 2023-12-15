import React, { FC, useEffect, useState } from 'react'
import { List } from '../../../components/index'

interface SwapListProps {
    className?: string
}

enum Side { Right, Left }

interface ArrayItem {
    id: number,
    title: string,
    isChecked: boolean,
    side: Side
}
const SwapList: FC<SwapListProps> = ({ }) => {

    const [arrayItems, setArrayItems] = useState<ArrayItem[]>([
        { id: 1, title: '1-Control the padding on one side of an element using the', isChecked: false, side: Side.Left },
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
        { id: 13, title: '13-Control the padding on one side of an element using the', isChecked: false, side: Side.Left }
    ])

    const handleCheckRemoveItems = (event: React.ChangeEvent<HTMLInputElement>) => {
        const tempRemoveItem = arrayItems.find(item => item.id === parseInt(event.currentTarget.id))
        if (!!tempRemoveItem && tempRemoveItem.isChecked) {
            tempRemoveItem.isChecked = false
            if (tempRemoveItem.side === Side.Left) {
                setArrayItems(arrayItems.map((item) => item.id === tempRemoveItem.id ? tempRemoveItem : item))
            }
            else if (tempRemoveItem.side === Side.Right) {
                setArrayItems(arrayItems.map((item) => item.id === tempRemoveItem.id ? tempRemoveItem : item))
            }
        }
        else if (!!tempRemoveItem) {
            tempRemoveItem.isChecked = true
            if (tempRemoveItem.side === Side.Left) {
                setArrayItems(arrayItems.map((item) => item.id === tempRemoveItem.id ? tempRemoveItem : item) as ArrayItem[])
            }
            else if (tempRemoveItem.side === Side.Right) {
                setArrayItems(arrayItems.map((item) => item.id === tempRemoveItem.id ? tempRemoveItem : item) as ArrayItem[])
            }

        }
    }

    const moveRightList = (event: React.MouseEvent<HTMLElement>) => {
        setArrayItems(arrayItems.map(item => {
            if (item.isChecked === true) { return { ...item, side: Side.Right, isChecked: false } }
            else return item
        }) as ArrayItem[])
    }

    const moveLeftList = (event: React.MouseEvent<HTMLElement>) => {
        setArrayItems(arrayItems.map(item => {
            if (item.isChecked === true) { return { ...item, side: Side.Left, isChecked: false } }
            else return item
        }) as ArrayItem[])

    }


    return (<div className='grid grid-flow-col auto-cols-[minmax(300, 2fr)] gap-1 align justify-items-center bg-gray-100'>
        <div >
            <h3 className='pt-5 pb-5 rounded-lg'>List 1</h3>
            <List items={arrayItems.filter((item) => item.side == Side.Left)} onClickhandle={handleCheckRemoveItems} />
        </div>
        <div className='grid grid-flow-row-3 gap-2 pb-10'>
            <h3>List 2</h3>
            <button onClick={moveRightList} className='rounded-md bg-black text-white w-28 h-10'>{'>>'}</button>
            <button onClick={moveLeftList} className='rounded-md bg-black text-white w-28 h-10'>{'<<'}</button>
        </div>
        <div >
            <h3>List 3</h3>
            <List items={arrayItems.filter((item) => item.side === Side.Right)} onClickhandle={handleCheckRemoveItems} />
        </div>
    </div>)
}
export default SwapList