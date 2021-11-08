import React from 'react';
import style from "./Contacts.module.css";
import styleContainer from "../Common/Styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <h2 className={style.title}>Contacts</h2>
<form   className={`${styleContainer.container} ${style.contactsArea}`}>
<input className={style.allInput}/>
  <input className={style.allInput}/>
   <textarea className={style.textArea}></textarea>
</form>
          <div className={style.button}>  <button>Отправить</button> </div>
        </div>
    );
};

export default Contacts;