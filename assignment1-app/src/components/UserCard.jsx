import React from 'react';
import mumu from '../mumumimi.jpg';

// Component ย่อยๆ
const Avatar = () => (
    <img 
        src={mumu}
        alt="User Avatar"
        style={{
            borderRadius: '0%',
            width: '250px',
            height: '400px',
            border: '2px solid #667eea'
        }}
    />
);

const UserName = () => (
    <h2 style={{ color: '#667eea', margin: '10px' }}>
        ศิรภัสสร รุจิราขจรชัย
    </h2>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '16px' }}>
        นักพัฒนา React มือใหม่ที่กำลังทำ assignment
    </p>
);

const PersonalInform = () => (
    <p style={{ color: '#aa72d2ff', fontSize: '16px' }}>
        วันเกิด: 27/11/47 
    </p>
);

const UserFavoriteThings = () => (
    <p style={{ color: '#72d277ff', fontSize: '16px' }}>
        สิ่งที่ชอบ: ชา matcha lover! 
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '100px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserBio />
            <UserName />
            <PersonalInform/>
            <UserFavoriteThings/>
            
        </div>
    );
};

export default UserCard;