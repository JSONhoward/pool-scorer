import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { FaTimes, FaCircleNotch } from 'react-icons/fa'
import { CLOSE_MAIL } from '../../store'

const spinAnimation = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`

const ContactStyled = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: ${props => props.open ? 'flex' : 'none'};
flex-direction: column;
align-items: center;
justify-content: center;
height: 300px;
width: 300px;
font-family: 'Cabin', sans-serif;
color: white;
background-color: rgb(0,0,0,.9);
border-radius: 10px;
padding: .5rem;

p {
    font-size: 1.5rem;
    text-align: center;
}

button {
    height: 2rem;
    width: 4rem;
    margin: 1rem;
    font-family: 'Cabin', sans-serif;
    font-size: 1.5rem;
    background-color: white;
    box-shadow: 1px 1px 5px black;
    border: none;
    border-radius: 5px;
}
`

const ContactDiv = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin: 5px;
`

const ContactInput = styled.input`
text-align: center;
width: 90%;
font-family: 'Cabin', sans-serif;
border: ${props => props.border ? '2px solid red' : 'none'};
`

const ContactTextArea = styled.textarea`
border: ${props => props.border ? '2px solid red' : 'none'};
`

const Close = styled.div`
position: absolute;
top: 5px;
right: 5px;
cursor: pointer;
`

const Spinner = styled.div`
animation: ${spinAnimation} 2s linear infinite;
`

const ContactModal = ({ open, handle, reference }) => {
    const [email, setEmail] = useState({ from: '', subject: '', message: '' })
    const [sent, setSent] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        reference.current.focus()
    },[reference])

    const { from, subject, message } = email

    const sendMessage = () => {
        setSent(true)
        setLoading(true)
        fetch('https://us-central1-pool-scorer.cloudfunctions.net/emailMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from,
                subject,
                message
            })
        }).then(() => {
            setLoading(false)
        }).catch((err) => {
            console.error(err)
            setError(true)
            setLoading(false)
        })
    }

    const handleMessage = e => {
        setEmail({ ...email, [e.target.name]: e.target.value })
    }

    const validateEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const closeModal = type => {
        handle(type)
        setSent(false)
    }

    return (
        <ContactStyled open={open}>
            <Close onKeyUp={e => e.keyCode === 13 && closeModal(CLOSE_MAIL)} ref={reference} tabIndex='0' onClick={() => closeModal(CLOSE_MAIL)}><FaTimes color={'white'} size={'1.5rem'} /></Close>
            {
                sent ? (
                    <>
                        {
                            loading ? <Spinner><FaCircleNotch size={'3rem'} color={'white'} /></Spinner> : error ? (<p>Oops something went wrong :/</p>) : (<p>Message Sent!</p>)
                        }
                    </>
                )
                    :
                    (
                        <>
                            <ContactDiv>
                                <p><b>To: </b><em>jason@poolscorer.com</em></p>
                            </ContactDiv>
                            <ContactDiv >
                                <p><b>From: </b></p>
                                <ContactInput autoFocus minLength={5} name={'from'} onChange={handleMessage} placeholder='your email' type="text" border={from.length > 0 && !validateEmail(from)} required></ContactInput>
                            </ContactDiv>
                            <ContactDiv>
                                <p><b>Subject: </b></p>
                                <ContactInput name={'subject'} onChange={handleMessage} placeholder='optional' type="text"></ContactInput>
                            </ContactDiv>
                            <ContactDiv>
                                <ContactTextArea maxLength={500} name={'message'} onChange={handleMessage} cols='50' rows='5' border={message.length > 0 && message.length < 3} required></ContactTextArea>
                            </ContactDiv>
                            <button onClick={sendMessage} disabled={!validateEmail(from) || message.length < 3}>Send</button>
                        </>
                    )
            }
        </ContactStyled>
    )
}

export default ContactModal
