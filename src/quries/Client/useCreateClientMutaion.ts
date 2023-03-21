import { useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import { ClientListType } from '../../types/client';
import { postClientCreate } from '../../api/client/create';

interface useCreateClientMutationProps {
  setClientList: Dispatch<SetStateAction<ClientListType[]>>;
  clientList: ClientListType[];
}

const useCreateClientMutaion = ({ clientList, setClientList }: useCreateClientMutationProps) => {
  return useMutation(postClientCreate, {
    onSuccess: (data) => {
      const totalData = clientList.concat(data).map((list, idx) => {
        return { ...list, clientId: idx + 1 };
      });

      setClientList([]);
    },
  });
};
