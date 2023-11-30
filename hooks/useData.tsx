import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';


interface NestedProperty {
  [key: string]: any; // 根据实际情况调整
}

type MyState = any

type MyProviderProps = {
  children: ReactNode
  value: any
}

interface MyContextType {
  state: MyState;
  updateProperty: (propertyName: keyof MyState, newValue: NestedProperty) => void;
}


// 创建上下文
const MyContext = createContext<MyContextType | null>(null);

export const MyProvider = ({ children, value }: MyProviderProps) => {

  const [state, setState] = useState<MyState>(value);

  const updateProperty = useCallback((propertyName: keyof MyState, newValue: NestedProperty) => {
    setState((prevState: { [x: string]: any; }) => ({
      ...prevState,
      [propertyName]: { ...prevState[propertyName as string], ...newValue }
    }));
  }, [])


  useEffect(() => {
    setState(value)
  }, [value])

  return (
    <MyContext.Provider value={{ state, updateProperty }}>
      {children}
    </MyContext.Provider>
  );
};


export const useData = (): MyContextType => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useMyHook 必须在 MyProvider 内部使用");
  }

  return context;
};

