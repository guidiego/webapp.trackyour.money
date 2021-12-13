import messages from "./messages";
import { IntlProvider } from "react-intl";
import { useSetup } from "../setup/context";

export const LocaleProvider: React.FC = ({ children }) => {
  const [setup] = useSetup();

  return (
    <IntlProvider
      messages={messages[setup.lang]}
      locale={setup.lang}
      defaultLocale="en"
    >
      {children}
    </IntlProvider>
  );
};

export default LocaleProvider;
