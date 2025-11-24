import { createContext, useContext, useState, type HTMLAttributes, type ReactNode } from "react";
import styles from './Tabs.module.scss'
import Button from "../Button/Button";
import { cn } from "../../lib";

interface TabsContextType {
    activeTab: string
    handleChangeActiveTab: (tab: string) => void
}

interface TabsProps{
    defaultValue: string;
    children: ReactNode;
    onChange?: () => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined)

export const Tabs = (props: TabsProps) => {
    const { children, defaultValue, onChange } = props
    const [activeTab, setActiveTab] = useState(defaultValue);

    const handleChangeActiveTab = (tab: string) => {
        setActiveTab(tab);
        if(onChange) {
            onChange();
        }
    };

    return (
        <TabsContext.Provider value={{activeTab, handleChangeActiveTab}}>
            <div>{children}</div>
        </TabsContext.Provider>
    )
}

interface TabsListProps {
    children: ReactNode
}

const TabsList = ({children} : TabsListProps) => {
    return <div className={styles.list}>{children}</div>
}

interface TabTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
  children: ReactNode;
}

const TabTrigger = ({ children, value, ...rest }: TabTriggerProps) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabTrigger must be within Tabs");

  const isActive = context.activeTab === value;

  const handleClick = () => {
    context.handleChangeActiveTab(value);
  };

  return (
    <Button
      {...rest}
      type="button"
      theme={isActive ? "outline" : "tertiary"}
      form="rounded"
      onClick={handleClick}
      className={cn(styles.trigger, { [styles.active]: isActive })}
    >
      {children}
    </Button>
  );
};

interface TabContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
}

const TabContent = ({ children, value, ...rest }: TabContentProps) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabContent must be within Tabs");

  const isActive = context.activeTab === value;

  if (!isActive) return null;

  return (
    <div {...rest} className={cn(styles.content)}>
      {children}
    </div>
  );
};

Tabs.List = TabsList;
Tabs.Content = TabContent;
Tabs.Trigger = TabTrigger;