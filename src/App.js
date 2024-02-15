import React, {useRef} from "react";
import emailjs from '@emailjs/browser'

const App=()=>{
  const form= useRef();
const sendEmail=(e)=>{
  e.preventDefault();

  emailjs.sendForm('service_64dhyd4', 'template_h9avqvn',form.current,{publicKey:'toCt8C2Jgviyl0kKH',
  })
  // emailjs
  // .sendFrom('YOUR_SERVICE_ID', 'YOUR_TEMPLATE-ID',form.current,{publickey:'YOUR_PUBLIC_KEY',
  // })
  .then(
  ()=>{
    console.log('SUCCESS!');
  },
  (error)=>{
    console.log('FAILED...',error.text);
  },
  );
};
  return(
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name"/>
      <label>Email</label>
      <input type="email" name="user_email"/>
      <label>Message</label>
      <textarea name="message"/>
      <input type="submit" value="send"/>
      <label>phonr number</label>
      <input type="number" name="phone}}"/>

    </form>
  )
}
export default App;