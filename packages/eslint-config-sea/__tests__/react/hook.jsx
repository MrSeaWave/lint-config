import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

function getDog() {
  return Promise.resolve('dog');
}

function DogInfo({ dogId }) {
  const [dog, setDog] = useState(null);
  useEffect(() => {
    getDog(dogId).then((d) => setDog(d));
  }, []); // -----> look this , 应该是  [dogId]) // ✅
  return (
    <div>
      This is
      {dog}
    </div>
  );
}

DogInfo.propTypes = {
  dogId: PropTypes.number.isRequired,
};
