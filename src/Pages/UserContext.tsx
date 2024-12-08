import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definimos el tipo de datos que vamos a usar
interface UserContextType {
  user: { name: string; email: string };
  setUser: React.Dispatch<React.SetStateAction<{ name: string; email: string }>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ name: string; email: string }>({
    name: 'Kiriko S.',
    email: 'kiriko@example.com',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
