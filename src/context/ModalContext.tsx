import { createContext, ReactNode, useState } from "react";

type ModalContextType = {
  isModalVisible: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
};

interface ModalContextProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext({} as ModalContextType);

// Provider
export const ModalProvider = ({ children }: ModalContextProviderProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (payload: any) => {
    setIsModalVisible({...payload, visible: true});
  }

  return (
    <ModalContext.Provider value={{ isModalVisible, setIsModalVisible }}>
      {children}
    </ModalContext.Provider>
  );
};
