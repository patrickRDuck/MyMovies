import { Container } from './styles'
import { RiAddLine, RiCloseFill } from 'react-icons/ri'
import React, { ChangeEvent, useState } from 'react'

interface IProps {
    isNew?: boolean
    title?: string
    functionSaveTagOnClick?: (name: string) => void
    functionDeleteTagOnClick?: () => void
    functioSetState?: (value: React.SetStateAction<string>) => void
    [key: string]: unknown
}

export function NotemItem({isNew = false, title, functioSetState, functionSaveTagOnClick, functionDeleteTagOnClick, ...rest }: IProps) {
    const [tagName, setTagName] = useState<string>()

    return(
        <Container $isNew={isNew}>
            <input 
             type='text' 
             value={isNew ? tagName : title} 
             readOnly={!isNew} 
             {...rest} 
             onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setTagName(e.target.value)
                if(functioSetState) {
                    functioSetState(e.target.value)
                }
             }}
            />
            {
                isNew ?
                <button 
                 type='button'
                 onClick={() => {
                   if(typeof tagName !== 'undefined' && functionSaveTagOnClick) {
                       functionSaveTagOnClick(tagName)
                        
                        setTagName('')

                        if(functioSetState) {
                            functioSetState('')
                        }
                    }
                 }}
               >
                <RiAddLine size={22} />
               </button>
               : 
               <button 
                 type='button'
                 onClick={() => {
                     if(functionDeleteTagOnClick) {
                         functionDeleteTagOnClick()
                     }
                 }}
               >
                <RiCloseFill size={22} />
               </button>
            }
        </Container>
    )
}