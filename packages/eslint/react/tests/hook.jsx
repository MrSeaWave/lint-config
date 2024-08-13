import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

function getDog() {
  return Promise.resolve('dog');
}

function DogInfo({ dogId }) {
  const [dog, setDog] = useState(null);
  useEffect(() => {
    getDog(dogId).then((d) => setDog(d));
    //  error  React Hook useEffect has a missing dependency: 'dogId'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
  }, []); // -----> look this , 应该是  [dogId]) // ✅
  return (
    <div>
      This is
      {dog}
    </div>
  );
}

DogInfo.propTypes = {
  // error  'PropTypes' is not defined
  dogId: PropTypes.number.isRequired,
};
