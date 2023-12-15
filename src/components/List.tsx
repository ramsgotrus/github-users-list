import React, { FC, useEffect, HTMLProps } from 'react'

interface ArrayItem {
    id: number,
    title: string,
    isChecked: boolean,
}

interface ListProps {
    items: ArrayItem[],
    onClickhandle: (event: React.ChangeEvent<HTMLInputElement>) => void
}



const List: FC<ListProps> = ({ items, onClickhandle }) => {

    const handleSubmission = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault()
        onClickhandle && onClickhandle(event)
    }

    return (
        <div  >
            {items.map((item) => (
                <div className='flex'>
                    <div className='flex-initial w-10'>
                        <input  onChange={handleSubmission} id={item.id.toString()} key={Math.random()} checked={item.isChecked} type='checkbox' className='w-24 pl-2 cursor-pointer'/>
                    </div>
                    <div className='flexinitial w-100'>
                        <p >{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default List