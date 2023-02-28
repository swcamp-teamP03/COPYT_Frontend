import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GNB = () => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigate();

  return <div>GNB</div>;
};

export default GNB;
