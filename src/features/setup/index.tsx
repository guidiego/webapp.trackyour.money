import React, { useCallback, useState } from "react";
import Button from "~/components/Button";
import Input from "~/components/Input";
import Select from "~/components/Select";

import { setCookie } from "nookies";
import { useSetup } from "./context";
import { useIntl } from "react-intl";

type Props = {
  onSuccess?: () => void;
};

const LANG_OPTS = [
  { value: "en", label: "English" },
  { value: "pt", label: "Português" },
];

const COIN_OPTS = [
  { value: "EUR", label: "Euro" },
  { value: "BRL", label: "Reais" },
];

export const SetupContent: React.FC<Props> = ({ onSuccess }) => {
  const [setup, setSetup] = useSetup();
  const [form, setForm] = useState(setup);
  const { messages } = useIntl();

  const handleOnChange = useCallback(
    (field) => (val) => {
      setForm((prevForm) => ({
        ...prevForm,
        [field]: typeof val === "string" ? val : val.target.value,
      }));
    },
    []
  );

  const onSave = useCallback(() => {
    setCookie(null, "api", form.api, { path: "/" });
    setCookie(null, "token", form.token, { path: "/" });
    setCookie(null, "lang", form.lang, { path: "/" });
    setCookie(null, "coin", form.coin, { path: "/" });
    setSetup(form);

    onSuccess && onSuccess();
  }, [form]);

  return (
    <div>
      <h3 className="text-xl font-medium mb-6 mt-2 text-gray-700 dark:text-white">
        {messages["Feature.Setup.Title"]}
      </h3>
      <Input
        label={messages["Feature.Setup.Field.Api"] as string}
        value={form.api}
        onChange={handleOnChange("api")}
        debounceTime={100}
      />
      <Input
        label={messages["Feature.Setup.Field.Token"] as string}
        value={form.token}
        onChange={handleOnChange("token")}
        debounceTime={100}
        labelClassName="block mt-5"
      />
      <Select
        label={messages["Feature.Setup.Field.Lang"] as string}
        value={form.lang}
        options={LANG_OPTS}
        onChange={handleOnChange("lang")}
        labelClassName="block mt-5"
      />
      <Select
        label={messages["Feature.Setup.Field.Coin"] as string}
        value={form.coin}
        options={COIN_OPTS}
        onChange={handleOnChange("coin")}
        labelClassName="block mt-5"
      />
      <Button color="primary" className="w-full mt-8 mb-2" onClick={onSave}>
        {messages["Common.Save"]}
      </Button>
    </div>
  );
};

export default SetupContent;
