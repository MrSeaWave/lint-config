import React, { useEffect, useState } from 'react';

function DogInfo({ dogId }) {
  const [dog, setDog] = useState(null);
  useEffect(() => {
    getDog(dogId).then((d) => setDog(d));
  }, []); // -----> look this , 应该是  [dogId]) // ✅
  return <div>{/* render the dog info here */}</div>;
}

function getDog() {
  return Promise.resolve('dog');
}
