import React, { useCallback, useState } from "react";
import Button from "~/components/Button";
import Input from "~/components/Input";

import { setCookie } from "nookies";

const initialForm = {
  api: "",
  token: "",
};

type Props = {
  onSuccess?: () => void;
};

export const SetupContent: React.FC<Props> = ({ onSuccess }) => {
  const [form, setForm] = useState(initialForm);

  const handleOnChange = useCallback(
    (field) => (val) => {
      setForm((prevForm) => ({ ...prevForm, [field]: val }));
    },
    []
  );

  const onSave = useCallback(() => {
    setCookie(null, "api", form.api, { path: "/" });
    setCookie(null, "token", form.token, { path: "/" });

    onSuccess && onSuccess();
  }, [form]);

  return (
    <form>
      <h3 className="text-xl font-medium mb-6 mt-2 text-gray-700">
        App Configuration
      </h3>
      <Input
        label="Api Link"
        value={form.api}
        onChange={handleOnChange("api")}
        debounceTime={100}
      />
      <Input
        label="Api Token"
        value={form.token}
        onChange={handleOnChange("token")}
        debounceTime={100}
        labelClassName="block mt-8"
      />
      <Button color="primary" className="w-full mt-8 mb-2" onClick={onSave}>
        Save
      </Button>
    </form>
  );
};

export default SetupContent;
