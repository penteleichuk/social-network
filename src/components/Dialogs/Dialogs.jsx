import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Petya'},
    ];
    const messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your samurai'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ];

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsData.map(({name, id, ...u}) => <DialogItem name={name} id={id}/>)}
            </div>
            <div className={style.messages}>
                {messagesData.map(({message, ...m}) => <Message message={message}/>)}
            </div>
        </div>
    )
}

export default Dialogs;