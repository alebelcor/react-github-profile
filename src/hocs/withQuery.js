import React from 'react';

export const withQuery = ({
  queryHook,
  afterQuery = (data) => ({...data}),
  Loading = () => 'Loading…',
  Failure,
  Empty,
  Success,
}) => {
  const dataField = (data) => {
    return data[Object.keys(data)[0]];
  };

  const isDataNull = (data) => {
    return dataField(data) === null;
  };

  const isDataEmptyArray = (data) => {
    return Array.isArray(dataField(data)) && dataField(data).length === 0;
  };

  const isEmpty = (data) => {
    return isDataNull(data) || isDataEmptyArray(data);
  };

  return (props) => {
    const { error, status, data } = queryHook();

    if (error) {
      if (Failure) {
        return <Failure error={error} {...props} />;
      } else {
        console.error(error);
      }
    } else if (status === 'loading') {
      return <Loading {...props} />;
    } else if (data) {
      if (typeof Empty !== 'undefined' && isEmpty(data)) {
        return <Empty {...props} />;
      } else {
        return <Success {...afterQuery(data)} {...props} />;
      }
    } else {
      throw new Error('Cannot render component: query success but `data` is `null`');
    }
  };
};
