import React from 'react';
import offline from "../images/offline.png";

const UserOffline = () => {
    return (
        <div className="user-offline-container text-center p-5">
            <h1 className="user-offline-heading text-gray-800 mt-32">🔴 Offline!</h1>
            <img className="offline-image w-48 h-auto mt-5" src="../images/offline.png" alt="Offline" />
            <p className="user-offline-message text-gray-600 text-base my-5">
                Sorry, it seems that you are currently offline.
            </p>
        </div>
    );
};
export default UserOffline;