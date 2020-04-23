import React from 'react';

import Layout from 'components/Layout';

export default () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Layout>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" />
          <input type="submit" name="login" value="dang nhap" />
        </form>
      </div>
    </Layout>
  );
};
