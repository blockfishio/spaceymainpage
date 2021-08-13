import React, { ComponentType } from 'react';
import MainLayout from '../layouts/MainLayout';

function withLayout<T>(WrappedComponent: ComponentType<T>) {
  return function ComponentWithLayout(props: T) {
    return (
      <MainLayout>
        <WrappedComponent {...props} />
      </MainLayout>
    );
  };
}

export default withLayout;