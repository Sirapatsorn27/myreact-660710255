import React, { use } from "react";

function JSXExamples() {

     const greeting = <h1>Hello, react with JSX!</h1>;
     const name = 'Sirapatsorn';
     const age = 20;

     const currentYear = new Date().getFullYear();

     const user = {
          firstName: 'Sirapatsorn',
          lastName: 'Rujira',
          age: 20,
          hobbies: ['sleep', 'eat', 'test some matcha']
     };

     const formatName = (user) => {
          return `${user.firstName} ${user.lastName}`
     };

     const isLoggedIn = true;
     const hasNotification = 3;

     return (
          <div className="jsx-examples">
               <h1>ตัวอย่างการใช้ JSX</h1>

               <section>
                    <h2>การแสดงผลข้อมูล</h2>
                    {greeting}
                    <p>สวัสดีตุณ {name} อายุ {age} ปี</p>
                    <p>ปีนี้คือปี {currentYear} </p>
                    <p>ชื่อจริง: {formatName(user)}</p>
               </section>

               <section>
                    <h2> Attributes ใน JSX</h2>

                    <div className="card">
                         <p className="text-primary">ใช้ className แทน class</p>
                    </div>

                    <button
                         onClick={() => alert('คลิ๊กแล้ว!')}
                         onMouseEnter={() => console.log('เมาส์เข้า!')}>
                         Hover or Click
                    </button>

                    <div style={{
                         backgroundColor: '#E8F5E8',
                         padding: '15px',
                         borderRadius: '8px',
                         marginTop: '10px'
                    }}>
                         <p style={{ color: '#2D4A2B', fontWeight: 'bold' }}>
                              Inline styles ใช้ object
                         </p>
                    </div>
               </section>

               <section>
                    <h2> Conditional Rendering</h2>

                    <p>
                         สถานะ: {isLoggedIn ? 'ล็อกอินแล้ว' : 'ยังไม่ได้ล็อกอิน'}
                    </p>

                    {hasNotification > 0 && (
                         <div className="notification">
                              คุณมีการแจ้งเตือน {hasNotification} รายการ
                         </div>
                    )}

                    {(() => {
                         if (user.age >= 18) {
                              return <p> {formatName(user)} เป็นผู้ใหญ่แล้ว</p>;
                         } else {
                              return <p> {formatName(user)} คุณยังไม่บรรลุนิติภาวะ</p>;
                         }
                    })()}
               </section>


          </div>
     )
}
export default JSXExamples;