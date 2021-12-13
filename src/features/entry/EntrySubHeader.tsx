import React from "react";
import Button from "~/components/Button";
import SubHeader from "~/components/SubHeader";

import { useModalActions } from "./context";
import { FormattedMessage } from "react-intl";
import { FilterIcon } from "@heroicons/react/outline";

export const EntrySubHeader: React.FC = () => {
  const { openAddEntryModal, openEntryFiltersModal } = useModalActions();

  return (
    <SubHeader>
      <div className="flex w-full items-center">
        <div className="flex-1">
          <Button
            small
            variant="outlined"
            color="secondary"
            onClick={openAddEntryModal}
          >
            <FormattedMessage id="Feature.Entry.SubHeader.Add" />
          </Button>
        </div>
        <button className="h-5 w-5" onClick={openEntryFiltersModal}>
          <FilterIcon />
        </button>
      </div>
    </SubHeader>
  );
};

export default EntrySubHeader;
