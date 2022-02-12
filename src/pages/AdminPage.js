import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const permission = false;

const AdminPage = () => {
  return (
    <>
      {permission ? <h2>Welcome in admin panel</h2> :
        <Routes>
          <Route path="*" element={<Navigate to='/login' replace />} />
        </Routes>}
    </>
  );
}

export default AdminPage;