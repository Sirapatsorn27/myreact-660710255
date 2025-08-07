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

                <section>
                <h2>📋 การแสดงผล Lists</h2>
                <h3>งานอดิเรกของ {user.firstName}:</h3>
                <ul>
                    {user.hobbies.map((hobby, index) => (
                        <li key={index}>
                            {index + 1}. {hobby}
                        </li>
                    ))}
                </ul>

                <div className="product-list">
                    <h3>รายการสินค้า</h3>
                    {[
                        { id: 1, name: 'labubu', price: 890, inStock: true },
                        { id: 2, name: 'monchichi', price: 590, inStock: true },
                        { id: 3, name: 'twinkle twinkle', price: 590, inStock: false }
                    ].map(product => (
                        <div key={product.id} className="product-item">
                            <span>{product.name}</span>
                            <span> - ฿{product.price.toLocaleString()}</span>
                            <span className={product.inStock ? 'in-stock' : 'out-stock'}>
                                {product.inStock ? ' มีสินค้า' : ' สินค้าหมด'}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

             <section>
                <h2>🧩 React Fragment</h2>
                <p>ใช้เมื่อไม่ต้องการ wrapper element:</p>

                <React.Fragment>
                    <h3>หัวข้อ</h3>
                    <p>เนื้อหา</p>
                </React.Fragment>

                <>
                    <h3>หัวข้ออื่น</h3>
                    <p>เนื้อหาอื่น</p>
                </>
            </section>

            <section>
                <h2>🎯 Event Handling ใน JSX</h2>
                <input 
                    type="text" 
                    placeholder="พิมพ์อะไรก็ได้..."
                    onChange={(e) => console.log('พิมพ์:', e.target.value)}
                />
                
                <select onChange={(e) => alert(`เลือก: ${e.target.value}`)}>
                    <option value="">-- เลือกภาษา --</option>
                    <option value="js">ไทย</option>
                    <option value="py">อังกฤษ</option>
                    <option value="java">จีน</option>
                    <option value="go">สเปน</option>
                </select>
            </section>

            <section>
                <h2>💬 Comments ใน JSX</h2>
                {/* นี่คือ comment ใน JSX */}
                <p>Comment ใน JSX ต้องอยู่ใน {/* curly braces */}</p>
                {
                    // นี่ก็เป็น comment เช่นกัน
                    // แต่อยู่ใน JavaScript expression
                }
            </section>

          </div>
     )
}
export default JSXExamples;